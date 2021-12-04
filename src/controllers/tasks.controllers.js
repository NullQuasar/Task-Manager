const tasksCtrls = { };
const Task = require('../models/Task');

// Get
tasksCtrls.renderTasks = (req, res) => {
    res.render('tasks/all-tasks');
};

tasksCtrls.createTask = (req, res) => {
    res.send('Create a new task');
};

tasksCtrls.editTask = (req, res) => {
    res.send('Editing a task');
};

tasksCtrls.deleteTask = (req, res) => {
    res.send('Deleting task');
};




// Post
tasksCtrls.createTaskPost = async (req, res) => {
    const {title, description, deadline} = req.body;
    const task = new Task({title, description, deadline});
    await task.save() // Save in db
};

tasksCtrls.editTaskPut = (req, res) => {
    res.send('Create a new task');
};

tasksCtrls.deleteTaskDel = (req, res) => {
    res.send('Create a new task');
};




module.exports = tasksCtrls;
