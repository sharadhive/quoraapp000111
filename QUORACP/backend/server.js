const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const PORT = process.env.PORT || 90; // Use environment variable for the port
const connect = require('./db.js');
const router = require('./routes');

connect();

// Middleware
app.use(bodyParser.json({ limit: '60mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '60mb' }));
app.use(cors());

// Set CORS headers correctly
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

// Serve static files (uploads and frontend build)
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));
app.use(express.static(path.join(__dirname, '../frontend/build')));

// Engagement of backend and frontend
app.get('*', (req, res) => {
    try {
        res.sendFile(path.join(__dirname, '../frontend/build/index.html'));
    } catch (e) {
        console.error('Error:', e);
        res.status(500).send('Internal Server Error');
    }
});

// Mount the router
app.use('/api', router);

// Let's call the server!
app.listen(PORT, () => {
    console.log(`Listening on port number ${PORT}`);
});
