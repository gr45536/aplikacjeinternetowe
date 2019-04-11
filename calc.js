const fields = [
    { txt: 1, col: 1, row: 4 },
    { txt: 2, col: 2, row: 4 },
    { txt: 3, col: 3, row: 4 },
    { txt: 4, col: 1, row: 3 },
    { txt: 5, col: 2, row: 3 },
    { txt: 6, col: 3, row: 3 },
    { txt: 7, col: 1, row: 2 },
    { txt: 8, col: 2, row: 2 },
    { txt: 9, col: 3, row: 2 },
    { txt: 0, col: '1/3', row: 5 },
    { txt: 'C', col: 4, row: 2 },
    { txt: '+', col: 4, row: 3 },
    { txt: '-', col: 4, row: 4 },
    { txt: '=', col: 4, row: 5 },
    { txt: '.', col: 3, row: 5 },
    { txt: 'Display', col: '1/5', row: 1 }
];

let clearFlag;
let memory = 0;
let op = 0;

const handleClick = ev => {
const d = document.getElementById('display');
d.textContent = ev.target.textContent;
switch (key) {
case 'C':
disp.textContent = 0;
memory = 0;
op = 0;
break;

case '+':
case '-':
if (op === 0) {
memory = parseFloat(disp.textContent);
} else {
memory += op * parseFloat(disp.textContent);
}
op = key === '+' ? 1 : -1;
clearFlag = true;
break;

case '=':
if (op === 0) {
memory = parseFloat(disp.textContent);
} else {
memory += op * parseFloat(disp.textContent);
}
disp.textContent = memory;
op = 0;
break;

default:
if (key === '0' && disp.textContent === '0') return;
if (key === '.' && disp.textContent.includes('.')) return;
if ((key !== '.' && disp.textContent === '0') || clearFlag) {
disp.textContent = key;  
clearFlag = false;
} else {
disp.textContent += key;
}
};

const init = () => {
const container = document.createElement('div');
container.id = 'container';

fields.forEach(el => {
const button = document.createElement('div');
button.textContent = el.txt;
button.style.gridColumn = el.col;
button.style.gridRow = el.row;
if (el.txt === 'Display') {
button.id = 'display';
button.textContent = 0;
} else {
button.addEventListener('click', handleClick) 

};
}
    console.info('click');
}
container.appendChild(button);
};
document.body.appendChild(container);
}
window.addEventListener('DOMContentLoaded', init);
