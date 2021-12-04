const { Router } = require('express');
const router = Router();

const { 
    renderTasks,
    editTask,
    editTaskPut,
    createTask,
    createTaskPost,
    deleteTask,
    deleteTaskDel,  
} = require('../controllers/tasks.controllers');


// Show Tasks
router.get('/tasks', renderTasks);


router.get('/tasks/create', createTask);
router.post('/tasks/create/', createTaskPost);


router.get('/tasks/edit', editTask);
router.put('/tasks/edit/:id', editTaskPut);

router.get('/tasks/delete', deleteTask);
router.delete('/tasks/delete/:id', deleteTaskDel)


module.exports = router;
