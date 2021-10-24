const express = require('express');
const alessa = express();
const path = require('path');
const {readFile, writeFile } = require('fs');

alessa.use(express.static(path.join(__dirname,'..','build')));
alessa.use(express.static('public'));
alessa.use(express.static(path.join(__dirname,'components')));

alessa.listen(8000, () => {
    console.log('Server started on port 8000');
});
