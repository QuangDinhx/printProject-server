const mysql = require('mysql');

module.exports = () => {
    return mysql.createConnection({
        host: process.env.DATABASE_URL,
        user: process.env.USER_DATABSE,
        password: process.env.PASSWORD_DATABASE,
        database: 'test'
    });
}