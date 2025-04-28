/*import express from 'express';
import calculatorRoutes from './routes/calculator.js';
import cors from 'cors';*/

/*const express = require('express');
const cors = require('cors');
const calculatorRoutes = require('./routes/calculator.js');

const app = express();

app.use(express.json()); // Parse JSON bodies
app.use('/', calculatorRoutes); // Use calculator routes

app.use(cors());
app.use(express.static('public')); // Serve static files

import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Routes
app.get('/', (_req, res) => {
  res.sendFile(__dirname + '/public/calculator.html');
});

app.get('/add', (req, res) => {
  const { a, b } = req.query;
  const result = Number(a) + Number(b);
  res.json({ result });
});

app.get('/subtract', (req, res) => {
  const { a, b } = req.query;
  const result = Number(a) - Number(b);
  res.json({ result });
});

app.get('/multiply', (req, res) => {
  const { a, b } = req.query;
  const result = Number(a) * Number(b);
  res.json({ result });
});

app.get('/divide', (req, res) => {
  const { a, b } = req.query;
  if (Number(b) === 0) return res.status(400).json({ error: "Cannot divide by zero" });
  const result = Number(a) / Number(b);
  res.json({ result });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

module.exports = app; // Export the app for testing*/


const express = require('express');
const cors = require('cors');
const path = require('path');
const calculatorRoutes = require('./routes/calculator');

const app = express();

// Middleware
app.use(express.json()); // Parse JSON bodies
app.use(cors());
app.use(express.static('public')); // Serve static files

// Routes
app.use('/', calculatorRoutes);

// Serve calculator.html at root '/'
app.get('/', (_req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'calculator.html'));
});

// Calculator API routes
app.get('/add', (req, res) => {
  const { a, b } = req.query;
  const result = Number(a) + Number(b);
  res.json({ result });
});

app.get('/subtract', (req, res) => {
  const { a, b } = req.query;
  const result = Number(a) - Number(b);
  res.json({ result });
});

app.get('/multiply', (req, res) => {
  const { a, b } = req.query;
  const result = Number(a) * Number(b);
  res.json({ result });
});

app.get('/divide', (req, res) => {
  const { a, b } = req.query;
  if (Number(b) === 0) return res.status(400).json({ error: "Cannot divide by zero" });
  const result = Number(a) / Number(b);
  res.json({ result });
});

// Server listening
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

// Export app (for tests)
module.exports = app;
