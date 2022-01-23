//node_import
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    rollno: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    leaveId: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    attendence: {
        type: Array,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('user', userSchema);