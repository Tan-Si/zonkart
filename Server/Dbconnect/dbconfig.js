require('dotenv').config();//db sql

async function createdb() {
  const mysql = require('mysql2');
  const connection = {
    host: process.env.HOST,
    port: process.env.DPORT,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DB
  };
  //create pool connection
  const pool = await mysql.createPool(connection);
  //checking pool connection
  pool.query('SELECT 1 + 1', err => {
    if (err) {
      console.log("DB NOT CONNECTED "+err)
      process.exit(1)
    }
    else {
      console.log("Db connected")
      return pool;
    }
  }

  )
}
const dbPromise = createdb()
module.exports = dbPromise;