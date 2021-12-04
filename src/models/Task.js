const { Schema, model } = require('mongoose');

const TimeManagerSchema = new Schema({
    title: {
        type: String,
        required: false
    },
    description: {
        type: String,
        required: true
    },
    deadline: {
        type: Date,
        required: true
    }

}, {
    timestamps: true,
});

module.exports = model('TimeManager', TimeManagerSchema);
