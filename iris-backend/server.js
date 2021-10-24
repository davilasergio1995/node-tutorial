const express = require('express');
const alessa = express();
const path = require('path');

alessa.get('/api/students',(req,res) => {
    const students = [{
        id: 1,
        name: 'Xiaoyu',
        grade: 11
    },
    {
        id: 2,
        name: 'Mokujin',
        grade: 13
    },
    {
        id: 3,
        name: 'Alissa',
        grade: 11
    }
];
res.json(students);
})

alessa.listen(8000,() => {
    console.log('Backend server listening on port 8000');
});