/*
 * Напиши скрипт который заменяет регистр каждого символа в строке на противоположный.
 * Например, если строка «JavaScript», то на выходе должена быть строка «jAVAsCRIPT».
 */

const string = 'qWeRTzxCv';
const letters = string.split('');
let invertedString = '';

console.log(letters);

for (const letter of letters) {
  console.log(letter);

  //   if (letter === letter.toLowerCase()) {
  //     invertedString += letter.toUpperCase();
  //   } else {
  //     invertedString += letter.toLowerCase();
  //   }

  invertedString +=
    letter === letter.toLowerCase()
      ? letter.toUpperCase()
      : letter.toLowerCase();
}

console.log(invertedString);
