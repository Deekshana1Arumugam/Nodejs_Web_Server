const http = require('http');
const fs = require('fs');
const MyEmitter = require('./indexs');
const PORT = 3000;

const server = http.createServer((req, res) => {

    MyEmitter.emit('log', `Incoming request: ${req.method} ${req.url}`);

    if (req.url === '/') {
        // index HTML file
        res.writeHead(200, { 'Content-Type': 'text/html' });
        fs.readFile('./index.html', (error, data) => {
            if (error) {
                res.writeHead(404);
                res.write('Page Not Found');
            } else {
                res.write(data);
            }
            res.end();
        });
    } else if (req.url === '/new') {
        // new HTML file
        res.writeHead(200, { 'Content-Type': 'text/html' });
        fs.readFile('./new_page.html', (error, data) => {
            if (error) {
                res.writeHead(404);
                res.write('Page Not Found');
            } else {
                res.write(data);
            }
            res.end();
        });
    } else if (req.url === '/style.css') {
        //  style CSS file
        res.writeHead(200, { 'Content-Type': 'text/css' });
        fs.readFile('./style.css', (error, data) => {
            if (error) {
                res.writeHead(404);
                res.write('CSS File Not Found');
            } else {
                res.write(data);
            }
            res.end();
        });
    }
    else if (req.url === '/api/example') {
        // data JSON
        res.writeHead(200, { 'Content-Type': 'application/json' });
        fs.readFile('./data.json', (error, data) => {
            if (error) {
                res.writeHead(404);
                res.write('JSON File Not Found');
            } else {
                res.write(data);
            }
            res.end(); 
        });
    } 
    else {
        // 404 html file
        res.writeHead(200, { 'Content-Type': 'text/html' });
        fs.readFile('./404S.html', (error, data) => {
            if (error) {
                res.writeHead(404);
                res.write('Page Not Found');
            } else {
                res.write(data);
            }
            res.end();
        });
    }
});

server.listen(PORT, (error) => {
    if (error) {
        console.error('Error starting server:', error);
    } else {
        console.log('Server is running on port', PORT);
    }
});
