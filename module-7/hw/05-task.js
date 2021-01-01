// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input),
// подставляет его текущее значение в span#name-output. Если инпут пустой,
//  в спане должна отображаться строка 'незнакомец'.

const refs = {
  inputText: document.querySelector('#name-input'),
  inputNewText: document.querySelector('#name-output'),
};

refs.inputText.addEventListener('input', onInputChange);

function onInputChange(event) {
  refs.inputNewText.textContent = event.currentTarget.value;
}
