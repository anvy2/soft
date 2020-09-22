const mysql = require('mysql');
const con = mysql.createConnection({
    host: "database-2.chnzkyl8k5iq.us-east-2.rds.amazonaws.com",
    user: "admin",
    password: "password",
    database: "soft",
    multipleStatements: true
});
con.connect(function(err) {
    if (!err) {
        console.log("Database is connected");
    } else {
        console.log("Error while connecting with database");
        console.log(err);
    }
});
module.exports = con;
