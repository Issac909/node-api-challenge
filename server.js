const express = require('express');
const server = express();

const projectsRouter = require('./projects/projectRouter');
const actionsRouter = require('./actions/actionsRouter');

server.get('/', (req, res, next) => {
    res.send(`<h2>Node API Sprint Challenge</h2>`);
  });

server.use('/', function notFound(req, res, next) {
    res
      .status(404)
      .json({ message: "Opps, did not find what you're looking for" })
  })
  
module.exports = server;