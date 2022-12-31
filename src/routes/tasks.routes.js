const { Router } = require('express');
const router = Router();

const { 
    renderTasks,
    renderResults,
    createTaskPost,
    editTask,
    editTaskPut,
    deleteTaskDel,  
} = require('../controllers/tasks.controllers');

const isAuthenticated = require('../helpers/auth');

// Show Tasks
router.get('/tasks', isAuthenticated, renderTasks);

router.post('/tasks/search/', isAuthenticated, renderResults);
router.post('/tasks/create/', isAuthenticated, createTaskPost);
router.post('/tasks/edit/:id', isAuthenticated, editTask);
router.put('/tasks/edit/:id', isAuthenticated, editTaskPut);
router.delete('/tasks/delete/:id', isAuthenticated, deleteTaskDel);


module.exports = router;
