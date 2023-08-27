const mongoose = require('mongoose');

const userScehma = new mongoose.Schema({
    Name: {
        type: String,
        required: [true, 'Enter the Name']
    },

    Email: {
        type: String,
        required: [true, 'Enter the Email'],
        unique: true
    },

    Password: {
        type: String,
        required: [true, 'Enter the Password'],
    },

    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('User', userScehma);