const sqlite3 = require('sqlite3').verbose();

const initializeDatabase = () => {
  const db = new sqlite3.Database('./database/tasks.db', (err) => {
    if (err) {
      console.error('Failed to connect to the database', err.message);
    } else {
      console.log('Connected to the SQLite database');
      db.run(
        `CREATE TABLE IF NOT EXISTS tasks (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          name TEXT NOT NULL,
          description TEXT NOT NULL,
          dueDate TEXT NOT NULL,
          status TEXT DEFAULT 'Pending',
          priority TEXT DEFAULT 'Low'
        )`,
        (err) => {
          if (err) {
            console.error('Failed to create table', err.message);
          }
        }
      );
    }
  });
  return db;
};

const getDatabaseConnection = () => {
  return new sqlite3.Database('./database/tasks.db');
};

module.exports = {
  initializeDatabase,
  getDatabaseConnection
};
