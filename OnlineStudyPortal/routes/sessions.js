var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var db = require('../config/keys').MongoURI;

mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;

db.on('error', console.log.bind(console, "connection error"));
db.once('open', function(callback) {
    console.log("connection succeeded");
})

const Session = require('../models/Session')


router.get('/test', function(req, res, next) {
    res.send('respond wth a resource');
});

router.get('/create', function(req, res, next) {

    var userEmail = req.query.email;
    var sessionName = req.query.sessionname;
    var sessionTopic = req.query.sessiontopic;
    var password = req.query.password;
    var videolink = req.query.ytlink;
    var starttime = req.query.starttime;
    var privacy = req.query.privacy;



    const newSession = new Session({
        userEmail,
        sessionName,
        sessionTopic,
        videolink,
        password,
        starttime,
        privacy
    });

    newSession.save();

    res.json({ 'message': 'sucess' });
});


router.get('/show', function(req, res, next) {
    Session.find({}).then(
            session => {
                res.json({ session });
            }
        )
        //  res.json({'message': 'sucess'});
});

router.get('/findSession', function(req, res, next) {
    var id = req.query.id;
    Session.findOne({ _id: id }).then(
            session => {
                res.json({ session });
            }
        )
        //  res.json({'message': 'sucess'});
});

router.post('/delete', function(req, res, next) {
    var sessionid = req.query.sessionid;
    Session.findOneAndDelete({ _id: sessionid }, (err, doc) => {
        if (err) {
            console.log(err);
        } else {
            res.json({ 'message': 'success' });
        }
    });
});

module.exports = router;