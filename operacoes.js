const express = require('express');

const router = express.Router();

router.post ('/adicao', (req, res) => {
    const { a, b } = req.body;
    const resultado = a + b;
    res.json({ resultado });
});

router.get('/adicao', (req, res) => {
    res.send('Você esta na rota adição')
});

router.post ('/subtracao', (req, res) => {
    const { a, b } = req.body;
    const resultado = a - b;
    res.json({ resultado });
});

router.get('/subtracao', (req, res) => {
    res.send('Você esta na rota subtração')
});

router.post ('/multiplicacao', (req, res) => {
    const { a, b } = req.body;
    const resultado = a * b;
    res.json({ resultado });
});

router.get('/multiplicacao', (req, res) => {
    res.send('Você esta na rota multiplicação')
});

router.post ('/divisao', (req, res) => {
    const { a, b } = req.body;
    if (b === 0) {
        return res.status(400).json({ error: 'divisão por zero!' });
    }
    else {
        const resultado = a / b;
        res.json({ resultado });
    }
});

router.get('/divisao', (req, res) => {
    res.send('Você esta na rota divisão')
});

module.exports = router;