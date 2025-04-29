//using a Calculator library that takes care of the calculations and integrate

const calculator = {
    add: (a, b) => Number(a) + Number(b),
    subtract: (a, b) => Number(a) - Number(b),
    multiply: (a, b) => Number(a) * Number(b),
    divide: (a, b) => {
        if (Number(b) === 0) {
            throw new Error("Cannot divide by zero");
        }
        return Number(a) / Number(b);
    }
};

module.exports = calculator;