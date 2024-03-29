const tasksCtrls = { };
const Task = require('../models/Task');

// Get
tasksCtrls.renderTasks = async (req, res) => {
    const tasks = await Task.find({ owner: req.user._id }).lean();
    tasks.forEach(task => {
        task.deadline = task.deadline.toISOString().split('T')[0];
    });
    res.render('tasks/all-tasks', { tasks });
};

tasksCtrls.renderResults = async (req, res) => {
    let regex = new RegExp(req.body.query, 'i');
    
    let deadline = undefined;
    if (!isNaN(new Date(req.body.query).getDate())) {
        deadline = new Date(req.body.query);
        deadline = deadline.toISOString();
        console.log(deadline);
    }

    const tasks = await Task.find({ $or: [ { title: regex }, { description: regex }, { deadline: deadline } ], owner: req.user._id }).lean();
    tasks.forEach(task => {
        task.deadline = task.deadline.toISOString().split('T')[0];
    });

    res.render('tasks/found-tasks', { tasks });
};


// Post
tasksCtrls.createTaskPost = async (req, res) => {

    let {title, description, deadline} = req.body;
    
    if (title || description || deadline) {

        if (!title)
            title = 'No title';

        if (!deadline) {
            const today = new Date()
            deadline = new Date();
            deadline.setDate(today.getDate() + 1);
        }

        const owner = req.user._id;
        console.log(owner);
        const task = new Task({title, description, deadline, owner});
        await task.save() // Save in db
        
        req.flash('success_msg', 'The task has been created');
        res.redirect('/tasks');
    }
    
    else {
        req.flash('danger_msg', 'The task must have any content!');
        res.redirect('/tasks');
    }
};




tasksCtrls.editTask = async (req, res) => {
    const task = await Task.findById(req.params.id).lean();
    task.deadline = task.deadline.toISOString().split('T')[0];

    if (task.owner != req.user._id) {
        req.flash('error', 'The task does not exists');
        res.redirect('/tasks');
    } else {
        res.render('tasks/edit-task', { task });
    }
};


tasksCtrls.editTaskPut = async (req, res) => {
    const { title, description, deadline } = req.body;
    await Task.findByIdAndUpdate(req.params.id, { title, description, deadline });

    req.flash('success_msg', `${title} has been updated`);
    res.redirect('/tasks');
};



tasksCtrls.deleteTaskDel = async (req, res) => {
    if (req.params.id){
        await Task.findByIdAndDelete(req.params.id);
    }
    req.flash('danger_msg', 'The task has been deleted');
    res.redirect('/tasks');
};




module.exports = tasksCtrls;