const express = require('express');
const router = new express.Router();
const { Op } = require('sequelize');
const {
  UserGroupMap,
  NoticeGroupMap,
  NoticeDetails,
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
  try {
    const notice = await NoticeDetails.create({
      ...data,
      modification_value: 0,
    });

    return res.send({ status: true });
  } catch (err) {
    return res
      .status(500)
      .send({ status: false, message: 'Something went wrong' });
  }
});

module.exports = router;
