const bodyEl = document.querySelector('body');
const startBtnEl = document.querySelector('button[data-start]');
const stopBtnEl = document.querySelector('button[data-stop]');
let intervalId = null;
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const onStartBtnClick = e => {
  bodyEl.style.backgroundColor = getRandomHexColor();
  intervalId = setInterval(() => {
    bodyEl.style.backgroundColor = getRandomHexColor();
  }, 1000);
  startBtnEl.setAttribute('disabled', true);
  stopBtnEl.removeAttribute('disabled');
};

const onStopBtnClick = e => {
  clearInterval(intervalId);
  startBtnEl.removeAttribute('disabled');
  stopBtnEl.setAttribute('disabled', true);
};

startBtnEl.addEventListener('click', onStartBtnClick);
stopBtnEl.addEventListener('click', onStopBtnClick);
