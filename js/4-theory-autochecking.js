'use strict';

///////////////////////////////////////////////
// JS V2 block-4 Autochecking  ASSIGNMENT 00/48  Status: Done

/*
** THEORY


** TASK


** Test


 */

// Javascript Editor:
// START
/*

*/

// Javascript Editor:
// FINISH
/*

console.log(
*/

// RESULT
/*

*/

///////////////////////////////////////////////
// JS V2 block-4 Autochecking  ASSIGNMENT 1/48  Status: Done

/*
** THEORY
Functions are no different from numbers, strings, or arrays - they are just a special data type (higher-order object), a value that can be stored in a variable or passed as an argument to another function.

function greet(name) {
  return `Welcome ${name}.`;
}

// Call the greet function
// and output the result to the console
console.log(greet("Mango"));
// Welcome Mango.

// Output the greet function
// to the console without calling it
console.log(greet);
/*
ƒ greet() {
     return `Welcome ${name}.`;
}
*/
/*
In the first log we call the greet function with parentheses and the result of its execution is printed to the console. In the second log, a reference to the function is passed, and not the result of its call (there are no parentheses), so the body of the function is printed to the console. This means that a function can be assigned to a variable or passed as an argument to another function.
*/

/*
** TASK
Add the code so that the result variable contains the result of the makePizza function, and the pointer variable contains a link to the makePizza function.

** Test
The function makePizza is declared
The variable result is declared
The value of the variable result is the string "Your pizza is being prepared, please wait."
The value of the variable result is obtained by calling the function
The variable pointer is declared
The value of the variable pointer is a reference to the function makePizza

 */

// Javascript Editor:
// START
/*
function makePizza() {
  return "Your pizza is being prepared, please wait.";
}
// Change code below this line

const result = null;
const pointer = null;
*/

// Javascript Editor:
// FINISH
/*
function makePizza() {
  return 'Your pizza is being prepared, please wait.';
}
// Change code below this line

const result = makePizza();
const pointer = makePizza;

console.log(result);
console.log(pointer);

console.log(
*/

// RESULT
/*
Result

Done
Assignment 1/48
The function `makePizza` is declared
The variable 'result' is declared
The value of the variable `result` is the string `'Your pizza is being prepared, please wait.'`
The value of the variable `result` was obtained by calling the function
The variable 'pointer' is declared
The value of the variable `pointer` is a reference to the function `makePizza``

Result of code execution:
Your pizza is being prepared, please wait.
[Function: makePizza]
*/

///////////////////////////////////////////////
// JS V2 block-4 Autochecking  ASSIGNMENT 2/48  Status: Done

/*
** THEORY
Callback function is a function that is passed to another function as an argument and that, in turn, calls the passed function.

Higher order function is a function that takes other functions as parameters or returns a function as a result.

// Callback function
function greet(name) {
  console.log(`Welcome ${name}.`);
}

// Higher order function
function registerGuest(name, callback) {
  console.log(`Registering the guest ${name}.`);
  callback(name);
}

registerGuest("Mango", greet);
We passed a reference to the greet function as an argument, so it will be assigned to the callback parameter and called inside the registerGuest function through parentheses. The name of the parameter for the callback can be arbitrary, the main thing to remember is that the value will be a function.

** TASK
Add the makeMessage function so that it expects a callback function as the second parameter (the callback parameter) and returns its call. The deliverPizza or makePizza function will be passed as a callback and will expect the name of the finished delivery pizza as an argument.

** Test
The function deliverPizza is declared
The function makePizza is declared
The function makeMessage is declared
The makeMessage function takes two parameters named according to the task pizzaName and callback
The call makeMessage("Royal Grand", makePizza) returns the string "Pizza Royal Grand is being prepared, please wait..."
The call makeMessage("Ultracheese", deliverPizza) returns the string "Delivering Ultracheese pizza."

 */

// Javascript Editor:
// START
/*
function deliverPizza(pizzaName) {
  return `Delivering ${pizzaName} pizza.`;
}

function makePizza(pizzaName) {
  return `Pizza ${pizzaName} is being prepared, please wait...`;
}

// Chande code below this line
function makeMessage(pizzaName) {
  return;
}
*/

// Javascript Editor:
// FINISH
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

console.log(
*/

// RESULT
/*
Result

Done

Assignment 2/48
The function `deliverPizza` is declared
The function `makePizza` is declared
The function `makeMessage` is declared
The `makeMessage` function takes two parameters named according to the task `pizzaName` and `callback`
The call `makeMessage('Royal Grand', makePizza)` returns the string 'Pizza Royal Grand is being prepared, please wait...'
The call `makeMessage('Ultracheese', deliverPizza)` returns the string 'Delivering Ultracheese pizza.'
Result of code execution:
Pizza Royal Grand is being prepared, please wait...
Delivering Ultracheese pizza.
*/

///////////////////////////////////////////////
// JS V2 block-4 Autochecking  ASSIGNMENT 3/48  Status: Done

/*
** THEORY
If the callback function is small and is only needed to be passed as an argument, it can be declared directly when calling the function to which we are passing the callback. Such a function will be available only as a parameter value and nowhere else in the code.

function registerGuest(name, callback) {
  console.log(`Registering the guest ${name}.`);
  callback(name);
}

// Pass the inline greet function as a callback
registerGuest("Mango", function greet(name) {
  console.log(`Welcome ${name}.`);
});

// Pass the inline notify function as a callback
registerGuest("Poly", function notify(name) {
  console.log(`Dear ${name}, your room will be ready in 30 minutes`);
});

** TASK
Complete the makePizza(pizzaName, callback) function second call, by passing the inline eatPizza (pizzaName) callback function as the second argument, which logs the string "Eating pizza <pizza name>".

** Test
The function makePizza is declared
The makePizza function takes two parameters
When calling the makePizza("Ultracheese") the eatPizza function with only the parameter pizzaName was passed as the second argument

 */

// Javascript Editor:
// START
/*
function makePizza(pizzaName, callback) {
  console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
  callback(pizzaName);
}

makePizza("Royal Grand", function deliverPizza(pizzaName) {
  console.log(`Delivering pizza ${pizzaName}.`);
});
// Change code below this line

makePizza("Ultracheese");
*/

// Javascript Editor:
// FINISH
/*
function makePizza(pizzaName, callback) {
  console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
  callback(pizzaName);
}

makePizza("Royal Grand", function deliverPizza(pizzaName) {
  console.log(`Delivering pizza ${pizzaName}.`);
});
// Change code below this line

makePizza("Ultracheese", function eatPizza(pizzaName) {
  console.log(`Eating pizza ${pizzaName}.`);
});

console.log(
*/

// RESULT
/*
Result

Done

Assignment 3/48
The function `makePizza` is declared
The `makePizza` function takes two parameters
When calling the `makePizza("Ultracheese")` the `eatPizza` function with the only parameter `pizzaName` was passed as the second argument

Result of code execution:
Pizza Royal Grand is being prepared, please wait...
Delivering pizza Royal Grand.
Pizza Ultracheese is being prepared, please wait...
Eating pizza Ultracheese.
*/

///////////////////////////////////////////////
// JS V2 block-4 Autochecking  ASSIGNMENT 4/48  Status: Done

/*
** THEORY
The function can accept an arbitrary number of callbacks. For example, let's say we are writing the logic of accepting calls for a phone. The program should turn on the answering machine if the subscriber is not available, or connect the call otherwise. We will simulate the availability of the subscriber with a random number generator so that different results can be obtained between different function calls.

function processCall(recipient) {
  // Simulate the availability of a subscriber with a random number
  const isRecipientAvailable = Math.random() > 0.5;

  if (!isRecipientAvailable) {
    console.log(`Subscriber ${recipient} is not available, please leave a message.`);
    // Logic of activating the answering machine
  } else {
    console.log(`Connecting with ${recipient}, please wait...`);
    // Logic of accepting a call
  }
}

processCall("Mango");
The problem with this approach is that the processCall function does too much and binds the subscriber availability check to two predefined actions. What if in the future, instead of an answering machine, you need to leave a hologram?

We could write a function so that it returns some value and then, based on the result of its execution, make checks and execute the necessary code. But checks are not related to external code and will "polute" it.

Let's refactor the function so that it takes two callbacks onAvailable and onNotAvailable, and calls them conditionally.

function processCall(recipient, onAvailable, onNotAvailable) {
  // Simulate the availability of a subscriber with a random number
  const isRecipientAvailable = Math.random() > 0.5;

  if (!isRecipientAvailable) {
    onNotAvailable(recipient);
    return;
  }

  onAvailable(recipient);
}

function takeCall(name) {
  console.log(`Connecting with ${name}, please wait...`);
  // Logic of accepting the call
}

function activateAnsweringMachine(name) {
  console.log(`Subscriber ${name} is not available, please leave a message.`);
  // Logic of activating the answering machine
}

function leaveHoloMessage(name) {
  console.log(`Subscriber ${name} is not available, we are recording a hologram.`);
  // Logic of hologram recording
}

processCall("Mango", takeCall, activateAnsweringMachine);
processCall("Poly", takeCall, leaveHoloMessage);
Callbacks are used to process user actions on the page, when processing requests to the server, performing previously unknown functions, etc. This is their essence - these are functions intended for deferred execution.

** TASK
It is necessary to write the logic for processing a pizza order. Refactor the order method so that it accepts two callbacks onSuccess and onError as the second and third parameters.

If the pizzas property does not contain a pizza with the name from the pizzaName parameter, the order method should return the result of calling the onError callback, passing it the following string as an argument "There is no pizza with a name <pizza name> in the assortment."
If the pizzas property contains a pizza with the name from the pizzaName parameter, the order method must return the result of calling the onSuccess callback, passing it the name of the ordered pizza as an argument.
After declaring the pizzaPalace object, we added callbacks and method calls. Please don't change anything there.

** Test
The order method declares three parameters
The call pizzaPalace.order("Smoked", makePizza, onOrderError) returns "Your order is accepted. Cooking pizza Smoked."
The call pizzaPalace.order("Four meats", makePizza, onOrderError) returns "Your order is accepted. Cooking pizza Four meats."
The call pizzaPalace.order("Big Mike", makePizza, onOrderError) returns "Error! There is no pizza with a name Big Mike in the assortment."
The call pizzaPalace.order("Vienna", makePizza, onOrderError) returns "Error! There is no pizza with a name Vienna in the assortment."

 */

// Javascript Editor:
// START
/*
const pizzaPalace = {
  pizzas: ["Ultracheese", "Smoked", "Four meats"],
  order(pizzaName) {},
};
// Change code above this line

// Callback for onSuccess
function makePizza(pizzaName) {
  return `Your order is accepted. Cooking pizza ${pizzaName}.`;
}

// Callback for onError
function onOrderError(error) {
  return `Error! ${error}`;
}

// Method calls with callbacks
pizzaPalace.order("Smoked", makePizza, onOrderError);
pizzaPalace.order("Four meats", makePizza, onOrderError);
pizzaPalace.order("Big Mike", makePizza, onOrderError);
pizzaPalace.order("Vienna", makePizza, onOrderError);

*/

// Javascript Editor:
// FINISH
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


console.log(
*/

// RESULT
/*
Result

Done

Assignment 4/48
The `order` method declares three parameters
The call `pizzaPalace.order('Smoked', makePizza, onOrderError)` returns `Your order is accepted. Cooking pizza Smoked.'
The call `pizzaPalace.order('Four meats', makePizza, onOrderError)` returns 'Your order is accepted. Cooking pizza Four meats.'
The call `pizzaPalace.order('Big Mike', makePizza, onOrderError)` returns 'Error! There is no pizza with a name Big Mike in the assortment.'
The call `pizzaPalace.order('Vienna', makePizza, onOrderError)` returns 'Error! There is no pizza with a name Vienna in the assortment.'
Result of code execution:
Your order is accepted. Cooking pizza Smoked.
Your order is accepted. Cooking pizza Four meats.
Error! There is no pizza with a name Big Mike in the assortment.
Error! There is no pizza with a name Vienna in the assortment.
*/

///////////////////////////////////////////////
// JS V2 block-4 Autochecking  ASSIGNMENT 5/48  Status: Done

/*
** THEORY
An iterating array method that is used as a replacement for the for and for...of loops when working with a collection.

array.forEach(function callback(element, index, array) {
  // Body of the callback function
});
Iterates over the array element by element.
Calls a callback function for each element of the array.
Returns nothing.
The arguments of the callback function are the value of the current element, its index, and the original array itself. You can declare only those parameters that are needed, most often this is an element, the main thing is not to forget about their order.

const numbers = [5, 10, 15, 20, 25];

// Classic for
for (let i = 0; i < numbers.length; i += 1) {
  console.log(`Index ${i}, value ${numbers[i]}`);
}

// Iterating forEach
numbers.forEach(function (number, index) {
  console.log(`Index ${index}, value ${number}`);
});
The only time when you should use for or for...of loops to iterate over an array is when the loop is interrupted. You cannot interrupt the execution of the forEach method, it always iterates over the array to the end.

** TASK
The calculateTotalPrice(orderedItems) function takes one orderedItems parameter - an array of numbers, and calculates the total price of its elements, which is stored in the totalPrice variable and it is returned as a result of the function.

Refactor the function so that it uses the forEach method instead of a for loop.

** Test
The function calculateTotalPrice(orderedItems) is declared
To iterate over the orderedItems array, the forEach method is used
The function calculateTotalPrice([12, 85, 37, 4]) call returns 138
The function calculateTotalPrice([164, 48, 291]) call returns 503
The function calculateTotalPrice([412, 371, 94, 63, 176]) call returns 1116
Calling a function with random but valid arguments, returns the correct value

 */

// Javascript Editor:
// START
/*
function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;
  // Change code below this line

  for (let i = 0; i < orderedItems.length; i += 1) {
    totalPrice += orderedItems[i];
  }

  // Change code above this line
  return totalPrice;
}

*/

// Javascript Editor:
// FINISH
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

console.log(
*/

// RESULT
/*
Result

Done

Assignment 5/48
The function `calculateTotalPrice(orderedItems)` is declared
The `forEach` method was used to iterate over the `orderedItems` array
The function `calculateTotalPrice([12, 85, 37, 4])` call returns `138`
The function `calculateTotalPrice([164, 48, 291])` call return `503`
The function `calculateTotalPrice([412, 371, 94, 63, 176])` call return `1116`
Calling a function with random but valid arguments returns the right value.The result of calling the calculateTotalPrice( function[5,6,9,20,15,10,6,16,5,23,11,7,10,19,18,6]) is going to be a number 186
Result of code execution:
138
503
1116
*/

///////////////////////////////////////////////
// JS V2 block-4 Autochecking  ASSIGNMENT 6/48  Status: Done

/*
** THEORY
TASK. FILTERING AN ARRAY OF NUMBERS

** TASK
The filterArray(numbers, value) function takes an array of numbers and returns a new array containing only those elements of the original array that are greater than the value of the value parameter.

Refactor the function so that it uses the forEach method instead of a for loop.

** Test
The function filterArray(numbers, value) is declared
To iterate over the array numbers, the forEach method is used
The function filterArray([1, 2, 3, 4, 5], 3) call returns [4, 5]
The function filterArray([1, 2, 3, 4, 5], 4) call returns [5]
The function filterArray([1, 2, 3, 4, 5], 5) call returns []
The function filterArray([12, 24, 8, 41, 76], 38) call returns [41, 76]
The function filterArray([12, 24, 8, 41, 76], 20) call returns [24, 41, 76]
Calling a function with random but valid arguments, returns the right value

 */

// Javascript Editor:
// START
/*
function filterArray(numbers, value) {
  const filteredNumbers = [];
  // Change code below this line

  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] > value) {
      filteredNumbers.push(numbers[i]);
    }
  }

  // Change code above this line
  return filteredNumbers;
}

*/

// Javascript Editor:
// FINISH
/*
'use strict';

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


console.log(
*/

// RESULT
/*
Result

Done

Assignment 6/48
The function `filterArray(numbers, value)` is declared
The `forEach` method was used to iterate over the array `numbers`
filterArray([1, 2, 3, 4, 5], 3)` returns `[4, 5]
The function `filterArray([1, 2, 3, 4, 5], 4)` call returns `[5]`
The function `filterArray([1, 2, 3, 4, 5], 5)` call returns `[]`
The function `filterArray([12, 24, 8, 41, 76], 38)` call returns `[41, 76]`
The function `filterArray([12, 24, 8, 41, 76], 20)` call returns `[24, 41, 76]`

Result of code execution:
[ 4, 5 ]
[ 5 ]
[]
[ 41, 76 ]
[ 24, 41, 76 ]
*/

///////////////////////////////////////////////
// JS V2 block-4 Autochecking  ASSIGNMENT 7/48  Status: Done

/*
** THEORY
TASK. COMMON ELEMENTS

** TASK
The getCommonElements(firstArray, secondArray) function takes two arrays of arbitrary length in the parameters firstArray and secondArray, and returns a new array of their common elements, that is, those that are in both arrays.

Refactor the function so that it uses the forEach method instead of a for loop.

** Test
The function getCommonElements(firstArray, secondArray) is declared
To iterate over the parameter (array), the forEach method is used
The call getCommonElements([1, 2, 3], [2, 4]) returns [2]
The call getCommonElements([1, 2, 3], [2, 1, 17, 19]) returns [1, 2]
The call getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]) returns [12, 27, 3]
The call getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]) returns [10, 30, 40]
The call getCommonElements([1, 2, 3], [10, 20, 30]) returns []
Calling a function with random but valid arguments, returns the right value

 */

// Javascript Editor:
// START
/*
function getCommonElements(firstArray, secondArray) {
  const commonElements = [];
  // Change code below this line

  for (let i = 0; i < firstArray.length; i += 1) {
    if (secondArray.includes(firstArray[i])) {
      commonElements.push(firstArray[i]);
    }
  }

  return commonElements;
  // Change code above this line
}

*/

// Javascript Editor:
// FINISH
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

console.log(
*/

// RESULT
/*
Result

Done

Assignment 7/48
The function `getCommonElements(firstArray, secondArray)` is declared
The `forEach` method was used to iterate over the array `firstArray`
getCommonElements([1, 2, 3], [2, 4])` returns `[2]
The function `getCommonElements([1, 2, 3], [2, 1, 17, 19])` call returns `[1, 2]`
The function `getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27])` call returns `[12, 27, 3]`
The function `getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40])` call returns `[10, 30, 40]`
The function `getCommonElements([1, 2, 3], [10, 20, 30])` call returns `[]`
Calling a function with random but valid arguments returns the correct value.

Result of code execution:
[ 2 ]
[ 1, 2 ]
[ 12, 27, 3 ]
[ 10, 30, 40 ]
[]
*/

///////////////////////////////////////////////
// JS V2 block-4 Autochecking  ASSIGNMENT 8/48  Status: Done

/*
** THEORY
Arrow functions have a shorter, more concise syntax, which reduces the amount of code, especially when the function is small or used as a callback.

All arrows are created as a functional expression, and if the function is not anonymous then it must be assigned to a variable.

// Normal function declaration
function classicAdd(a, b, c) {
  return a + b + c;
}

// Same as arrow function
const arrowAdd = (a, b, c) => {
  return a + b + c;
};
The function keyword is not used, instead the parameter declaration is immediately followed, followed by the => symbol and the function body.

If there are several parameters, they are listed and separated by commas in parentheses, between the equals = and the arrow =>.

const add = (a, b, c) => {
  return a + b + c;
};
If there is only one parameter, its declaration can be without parentheses.

const add = a => {
  return a + 5;
};
If there are no parameters, then there must be empty parentheses.

const greet = () => {
  console.log("Hello!");
};

** TASK
Refactor the calculateTotalPrice() function so that it is declared as an arrow.

** Test
The variable calculateTotalPrice is declared
An arrow function with parameters (quantity, pricePerItem) is assigned to the variable calculateTotalPrice
The call calculateTotalPrice(5, 100) returns 500
The call calculateTotalPrice(8, 60) returns 480
The call calculateTotalPrice(3, 400) returns 1200
Calling a function with random but valid arguments, returns the right value

 */

// Javascript Editor:
// START
/*
// Change code below this line

function calculateTotalPrice(quantity, pricePerItem) {
  // Change code above this line
  return quantity * pricePerItem;
}

*/

// Javascript Editor:
// FINISH
/*
// Change code below this line

const calculateTotalPrice = (quantity, pricePerItem) => {
  // Change code above this line
  return quantity * pricePerItem;
}

calculateTotalPrice(5, 100); // returns 500
calculateTotalPrice(8, 60); // returns 480
calculateTotalPrice(3, 400); // returns 1200

console.log(calculateTotalPrice(5, 100)); // returns 500
console.log(calculateTotalPrice(8, 60)); // returns 480
console.log(calculateTotalPrice(3, 400)); // returns 1200

console.log(
*/

// RESULT
/*
Result

Done

Assignment 8/48
The variable `calculateTotalPrice` is declared
An arrow function with parameters `(quantity, pricePerItem)` is assigned to the variable `calculateTotalPrice`
The call `calculateTotalPrice(5, 100)` returns `500`
The call `calculateTotalPrice(8, 60)` returns `480`
The call `calculateTotalPrice(3, 400)` returns `1200`
Calling a function with random but valid arguments returns the right value.

Result of code execution:
500
480
1200
*/

///////////////////////////////////////////////
// JS V2 block-4 Autochecking  ASSIGNMENT 9/48  Status: Done

/*
** THEORY
In an arrow function, the function body comes after the => symbol. There are two options here: with and without curly braces.

const add = (a, b, c) => {
  console.log(a, b, c);
  return a + b + c;
};
If there are curly braces, and the function must return some value, you must explicitly put return. This is called an explicit return. This syntax is used if there are other instructions to be executed in the function body besides returning a value.

const add = (a, b, c) => a + b + c;
If there are no curly braces, then the result of the expression after the => is returned. This is called implicit return. The example will return the result of the expression for adding the parameters a, b and c.

The implicit return syntax greatly reduces the "noise" of declaring a function with a body and a return expression, but it is only suitable if you do not need to execute any additional instructions in the function body other than returning a value.

// Before
function classicAdd(a, b, c) {
  return a + b + c;
}

// After
const arrowAdd = (a, b, c) => a + b + c;

** TASK
Refactor the calculateTotalPrice() function so that it uses implicit return.

** Test
The variable calculateTotalPrice is declared
An arrow function with parameters (quantity, pricePerItem) is assigned to the variable calculateTotalPrice
The function uses an implicit return
The call calculateTotalPrice(5, 100) returns 500
The call calculateTotalPrice(8, 60) returns 480
The call calculateTotalPrice(3, 400) returns 1200
Calling a function with random but valid arguments, returns the right value

 */

// Javascript Editor:
// START
/*
// Change code below this line
const calculateTotalPrice = (quantity, pricePerItem) => {
  return quantity * pricePerItem;
};
// Change code above this line
// Change code below this line
const calculateTotalPrice = (quantity, pricePerItem) => return quantity * pricePerItem;
// Change code above this line
*/

// Javascript Editor:
// FINISH
/*
// Change code below this line
const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;
// Change code above this line

calculateTotalPrice(5, 100); // returns 500
calculateTotalPrice(8, 60); // returns 480
calculateTotalPrice(3, 400); // returns 1200

console.log(calculateTotalPrice(5, 100)); // returns 500
console.log(calculateTotalPrice(8, 60)); // returns 480
console.log(calculateTotalPrice(3, 400)); // returns 1200

console.log(
*/

// RESULT
/*
Result

Done

Assignment 9/48
The variable `calculateTotalPrice` is declared
An arrow function with parameters `(quantity, pricePerItem)` is assigned to the variable `calculateTotalPrice`
Implicit return is used in the `calculateTotalPrice` function
The call `calculateTotalPrice(5, 100)` returns `500`
The call `calculateTotalPrice(8, 60)` returns `480`
The call `calculateTotalPrice(3, 400)` returns `1200`
Calling a function with random but valid arguments returns the right value.

Result of code execution:
500
480
1200
*/

///////////////////////////////////////////////
// JS V2 block-4 Autochecking  ASSIGNMENT 10/48  Status: Done

/*
** THEORY
Anonymous arrow functions are great as callbacks for iterating array methods because of the shorter declaration syntax, especially if you don't need a function body.

const numbers = [5, 10, 15, 20, 25];

// Function declaration
numbers.forEach(function (number, index) {
  console.log(`Index ${index}, value ${number}`);
});

// Anonymous arrow function
numbers.forEach((number, index) => {
  console.log(`Index ${index}, value ${number}`);
});
You can also declare an arrow callback function separately and pass a reference to it. It is worth doing this if one function is used in several places in the program or if it is cumbersome.

const numbers = [5, 10, 15, 20, 25];

const logMessage = (number, index) => {
  console.log(`Index ${index}, value ${number}`);
};

numbers.forEach(logMessage);

** TASK
Refactor the calculateTotalPrice(orderedItems) function by replacing its declaration with an arrow function. Replace the callback function passed to the forEach() method with an arrow function.

** Test
The variable calculateTotalPrice is declared
An arrow function with a parameter (orderedItems) is assigned to the variable calculateTotalPrice
To iterate over the orderedItems array, the forEach method is used
The callback for the forEach method is an arrow function
The function calculateTotalPrice([12, 85, 37, 4]) call returns 138
The function calculateTotalPrice([164, 48, 291]) call returns 503
The function calculateTotalPrice([412, 371, 94, 63, 176]) call returns 1116
Calling a function with random but valid arguments, returns the right value

 */

// Javascript Editor:
// START
/*
// Change code below this line
function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;

orderedItems.forEach(function (item) {
    totalPrice += item;
  }); 

  return totalPrice;
}
// Change code above this line

*/

// Javascript Editor:
// FINISH
/*
// Change code below this line
const calculateTotalPrice = (orderedItems) => {
  let totalPrice = 0;
  orderedItems.forEach((item) => totalPrice += item);
  return totalPrice;
};

// Change code above this line

calculateTotalPrice([12, 85, 37, 4]); // call returns 138
calculateTotalPrice([164, 48, 291]); // call returns 503
calculateTotalPrice([412, 371, 94, 63, 176]); // call returns 1116

console.log(calculateTotalPrice([12, 85, 37, 4])); // call returns 138
console.log(calculateTotalPrice([164, 48, 291])); // call returns 503
console.log(calculateTotalPrice([412, 371, 94, 63, 176])); // call returns 1116

console.log(
*/

// RESULT
/*
Result

Done

Assignment 10/48
The variable `calculateTotalPrice` is declared
An arrow function with a parameter `(orderedItems)` is assigned to the variable `calculateTotalPrice`
The `forEach` method was used to iterate over the `orderedItems` array
The callback for the `forEach` method is an arrow function
The function `calculateTotalPrice([12, 85, 37, 4])` call returns `138`
The function `calculateTotalPrice([164, 48, 291])` call returns `503`
The function `calculateTotalPrice([412, 371, 94, 63, 176])` call returns `1116`
Calling a function with random but valid arguments returns the right value.

Result of code execution:
138
503
1116
*/

///////////////////////////////////////////////
// JS V2 block-4 Autochecking  ASSIGNMENT 11/48  Status: Done

/*
** THEORY


** TASK


** Test


 */

// Javascript Editor:
// START
/*

*/

// Javascript Editor:
// FINISH
/*

console.log(
*/

// RESULT
/*

*/
