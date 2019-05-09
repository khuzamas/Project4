const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    dateofbirth: {
        type: Date,
        default: Date.now
    },
    friend: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    icon: {
        type: String
    },
    heigh: {
        type: String
    },
    weight: {
        type: String
    },
    activity: {
        type: String
    },
    goal: {
        type: String
    },
    challenges: [{ type: Schema.Types.ObjectId, ref: 'Challenge' }],
    badges: [{ type: Schema.Types.ObjectId, ref: 'Badge' }],
    tasks: [{ type: Schema.Types.ObjectId, ref: 'Task' }],
    points: {
        type: Number,
        default: 0
    },
    date: {
        type: Date,
        default: Date.now
    },
});


const User = mongoose.model('User',UserSchema)
module.exports = User