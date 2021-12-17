const tasksCtrls = { };
const Task = require('../models/Task');

// Get
tasksCtrls.renderTasks = async (req, res) => {
    const tasks = await Task.find({}).lean();
    tasks.forEach(task => {
        task.deadline = task.deadline.toISOString().split('T')[0];
    });

    res.render('tasks/all-tasks', { tasks });
};



// Post
tasksCtrls.createTaskPost = async (req, res) => {
    console.log(req.body);
    const {title, description, deadline} = req.body;
    const task = new Task({title, description, deadline});
    await task.save() // Save in db
    res.redirect('/tasks');
};




tasksCtrls.editTask = async (req, res) => {
    const task = await Task.findById(req.params.id).lean();
    task.deadline = task.deadline.toISOString().split('T')[0];

    res.render('tasks/edit-task', { task });
};


tasksCtrls.editTaskPut = async (req, res) => {
    const { title, description, deadline } = req.body;
    console.log(req.body);
    await Task.findByIdAndUpdate(req.params.id, { title, description, deadline });

    res.redirect('/tasks');
};



tasksCtrls.deleteTaskDel = async (req, res) => {
    if (req.params.id){
        await Task.findByIdAndDelete(req.params.id);
    }
    res.redirect('/tasks');
};




module.exports = tasksCtrls;
