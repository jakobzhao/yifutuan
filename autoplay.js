#!/usr/bin/env node

const http = require('http');
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Start HTTP server
const PORT = 8888;
const server = http.createServer((req, res) => {
    let filePath = path.join(__dirname, req.url === '/' ? 'index.html' : req.url);

    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.writeHead(404);
            res.end('Not found');
            return;
        }

        const ext = path.extname(filePath);
        const contentType = {
            '.html': 'text/html',
            '.css': 'text/css',
            '.js': 'application/javascript',
            '.png': 'image/png',
            '.jpg': 'image/jpeg',
            '.gif': 'image/gif',
            '.svg': 'image/svg+xml'
        }[ext] || 'application/octet-stream';

        res.writeHead(200, { 'Content-Type': contentType });
        res.end(data);
    });
});

server.listen(PORT, () => {
    console.log(`\n✅ Server running at http://localhost:${PORT}`);
    console.log(`\n📺 Opening browser in 1 second...\n`);

    setTimeout(() => {
        // Open browser
        execSync(`open http://localhost:${PORT}?autoplay=true`, { stdio: 'inherit' });

        console.log(`\n⏳ Waiting for page to load and auto-play to start...\n`);
        console.log(`🔴 Press Cmd+Shift+5 NOW to start recording!\n`);
        console.log(`Then select "Screen Recording" and click the record button.\n`);
        console.log(`🎬 The journey will auto-play and take about 5-10 minutes.\n`);
        console.log(`⏹️  When done, press Cmd+Ctrl+Esc to stop recording.\n`);
    }, 1000);
});

// Keep server running
process.on('SIGINT', () => {
    console.log('\n\n✋ Stopping server...');
    server.close();
    process.exit(0);
});
