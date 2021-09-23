require('dotenv').config();
const {Sequelize} = require('sequelize')


//Db connection to DB
const sequelize = new Sequelize(process.env.DB, process.env.USER, process.env.PASSWORD, {
  host: 'localhost',
  dialect: 'mysql'
});


//Auth check for Db
async function dbconnect()  {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database: '+ error);
  }
}
module.exports = dbconnect; 