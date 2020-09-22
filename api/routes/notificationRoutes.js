const express = require('express');
const router = new express.Router();
const notifications = require('../Models/models');

router.get('/getnotifications', async (req, res) => {
  const id = req.body.id;
  console.log(notifications);
  try {
    const data = await notifications.findAll({
      attributes: [
        'user_to',
        'user_from',
        'send_date',
        'rec_date',
        'auth_id',
        'module_id',
        'notice_title',
        'description',
        'notice_path',
        'notice_type',
        'status',
      ],
      where: {
        user_to: id,
        status: 0,
      },
    });
    res.json({
      status: true,
      data,
    });
  } catch (err) {
    res.json({
      status: false,
      message: 'Something went wrong!',
    });
  }
});

router.get('/send/notification', async (req, res) => {
  const data = req.data;
  try {
    const notif = await notifications.create({
      ...data,
      status: 0,
    });
    res.send({ status: true });
  } catch (err) {
    res.send({
      status: false,
      message: 'Something went wrong',
    });
  }
});

module.exports = router;
