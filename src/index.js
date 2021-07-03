import './sass/main.scss';

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
  startBtn: document.querySelector('button[data-action="start"'),
  stopBtn: document.querySelector('button[data-action="stop"'),
},

randomIntegerFromInterval = (max) => {
  return Math.floor(Math.random() * (max + 1));
}

refs.startBtn.addEventListener('click', onStartBtnClick);
refs.stopBtn.addEventListener('click', onStopBtnClick);

function onStartBtnClick() {
intervalId = setInterval(() => {
  const color = colors[randomIntegerFromInterval(colors.length - 1)];
  document.body.style.backgroundColor = color;
  refs.startBtn.disabled = true;
}, 1000);
}
let intervalId = null;

function onStopBtnClick() {
  clearInterval(intervalId);
  refs.startBtn.disabled = false;
}
