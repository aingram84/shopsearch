const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const logger = require('../middleware/logger');

const server = express();
const { searchEngine } = require('../client/src/searchEngine'); // adjust path as necessary

server.use(helmet());
server.use(cors());
server.use(express.json());
server.use(logger);

server.get('/', (req, res) => {
  res.send('<h1>🚀</h1>');
})

server.get('/api/search', (req, res) => {
    try {
        const results = searchEngine(req.query.q);
        res.json(results);
    } catch (error) {
        console.error("Server error:", error.message);
        res.status(500).json({ message: "Internal server error" });
    }
});


module.exports = server;