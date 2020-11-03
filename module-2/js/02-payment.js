'use strict';

const cart = [54, 28, 31, 93, 17, 1, 122];

let total = 0;

// for (let i = 0; i < cart.length; i += 1) {
//   const element = cart[i];
//   total += element;
// }

//

for (const value of cart) {
  total += value;
}
console.log('Total: ', total);
