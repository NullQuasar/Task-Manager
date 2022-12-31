const Ctrls = { };

Ctrls.renderIndex = async (req, res) => {
    console.log('Initialized main route (/)');
    // res.send('Hello user!');
    if(req.user) {
        const Task = require('../models/Task');
        var date = new Date();
        date.setDate(date.getDate() - 7);
        const tasks = await Task.find({ owner: req.user._id, updatedAt: { $gte: date.toISOString() } }).lean();
        tasks.forEach(task => {
            task.deadline = task.deadline.toISOString().split('T')[0];
        });
        res.render('index', { tasks });
    }
    else res.render('index');
};

Ctrls.renderAbout = (req, res) => {
    console.log('About route accessed');
    // res.send('Hello user!');
    res.render('about');
};

module.exports = Ctrls;
