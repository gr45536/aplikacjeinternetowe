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
} else {
button.addEventListener('click', ev => {
const d = document.getElementById('display');
d.textContent = ev.target.textContent;
ev.target.textContent = '#';
});
}
    console.info('click');
}
container.appendChild(button);
});
document.body.appendChild(container);
}
window.addEventListener('DOMContentLoaded', init);
