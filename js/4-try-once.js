'use strict';

// Change code below this line
const calculateTotalPrice = (orderedItems) => {
  let totalPrice = 0;
  orderedItems.forEach((item) => (totalPrice += item));
  return totalPrice;
};

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
  console.log(`${name}, Ласкаво просимо!`);
}

function callMe(name) {
  console.log(`Call me please, ${name}.`);
}

// Функція вищого порядку
function registerGuest(name, callback, callback2) {
  console.log(`Реєструємо гостя ${name}.`);
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
