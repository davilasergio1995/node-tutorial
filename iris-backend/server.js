const express = require('express');
const alessa = express();
const path = require('path');

alessa.get('/api/students',(req,res) => {
    const students = [{
        id: 1,
        name: 'Xiaoyu',
        grade: '11'
    },
];
})

alessa.listen(8000,() => {
    console.log('Backend server listening on port 8000');
});