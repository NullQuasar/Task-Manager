const { Schema, model } = require('mongoose');

const TimeManagerSchema = new Schema({
    title: {
        type: String,
        required: false
    },
    task: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    }

}, {
    timestamps: true,
});

module.exports = model('TimeManager', TimeManagerSchema);
