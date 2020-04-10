const express = require('express');
const server = express();

const projectsRouter = require('./projects/projectRouter');
const actionsRouter = require('./actions/actionsRouter');

server.use('/', function notFound(req, res, next) {
    res
      .status(404)
      .json({ message: "Opps, did not find what you're looking for" })
  })
  
module.exports = server;