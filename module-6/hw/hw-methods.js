import users from './users.js';

//========= 01 - TASK =========
{
  // Получить массив имен всех пользователей (поле name).

  const getUserNames = users => {
    return users.map(user => user.name);
  };

  // console.log(getUserNames(users));
  // [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]
}

//========= 02 - TASK =========
{
  // Получить массив объектов пользователей по цвету глаз (поле eyeColor).

  const getUsersWithEyeColor = (users, color) => {
    return users.filter(user => user.eyeColor === color);
  };

  // console.log(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]
}

//========= 03 - TASK =========
{
  // Получить массив имен пользователей по полу (поле gender).

  const getUsersWithGender = (users, gender) => {
    return users.filter(user => user.gender === gender);
  };

  // console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]
}

//========= 04 - TASK =========
{
  // Получить массив только неактивных пользователей (поле isActive).

  const getInactiveUsers = users => {
    return users.filter(user => !user.isActive);
  };

  // console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]
}

//========= 05 - TASK =========
{
  // Получить пользоваля (не массив) по email (поле email, он уникальный).

  const getUserWithEmail = (users, email) => {
    return users.find(user => user.email === email);
  };

  // console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
  // console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}
}

//========= 06 - TASK =========
{
  // Получить массив пользователей попадающих в возрастную категорию от min до max лет (поле age).

  const getUsersWithAge = (users, min, max) => {
    return users.filter(user => user.age < min || user.age > max);
  };

  // console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

  // console.log(getUsersWithAge(users, 30, 40));
  // [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]
}

//========= 07 - TASK =========
{
  // Получить общую сумму баланса (поле balance) всех пользователей.

  const calculateTotalBalance = users => {
    return users.reduce((acc, user) => acc + user.balance, 0);
  };

  // console.log(calculateTotalBalance(users)); // 20916
}

//========= 08 - TASK =========
{
  // Массив имен всех пользователей у которых есть друг с указанным именем.

  const getUsersWithFriend = (users, friendName) => {
    return users
      .filter(user => user.friends.some(friend => friend === friendName))
      .map(user => user.name);
  };

  // console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
  // console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]
}

//========= 09 - TASK =========
{
  // Массив имен (поле name) людей, отсортированных в зависимости от количества их друзей (поле friends)

  const getNamesSortedByFriendsCount = users => {
    // return users.reduce((acc, user) => acc + user.friends.length, 0).map(user => user.name);
    return users.sort((a, b) => a.friends.length - b.friends.length);
  };

  // console.log(getNamesSortedByFriendsCount(users));
  // [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]
}

//========= 10 - TASK =========
{
  // Получить массив всех умений всех пользователей (поле skills),
  // при этом не должно быть повторяющихся умений и они должны быть отсортированы в
  // алфавитном порядке.

  const getSortedUniqueSkills = users =>
    users
      .map(user => user.skills)
      .reduce((allSkills, user) => [...allSkills, ...user], [])
      .filter((elem, index, array) => array.indexOf(elem) === index)

      .sort((b, a) => b.localeCompare(a, 'en'));

  // console.log(getSortedUniqueSkills(users));
  // [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non'
}

{
  const users = [
    { name: 'Mango', isActive: true, time: 30 },
    { name: 'Poly', isActive: false, time: 20 },
    { name: 'Ajax', isActive: true, time: 10 },
  ];

  const userName = users.map(user => user.name);
  console.log(userName);
}
