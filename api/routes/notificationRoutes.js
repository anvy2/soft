const express = require('express');
const router = new express.Router();
const { Notifications } = require('../Models/dbmodels');

router.get('/notifications', async (req, res) => {
  const id = req.body.id;
  console.log(Notifications);
  try {
    const data = await Notifications.findAll({
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
    console.log(err);
    res.json({
      status: false,
      message: 'Something went wrong!',
    });
  }
});
// localhost:8000/api/send/notification
router.post('/send/notification', async (req, res) => {
  const data = req.body;
  try {
    await Notifications.create({
      ...data,
      status: 0,
    });
    return res.send({ status: true });
  } catch (err) {
    res.send({
      status: false,
      message: 'Something went wrong',
    });
  }
});

module.exports = router;
