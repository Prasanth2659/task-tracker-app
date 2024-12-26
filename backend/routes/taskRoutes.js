const express = require('express');
const { getTasks, addTask, updateTask, deleteTask } = require('../controllers/taskController');

const router = express.Router();

router.get('/', getTasks);
router.post('/', addTask); // This should be here
router.patch('/:id', updateTask);
router.delete('/:id', deleteTask);

module.exports = router;
