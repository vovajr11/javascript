// Напиши функцию formatString(string) которая принимает строку и форматирует
// ее если необходимо.

// Если длина строки не превышает 40 символов, функция возвращает ее в исходном виде.
// Если длина больше 40 символов, то функция обрезает строку до 40-ка символов и добавляет
// в конец строки троеточие '...', после чего возвращает укороченную версию.

// const formatString = function (string) {
//   const stringLetters = string.split('');
//   const maxLength = 40;
//   // console.log(stringLetters);
//   for (let i = 0; i <= stringLetters.length; i += 1) {
//     // console.log(stringLetters.length);
//     let lineLength = stringLetters.length;

//     if (lineLength <= maxLength) {
//       return string;
//     }
//     stringLetters.splice(maxLength, 10) + '...';

//     // return string.splice(maxLength, 10) + '...';
//   }
// };

const formatString = string =>
  string.length > 40 ? `${string.slice(0, 41)}...` : string;

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// вернется оригинальная строка

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// вернется форматированная строка

console.log(formatString('Curabitur ligula sapien.'));
// вернется оригинальная строка

console.log(
  formatString(
    'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
  ),
);
// вернется форматированная строка
