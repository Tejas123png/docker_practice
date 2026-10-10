const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Enable basic CORS for frontend requests
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.get('/api/info', (req, res) => {
    res.json({
        appName: 'Docker Practice App (Backend)',
        status: 'running',
        nodeVersion: process.version,
        platform: process.platform,
        uptime: process.uptime(),
        timestamp: new Date().toISOString()
    });
});

app.listen(PORT, () => {
    console.log(`Backend server running on http://localhost:${PORT}`);
});
