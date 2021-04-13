const express = require("express")
const carsRoutes = require('./cars/cars-router');
const server = express()

// DO YOUR MAGIC
server.use('/api/cars', carsRoutes);

server.use('/', (req, res) => {
    res.send("It's working!")
});

module.exports = server
