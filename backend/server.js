// server.js
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const db = require('./db'); // Import the Knex instance configured in db.js

dotenv.config(); // Load environment variables from .env file

const app = express();
const PORT = process.env.PORT || 7001; // Set the port, change as needed

app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(express.json()); // Enable parsing of JSON bodies

// Test route to verify server is working
app.get('/', (req, res) => {
  res.send('Express server is running!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

