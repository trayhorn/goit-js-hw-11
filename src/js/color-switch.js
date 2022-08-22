const colors = [
  '#48FFF9',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const bodyEl = document.body;
const startBtn = document.querySelector('[data-action="start"]');
const stopBtn = document.querySelector('[data-action="stop"]');


let intervalId = null;

startBtn.addEventListener('click', () => {
  intervalId = setInterval(() => {
    bodyEl.style.backgroundColor = colors[randomIntegerFromInterval(0, 5)]
  }, 1000);
  startBtn.setAttribute('disabled', true);
})

stopBtn.addEventListener('click', () => {
  clearInterval(intervalId);
  startBtn.removeAttribute('disabled');
})

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};










