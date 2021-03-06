/* eslint-disable no-undef */
const express = require('express');
const router = express.Router();
// const _ = require('lodash');
const { Op } = require('sequelize');
const fs = require('fs');
const path = require('path');
const multer = require('multer');
const filter = require('./helper');
const { v4: uuidv4 } = require('uuid');
const {
  UserGroupMap,
  CirculareGroupMap,
  CircularDetails,
  Permissions,
  IndividualCircular,
} = require('../Models/dbmodels');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join('assets', 'circulars'));
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

const upload = multer({
  storage: storage,
  fileFilter: filter,
});

router.get('/get/circulars', async (req, res) => {
  const data = req.body;
  let groups;
  try {
    groups = await UserGroupMap.findAll({
      attributes: ['group_id'],
      where: {
        user_id: data.user_id,
      },
    });

    if (groups.length === 0) {
      return res.send({
        status: true,
        data: {},
      });
    }
  } catch (err) {
    return res.status(400).send({
      status: false,
      message: 'Something went wrong!',
    });
  }
  let circular_ids;
  try {
    const circular_id = await CirculareGroupMap.findAll({
      attributes: ['circular_id'],
      where: {
        [Op.or]: groups,
      },
    });
    const individual = await IndividualCircular.findAll({
      attributes: ['circular_id'],
      where: {
        user_id: data.user_id,
      },
    });
    circular_ids = circular_id.concat(individual);
    if (circular_ids.length === 0) {
      return res.send({
        status: true,
        data: {},
      });
    }
  } catch (err) {
    return res.status(500).send({
      status: false,
      message: 'Something went wrong!',
    });
  }
  let circular_list;
  const date_now = new Date().toJSON().slice(0, 10);
  try {
    circular_list = await CircularDetails.findAll({
      attributes: [
        'circular_id',
        'circular_no',
        'circular_cat',
        'circular_sub',
        'circular_path',
        'issued_by',
        'auth_id',
        'posted_on',
        'valid_upto',
        'modification_value',
      ],
      where: {
        circular_id: {
          [Op.or]: circular_ids,
        },
        valid_upto: {
          [Op.gte]: date_now,
        },
      },
    });
    return res.send({
      status: true,
      data: circular_list,
    });
  } catch (err) {
    return res.status(500).send({
      status: false,
      message: 'Something went wrong!',
    });
  }
});

router.post('/send/circular', upload.single('file'), async (req, res) => {
  const data = req.body;
  console.log(req.file.path);
  if (!req.body) {
    return res.status(400).end();
  }
  //   console.log(data, data.auth_id);
  if (!data.auth_id) {
    return res.status(400).send({
      status: false,
      message: 'Unauthorized action',
    });
  }
  const permissions = await Permissions.findAll({
    attributes: ['status'],
    where: {
      auth_id: data.auth_id,
      submenu2: 'POST',
      submenu3: 'Circular',
    },
  });
  // res.send(permissions);
  if (permissions.length === 0) {
    return res.status(400).send({
      status: false,
      message: 'Unauthorized action',
    });
  } else if (permissions[0].status == 'N') {
    return res.status(400).send({
      status: false,
      message: 'Unauthorized action',
    });
  }
  let circular = null;
  let circular_path = null;
  if (!req.file) {
    circular_path = `${req.file?.path}`;
  }
  const circular_details = {
    circular_no: data.circular_no,
    circular_cat: data.circular_cat,
    circular_sub: data.circular_sub,
    circular_path,
    issued_by: data.issued_by,
    auth_id: data.auth_id,
    posted_on: new Date().toLocaleString().slice(0, 19).replace('T', ' '),
    valid_upto: data.last_date,
    modification_value: 0,
  };
  try {
    circular = await CircularDetails.create({
      ...circular_details,
    });
    await circularGroupMap.create({
      circular_id: circular.circular_id,
      group_id: data.group_id,
      created_by: data.auth_id,
    });
    return res.send({
      status: true,
    });
  } catch (err) {
    if (circular === null) {
      await circular.destroy();
    }
    return res.status(500).send({
      status: false,
      message: 'Something went wrong',
    });
  }
});

router.patch('/edit/circular', upload.single('file'), async (req, res) => {
  // const user_id = req.body.user_id;
  const circular_id = req.body.circular_id;
  const { circular_no, circular_cat, circular_sub } = req.body;

  const circular_path = req.file.path;
  try {
    let details = await CircularDetails.findByPk(circular_id);
    if (circular_no !== undefined) {
      details[0].circular_no = circular_no;
    }
    if (circular_cat !== undefined) {
      details[0].circular_cat = circular_cat;
    }
    if (circular_sub !== undefined) {
      details[0].circular_sub = circular_sub;
    }
    if (circular_path !== undefined) {
      if (details.circular_path !== null) {
        fs.unlink(details.circular_path);
      }
      details.circular_path = circular_no;
    }
    await details.save();
    res.send({
      status: true,
      message: 'Changes saved!',
    });
  } catch (err) {
    res.status(500).send({
      status: false,
      message: 'Something went wrong!',
    });
  }
});
module.exports = router;
