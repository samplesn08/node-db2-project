// DO YOUR MAGIC
const express = require('express');
const Cars = require('./cars-model');
const router = express.Router();

router.get('/', (req, res) => {
    Cars.getAll()
        .then(cars => {
            res.json(cars);
        })
        .catch(err => {
            res.status(500).json({ message: err.message })
        })
});

router.get('/:id', (req, res) => {
    const {id} = req.params;
    Cars.getById(id)
        .then()
        .catch(err => {
            res.status(500).json({ message: err.message })
        })
})

module.exports = router;