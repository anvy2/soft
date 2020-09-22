const Sequelize = new require('sequelize')
const fs = require('fs');

const sequelize = new Sequelize('soft', 'admin', 'password', {
  host: 'database-2.chnzkyl8k5iq.us-east-2.rds.amazonaws.com',
  dialect:'mysql',
  port: 3306,
  dialectOptions: {
    ssl: 'Amazon RDS'
  }
});




try {
  sequelize.authenticate()
    .then(() => {
      console.log('Connection has been established successfully.');
    });
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

module.exports = sequelize
