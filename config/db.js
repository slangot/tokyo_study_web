const mysql = require('mysql2');

const db = mysql.createConnection({
  host: process.env.NEXT_HOST || 'localhost',
  user: process.env.NEXT_USER,
  password: process.env.NEXT_PASSWORD,
  port: process.env.NEXT_PORT || 3306,
  database: process.env.NEXT_DATABASE
})

db.connect((err) => {
  if (err) {
    console.error('Error connecting to database: ', err);
    return;
  }

  console.log('Database connected successfully');
});

module.exports = db;