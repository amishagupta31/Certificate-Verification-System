const express = require('express');
const connectDB = require('./config/db');
require('dotenv').config();

const app = require('./app'); // Import the app module

// Connect to the database
connectDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
