/*
 * Напиши скрипт поиска логина
 * - Если логина нет, вывести сообщение 'Пользователь [логин] не найден.'
 * - Если нашли логин, вывести сообщение 'Пользователь [логин] найден.'
 *
 * - Сначала через for
 * - Потом через for...of
 * - Логика break
 * - Метод includes() с тернарным оператором
 */

const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];
const loginToFind = 'poly1scute';
// let message = `Пользователь ${loginToFind} не найден.`;

// for (let i = 0; i < logins.length; i += 1) {
//   const login = logins[i];

//   if (login === loginToFind) {
//     message = `Пользователь ${loginToFind} найден.`;
//     break;
//   }
// }

// for (const login of logins) {
//   if (login === loginToFind) {
//     message = `Пользователь ${loginToFind} найден.`;
//     break;
//   }
// }
const message = logins.includes(loginToFind)
  ? `Пользователь ${loginToFind} найден.`
  : `Пользователь ${loginToFind} не найден.`;
console.log(message);
