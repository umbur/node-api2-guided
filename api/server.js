// BREAK UP THIS MONOLITHIC FILE USING ROUTES
// BREAK UP THIS MONOLITHIC FILE USING ROUTES
// BREAK UP THIS MONOLITHIC FILE USING ROUTES
const express = require('express');
const adoptersRouter = require('./adopters/adopters-router')
const dogsRouter = require('./dogs/dogs-router')
const server = express();

server.use(express.json());

server.use('/api/adopters', adoptersRouter);

server.use('/api/dogs', dogsRouter);

server.use('*', (req, res) => {
  res.status(404).send(`
    <h2>Lambda Shelter API</h2>
    <p>Ooops, can't find that resource!</p>
  `);
});

module.exports = server;
