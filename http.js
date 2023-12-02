const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('You are on the home page');
        return; // Add return statement to stop further processing
    }

    if (req.url === '/about') {
        res.end('You are on the about us page');
        return; // Add return statement to stop further processing
    }

    res.end(`
        <h1>HUU</h1>
        You seem to have been lost since you were a child
        <a href="/">Home</a>
    `);
});

server.listen(5000);
