/*
 * Операция spread (распыление)
 * - Array.prototype.concat() и аналог через spread
 */

// const numbers = [1, 2, 3].concat([4, 5, 6], [7, 8, 9]);

const numbers = [...[1, 2, 3]];

// console.log(numbers);

/*
 * Поиск самой маленькой или большой температуры (числа)
 */
const temps = [18, 14, 12, 21, 17, 29, 24];

// console.log(Math.max(...temps));
// console.log(Math.min(...temps));

/*
 * Сшиваем несколько массивов в один через concat() и spread
 */
const lastWeekTemps = [1, 2, 3];
const currentTemps = [4, 5, 6];
const nextWeekTemps = [7, 8, 9];

const allTemps = [...lastWeekTemps, ...currentTemps, ...nextWeekTemps];
// console.log(allTemps);

/*
 * Распыление объектов
 * - Object.prototype.assign() и spread
 */
const a = { x: 1, y: 2 };
const b = { x: 0, z: 3 };
const c = { x: 0, z: 2 };

const d = {
  ...a,
  y: 10,
  ...b,
  z: 22,
  ...c,
  x: 1,
};

console.log(d);

// {
//     x: 1,
//     y: 10,
//     z: 2,
// }

const defaultSetting = {
  theme: 'light',
  showNotifications: true,
  hideSidebar: false,
};

const userSettings = {
  showNotifications: false,
  hideSidebar: true,
};

const finalSettings = {
  ...defaultSetting,
  ...userSettings,
};

console.log(finalSettings);
