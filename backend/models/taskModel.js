const { getDatabaseConnection } = require('../database/database');

const getTasks = (callback) => {
  const db = getDatabaseConnection();
  db.all('SELECT * FROM tasks', [], (err, rows) => {
    callback(err, rows);
  });
};

const addTask = (task, callback) => {
  const db = getDatabaseConnection();
  const { name, description, dueDate, status, priority } = task;
  db.run(
    `INSERT INTO tasks (name, description, dueDate, status, priority) VALUES (?, ?, ?, ?, ?)`,
    [name, description, dueDate, status, priority],
    function (err) {
      callback(err, this.lastID);
    }
  );
};

const updateTask = (id, task, callback) => {
  const db = getDatabaseConnection();
  const { name, description, dueDate, status, priority } = task;
  db.run(
    `UPDATE tasks SET name = ?, description = ?, dueDate = ?, status = ?, priority = ? WHERE id = ?`,
    [name, description, dueDate, status, priority, id],
    function (err) {
      callback(err);
    }
  );
};

const deleteTask = (id, callback) => {
  const db = getDatabaseConnection();
  db.run(`DELETE FROM tasks WHERE id = ?`, [id], function (err) {
    callback(err);
  });
};

module.exports = {
  getTasks,
  addTask,
  updateTask,
  deleteTask
};
