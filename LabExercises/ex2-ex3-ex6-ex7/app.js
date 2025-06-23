const express = require('express');
const cors = require('cors');
const path = require('path');
const calculatorRoutes = require('./routes/calculator');
const { logMessage } = require('./libraries/logger');

const app = express();

// Middleware
app.use(express.json()); // Parse JSON bodies
app.use(cors());
app.use(express.static('public')); // Serve static files

// Routes
app.use('/calculator', calculatorRoutes);

// Serve calculator.html at root '/'
app.get('/', (_req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'calculator.html'));
});

// Calculator API routes
app.get('/add', (req, res) => {
  const { a, b } = req.query;
  const result = Number(a) + Number(b);

  const id = Math.floor(Math.random() * 1000000);
  logMessage(id, 'add', result);
  res.json({ id, result });
});

app.get('/subtract', (req, res) => {
  const { a, b } = req.query;
  const result = Number(a) - Number(b);

  const id = Math.floor(Math.random() * 1000000);
  logMessage(id, 'subtract', result);
  res.json({ id, result });
});

app.get('/multiply', (req, res) => {
  const { a, b } = req.query;
  const result = Number(a) * Number(b);

  const id = Math.floor(Math.random() * 1000000);
  logMessage(id, 'multiply', result);
  res.json({ id, result });
});

app.get('/divide', (req, res) => {
  const { a, b } = req.query;
  if (Number(b) === 0) return res.status(400).json({ error: "Cannot divide by zero" });
  const result = Number(a) / Number(b);

  const id = Math.floor(Math.random() * 1000000);
  logMessage(id, 'divide', result);
  res.json({ id, result });
});

// Server listening
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

module.exports = app;