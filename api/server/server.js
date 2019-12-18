const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const sessions = require('express-session');
const KnexSessionStore = require('connect-session-knex')(sessions);

const knex = require('../data/dbConfig.js');

const server = express();

const sessionConfig = {
  name: 'christmas cookies',
  secret: process.env.SECRET,
  saveUninitialized: process.env.ENVIRONMENT === 'production' ? true : false,
  resave: false,

  store: new KnexSessionStore({
    knex,
    createtable: true,
    clearInterval: 1000 * 60 * 100,
    sidfieldname: 'sid',
    tablename: 'db_sessions'
  }),

  cookie: {
    maxAge: 1000 * 60 * 100, // 100 minutes
    secure: process.env.NODE_ENV === 'production' ? true : false,
    httpOnly: true
  }
};

server.use(helmet());
server.use(express.json());
server.use(cors());
server.use(sessions(sessionConfig));

server.use('/', (req, res) => {
  res.json({ api: 'Up :D' });
});

module.exports = server;
