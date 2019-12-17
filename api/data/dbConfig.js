const knex = require('knex');

const knexConfig = require('../../knexfile');

const environment = process.env.ENVIRONMENT;

module.exports = knex(knexConfig[environment]);
