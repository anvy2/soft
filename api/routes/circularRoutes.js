/* eslint-disable no-undef */
const express = require('express');
const router = express.Router();
const { Op } = require('sequelize');
const {
  UserGroupMap,
  CirculareGroupMap,
  CircularDetails,
  Permissions,
} = require('../Models/dbmodels');

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

    // console.log(groups);
    if (groups.length === 0) {
      return res.send({ status: true, data: {} });
    }
  } catch (err) {
    return res
      .status(500)
      .send({ status: false, message: 'Something went wrong!' });
  }
  let circular_ids;
  try {
    circular_ids = await CirculareGroupMap.findAll({
      attributes: ['circular_id'],
      where: {
        [Op.or]: groups,
      },
    });
    if (circular_ids.length === 0) {
      return res.send({ status: true, data: {} });
    }
  } catch (err) {
    return res
      .status(500)
      .send({ status: false, message: 'Something went wrong!' });
  }
  let circular_list;
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
        [Op.or]: circular_ids,
      },
    });
    return res.send({ status: true, data: circular_list });
  } catch (err) {
    return res
      .status(500)
      .send({ status: false, message: 'Something went wrong!' });
  }
});

router.post('/send/circular', async (req, res) => {
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
      submenu3: 'Circular',
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
  let circular = null;
  const circular_details = {
    circular_no: data.circular_no,
    circular_cat: data.circular_cat,
    circular_sub: data.circular_sub,
    circular_path: data.circular_path,
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
    return res.send({ status: true });
  } catch (err) {
    if (circular === null) {
      await circular.destroy();
    }
    return res
      .status(500)
      .send({ status: false, message: 'Something went wrong' });
  }
});
module.exports = router;