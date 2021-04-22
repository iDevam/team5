var express = require('express');
var router = express.Router();


// Database Connection String

var db = require('../config/keys').MongoURI;
const mongoose = require('mongoose');
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;

db.on('error', console.log.bind(console, "connection error"));
db.once('open', function(callback) {
    console.log("connection succeeded");
})


const User = require('../models/User');


/* GET users listing. */
router.post('/', function(req, res, next) {
    res.send('respond with a resource');
});


// Create 
// http://localhost:3000/users/register?firstname=subhed&email=subhed&password=subhed&lastname=chavan&authdata=google&gender=m&dob=02/20/1998&phone=123


router.post('/register', function(req, res, next) {


    var firstname = req.query.firstname;
    var email = req.query.email;
    var password = req.query.password;
    var lastname = req.query.lastname;
    var authdata = req.query.authdata;
    var gender = req.query.gender;
    var dob = req.query.dob;
    var phone = req.query.phone;


    User.findOne({ email: email }).then(
        user => {
            if (user) {
                res.json({ 'msg': 'Already Exists!' });
            } else {
                const newUser = new User({
                    firstname,
                    lastname,
                    email,
                    password,
                    authdata,
                    gender,
                    dob,
                    phone
                });

                newUser.save();

                res.json({ 'msg': 'success' });
            }
        }
    );

});


// Update User Data
// http://localhost:3000/users/updateEmail?email=subhed&newemail=devam


router.post('/updateEmail', function(req, res, next) {
    var email = req.query.email;
    var newemail = req.query.newemail;

    User.findOneAndUpdate({ email: email }, { $set: { email: newemail } }, { new: true }, (err, doc) => {
        if (!err) {
            res.json({ 'Msg': "Success" });
        } else {
            res.json({ 'Msg': "Error" });
        }
    });

});


// List all the users

router.post('/userList', function(req, res, next) {
    User.find({}).then(
        user => {
            res.json({ 'user': user });
        }
    )
});


// Delete User
// User POST for this operation
// http://localhost:3000/users/deleteUser?email=subhed

router.post('/deleteUser', function(req, res, next) {
    var email = req.query.email;

    User.findOneAndDelete({ email: email }, (err, doc) => {
        if (!err) {
            res.json({ 'Msg': "Success" });
        } else {
            res.json({ 'Msg': "Error" });
        }
    });

});





module.exports = router;