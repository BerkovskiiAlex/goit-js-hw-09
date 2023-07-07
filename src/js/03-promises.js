import Notiflix from 'notiflix';

const form = document.querySelector('.form');
const submit = form.querySelector('button');

const onFormSubmit = event => {
  event.preventDefault();
  submit.disabled = true;
  console.dir(event.target.elements);

  const { delay, step, amount } = event.target.elements;

  console.log(amount.value);

  for (let i = 1; i <= Number(amount.value); i++) {
    const currentDelay = Number(delay.value) + Number(step.value) * (i - 1);
    setTimeout(() => {
      createPromise(i, currentDelay)
        .then(({ position, delay }) => {
          Notiflix.Notify.success(
            `✅ Fulfilled promise ${position} in ${delay}ms`,
            {
              position: 'center-center',
              timeout: 5000,
            }
          );
        })
        .catch(({ position, delay }) => {
          Notiflix.Notify.failure(
            `❌ Rejected promise ${position} in ${delay}ms`,
            {
              position: 'center-center',
              timeout: 5000,
            }
          );
        });
    }, currentDelay);
  }

  function createPromise(position, delay) {
    const shouldResolve = Math.random() > 0.3;

    const myPromise = new Promise((resolve, rejected) => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        rejected({ position, delay });
      }
    });

    return myPromise;
  }
};

form.addEventListener('submit', onFormSubmit);
