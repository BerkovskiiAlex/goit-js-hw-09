// Описан в документации
import flatpickr from 'flatpickr';
// Дополнительный импорт стилей
import 'flatpickr/dist/flatpickr.min.css';

import Notiflix from 'notiflix';

const body = document.querySelector('body');
const input = body.querySelector('#datetime-picker');
const start = body.querySelector('button');
start.addEventListener('click', onStartClick);
const daysElement = body.querySelector('[data-days]');
const hoursElement = body.querySelector('[data-hours]');
const minutesElement = body.querySelector('[data-minutes]');
const secondsElement = body.querySelector('[data-seconds]');

let selDate;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const currentDate = new Date();
    selDate = selectedDates[0];
    if (selectedDates[0] < currentDate) {
      Notiflix.Notify.failure('Please choose a date in the future', {
        position: 'center-center',
        timeout: 5000,
      });
    }
    if (selectedDates[0] >= currentDate) {
      start.disabled = false;
    }
  },
};

flatpickr('#datetime-picker', options);

function onStartClick() {
  input.disabled = true;
  start.disabled = true;
  const date = setInterval(() => {
    const timeDifference = selDate - new Date();
    const convertedDates = convertMs(timeDifference);
    const day = addLeadingZero(convertedDates.days);
    const hour = addLeadingZero(convertedDates.hours);
    const minute = addLeadingZero(convertedDates.minutes);
    const second = addLeadingZero(convertedDates.seconds);

    daysElement.textContent = day;
    hoursElement.textContent = hour;
    minutesElement.textContent = minute;
    secondsElement.textContent = second;
  }, 1000);
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
