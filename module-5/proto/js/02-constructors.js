/*
 * Основы ООП: класс, экземпляр (объект), интерфейс
 */

/*
 * Функции-конструкторы
 * - Именование
 * - Оператор new
 * - Свойство Function.prototype
 */

const Car = function ({ brand, model, price } = {}) {
  // const { brand, model, price } = config;
  // 2. Функция вызывается в контексте созданного объекта,
  //    то есть в this записывается ссылка на него
  this.brand = brand;
  this.model = model;
  this.price = price;

  // 3. В свойство this.__proto__ записывается ссылка на обьект Car.prototype
  //    тоесть Car.prototype это ПРОТОТИП будущего обьекта (экземпляра)

  // 4. Ссылка на обьект возвращается в место вызова new Car
};

Car.prototype.sayHi = function () {
  console.log('Car.prototype.sayHi -> this', this);
  console.log('Hello ;) ');
};

Car.prototype.changePrice = function (newPrice) {
  this.price = newPrice;
};

// console.log(Car.prototype);

// 1. Если функция вызывается через new, создаётся пустой объект
const myCar1 = new Car({
  brand: 'Audi',
  model: 'Q3',
  price: 35000,
});

// console.log(myCar1);

// myCar1.sayHi();
// myCar1.changePrice(37777);

// console.log(myCar1);

// const myCar2 = new Car({
//   brand: 'BMW',
//   model: 'X6',
//   price: 50000,
// });
// console.log(myCar2);

// myCar2.sayHi();
// const myCar3 = new Car();
// console.log(myCar3);

const User = function ({ email, password } = {}) {
  this.email = email;
  this.password = password;
};

User.prototype.changeEmail = function (newEmail) {
  this.email = newEmail;
};

const mango = new User({ email: 'mango@gmail.com', password: 228 });
console.log(mango);

mango.changeEmail('newMango@gmail.com');
console.log(mango);

// 1. У каждого обьекта есть свойство __proto__
// 2. В этом свойстве лежит ссылка на его ПРОТОТИП, то есть другой обьект
// 3. При создании литера обьекта, в свойство __proto__ записывается ссылка на Функция.prototype
// 4. Функция-конструктор это просто функция :)
// 5. Всю магию делает оператор new
// 6. Если функция вызывается через new, создаётся пустой объект
// 7. Функция вызывается в контексте созданного объекта
// 8. В свойство this.__proto__ записывается ссылка на обьект Функция.prototype
// 9. Ссылка на обьект возвращается в место вызова new Фунукция()
