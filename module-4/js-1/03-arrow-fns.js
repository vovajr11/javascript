'use strict';

/*
 * Стрелочные функции
 * - Объявление
 * - Явный и неявный возврат
 * - Аргументы
 * - Неявный возврат объекта
 */

// const add = function (a, b, c) {
//     console.log(arguments);
//     return a + b + c;
// };

const add = (a, b, c) => {
    console.log(a, b, c);
    return a + b + c;
};

console.log(add(5, 4, 5));
