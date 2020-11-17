/*
 * Работа с коллекцией (массивом объектов)
 */
const friends = [
  { name: 'Mango', online: false },
  { name: 'Kiwi', online: true },
  { name: 'Poly', online: false },
  { name: 'Ajax', online: false },
];

console.table(friends);

/*
 * Ищем друга по имени
 */

const findFriendByName = function (allFriends, friendName) {
  for (const friend of allFriends) {
    if (friend.name === friendName) {
      return 'НАЙШЛИ :)';
    }
  }

  return 'НЕ ЗНАЙШЛИ :(';
};

// console.log(findFriendByName(friends, 'Poly'));
// console.log(findFriendByName(friends, 'Chelsy'));

/*
 * Получаем имена всех друзей
 */

const getAllNames = function (allFriends) {
  const names = [];

  for (const friend of allFriends) {
    names.push(friend.name);
  }

  return names;
};

// console.log(getAllNames(friends));

/*
 * Получаем имена только друзей которые онлайн
 */
const getOnlineFriends = function (allFriends) {
  const onlineFriends = [];

  for (const friend of allFriends) {
    if (friend.online) {
      onlineFriends.push(friend);
    }
  }

  return onlineFriends;
};

// console.log(getOnlineFriends(friends));

const getOfflineFriends = function (allFriends) {
  const offlineFriend = [];

  for (const friend of allFriends) {
    if (!friend.online) {
      offlineFriend.push(friend);
    }
  }

  return offlineFriend;
};

// console.log(getOfflineFriends(friends));

// создать 2 массива онлайн и офлайн?
// если тру - в первый, если нет - во второй

const getFriendsByStatus = function (allFriends) {
  const friendsByStatus = {
    online: [],
    offline: [],
  };

  for (const friend of friends) {
    if (friend.online) {
      friendsByStatus.online.push(friend);
      continue;
    }

    friendsByStatus.offline.push(friend);
  }

  return friendsByStatus;
};

console.log(getFriendsByStatus(friends));
