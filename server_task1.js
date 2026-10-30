var http = require('http');

var server = http.createServer(function(req, res) {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<b>Home Page.</b>');
        res.end();
    } else if (req.url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<b>About Page.</b>');
        res.end();
    } else if (req.url === '/contact') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<b>Contact Page.</b>');
        res.end();
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('Invalid Request!');
    }
});
server.listen(5000, function() {
    console.log('The NodeJS server on port 5000 is now running....');
});