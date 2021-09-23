const Sequelize = require('sequelize');
const db = require('../Dbconnect/dbconfig');

//user table creation
const user = db.define('user', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    fname: {
        type: Sequelize.STRING,
        allowNull: False,
    },
    lname: {
        type: Sequelize.STRING,
        allowNull: False,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: False,
        unique: true,
    },
    phone: {
        type: Sequelize.Integer,
        allowNull: False,
        unique: true,
    },
    password: {
        type: Sequelize.STRING,
        allowNull: False,
    }
});

module.exports = user;
//user object creation
/* var user = function (user) {
    this.id = user.id;
    this.fname = user.fname;
    this.lname = user.lname;
    this.email = user.email;
    this.password = user.password;
    this.mobile = user.mobile;
}
 */
/* //For Registerion of the user
user.create = function (newuser, result) {

    dbConn.query("insert into `user` set ?", newuser, function (err, res) {

        if (err) {
            console.log("error: ", err);
            result(err, null);
        }

        else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
}

//find the User Details by Id
user.findById = function (id, result) {

    dbConn.query("Select * from `user` where id = ? ", id, function (err, res) {

        if (err) {
            console.log("error: ", err);
            result(err, null);
        }

        else {
            result(null, res);
        }

    });
};

//update user details by Id
user.update = function (id, user, result) {

    dbConn.query("UPDATE employees SET , function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};

//get details of user by email
user.findByEmail = function (email, result) {

    dbConn.query("Select * from `user` where email = ? ",email, function (err, res) {

        if (err) {
            console.log("error: ", err);
            result(err, null);
        }

        else {
            result(null, res);
        }

    });
}; */