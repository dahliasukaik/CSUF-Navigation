// db.js
const knex = require('knex');
const knexConfig = require('./knexfile'); // Load the knex configuration

// Initialize Knex using the development environment configuration
const db = knex(knexConfig.development);

module.exports = db; // Export the Knex instance for use in other parts of your application
