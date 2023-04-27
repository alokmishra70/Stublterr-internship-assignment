const mysql = require('mysql');

const dbConfig = {
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_NAME,
  connectTimeout: 28800,
};

const connection = mysql.createConnection(dbConfig);

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to database: ', err);
    return;
  }
  console.log('Connected to database.');
});
connection.end();
module.exports = connection;
