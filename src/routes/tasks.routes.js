const { Router } = require('express');
const router = Router();

const { 
    renderTasks,
    createTaskPost,
    editTask,
    editTaskPut,
    deleteTaskDel,  
} = require('../controllers/tasks.controllers');


// Show Tasks
router.get('/tasks', renderTasks);

router.post('/tasks/create/', createTaskPost);
router.post('/tasks/edit/:id', editTask);
router.put('/tasks/edit/:id', editTaskPut);
router.delete('/tasks/delete/:id', deleteTaskDel)


module.exports = router;
