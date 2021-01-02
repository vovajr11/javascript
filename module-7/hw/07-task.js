// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input)
// и изменяет инлайн-стиль span#text обновляя свойство font-size.
// В результате при перетаскивании ползунка будет меняться размер текста.

const refs = {
  input: document.getElementById('font-size-control'),
  span: document.getElementById('text'),
};

refs.input.oninput = function () {
  refs.span.style.fontSize = refs.input.value + 'px';
};

// refs.input.addEventListener('input', handleInputRange);

// function handleInputRange(event) {
//   refs.span.style.fontSize = event.currentTarget.value + 'px';

//   console.log(event.currentTarget.value);
// }
