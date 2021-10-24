let button = document.querySelector('#button');
let ayyLmao = document.querySelector('#ayy-lmao');


let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 0];


button.addEventListener('click', () => {
    ayyLmao.style.color=colors[Math.floor(Math.random() * 7)];
    colors[7]++;
    console.log('You clicked the button ' + colors[7] + ' times');
});