const express = require('express');
const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/certificates', require('./routes/certificates'));

module.exports = app; // Export the app for reuse
