/*
 * Перебор через for...in(не юзати) и Object.keys|values|entries
 */

const feedback = {
  good: 5,
  neutral: 10,
  bad: 3,
};
let totalFeedback = 0;

// const keys = Object.keys(feedback);

// for (const key of keys) {
//   console.log(key);
//   console.log(feedback[key]);
//   totalFeedback += feedback[key];
// }

// console.log('totalFeedback', totalFeedback);

const values = Object.values(feedback);

console.log(values);

for (const value of values) {
  totalFeedback += value;
}

console.log('totalFeedback', totalFeedback);
