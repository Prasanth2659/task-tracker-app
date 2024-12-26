const express = require('express');
const taskRoutes = require('./routes/taskRoutes');
const { initializeDatabase } = require('./database/database');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Routes
app.use('/tasks', taskRoutes);

// Initialize the database
initializeDatabase();

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
