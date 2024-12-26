const Task = require('../models/taskModel');

const getTasks = (req, res) => {
  Task.getTasks((err, tasks) => {
    if (err) {
      res.status(500).json({ message: err.message });
    } else {
      res.status(200).json(tasks);
    }
  });
};

const addTask = (req, res) => {
  const newTask = req.body;
  Task.addTask(newTask, (err, taskId) => {
    if (err) {
      res.status(500).json({ message: err.message });
    } else {
      res.status(201).json({ id: taskId, ...newTask });
    }
  });
};

const updateTask = (req, res) => {
  const { id } = req.params;
  const updatedTask = req.body;
  Task.updateTask(id, updatedTask, (err) => {
    if (err) {
      res.status(500).json({ message: err.message });
    } else {
      res.status(200).json(updatedTask);
    }
  });
};

const deleteTask = (req, res) => {
  const { id } = req.params;
  Task.deleteTask(id, (err) => {
    if (err) {
      res.status(500).json({ message: err.message });
    } else {
      res.status(200).json({ message: 'Task deleted' });
    }
  });
};

module.exports = {
  getTasks,
  addTask,
  updateTask,
  deleteTask
};
