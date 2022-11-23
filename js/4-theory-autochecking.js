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
TASK. FILTERING AN ARRAY OF NUMBERS 2.0

** TASK
Replace the filterArray() function declaration and the forEach() callback with arrow functions.

** Test
The variable filterArray is declared
An arrow function with parameters (numbers, value) is assigned to the variable filterArray
The forEach method was used to iterate over the array numbers
The callback for the forEach method is an arrow function
The function filterArray([1, 2, 3, 4, 5], 3) call returns [4, 5]
The function filterArray([1, 2, 3, 4, 5], 4) call returns [5]
The function filterArray([1, 2, 3, 4, 5], 5) call returns []
The function filterArray([12, 24, 8, 41, 76], 38) call returns [41, 76]
The function filterArray([12, 24, 8, 41, 76], 20) call returns [24, 41, 76]
Calling a function with random but valid arguments returns the right value

 */

// Javascript Editor:
// START
/*
// Change code below this line
function filterArray(numbers, value) {
  const filteredNumbers = [];

  numbers.forEach(function (number) {
    if (number > value) {
      filteredNumbers.push(number);
    }
  });

  // Change code above this line
  return filteredNumbers;
}
*/

// Javascript Editor:
// FINISH
/*
'use strict';

const filterArray = (numbers, value) => {
  const filteredNumbers = [];
  numbers.forEach((number) => {
    if (number > value) {
      filteredNumbers.push(number);
    }
  });

  return filteredNumbers;
}

filterArray([1, 2, 3, 4, 5], 3); // call returns [4, 5]
filterArray([1, 2, 3, 4, 5], 4); // call returns [5]
filterArray([1, 2, 3, 4, 5], 5); // call returns []
filterArray([12, 24, 8, 41, 76], 38); // call returns [41, 76]
filterArray([12, 24, 8, 41, 76], 20); // call returns [24, 41, 76]
filterArray([14,21,16,20,18,18,17,8,8,24,22,15,18,17,17,6,7,7,21,9,24,21], 15)

console.log(filterArray([1, 2, 3, 4, 5], 3)); // call returns [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // call returns [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // call returns []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // call returns [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // call returns [24, 41, 76]
console.log(filterArray([14,21,16,20,18,18,17,8,8,24,22,15,18,17,17,6,7,7,21,9,24,21], 15));
// call returns [21,16,20,18,18,17,24,22,18,17,17,21,24,21]

console.log(
*/

// RESULT
/*
Result

Done

Assignment 11/48
The variable `filterArray` is declared
An arrow function with parameters `(numbers, value)` is assigned to the variable `filterArray`
The `forEach` method was used to iterate over the array `numbers`
The callback for the `forEach` method is an arrow function
The function `filterArray([1, 2, 3, 4, 5], 3)` call returns `[4, 5]`
The function `filterArray([1, 2, 3, 4, 5], 4)` call returns `[5]`
The function `filterArray([1, 2, 3, 4, 5], 5)` call returns `[]`
The function `filterArray([12, 24, 8, 41, 76], 38)` call returns `[41, 76]`
The function `filterArray([12, 24, 8, 41, 76], 20)` call returns `[24, 41, 76]`
Calling a function with random but valid arguments returns the right value.
The result of a function call filterArray([14,21,16,20,18,18,17,8,8,24,22,15,18,17,17,6,7,7,21,9,24,21], 15) is going to be [21,16,20,18,18,17,24,22,18,17,17,21,24,21]

Result of code execution:
[ 4, 5 ]
[ 5 ]
[]
[ 41, 76 ]
[ 24, 41, 76 ]
*/

///////////////////////////////////////////////
// JS V2 block-4 Autochecking  ASSIGNMENT 12/48  Status: Done

/*
** THEORY
TASK. COMMON ELEMENTS 2.0

** TASK
Replace the getCommonElements() function declaration and the forEach() callback with arrow functions.

** Test
The variable getCommonElements is declared.
An arrow function with parameters (firstArray, secondArray) is assigned to the variable getCommonElements
The forEach method was used to iterate over the array firstArray
The callback for the forEach method is an arrow function
The call getCommonElements([1, 2, 3], [2, 4]) returns [2]
The call getCommonElements([1, 2, 3], [2, 1, 17, 19]) returns [1, 2]
The call getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]) returns [12, 27, 3]
The call getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]) returns [10, 30, 40]
The call getCommonElements([1, 2, 3], [10, 20, 30]) returns []
Calling a function with random but valid arguments returns the right value

 */

// Javascript Editor:
// START
/*
// Change code below this line
function getCommonElements(firstArray, secondArray) {
  const commonElements = [];

  firstArray.forEach(function (element) {
    if (secondArray.includes(element)) {
      commonElements.push(element);
    }
  });

  // Change code above this line
  return commonElements;
}
*/

// Javascript Editor:
// FINISH
/*
// Change code below this line
const getCommonElements = (firstArray, secondArray) => {
  const commonElements = [];

  firstArray.forEach((element) => {
    if (secondArray.includes(element)) {
      commonElements.push(element);
    }
  });

  // Change code above this line
  return commonElements;
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

Assignment 12/48
The variable `getCommonElements` is declared
An arrow function with parameters `(firstArray, secondArray)` is assigned to the variable `getCommonElements`
The `forEach` method was used to iterate over the array `firstArray`
The callback for the `forEach` method is an arrow function
The call `getCommonElements([1, 2, 3], [2, 4])` returns `[2]`
The call `getCommonElements([1, 2, 3], [2, 1, 17, 19])` returns `[1, 2]`
The call `getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27])` returns `[12, 27, 3]`
The call `getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40])` returns `[10, 30, 40]`
The call `getCommonElements([1, 2, 3], [10, 20, 30])` returns `[]`
Calling a function with random but valid arguments returns the right value.
Function call result getCommonElements([8,11,15,10,21,6,15,15], [8,24,20,20,7,19,5,17]) is going to be [8]

Result of code execution:
[ 2 ]
[ 1, 2 ]
[ 12, 27, 3 ]
[ 10, 30, 40 ]
[]
*/

///////////////////////////////////////////////
// JS V2 block-4 Autochecking  ASSIGNMENT 13/48  Status: Done

/*
** THEORY
A function with side effects is a function that, during execution, can change or use global variables, change the value of arguments of a reference type, perform I/O operations, etc.

const dirtyMultiply = (array, value) => {
  for (let i = 0; i < array.length; i += 1) {
    array[i] = array[i] * value;
  }
};

const numbers = [1, 2, 3, 4, 5];
dirtyMultiply(numbers, 2);
// There was a mutation of the original data - the numbers array
console.log(numbers); // [2, 4, 6, 8, 10]
The dirtyMultiply(array, value) function multiplies each element of the array by the number value. It modifies (mutates) the original array by reference.

Pure function is a function whose result depends only on the values ​​of the passed arguments. With the same arguments, it always returns the same result and has no side effects, that is, it does not changes the values ​​of the arguments.

Let's write an implementation of a pure function for multiplying array elements that returns a new array without changing the original one.

const pureMultiply = (array, value) => {
  const newArray = [];

  array.forEach(element => {
    newArray.push(element * value);
  });

  return newArray;
};

const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = pureMultiply(numbers, 2);

// There was no mutation of the original data
console.log(numbers); // [1, 2, 3, 4, 5]
// The function returned a new array with changed data
console.log(doubledNumbers); // [2, 4, 6, 8, 10]

** TASK
The changeEven (numbers, value) function takes an array of numbers and updates each element whose value is an even number by adding the value of the value parameter to it.

Refactor the function so that it becomes pure - does not change the array of numbers numbers, but creates, fills and returns a new array with updated values.

** Test
The function changeEven(numbers, value) is declared
The changeEven function does not change the value of the numbers parameter
The call changeEven([1, 2, 3, 4, 5], 10) returns a new array [1, 12, 3, 14, 5]
The call changeEven([2, 8, 3, 7, 4, 6], 10) returns a new array [12, 18, 3, 7, 14, 16]
The call changeEven([17, 24, 68, 31, 42], 100) returns a new array [17, 124, 168, 31, 142]
The call changeEven([44, 13, 81, 92, 36, 54], 100) returns a new array [144, 13, 81, 192, 136, 154]
Calling a function with random but valid arguments returns the correct value

 */

// Javascript Editor:
// START
/*
function changeEven(numbers, value) {
  // Change code below this line
  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] % 2 === 0) {
      numbers[i] = numbers[i] + value;
    }
  }
  // Change code above this line
}

*/

// Javascript Editor:
// FINISH
/*
'use strict';

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
console.log(
*/

// RESULT
/*
Result

Done

Assignment 13/48
The function `changeEven(numbers, value)` is declared
The `changeEven` function does not change the value of the `numbers` parameter
The call `changeEven([1, 2, 3, 4, 5], 10)` returns a new array `[1, 12, 3, 14, 5]`
The call `changeEven([2, 8, 3, 7, 4, 6], 10)` returns a new array `[12, 18, 3, 7, 14, 16]`
The call `changeEven([17, 24, 68, 31, 42], 100)` returns a new array `[17, 124, 168, 31, 142]`
The call `changeEven([44, 13, 81, 92, 36, 54], 100)` returns a new array `[144, 13, 81, 192, 136, 154]`
Calling a function with random but valid arguments returns the correct value.
The result of a function call changeEven([6,10,14,18,20,23,14,17,10], 9 )) is going to be [15,19,23,27,29,23,23,17,19]

Result of code execution:
[ 1, 12, 3, 14, 5 ]
[ 12, 18, 3, 7, 14, 16 ]
[ 17, 124, 168, 31, 142 ]
[ 144, 13, 81, 192, 136, 154 ]
*/

///////////////////////////////////////////////
// JS V2 block-4 Autochecking  ASSIGNMENT 14/48  Status: Done

/*
** THEORY
Most of the methods that iterate over arrays are pure functions. They create a new array, fill it, apply the specified callback function to the value of each element, and then return this new array.

The map (callback) method is used to transform an array. It calls the callback function for each element of the original array, and writes the result of its work into a new array, which will be the result of the method execution.

array.map((element, index, array) => {
  // body of the callback function
});
Element by element iterates over the original array.
Does not change the original array.
The result of the callback function is written into a new array.
Returns a new array of the same length.
It can be used to change every element of an array. The original array is used as a reference on the basis of which another collection can be made.

const planets = ["Earth", "Mars", "Venus", "Jupiter"];

const planetsInUpperCase = planets.map(planet => planet.toUpperCase());
console.log(planetsInUpperCase); // ["EARTH", "MARS", "VENUS", "JUPITER"]

const planetsInLowerCase = planets.map(planet => planet.toLowerCase());
console.log(planetsInLowerCase); // ["earth", "mars", "venus", "jupiter"]

// The original array hasn't changed
console.log(planets); // ["Earth", "Mars", "Venus", "Jupiter"]
Using anonymous arrow functions with an implicit return greatly reduces the "noise" of the callback declaration, making the code cleaner and easier to read.

** TASK
Complete the code so that in the variable planetsLengths you get an array of the lengths of the planet's names. Be sure to use the map() method.

** Test
The variable planets is declared
The value of the variable planets is the array ["Earth", "Mars", "Venus", "Jupiter"]
The variable planetsLengths is declared
The value of the variable planetsLengths is the array [5, 4, 5, 7]
The map() method was used to iterate over the array of planets

 */

// Javascript Editor:
// START
/*
const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// Change code below this line
const planetsLengths = planets;
*/

// Javascript Editor:
// FINISH
/*
const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// Change code below this line
const planetsLengths = planets.map(planet => planet.length);

console.log(planetsLengths);
console.log(
*/

// RESULT
/*
Result

Done

Assignment 14/48
The variable `planets` is declared
The variable `planetsLengths` is declared
The value of the variable `planets` is an array `['Earth', 'Mars', 'Venus', 'Jupiter']`
The value of the variable `planetsLengths` is an array `[5, 4, 5, 7]`
The `map()` method was used to iterate over the array of planets
Result of code execution:
[ 5, 4, 5, 7 ]
*/

///////////////////////////////////////////////
// JS V2 block-4 Autochecking  ASSIGNMENT 15/48  Status: Done

/*
** THEORY
We already know that an everyday task is to manipulate an array of objects. For example, you may need to get an array of property values ​​from all objects as in the example below.

Here, we see an array of students, but you need to get a separate array of their names.

const students = [
  { name: "Mango", score: 83 },
  { name: "Poly", score: 59 },
  { name: "Ajax", score: 37 },
  { name: "Kiwi", score: 94 },
  { name: "Houston", score: 64 },
];

const names = students.map(student => student.name);
console.log(names); // ["Mango", "Poly", "Ajax", "Kiwi", "Houston"]
Using the map() method, you can iterate over an array of objects, and return the property value of each of them in the callback function.

** TASK
Using the map() method, make the titles variable get an array of book titles (the title property) from all objects in the books array.

** Test
The variable books is declared
The value of the variable books is an array
The variable titles is declared
The value of the variable titles is the array ["The Last Kingdom", "Beside Still Waters", "The Dream of a Ridiculous Man", "Redder Than Blood", "Enemy of God"]
To iterate over the books array, use the map() method as a pure function

 */

// Javascript Editor:
// START
/*
const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
];
// Change code below this line

const titles = books;

*/

// Javascript Editor:
// FINISH
/*
const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
];
// Change code below this line

const titles = books.map(book => book.title);
console.log(titles);

console.log(
*/

// RESULT
/*
Result

Done

Assignment 15/48
The variable `books` is declared
The variable `titles` is declared
The value of the variable `books` is an array
The value of the variable `titles` is an array `['The Last Kingdom', 'Beside Still Waters', 'The Dream of a Ridiculous Man', 'Redder Than Blood', 'Enemy of God']`
To iterate over the `books` array, use the `map()` method as a pure function

Result of code execution:
[
  'The Last Kingdom',
  'Beside Still Waters',
  'The Dream of a Ridiculous Man',
  'Redder Than Blood',
  'Enemy of God'
]
*/

///////////////////////////////////////////////
// JS V2 block-4 Autochecking  ASSIGNMENT 16/48  Status: Done

/*
** THEORY
The flatMap(callback) method is similar to the map() method, but it is used in cases where the result is a multidimensional array that needs to be flattened.

array.flatMap((element, index, array) => {
  // body of the callback function
});
The students array contains a list of students with a list of subjects that the student is attending in the courses property. Several students can attend the same subject. It is necessary to make a list of all the subjects that this group of students attends, even repetitive ones so far.

const students = [
  { name: "Mango", courses: ["mathematics", "physics"] },
  { name: "Poly", courses: ["science", "mathematics"] },
  { name: "Kiwi", courses: ["physics", "biology"] },
];

students.map(student => student.courses);
// [["mathematics", "physics"], ["science", "mathematics"], ["physics", "biology"]]

students.flatMap(student => student.courses);
// ["mathematics", "physics", "science", "mathematics", "physics", "biology"];
It calls the callback function for each element of the original array, and writes the result of its work into a new array. The difference from map() is that the new array is "flattened" to a depth equal to one (no nesting). This flattened array is the result of flatMap().

** TASK
Using the flatMap() method, make the genres variable get an array of all genres of books (the genres property) from the books array of books.

** Test
The variable books is declared
The value of the variable books is an array of objects
The variable genres is declared
The value of the variable genres is the array [ "adventure", "history", "fiction", "horror", "mysticism" ]
The flatMap() method was used to iterate over the books array

 */

// Javascript Editor:
// START
/*
const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    genres: ["adventure", "history"],
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    genres: ["fiction"],
  },
  {
    title: "Redder Than Blood",
    author: "Tanith Lee",
    genres: ["horror", "mysticism"],
  },
];
// Change code below this line

const genres = books;

*/

// Javascript Editor:
// FINISH
/*
const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    genres: ["adventure", "history"],
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    genres: ["fiction"],
  },
  {
    title: "Redder Than Blood",
    author: "Tanith Lee",
    genres: ["horror", "mysticism"],
  },
];
// Change code below this line

const genres = books.flatMap(book => book.genres);
console.log(genres);

console.log(
*/

// RESULT
/*
Result

Done

Assignment 16/48
The variable `books` is declared
Your code takes too long to execute
The variable `genres` is declared
The value of the variable `books` is an array of objects
The `flatMap()` method was used to iterate over the `books` array

Result of code execution:
[ 'adventure', 'history', 'fiction', 'horror', 'mysticism' ]
*/

///////////////////////////////////////////////
// JS V2 block-4 Autochecking  ASSIGNMENT 17/48  Status: Done

/*
** THEORY
We will pass this array of objects to the users parameter when calling the function in the task.

const users = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    skills: ["ipsum", "lorem"],
    gender: "male",
    age: 37,
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
    gender: "female",
    age: 34,
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    skills: ["nulla", "anim", "proident", "ipsum", "elit"],
    gender: "male",
    age: 24,
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    skills: ["adipisicing", "irure", "velit"],
    gender: "female",
    age: 21,
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    skills: ["ex", "culpa", "nostrud"],
    gender: "male",
    age: 27,
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    skills: ["non", "amet", "ipsum"],
    gender: "male",
    age: 38,
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    skills: ["lorem", "veniam", "culpa"],
    gender: "female",
    age: 39,
  },
];

** TASK
Modify the getUserNames(users) function so that it returns an array of usernames (the name property) from an array of objects in the users parameter.

** Test
The variable getUserNames is declared
An arrow function with the parameter users is assigned to the getUserNames variable.
The map() method was used to iterate over the array users
Calling the function with the specified array of users returns the array ["Moore Hensley", "Sharlene Bush", "Ross Vazquez", "Elma Head", "Carey Barr", "Blackburn Dotson", "Sheree Anthony"]
Calling a function with random but valid arguments, returns the correct value

 */

// Javascript Editor:
// START
/*
// Change code below this line
const getUserNames = users => {
    
  };
  // Change code above this line
*/

// Javascript Editor:
// FINISH
/*
// Change code below this line
const getUserNames = (users) => users.map(user => user.name);

  // Change code above this line

console.log(
*/

// RESULT
/*
Result

Done

Assignment 17/48
The variable `getUserNames` is declared
An arrow function with the parameter `users` is assigned to the `getUserNames` variable
The `map()` method was used to iterate over the array `users`
Calling the function with the specified array of users returns an array["Moore Hensley","Sharlene Bush","Ross Vazquez","Elma Head","Carey Barr","Blackburn Dotson","Sheree Anthony"]
Calling a function with random but valid arguments, returns the correct value
*/

///////////////////////////////////////////////
// JS V2 block-4 Autochecking  ASSIGNMENT 18/48  Status: Done

/*
** THEORY
We will pass this array of objects to the users parameter when calling the function in the task.

[
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    skills: ["ipsum", "lorem"],
    gender: "male",
    age: 37,
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
    gender: "female",
    age: 34,
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    skills: ["nulla", "anim", "proident", "ipsum", "elit"],
    gender: "male",
    age: 24,
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    skills: ["adipisicing", "irure", "velit"],
    gender: "female",
    age: 21,
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    skills: ["ex", "culpa", "nostrud"],
    gender: "male",
    age: 27,
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    skills: ["non", "amet", "ipsum"],
    gender: "male",
    age: 38,
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    skills: ["lorem", "veniam", "culpa"],
    gender: "female",
    age: 39,
  },
];

** TASK
Complete thr getUserEmails(users) function so that it returns an array of users' email addresses (the email property) from the array of objects in the users parameter.

** Test
The variable getUserEmails is declared
An arrow function with the parameter users is assigned to the getUserEmails variable
The map() method was used to iterate over the users array
Calling the function with the specified array of users returns the array ["moorehensley@indexia.com", "sharlenebush@tubesys.com", "rossvazquez@xinware.com", "elmahead@omatom.com", "careybarr@nurali.com", "blackburndotson@furnigeer.com", "shereeanthony@kog.com"]
Calling a function with random but valid arguments returns the correct value

 */

// Javascript Editor:
// START
/*
  // Change code below this line
const getUserEmails = users => {
    

  };

  // Change code above this line

*/

// Javascript Editor:
// FINISH
/*
  // Change code below this line
  const getUserEmails = (users) => users.map(user => user.email)
  // Change code above this line


console.log(
*/

// RESULT
/*
The variable `getUserEmails` is declared
An arrow function with the parameter `users` is assigned to the `getUserEmails` variable
The `map()` method was used to iterate over the `users` array
Calling the function with the specified array of users returns an array["moorehensley@indexia.com","sharlenebush@tubesys.com","rossvazquez@xinware.com","elmahead@omatom.com","careybarr@nurali.com","blackburndotson@furnigeer.com","shereeanthony@kog.com"]
Calling a function with random but valid arguments returns the correct value
*/

///////////////////////////////////////////////
// JS V2 block-4 Autochecking  ASSIGNMENT 19/48  Status: Done

/*
** THEORY
The filter(callback) method is used for a single task - filtering an array, that is, when it is necessary to select more than one element from a collection by some criterion.

array.filter((element, index, array) => {
  // body of the callback function
});
Does not change the original array.
Element by element iterates over the original array.
Returns a new array.
Adds elements to the returned array that satisfy the condition of the callback function.
If the callback returned true, the element is added to the returned array.
If the callback returned false, the element is not added to the returned array.
If none of the elements satisfy the condition, it returns an empty array.
const values = [51, -3, 27, 21, -68, 42, -37];

const positiveValues = values.filter(value => value >= 0);
console.log(positiveValues); // [51, 27, 21, 42]

const negativeValues = values.filter(value => value < 0);
console.log(negativeValues); // [-3, -68, -37]

const bigValues = values.filter(value => value > 1000);
console.log(bigValues); // []

// The original array hasn't changed
console.log(values); // [51, -3, 27, 21, -68, 42, -37]
That is, the filter method calls the callback function for each element of the original array, and if the result of its execution is true, the current element is added to the new array.

** TASK
Add the code so that the evenNumbers variable contains an array of even numbers from the numbers array, and the oddNumbers variable contains an array of odd numbers. Be sure to use the filter() method.

** Test
The variable numbers is declared
The value of the variable numbers is the array [17, 24, 82, 61, 36, 18, 47, 52, 73]
The variable evenNumbers is declared
The value of the variable evenNumbers is the array [24, 82, 36, 18, 52]
The variable oddNumbers is declared
The value of the oddNumbers variable is the array [17, 61, 47, 73]
To iterate over the array numbers, the method filter()is used

 */

// Javascript Editor:
// START
/*
const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// Change code below this line

const evenNumbers = numbers;
const oddNumbers = numbers;
*/

// Javascript Editor:
// FINISH
/*
const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// Change code below this line

const evenNumbers = numbers.filter(number => number % 2 === 0);
const oddNumbers = numbers.filter(number => number % 2 !== 0);

console.log(evenNumbers);
console.log(oddNumbers);

console.log(
*/

// RESULT
/*
Result

Done

Assignment 19/48
The variable `numbers` is declared
The variable `evenNumbers` is declared
The variable `oddNumbers` is declared
The value of the variable `numbers` is an array `[17, 24, 82, 61, 36, 18, 47, 52, 73]`
The value of the variable `evenNumbers` is an array `[24, 82, 36, 18, 52]`
The value of the variable `oddNumbers is an array `[17, 61, 47, 73]`
The `filter()` method was used to iterate over the array `numbers`
Result of code execution:
[ 24, 82, 36, 18, 52 ]
[ 17, 61, 47, 73 ]
*/

///////////////////////////////////////////////
// JS V2 block-4 Autochecking  ASSIGNMENT 20/48  Status: Done

/*
** THEORY
Using the filter() method, you can filter the array so that only unique elements remain in it. This trick only works with an array of primitive values ​​- not objects.

Let's go back to the group of students and the array of all attended subjects that we got with the flatMap() method.

const students = [
  { name: "Mango", courses: ["mathematics", "physics"] },
  { name: "Poly", courses: ["science", "mathematics"] },
  { name: "Kiwi", courses: ["physics", "biology"] },
];

const allCourses = students.flatMap(student => student.courses);
// ["mathematics", "physics", "science", "mathematics", "physics", "biology"];
The variable allCourses stores an array of all visited courses that can be repeated. The task is to create a new array containing only unique elements, that is, without repetitions.

const uniqueCourses = allCourses.filter(
  (course, index, array) => array.indexOf(course) === index
);
Using array.indexOf(course) we search for the first match of the current course element and get its index in the original array of all courses. The index parameter stores the index of the current course element when iterating over the array using the filter method.

If the result of indexOf() and the value of index are equal, this is a unique element, because this is the first time such a value is encountered in the array and at the current iteration the filter processes it.

# Array of all courses
["mathematics", "physics", "science", "mathematics", "physics", "biology"];
For the element "mathematics" with index 0:

indexOf() will return 0 because it is looking for the first match.
The value of the index parameter will be 0.
They are equal, so this is a unique element.
For the element "mathematics" with index 3:

indexOf() will return 0 because it is looking for the first match.
The value of the index parameter will be 3.
They are not equal, so it is a repeating - not a unique element.

** TASK
Complete the code so that the allGenres variable contains an array of all genres of books (the genres property) from the books array, and the uniqueGenres variable contains an array of unique genres - without repetitions.

** Test
The variable books is declared
The value of the variable books is an array of objects
The variable allGenres is declared
The value of the variable allGenres is the array ["adventure", "history", "fiction", "mysticism", "horror", "mysticism", "adventure"]
The variable uniqueGenres is declared
The value of the variable uniqueGenres is an array ["adventure", "history", "fiction", "mysticism", "horror"]
The flatMap() method was used to calculate the value of the allGenres variable
The filter() method was used to calculate the value of the uniqueGenres variable

 */

// Javascript Editor:
// START
/*
const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    genres: ["adventure", "history"],
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    genres: ["fiction", "mysticism"],
  },
  {
    title: "Redder Than Blood",
    author: "Tanith Lee",
    genres: ["horror", "mysticism", "adventure"],
  },
];
// Change code below this line
const allGenres = books;
const uniqueGenres = allGenres;

*/

// Javascript Editor:
// FINISH
/*
const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    genres: ["adventure", "history"],
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    genres: ["fiction", "mysticism"],
  },
  {
    title: "Redder Than Blood",
    author: "Tanith Lee",
    genres: ["horror", "mysticism", "adventure"],
  },
];
// Change code below this line
// const uniqueGenres = allGenres;

const allGenres = books.flatMap(book => book.genres);

const uniqueGenres = allGenres.filter(
  (genre, index, array) => array.indexOf(genre) === index
  );

console.log(allGenres);
console.log(uniqueGenres);

console.log(
*/

// RESULT
/*
Result

Done

Assignment 20/48
The variable `books` is declared
The variable `allGenres` is declared
The variable `uniqueGenres` is declared
The value of the variable `books` is an array of objects
The value of the variable `allGenres` is an array `['adventure', 'history', 'fiction', 'mysticism', 'horror', 'mysticism', 'adventure']`
The value of the variable `uniqueGenres` is an array `['adventure', 'history', 'fiction', 'mysticism', 'horror']`
The `flatMap()` method was used to calculate the value of the `allGenres` variable
The `filter()` method was used to calculate the value of the `uniqueGenres` variable

Result of code execution:
[
  'adventure',
  'history',
  'fiction',
  'mysticism',
  'horror',
  'mysticism',
  'adventure'
]
[ 'adventure', 'history', 'fiction', 'mysticism', 'horror' ]
*/

///////////////////////////////////////////////
// JS V2 block-4 Autochecking  ASSIGNMENT 21/48  Status: Done

/*
** THEORY
When working with an array of objects, filtering is performed by the value of some property. The result is a new array of filtered objects.

For example, there is an array of students with test scores. It is necessary to filter out the best (scores above 80), worst (scores below 50), and average students (scores from 50 to 80).

const LOW_SCORE = 50;
const HIGH_SCORE = 80;
const students = [
  { name: "Mango", score: 83 },
  { name: "Poly", score: 59 },
  { name: "Ajax", score: 37 },
  { name: "Kiwi", score: 94 },
  { name: "Houston", score: 64 },
];

const best = students.filter(student => student.score >= HIGH_SCORE);
console.log(best); // Array of objects named Mango and Kiwi

const worst = students.filter(student => student.score < LOW_SCORE);
console.log(worst); // Array with one object named Ajax

// In the callback function, it is convenient to destructure the properties of the object
const average = students.filter(
  ({ score }) => score >= LOW_SCORE && score < HIGH_SCORE
);
console.log(average); // Array of objects named Poly and Houston

** TASK
Using the filter() method, modify the code so that:

The topRatedBooks variable contains an array of books whose rating (the rating property) is greater than or equal to the value of the MIN_RATING variable.
The booksByAuthor variable contains an array of books written by the author with a name (property author) which matches the value in the AUTHOR variable.

** Test
The variable books is declared
The value of the variable books is an array of objects
The variable MIN_RATING is declared
The value of the variable MIN_RATING is number 8
The variable AUTHOR is declared
The value of the AUTHOR variable is the string "Bernard Cornwell"
The variable topRatedBooks is declared
The value of the variable topRatedBooks is an array of books with ratings higher than 8
The variable booksByAuthor has been declared
The value of the booksByAuthor variable is an array of books by "Bernard Cornwell"
The filter() method was used to iterate over the books array

 */

// Javascript Editor:
// START
/*
const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
];

const MIN_RATING = 8;
const AUTHOR = "Bernard Cornwell";
// Change code below this line

const topRatedBooks = books;
const booksByAuthor = books;

*/

// Javascript Editor:
// FINISH
/*
const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
];

const MIN_RATING = 8;
const AUTHOR = "Bernard Cornwell";
// Change code below this line

const topRatedBooks = books.filter(book => book.rating >= MIN_RATING);
const booksByAuthor = books.filter(book => book.author === AUTHOR);


console.log(topRatedBooks)
console.log(booksByAuthor)

console.log(
*/

// RESULT
/*
Result

Done

Assignment 21/48
The variable `books` is declared
The variable` topRatedBooks` is declared
The variable` booksByAuthor` is declared
The variable `MIN_RATING` is declared
The variable `AUTHOR` is declared
The value of the variable `books` is an array of objects
The value of the variable `topRatedBooks` is an array of books with ratings higher than `8`
The value of the `booksByAuthor` variable is an array of books by `'Bernard Cornwell'`
The value of the variable `MIN_RATING` is a number8
The value of the `AUTHOR` variable is the string `'Bernard Cornwell'`
The `filter()` method was used to iterate over the `books` array
Result of code execution:
[
  {
    title: 'The Last Kingdom',
    author: 'Bernard Cornwell',
    rating: 8.38
  },
  {
    title: 'Beside Still Waters',
    author: 'Robert Sheckley',
    rating: 8.51
  },
  { title: 'Enemy of God', author: 'Bernard Cornwell', rating: 8.67 }
]
[
  {
    title: 'The Last Kingdom',
    author: 'Bernard Cornwell',
    rating: 8.38
  },
  { title: 'Enemy of God', author: 'Bernard Cornwell', rating: 8.67 }
]
*/

///////////////////////////////////////////////
// JS V2 block-4 Autochecking  ASSIGNMENT 22/48  Status: Done

/*
** THEORY
We will pass this array of objects to the users parameter when calling the function from the task.

[
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male"
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female"
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male"
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female"
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    gender: "male"
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    gender: "male"
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female"
  }
]

** TASK
Modify the getUsersWithEyeColor(users, color) function so that it returns an array of users whose eye color (the eyeColor property) matches the value of the color parameter.

** Test
The variable getUsersWithEyeColor is declared
An arrow function with parameters (users, color) is assigned to the getUsersWithEyeColor variable
The filter() method was used to iterate over the users array
If the value of the color parameter is 'blue', the function returns an array of user objects named Moore Hensley, Sharlene Bush and Carey Barr
If the value of the color parameter is 'green', the function returns an array of user objects named Ross Vazquez and Elma Head
If the value of the color parameter is 'brown', the function returns an array of user objects named Blackburn Dotson and Sheree Anthony
If the value of the color parameter is any other string, the function returns an empty array
Calling a function with random but valid arguments returns the correct value

 */

// Javascript Editor:
// START
/*
// Change code below this line
const getUsersWithEyeColor = (users, color) => {

};
// Change code above this line
*/

// Javascript Editor:
// FINISH
/*
// Change code below this line
const getUsersWithEyeColor = (users, color) => users.filter((user) => user.eyeColor === color);
// Change code above this line

console.log(getUsersWithEyeColor(users, 'blue'));
console.log(getUsersWithEyeColor(users, 'green'));
console.log(getUsersWithEyeColor(users, 'brown'));

console.log(
*/

// RESULT
/*
The variable `getUsersWithEyeColor` is declared
An arrow function with parameters `(users, color)` is assigned to the `getUsersWithEyeColor` variable
The `filter()` method was used to iterate over the `users` array
If the value of the `color` parameter is `'blue'`, the function returns an array of user objects named `Moore Hensley`, `Sharlene Bush` and `Carey Barr`
If the value of the `color` parameter is `'green'`, the function returns an array of user objects named `Ross Vazquez` and `Elma Head`
If the value of the `color` parameter is `'brown'`, the function returns an array of user objects named `Blackburn Dotson` and `Sheree Anthony`
If the value of the `color` parameter is any other string, the function returns an empty array
Calling a function with random but valid arguments returns the correct value
*/

///////////////////////////////////////////////
// JS V2 block-4 Autochecking  ASSIGNMENT 23/48  Status: Done

/*
** THEORY
We will pass this array of objects to the users parameter when calling the function from the task.
[
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male",
    age: 37
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female",
    age: 34
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male",
    age: 24
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female",
    age: 21
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    gender: "male",
    age: 27
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    gender: "male",
    age: 38
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female",
    age: 39
  }
]
** TASK
Modify the getUsersWithAge(users, minAge, maxAge) function so that it returns an array of users whose age (the age property) falls within the range from minAge to maxAge.

** Test
The variable getUsersWithAge is declared
An arrow function with parameters (users, minAge, maxAge) is assigned to the getUsersWithAge variable
To iterate over the users parameter, use the filter() method
If the value of the minAge and maxAge parameters are 20 and 30, respectively, the function returns an array of user objects named Ross Vazquez, Elma Head and Carey Barr
If the value of the minAge and maxAge parameters are 30 and 40, respectively, the function returns an array of user objects named Moore Hensley, Sharlene Bush, Blackburn Dotson, Sheree Anthony
If the value of the parameters minAge and maxAge are equal to 80 and 100, respectively, the function returns an empty array
Calling a function with random but valid arguments, returns the correct value

 */

// Javascript Editor:
// START
/*
// Change code below this line
const getUsersWithAge = (users, minAge, maxAge) => {

};
// Change code above this line
*/

// Javascript Editor:
// FINISH
/*
// Change code below this line
const getUsersWithAge = (users, minAge, maxAge) => users.filter((user) => user.age >= minAge && user.age <= maxAge);
// Change code above this line


console.log(getUsersWithAge(users, 20, 30));
console.log(getUsersWithAge(users, 30, 40));
console.log(getUsersWithAge(users, 80, 100));

console.log(
*/

// RESULT
/*
Result

Done

Assignment 23/48
The variable `getUsersWithAge` is declared
An arrow function with parameters `(users, minAge, maxAge)` is assigned to the `getUsersWithAge` variable
To iterate over the `users` parameter, use the `filter()` method
If the value of the `minAge` and `maxAge` parameters are `20` and `30`, respectively, the function returns an array of user objects named `Ross Vazquez`, `Elma Head` and `Carey Barr`
If the value of the `minAge` and `maxAge` parameters are `30` and `40`, respectively, the function returns an array of user objects named `Moore Hensley`, `Sharlene Bush`, `Blackburn Dotson` and `Sheree Anthony`
If the value of the parameters `minAge` and `maxAge` are equal to `80` and `100`, respectively, the function returns an empty array
Calling a function with random but valid arguments, returns the correct value
*/

///////////////////////////////////////////////
// JS V2 block-4 Autochecking  ASSIGNMENT 24/48  Status: Done

/*
** THEORY
We will pass this array of objects to the users parameter when calling the function from the task.

[
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male",
    age: 37
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female",
    age: 34
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male",
    age: 24
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female",
    age: 21
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    gender: "male",
    age: 27
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    gender: "male",
    age: 38
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female",
    age: 39
  }
]

** TASK
Modify the getUsersWithFriend(users, friendName) function so that it returns an array of users who have a friend with a name in the friendName parameter. An array of the user's friends is stored in the friends property.

** Test
The variable getUsersWithFriend is declared
An arrow function with parameters (users, friendName) is assigned to the function getUsersWithFriend
To iterate over the users parameter, the filter() method is used
If the value of the friendName parameter is the string "Briana Decker", the function returns an array of user objects named Sharlene Bush and Sheree Anthony
If the value of the parameter friendName is the string "Goldie Gentry", the function returns an array of user objects named Elma Head and Sheree Anthony
If the value of the parameter friendName is the string "Adrian Cross", the function returns an empty array
Calling a function with random but valid arguments, returns the correct value

 */

// Javascript Editor:
// START
/*
// Change code below this line
const getUsersWithFriend = (users, friendName) => {
   
};
// Change code above this line

*/

// Javascript Editor:
// FINISH
/*
// Change code below this line
const getUsersWithFriend = (users, friendName) => users.filter((user) => user.friends.includes(friendName));
// Change code above this line

console.log(
*/

// RESULT
/*
The variable `getUsersWithFriend` is declared
An arrow function with parameters `(users, friendName)` is assigned to the function `getUsersWithFriend`
To iterate over the `users` parameter, the `filter()` method is used
If the value of the `friendName` parameter is the string `Briana Decker`, the function returns an array of user objects named `Sharlene Bush` and `Sheree Anthony`
If the value of the parameter `friendName` is the string `Goldie Gentry`, the function returns an array of user objects named `Elma Head` and `Sheree Anthony`
If the value of the parameter `friendName` is the string `Adrian Cross`, the function returns an empty array
Calling a function with random but valid arguments, returns the correct value
*/

///////////////////////////////////////////////
// JS V2 block-4 Autochecking  ASSIGNMENT 25/48  Status: Done

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
// JS V2 block-4 Autochecking  ASSIGNMENT 25/48  Status: Done

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
