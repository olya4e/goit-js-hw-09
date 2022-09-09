import Notiflix from 'notiflix';
Notiflix.Notify.init({
  width: '400px',
});
formEl = document.querySelector('.form');

const onSubmitForm = e => {
  e.preventDefault();
  const { delay, step, amount } = e.target.elements;
  let delayUser = delay.valueAsNumber;
  const stepUser = step.valueAsNumber;
  const amountUser = amount.valueAsNumber;
  if (delayUser < 0 || stepUser < 0 || amountUser <= 0) {
    Notiflix.Notify.failure(` Please input valid value`);
    return;
  }

  for (let position = 1; position <= amountUser; position += 1) {
    createPromise(position, delayUser)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(` Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(` Rejected promise ${position} in ${delay}ms`);
      });
    delayUser += stepUser;
  }
};
formEl.addEventListener('submit', onSubmitForm);

function createPromise(position, delay) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;

      if (shouldResolve) {
        // Fulfill
        resolve({ position, delay });
      } else {
        // Reject
        reject({ position, delay });
      }
    }, delay);
  });
  return promise;
}
