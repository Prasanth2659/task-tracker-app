import React, { useState, useEffect } from 'react';

const TaskForm = ({ selectedTask, onAddTask, onUpdateTask }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [status, setStatus] = useState('Pending');
  const [priority, setPriority] = useState('Low');

  useEffect(() => {
    if (selectedTask) {
      setName(selectedTask.name);
      setDescription(selectedTask.description);
      setDueDate(selectedTask.dueDate);
      setStatus(selectedTask.status);
      setPriority(selectedTask.priority);
    } else {
      // Reset form fields
      setName('');
      setDescription('');
      setDueDate('');
      setStatus('Pending');
      setPriority('Low');
    }
  }, [selectedTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const task = { name, description, dueDate, status, priority };
    if (selectedTask) {
      onUpdateTask(selectedTask.id, task);
    } else {
      onAddTask(task);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{selectedTask ? 'Edit Task' : 'Add Task'}</h2>
      <label>
        Task Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>
      <label>
        Description:
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </label>
      <label>
        Due Date:
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          required
        />
      </label>
      <label>
        Status:
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          required
        >
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
      </label>
      <label>
        Priority:
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          required
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </label>
      <button type="submit">{selectedTask ? 'Update' : 'Add'} Task</button>
    </form>
  );
};

export default TaskForm;
