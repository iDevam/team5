const mongoose = require('mongoose');

const SessionSchema = new mongoose.Schema({

    userEmail: {
        type: String,
        required: true
    },
    sessionName: {
        type: String,
        required: true
    },
    sessionTopic: {
        type: String,
        required: true
    },
    videolink: {
        type: String,
        required: true
    },
    starttime: {
        type: String,
        required: true
    },
    privacy: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    datecreated: {
        type: Date,
        default: Date.now
    }

});

const Session = mongoose.model('Session', SessionSchema);

module.exports = Session;