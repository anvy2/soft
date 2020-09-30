const express = require('express');
const router = express.Router();
const { Op } = require('sequelize');
const multer = require('multer');
const filter = require('./helper');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const {
  UserGroupMap,
  NoticeGroupMap,
  NoticeDetails,
  Permissions,
  IndividualNotice,
} = require('../Models/dbmodels');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join('assets', 'notices'));
  },
  filename: (req, file, callback) => {
    callback(
      null,
      path.basename(file.originalname, path.extname(file.originalname)) +
        '-' +
        `${uuidv4()}` +
        path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage: storage, fileFilter: filter });

router.get('/get/notices', async (req, res) => {
  const data = req.body;
  let groups;
  try {
    groups = await UserGroupMap.findAll({
      attributes: ['group_id'],
      where: {
        user_id: data.user_id,
      },
    });

    // console.log(groups);
    if (groups.length === 0) {
      return res.send({ status: true, data: {} });
    }
  } catch (err) {
    return res
      .status(500)
      .send({ status: false, message: 'Something went wrong!' });
  }
  let notices_ids;
  try {
    const notices_id = await NoticeGroupMap.findAll({
      attributes: ['notice_id'],
      where: {
        group_id: {
          [Op.or]: groups,
        },
      },
    });
    const individual = await IndividualNotice.findAll({
      attributes: ['notice_id'],
      where: {
        user_id: data.user_id,
      },
    });
    notices_ids = notices_id.concat(individual);
    if (notices_ids.length === 0) {
      return res.send({ status: true, data: {} });
    }
  } catch (err) {
    return res
      .status(500)
      .send({ status: false, message: 'Something went wrong!' });
  }
  let notice_list;
  try {
    notice_list = await NoticeDetails.findAll({
      attributes: [
        'notice_id',
        'notice_no',
        'notice_cat',
        'notice_sub',
        'notice_path',
        'issued_by',
        'auth_id',
        'posted_on',
        'last_date',
        'modification_value',
      ],
      where: {
        [Op.or]: notices_ids,
      },
    });
    return res.send({ status: true, data: notice_list });
  } catch (err) {
    return res
      .status(500)
      .send({ status: false, message: 'Something went wrong!' });
  }
});

router.post('/send/notice', upload.single('file'), async (req, res) => {
  const data = req.body;
  console.log(data, data.auth_id);
  if (!data.auth_id) {
    return res
      .status(400)
      .send({ status: false, message: 'Unauthorized action' });
  }
  const permissions = await Permissions.findAll({
    attributes: ['status'],
    where: {
      auth_id: data.auth_id,
      submenu2: 'POST',
      submenu3: 'Notice',
    },
  });
  // res.send(permissions);
  if (permissions.length === 0) {
    return res
      .status(400)
      .send({ status: false, message: 'Unauthorized action' });
  } else if (permissions[0].status == 'N') {
    return res
      .status(400)
      .send({ status: false, message: 'Unauthorized action' });
  }
  let notice = null;
  let notice_path = null;
  if (!req.file) {
    notice_path = `${process.env.SERVER_URL}/req.file?.path`;
  }
  const notice_details = {
    notice_no: data.notice_no,
    notice_cat: data.notice_cat,
    notice_sub: data.notice_sub,
    notice_path,
    issued_by: data.issued_by,
    auth_id: data.auth_id,
    posted_on: new Date().toLocaleString().slice(0, 19).replace('T', ' '),
    last_date: data.last_date,
    modification_value: 0,
  };
  try {
    notice = await NoticeDetails.create({
      ...notice_details,
    });
    await NoticeGroupMap.create({
      notice_id: notice.notice_id,
      group_id: data.group_id,
      created_by: data.auth_id,
    });
    return res.send({ status: true });
  } catch (err) {
    if (notice) {
      await notice.destroy();
    }
    return res
      .status(500)
      .send({ status: false, message: 'Something went wrong' });
  }
});

module.exports = router;
