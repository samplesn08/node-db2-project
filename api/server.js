const express = require("express")

const server = express()

// DO YOUR MAGIC
server.use('/', (req, res) => {
    res.send("It's working!")
});

module.exports = server
