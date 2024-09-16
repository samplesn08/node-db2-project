// DO YOUR MAGIC
const express = require('express');
const Cars = require('./cars-model');
const { checkCarId, checkCarPayload, checkVinNumberValid, checkVinNumberUnique } = require('./cars-middleware');
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

router.get('/:id', checkCarId, (req, res) => {
    res.status(200).json(req.car)
});

router.post('/', checkCarPayload, checkVinNumberValid, checkVinNumberUnique, (req,res) => {
    Cars.create(req.body)
        .then(car => {
            res.status(201).json(car);
        })
        .catch(err => {
            res.status(500).json({ message: err.message })
        })
});

module.exports = router;