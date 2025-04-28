/*import express from 'express';

const router = express.Router();

// Addition
router.get('/add', (req, res) => {
    const a = Number(req.query.a);
    const b = Number(req.query.b);
    const result = a + b;
    res.json({ result });
});

// Subtraction
router.get('/subtract', (req, res) => {
    const a = Number(req.query.a);
    const b = Number(req.query.b);
    const result = a - b;
    res.json({ result });
});

// Multiplication
router.get('/multiply', (req, res) => {
    const a = Number(req.query.a);
    const b = Number(req.query.b);
    const result = a * b;
    res.json({ result });
});

// Division
router.get('/divide', (req, res) => {
    const a = Number(req.query.a);
    const b = Number(req.query.b);
    
    if (b === 0) {
        return res.status(400).json({ error: 'Cannot divide by zero' });
    }

    const result = a / b;
    res.json({ result });
});

export default router;*/




/*const express = require('express');
const router = express.Router();

router.post('/add', (req, res) => {
  const { a, b } = req.body;
  if (typeof a !== 'number' || typeof b !== 'number') {
    return res.status(400).json({ error: 'Invalid input' });
  }
  const result = a + b;
  res.json({ result });
});

router.post('/subtract', (req, res) => {
  const { a, b } = req.body;
  if (typeof a !== 'number' || typeof b !== 'number') {
    return res.status(400).json({ error: 'Invalid input' });
  }
  const result = a - b;
  res.json({ result });
});

router.post('/multiply', (req, res) => {
  const { a, b } = req.body;
  if (typeof a !== 'number' || typeof b !== 'number') {
    return res.status(400).json({ error: 'Invalid input' });
  }
  const result = a * b;
  res.json({ result });
});

router.post('/divide', (req, res) => {
  const { a, b } = req.body;
  if (typeof a !== 'number' || typeof b !== 'number') {
    return res.status(400).json({ error: 'Invalid input' });
  }
  if (b === 0) {
    return res.status(400).json({ error: 'Cannot divide by zero' });
  }
  const result = a / b;
  res.json({ result });
});

module.exports = router;*/


const express = require('express');
const router = express.Router();

// Add
router.get('/add', (req, res) => {
    const { a, b } = req.query;
    const result = Number(a) + Number(b);
    res.json({ result });
});

// Subtract
router.get('/subtract', (req, res) => {
    const { a, b } = req.query;
    const result = Number(a) - Number(b);
    res.json({ result });
});

// Multiply
router.get('/multiply', (req, res) => {
    const { a, b } = req.query;
    const result = Number(a) * Number(b);
    res.json({ result });
});

// Divide
router.get('/divide', (req, res) => {
    const { a, b } = req.query;
    if (Number(b) === 0) {
        return res.status(400).json({ error: "Cannot divide by zero" });
    }
    const result = Number(a) / Number(b);
    res.json({ result });
});

module.exports = router;
