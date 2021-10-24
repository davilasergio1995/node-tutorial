const express = require('express');
const alessa = express();
const http = require('http');
const {readFile, appendFile} = require('fs');
const path = require('path');
const htmlPage = path.join(__dirname, './content','html-pages', 'index.html');
const router = express.Router();

alessa.use(express.static('./static/'));

router.get('/', (req,res) => {
    res.sendFile(htmlPage);
});


alessa.use('/', router);

alessa.listen(8000);
















/*const server = http.createServer((req, res) => {
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

server.listen(8000)*/