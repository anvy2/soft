// var http = require('http');
const express = require('express');
const app = express();
require('dotenv').config();
var cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
// const expressValidators = require('express-validator');
const commonRoutes = require('./routes/commonRoutes');
const userRoutes = require('./routes/userRoutes');
// const fellowshipRoutes = require('./routes/fellowshipRoutes');
const notificationRoutes = require('./routes/notificationRoutes');
const noticeRoutes = require('./routes/noticeRoutes');
const circularRoutes = require('./routes/circularRoutes');
// middilewares

app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
app.use('/assets', express.static('assets'));
console.log(process.env.JWT_SECRET);

//app.use(expressValidators());

// Routes

app.use('/api', userRoutes);
app.use('/api', commonRoutes);
app.use('/api', notificationRoutes, noticeRoutes, circularRoutes);

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
