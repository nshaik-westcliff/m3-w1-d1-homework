var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res) {
    if (req.url === '/home') {
        fs.readFile('home.html', function(err, data) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        });
    }
    else if (req.url === '/about') {
        fs.readFile('about.html', function(err, data) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        });
    }
    else if (req.url === '/contact') {
        fs.readFile('contact.html', function(err, data) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        });
    }
    else {
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.write('Invalid Request');
        res.end();
    }
});

server.listen(5000, function() {
    console.log('The NodeJS server on port 5000 is now running....');
});