//node_imports
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const leaveSchema = new Schema({
    rollno: {
        type: String,
        required: true
    },
    frDate: {
        type: String,
        required: true
    },
    toDate: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    purpose: {
        type: String,
        required: true
    },
    staffStatus: {
        type: String,
        default: 'no',
        required: true
    },
    wardernStatus: {
        type: String,
        default: 'no',
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('leave', leaveSchema);