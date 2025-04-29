const express = require('express');
const router = express.Router();

const calculator = require('../libraries/calculator.js');
const generateRandomId =require('../libraries/idGenerator.js');
const logger = require('../libraries/logger.js');

// Add
router.get('/add', (req, res) => {
    const { a, b } = req.query;
    const result = calculator.add(a, b);
    const id = generateRandomId();
    logger(id, 'add', result);
    res.json({ id, result });

    //const result = Number(a) + Number(b);
    //res.json({ result });
});

// Subtract
router.get('/subtract', (req, res) => {
    const { a, b } = req.query;
    const result = calculator.subtract(a, b);
    const id = generateRandomId();
    logger(id, 'subtract', result);
    res.json({ id, result });

    //const result = Number(a) - Number(b);
    //res.json({ result });
});

// Multiply
router.get('/multiply', (req, res) => {
    const { a, b } = req.query;
    const result = calculator.multiply(a, b);
    const id = generateRandomId();
    logger(id, 'multiply', result);
    res.json({ id, result });

    //const result = Number(a) * Number(b);
    //res.json({ result });
});

// Divide
router.get('/divide', (req, res) => {
    const { a, b } = req.query;
    try {
        const result = calculator.divide(a, b);
        const id = generateRandomId();
        logger(id, 'divide', result);
        res.json({ id, result });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }

    /*if (Number(b) === 0) {
        return res.status(400).json({ error: "Cannot divide by zero" });
    }
    const result = Number(a) / Number(b);
    res.json({ result });*/
});

module.exports = router;