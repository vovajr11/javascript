// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// - Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// - Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// - Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

const refs = {
  currentCounterValue: document.querySelector('#value'),
  onIncrementBtn: document.querySelector('[data-action="increment"]'),
  onDecrementBtn: document.querySelector('[data-action="decrement"]'),
};

let counterValue = 0;
let step = 1;

const increment = () => {
  counterValue += step;

  refs.currentCounterValue.textContent = counterValue;
};

const decrement = () => {
  counterValue -= step;

  refs.currentCounterValue.textContent = counterValue;
};

refs.onIncrementBtn.addEventListener('click', increment);
refs.onDecrementBtn.addEventListener('click', decrement);
