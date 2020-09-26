const express = require('express');
const router = new express.Router();
const { Op } = require('sequelize');
const {
  UserGroupMap,
  NoticeGroupMap,
  NoticeDetails,
  Permissions,
} = require('../Models/dbmodels');

router.get('/notices', async (req, res) => {
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
    notices_ids = await NoticeGroupMap.findAll({
      attributes: ['notice_id', 'group_id', 'created_by'],
      where: {
        group_id: {
          [Op.or]: groups,
        },
      },
    });

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

router.post('/send/notice', async (req, res) => {
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
  const notice_details = {
    notice_no: data.notice_no,
    notice_cat: data.notice_cat,
    notice_sub: data.notice_sub,
    notice_path: data.notice_path,
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
