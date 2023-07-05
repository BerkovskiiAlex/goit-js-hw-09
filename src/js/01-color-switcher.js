let body = document.querySelector('body');
const buttons = body.querySelectorAll('button');
const start = body.querySelector('[data-start]');
const stop = body.querySelector('[data-stop]');
buttons.forEach(button => {
  button.addEventListener('click', onButtonClick);
});
let interval;

function onButtonClick(event) {
  const { dataset } = event.target;
  if (dataset.start === '') {
    interval = setInterval(() => {
      body.style.backgroundColor = getRandomHexColor();
    }, 1000);
    start.disabled = true;
    stop.disabled = false;
  }
  if (dataset.stop === '') {
    clearInterval(interval);
    start.disabled = false;
    stop.disabled = true;
  }
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
