const http = require('http');
const {readFile, writeFile} = require('fs');
const path = require('path');
const htmlPage = path.join(__dirname, './content','html-pages', 'index.html');
const jsFile = path.join(__dirname, './content','html-pages', 'button.js');
const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-type': 'text/html'})
    let fileRead = (fileName) => {
        return new Promise((resolve, reject) => {
            readFile(fileName,null,(err, data) => {
                if(err) {
                    reject(fileName);
                } else {
                    res.write(data);
                    res.end();
                    resolve();
                }
            })
        })
    };
    let printPage = async () => {
        try {
            await fileRead(htmlPage);
        } catch (error) {
            console.log(error);
        };
    };
    printPage();
});

server.listen(8000)