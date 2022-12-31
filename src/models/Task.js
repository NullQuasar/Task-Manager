const { Schema, model } = require('mongoose');

const TaskManagerSchema = new Schema({
    title: {
        type: String,
        required: false
    },
    description: {
        type: String,
        required: false
    },
    deadline: {
        type: Date,
        required: true
    },
    owner: {
        type: String,
        required: true
    }

}, {
    timestamps: true,
});

module.exports = model('Task', TaskManagerSchema);
