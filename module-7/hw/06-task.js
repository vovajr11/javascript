// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.

// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

let inputVal = document.getElementById('validation-input');

let totalLenght = inputVal.getAttribute('data-length');
let getPlaceholder = inputVal.getAttribute('placeholder');
let intTotallenght = parseInt(totalLenght);

inputVal.oninput = function () {
  if (inputVal.value.length === intTotallenght) {
    inputVal.classList.remove('invalid');
    inputVal.classList.add('valid');
  }
  if (inputVal.value.length === 0) {
    inputVal.classList.remove('valid');
    inputVal.classList.remove('invalid');
  }
  if (inputVal.value.length !== intTotallenght && inputVal.value.length !== 0) {
    inputVal.classList.add('invalid');
  }
};
