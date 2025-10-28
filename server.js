const express = require('express');
const path = require('path');
const app = express();

// Get port from environment variable or use 10000 (Render's default)
const PORT = process.env.PORT || 10000;

// Serve static files from current directory
app.use(express.static(__dirname));

// Serve index.html for all routes (SPA support)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Portfolio server running on port ${PORT}`);
  console.log(`Visit: http://localhost:${PORT}`);
});
