const express = require('express');

const helmet = require("helmet");
const cors = require('cors');

const projectRouter = require('./projects/projectRouter');
const actionsRouter = require('./actions/actionsRouter');

const logger = require('./common/logger');

const server = express();

server.use(express.json());
server.use(cors());
// server.use(helmet());

server.use('/project', logger, projectRouter);
server.use('/actions', logger, actionsRouter);

server.get('/', (req, res, next) => {
    res.send(`<h2>Node API Sprint Challenge</h2>`);
  });

server.use('/', function notFound(req, res, next) {
    res
      .status(404)
      .json({ message: "Opps, did not find what you're looking for" })
  })
  
module.exports = server;