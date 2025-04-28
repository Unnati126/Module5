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
