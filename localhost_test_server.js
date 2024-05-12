const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const PORT = 3000;

// Middleware to serve 404.html if index.html is missing
app.use((req, res, next) => {
    // Build the file path
    let filePath = path.join(__dirname, req.path);

    // Check if the path is a directory
    fs.stat(filePath, (err, stats) => {
        if (err) {
            // File or directory does not exist
            res.status(404).sendFile(path.join(__dirname, '404.html'));
        } else if (stats.isDirectory()) {
            // If it's a directory, check for index.html
            const indexPath = path.join(filePath, 'index.html');
            fs.access(indexPath, fs.constants.F_OK, (err) => {
                if (err) {
                    // index.html does not exist in directory
                    res.status(404).sendFile(path.join(__dirname, '404.html'));
                } else {
                    // Serve index.html
                    res.sendFile(indexPath);
                }
            });
        } else {
            // Serve the file directly if it exists and is not a directory
            res.sendFile(filePath);
        }
    });
});

// Serve static files from the root directory
app.use(express.static(__dirname));

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
