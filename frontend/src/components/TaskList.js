import React from 'react';

const TaskList = ({ tasks, onEdit, onDelete }) => {
  return (
    <div>
      <h2>Task List</h2>
      {tasks.map(task => (
        <div key={task._id}>
          <h3>{task.name}</h3>
          <p>{task.description}</p>
          <p>{task.dueDate}</p>
          <p>{task.status}</p>
          <p>{task.priority}</p>
          <button onClick={() => onEdit(task)}>Edit</button>
          <button onClick={() => onDelete(task._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
