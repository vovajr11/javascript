/*
 * Деструктуризация объекта
 * - Значения по умолчанию
 * - Имя переменной отличное от имени свойства
 */

const playlist = {
  name: 'Мой супер плейлист',
  rating: 5,
  tracks: ['трек-1', 'трек-2', 'трек-3'],
  trackCount: 3,
};

// const {
//   name,
//   rating,
//   tracks,
//   trackCount: numberOfCount = 0,
//   author = 'user',
// } = playlist;

// console.log(numberOfCount);

/*
 * Глубокая деструктуризация
 */

// const profile = {
//   name: 'Jacques Gluke',
//   tag: 'jgluke',
//   location: 'Ocho Rios, Jamaica',
//   avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg',
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// const {
//   name,
//   tag,
//   location,
//   avatar,
//   stats: { followers, views, likes },
// } = profile;

// console.log(name, tag, location, avatar, followers, views, likes);

/*
 * Деструктуризация массивов
 */

const rgb = [255, 100, 80];

const [red, green, blue] = rgb;

// console.log(red, green, blue);

const authors = {
  kiwi: 4,
  poly: 7,
  ajax: 9,
  mango: 6,
};

const entries = Object.entries(authors);

// for (const [name, reting] of entries) {
//   //   console.log(entry);
//   //   lvl 2
//   // const [ name, reting ] = entry;

//   //   lvl 1
//   //   const name = entry[0];
//   //   const reting = entry[1];

//   console.log(name, reting);
// }
/*
 * Операция rest (сбор)
 */
// const profile = {
//   name: 'Jacques Gluke',
//   tag: 'jgluke',
//   location: 'Ocho Rios, Jamaica',
//   avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg',
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// const { name, tag, location, ...restProp } = profile;

// console.log(name, tag, location);
// console.log(restProp);

/*
 * Паттерн «Обьект настроек»
 * - деструктуризация параметра-обьекта в подписи функции
 * - rest при деструктуризации в подписи
 */

const showProfileInfo = function (userProfile) {
  const { name, tag, location, ...restProps  } = userProfile;

  //   console.log(name, tag, location, avatar, followers, views, likes);
  console.log(restProps);
};

const profile = {
  name: 'Jacques Gluke',
  tag: 'jgluke',
  location: 'Ocho Rios, Jamaica',
  avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg',
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};

showProfileInfo(profile);

// const fn = function (params) {};

// fn({
//   age: 10,
//   friends: 5,
//   isOnline: true,
//   hobbies: [],
//   rating: 6,
// });
