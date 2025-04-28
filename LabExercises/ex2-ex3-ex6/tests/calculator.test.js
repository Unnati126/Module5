const request = require('supertest');
const app = require('../app'); // Import your app

describe('Calculator API', () => {
    test('Addition', async () => {
        const res = await request(app).get('/calculator/add?a=5&b=3');
        expect(res.statusCode).toBe(200);
        expect(res.body.result).toBe(8);
    });

    test('Subtraction', async () => {
        const res = await request(app).get('/calculator/subtract?a=10&b=4');
        expect(res.statusCode).toBe(200);
        expect(res.body.result).toBe(6);
    });

    test('Multiplication', async () => {
        const res = await request(app).get('/calculator/multiply?a=6&b=7');
        expect(res.statusCode).toBe(200);
        expect(res.body.result).toBe(42);
    });

    test('Division', async () => {
        const res = await request(app).get('/calculator/divide?a=12&b=3');
        expect(res.statusCode).toBe(200);
        expect(res.body.result).toBe(4);
    });

    test('Division by zero', async () => {
        const res = await request(app).get('/calculator/divide?a=5&b=0');
        expect(res.statusCode).toBe(400);
        expect(res.body.error).toBe("Cannot divide by zero");
    });
});
