const http = require('http');
const path = require('path');
const {readFile} = require('fs');

const newHtml = path.join(__dirname, './content','./html-pages','index.html');

const newServer = http.createServer((req, res) => {
    res.writeHead(200,{'Context-type': 'text/html'});
    readFile(newHtml, 'utf8', (err, data) => {
        if (err) {
            res.writeHead(404);
            res.write('Error: file not found');
        } else {
        res.write(data);
        res.end();
        };
    });
});

newServer.listen(8000);