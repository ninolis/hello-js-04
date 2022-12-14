'use strict';

const users = [
  {
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    gender: 'male',
  },
  {
    name: 'Sharlene Bush',
    email: 'sharlenebush@tubesys.com',
    eyeColor: 'blue',
    friends: ['Briana Decker', 'Sharron Pace'],
    isActive: true,
    balance: 3821,
    gender: 'female',
  },
  {
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    gender: 'male',
  },
  {
    name: 'Elma Head',
    email: 'elmahead@omatom.com',
    eyeColor: 'green',
    friends: ['Goldie Gentry', 'Aisha Tran'],
    isActive: true,
    balance: 2278,
    gender: 'female',
  },
  {
    name: 'Carey Barr',
    email: 'careybarr@nurali.com',
    eyeColor: 'blue',
    friends: ['Jordan Sampson', 'Eddie Strong', 'Adrian Cross'],
    isActive: true,
    balance: 3951,
    gender: 'male',
  },
  {
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: [
      'Jacklyn Lucas',
      'Linda Chapman',
      'Adrian Cross',
      'Solomon Fokes',
    ],
    isActive: false,
    balance: 1498,
    gender: 'male',
  },
  {
    name: 'Sheree Anthony',
    email: 'shereeanthony@kog.com',
    eyeColor: 'brown',
    friends: ['Goldie Gentry', 'Briana Decker'],
    isActive: true,
    balance: 2764,
    gender: 'female',
  },
];

const getUserByGender = (users, gender) =>
  users.filter((user) => user.gender === gender);

console.log(getUserByGender(users, 'male'));
console.log(getUserByGender(users, 'female'));

const getTotalBalanceByGender = (users, gender) =>
  users
    .filter((user) => user.gender === gender)
    .reduce((totalBalance, user) => {
      return totalBalance + user.balance;
    }, 0);

console.log(`Male: ${getTotalBalanceByGender(users, 'male')}.`);
console.log(`Female: ${getTotalBalanceByGender(users, 'female')}.`);
console.log(getTotalBalanceByGender(users, 'male'));
console.log(getTotalBalanceByGender(users, 'female'));

/*
const users = [
  {
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    gender: 'male',
  },
  {
    name: 'Sharlene Bush',
    email: 'sharlenebush@tubesys.com',
    eyeColor: 'blue',
    friends: ['Briana Decker', 'Sharron Pace'],
    isActive: true,
    balance: 3821,
    gender: 'female',
  },
  {
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    gender: 'male',
  },
  {
    name: 'Elma Head',
    email: 'elmahead@omatom.com',
    eyeColor: 'green',
    friends: ['Goldie Gentry', 'Aisha Tran'],
    isActive: true,
    balance: 2278,
    gender: 'female',
  },
  {
    name: 'Carey Barr',
    email: 'careybarr@nurali.com',
    eyeColor: 'blue',
    friends: ['Jordan Sampson', 'Eddie Strong', 'Adrian Cross'],
    isActive: true,
    balance: 3951,
    gender: 'male',
  },
  {
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: [
      'Jacklyn Lucas',
      'Linda Chapman',
      'Adrian Cross',
      'Solomon Fokes',
    ],
    isActive: false,
    balance: 1498,
    gender: 'male',
  },
  {
    name: 'Sheree Anthony',
    email: 'shereeanthony@kog.com',
    eyeColor: 'brown',
    friends: ['Goldie Gentry', 'Briana Decker'],
    isActive: true,
    balance: 2764,
    gender: 'female',
  },
];

const getSortedFriends = (users) =>
  users
    .flatMap((user) => user.friends)
    .filter((user, index, array) => array.indexOf(user) === index)
    .sort((userA, userB) => userA.localeCompare(userB));

console.log(getSortedFriends(users));
*/

/*
const users = [
  {
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    gender: 'male',
  },
  {
    name: 'Sharlene Bush',
    email: 'sharlenebush@tubesys.com',
    eyeColor: 'blue',
    friends: ['Briana Decker', 'Sharron Pace'],
    isActive: true,
    balance: 3821,
    gender: 'female',
  },
  {
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    gender: 'male',
  },
  {
    name: 'Elma Head',
    email: 'elmahead@omatom.com',
    eyeColor: 'green',
    friends: ['Goldie Gentry', 'Aisha Tran'],
    isActive: true,
    balance: 2278,
    gender: 'female',
  },
  {
    name: 'Carey Barr',
    email: 'careybarr@nurali.com',
    eyeColor: 'blue',
    friends: ['Jordan Sampson', 'Eddie Strong', 'Adrian Cross'],
    isActive: true,
    balance: 3951,
    gender: 'male',
  },
  {
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: [
      'Jacklyn Lucas',
      'Linda Chapman',
      'Adrian Cross',
      'Solomon Fokes',
    ],
    isActive: false,
    balance: 1498,
    gender: 'male',
  },
  {
    name: 'Sheree Anthony',
    email: 'shereeanthony@kog.com',
    eyeColor: 'brown',
    friends: ['Goldie Gentry', 'Briana Decker'],
    isActive: true,
    balance: 2764,
    gender: 'female',
  },
];

const getNamesSortedByFriendCount = (users) =>
  [...users]
    .sort((userA, userB) => userA.friends.length - userB.friends.length)
    .map((user) => user.name);

console.log(getNamesSortedByFriendCount(users));
*/

/*
const books = [
  {
    title: 'The Last Kingdom',
    author: 'Bernard Cornwell',
    rating: 8.38,
  },
  {
    title: 'Beside Still Waters',
    author: 'Robert Sheckley',
    rating: 8.51,
  },
  {
    title: 'The Dream of a Ridiculous Man',
    author: 'Fyodor Dostoevsky',
    rating: 7.75,
  },
  { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
  {
    title: 'The Dreams in the Witch House',
    author: 'Howard Lovecraft',
    rating: 8.67,
  },
];
const MIN_BOOK_RATING = 8;
// Change code below this line

const names = books
  .filter((book) => book.rating > MIN_BOOK_RATING)
  .sort((bookA, bookB) => bookA.author.localeCompare(bookB.author))
  .map((book) => book.author);

console.log(names);
*/

/*
// Change code below this line
const getTotalFriendCount = (users) =>
  users.reduce((totalFriends, user) => {
    return totalFriends + user.friends.length;
  }, 0);
// Change code above this line
*/
/*
const firstArray = [26, 94, 36, 18];
const secondArray = [17, 61, 23];
const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// Change below this line

const anyElementInFirstIsEven = firstArray.some((value) => value % 2 === 0);
const anyElementInFirstIsOdd = firstArray.some((value) => value % 2 !== 0);

const anyElementInSecondIsEven = secondArray.some((value) => value % 2 === 0);
const anyElementInSecondIsOdd = secondArray.some((value) => value % 2 !== 0);

const anyElementInThirdIsEven = thirdArray.some((value) => value % 2 === 0);
const anyElementInThirdIsOdd = thirdArray.some((value) => value % 2 !== 0);

console.log(anyElementInFirstIsEven);
console.log(anyElementInFirstIsOdd);

console.log(anyElementInSecondIsEven);
console.log(anyElementInSecondIsOdd);

console.log(anyElementInThirdIsEven);
console.log(anyElementInThirdIsOdd);
*/

/*
const books = [
  {
    title: 'The Last Kingdom',
    author: 'Bernard Cornwell',
    rating: 8.38,
  },
  {
    title: 'Beside Still Waters',
    author: 'Robert Sheckley',
    rating: 8.51,
  },
  {
    title: 'The Dream of a Ridiculous Man',
    author: 'Fyodor Dostoevsky',
    rating: 7.75,
  },
  { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
];
const BOOK_TITLE = 'The Dream of a Ridiculous Man';
const AUTHOR = 'Robert Sheckley';

const bookWithTitle = (books) =>
  books.find((book) => book.title === BOOK_TITLE); //
const bookByAuthor = (books) => books.find((book) => book.author === AUTHOR); //

console.log(bookWithTitle(books));
console.log(bookByAuthor(books));
*/

/*
const users = [
  {
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    skills: ['ipsum', 'lorem'],
    gender: 'male',
    age: 37,
  },
  {
    name: 'Sharlene Bush',
    email: 'sharlenebush@tubesys.com',
    eyeColor: 'blue',
    friends: ['Briana Decker', 'Sharron Pace'],
    isActive: true,
    balance: 3821,
    skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
    gender: 'female',
    age: 34,
  },
  {
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
    gender: 'male',
    age: 24,
  },
  {
    name: 'Elma Head',
    email: 'elmahead@omatom.com',
    eyeColor: 'green',
    friends: ['Goldie Gentry', 'Aisha Tran'],
    isActive: true,
    balance: 2278,
    skills: ['adipisicing', 'irure', 'velit'],
    gender: 'female',
    age: 21,
  },
  {
    name: 'Carey Barr',
    email: 'careybarr@nurali.com',
    eyeColor: 'blue',
    friends: ['Jordan Sampson', 'Eddie Strong'],
    isActive: true,
    balance: 3951,
    skills: ['ex', 'culpa', 'nostrud'],
    gender: 'male',
    age: 27,
  },
  {
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman'],
    isActive: false,
    balance: 1498,
    skills: ['non', 'amet', 'ipsum'],
    gender: 'male',
    age: 38,
  },
  {
    name: 'Sheree Anthony',
    email: 'shereeanthony@kog.com',
    eyeColor: 'brown',
    friends: ['Goldie Gentry', 'Briana Decker'],
    isActive: true,
    balance: 2764,
    skills: ['lorem', 'veniam', 'culpa'],
    gender: 'female',
    age: 39,
  },
];

// const getUserNames = (users) => users.map((user) => user.name);
// const getUserEmails = (users) => users.map((user) => user.email);

// console.log(getUserNames(users));
// console.log(getUserEmails(users));

// const getUsersWithEyeColor = (users, color) =>
//   users.filter((user) => user.eyeColor === color);

// console.log(getUsersWithEyeColor(users, 'blue'));
// console.log(getUsersWithEyeColor(users, 'green'));
// console.log(getUsersWithEyeColor(users, 'brown'));

// const getUsersWithAge = (users, minAge, maxAge) =>
//   users.filter((user) => user.age >= minAge && user.age <= maxAge);

// console.log(getUsersWithAge(users, 20, 30));
// console.log(getUsersWithAge(users, 30, 40));
// console.log(getUsersWithAge(users, 80, 100));

// const getUsersWithFriend = (users, friendName) =>
//   users.filter((user) => user.friends.includes(friendName));

// console.log(getUsersWithFriend(users, 'Briana Decker'));
// console.log(getUsersWithFriend(users, 'Goldie Gentry'));
// console.log(getUsersWithFriend(users, 'Adrian Cross'));

// const getAllFriends = users.flatMap((user) => user.friends);
// console.log(getAllFriends);

// const getFriends = getAllFriends.filter(
//   (friend, index, array) => array.indexOf(friend) === index
// );

// const getFriends = (users) =>
//   users
//     .flatMap((user) => user.friends)
//     .filter((friend, index, array) => array.indexOf(friend) === index);

// console.log(getFriends(users));

// const getActiveUsers = (users) =>
//   users.filter((user) => user.isActive === true);

// console.log(getActiveUsers(users));

// const getInactiveUsers = (users) =>
//   users.filter((user) => user.isActive === false);

// console.log(getInactiveUsers(users));

// const getUserWithEmail = (users, email) =>
//   users.find((user) => user.email === email);

// console.log(getUserWithEmail(users, 'shereeanthony@kog.com'));
// console.log(getUserWithEmail(users, 'elmahead@omatom.com'));
// console.log(getUserWithEmail(users, 'blackburndotson@furnigeer.com'));

// const isEveryUserActive = (users) =>
//   users.every((user) => user.isActive === true);

// console.log(isEveryUserActive(users));

*/

/*
const LOW_SCORE = 50;
const HIGH_SCORE = 80;
const students = [
  { name: 'Mango', score: 83 },
  { name: 'Poly', score: 59 },
  { name: 'Ajax', score: 37 },
  { name: 'Kiwi', score: 94 },
  { name: 'Houston', score: 64 },
];

const best = students.filter((student) => student.score >= HIGH_SCORE);
console.log(best); // Array of objects named Mango and Kiwi
*/

/*
function changeEven(numbers, value) {
  // Change code below this line
  const newArray = [];

  numbers.forEach((element) => {
    if (element % 2 === 0) {
      newArray.push(element + value);
    } else {
      newArray.push(element);
    }
  });

  return newArray;
  // Change code above this line
}

changeEven([1, 2, 3, 4, 5], 10); // returns a new array [1, 12, 3, 14, 5]
changeEven([2, 8, 3, 7, 4, 6], 10); // returns a new array [12, 18, 3, 7, 14, 16]
changeEven([17, 24, 68, 31, 42], 100); // returns a new array [17, 124, 168, 31, 142]
changeEven([44, 13, 81, 92, 36, 54], 100); // returns a new array [144, 13, 81, 192, 136, 154]

console.log(changeEven([1, 2, 3, 4, 5], 10)); // returns a new array [1, 12, 3, 14, 5]
console.log(changeEven([2, 8, 3, 7, 4, 6], 10)); // returns a new array [12, 18, 3, 7, 14, 16]
console.log(changeEven([17, 24, 68, 31, 42], 100)); // returns a new array [17, 124, 168, 31, 142]
console.log(changeEven([44, 13, 81, 92, 36, 54], 100)); // returns a new array [144, 13, 81, 192, 136, 154]
*/

/*
// Change code below this line
const calculateTotalPrice = (orderedItems) => {
  let totalPrice = 0;
  orderedItems.forEach((item) => (totalPrice += item));
  return totalPrice;
};
*/

/*
function getCommonElements(firstArray, secondArray) {
  const commonElements = [];
  // Change code below this line

  firstArray.forEach((number) => {
    if (secondArray.includes(number)) {
      commonElements.push(number);
    }
  });

  return commonElements;
  // Change code above this line
}

getCommonElements([1, 2, 3], [2, 4]); // returns [2]
getCommonElements([1, 2, 3], [2, 1, 17, 19]); // returns [1, 2]
getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]); // returns [12, 27, 3]
getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]); // returns [10, 30, 40]
getCommonElements([1, 2, 3], [10, 20, 30]); // returns []

console.log(getCommonElements([1, 2, 3], [2, 4])); // returns [2]
console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19])); // returns [1, 2]
console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27])); // returns [12, 27, 3]
console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40])); // returns [10, 30, 40]
console.log(getCommonElements([1, 2, 3], [10, 20, 30])); // returns []
*/

/*
function filterArray(numbers, value) {
  const filteredNumbers = [];
  // Change code below this line

  numbers.forEach((number) => {
    if (number > value) {
      filteredNumbers.push(number);
    }
  });

  // Change code above this line
  return filteredNumbers;
}

filterArray([1, 2, 3, 4, 5], 3); // call returns [4, 5]
filterArray([1, 2, 3, 4, 5], 4); // call returns [5]
filterArray([1, 2, 3, 4, 5], 5); // call returns []
filterArray([12, 24, 8, 41, 76], 38); // call returns [41, 76]
filterArray([12, 24, 8, 41, 76], 20); // call returns [24, 41, 76]

console.log(filterArray([1, 2, 3, 4, 5], 3)); // call returns [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // call returns [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // call returns []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // call returns [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // call returns [24, 41, 76]
*/

/*
function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;
  // Change code below this line

  orderedItems.forEach(function (number, index) {
    totalPrice += number;
  });

  // Change code above this line
  return totalPrice;
}

calculateTotalPrice([12, 85, 37, 4]); // call returns 138
calculateTotalPrice([164, 48, 291]); // call returns 503
calculateTotalPrice([412, 371, 94, 63, 176]); // call returns 1116

console.log(calculateTotalPrice([12, 85, 37, 4])); // call returns 138
console.log(calculateTotalPrice([164, 48, 291])); // call returns 503
console.log(calculateTotalPrice([412, 371, 94, 63, 176])); // call returns 1116
console.log(calculateTotalPrice([5,6,9,20,15,10,6,16,5,23,11,7,10,19,18,6])); // call returns 186
// * /


/*
const pizzaPalace = {
  pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
  order(pizzaName, onSuccess, onError) {
    if (this.pizzas.includes(pizzaName)) {
      return onSuccess(pizzaName);
    } else {
      // return `Error! There is no pizza with a name ${pizzaName} in the assortment.`;
      return onError(pizzaName);
    }
  },
};
// Change code above this line

// Callback for onSuccess
function makePizza(pizzaName) {
  return `Your order is accepted. Cooking pizza ${pizzaName}.`;
}

// Callback for onError
function onOrderError(error) {
  return `Error! There is no pizza with a name ${error} in the assortment.`;
}

// Method calls with callbacks
pizzaPalace.order('Smoked', makePizza, onOrderError);
pizzaPalace.order('Four meats', makePizza, onOrderError);
pizzaPalace.order('Big Mike', makePizza, onOrderError);
pizzaPalace.order('Vienna', makePizza, onOrderError);

console.log(pizzaPalace.order('Smoked', makePizza, onOrderError));
console.log(pizzaPalace.order('Four meats', makePizza, onOrderError));
console.log(pizzaPalace.order('Big Mike', makePizza, onOrderError));
console.log(pizzaPalace.order('Vienna', makePizza, onOrderError));

// Error! There is no pizza with a name Vienna in the assortment.
*/

/*
function makePizza(pizzaName, callback) {
  console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
  callback(pizzaName);
}

makePizza('Royal Grand', function deliverPizza(pizzaName) {
  console.log(`Delivering pizza ${pizzaName}.`);
});
// Change code below this line

makePizza('Ultracheese', function eatPizza(pizzaName) {
  console.log(`Eating pizza ${pizzaName}.`);
});
*/

/*
function deliverPizza(pizzaName) {
  return `Delivering ${pizzaName} pizza.`;
}

function makePizza(pizzaName) {
  return `Pizza ${pizzaName} is being prepared, please wait...`;
}

// Chande code below this line
function makeMessage(pizzaName, callback) {
  return callback(pizzaName);
}

makeMessage('Royal Grand', makePizza);
console.log(makeMessage('Royal Grand', makePizza));
// returns the string "Pizza Royal Grand is being prepared, please wait..."

makeMessage('Ultracheese', deliverPizza);
console.log(makeMessage('Ultracheese', deliverPizza));
// returns the string "Delivering Ultracheese pizza."
*/

/*
function greet(name) {
  console.log(`${name}, ?????????????? ??????????????!`);
}

function callMe(name) {
  console.log(`Call me please, ${name}.`);
}

// ?????????????? ???????????? ??????????????
function registerGuest(name, callback, callback2) {
  console.log(`???????????????????? ?????????? ${name}.`);
  callback(name);
  callback2(name);
}

registerGuest('Volodymyr', greet, callMe);
*/

/*
function makePizza() {
  return 'Your pizza is being prepared, please wait.';
}
// Change code below this line

const result = makePizza();
const pointer = makePizza;

console.log(result);
console.log(pointer);
*/
