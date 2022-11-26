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
[ 17, 124, 168, 31, 142 
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
Modify the getFriends(users) function so that it returns an array of all users' friends (the friends property). Several users can have the same friends, make sure that the returned array does not contain duplicates.

** Test
The variable getFriends is declared
An arrow function with the parameter (users) is assigned to the variable getFriends
Calling the function with the specified user array returns the array ["Sharron Pace", "Briana Decker", "Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner", "Goldie Gentry", "Aisha Tran", "Jordan Sampson", "Eddie Strong", "Jacklyn Lucas", "Linda Chapman"]
Calling a function with random but valid arguments returns the correct value

 */

// Javascript Editor:
// START
/*
// Change code below this line
const getFriends = (users) => {

};
// Change code above this line

*/

// Javascript Editor:
// FINISH
/*
// Change code below this line
const getFriends = (users) =>
  users
    .flatMap((user) => user.friends)
    .filter((friend, index, array) => array.indexOf(friend) === index);

console.log(getFriends(users));

console.log(
*/

// RESULT
/*
Result

Done

Assignment 25/48
The variable `getFriends` is declared
An arrow function with the parameter `(users)` is assigned to the variable `getFriends`
Calling the function with the specified user array returns an array `['Sharron Pace', 'Briana Decker', 'Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner', 'Goldie Gentry', 'Aisha Tran', 'Jordan Sampson', 'Eddie Strong', 'Jacklyn Lucas', 'Linda Chapman']`
Calling a function with random but valid arguments returns the correct value
*/

///////////////////////////////////////////////
// JS V2 block-4 Autochecking  ASSIGNMENT 26/48  Status: Done

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
Modify the getActiveUsers(users)function so that it returns an array active users whose isActive property value is true.

** Test
The variable getActiveUsers is declared
An arrow function with the parameter users is assigned to the variable getActiveUsers
To iterate over the users parameter, use the filter() method
Calling the function with the specified array of users returns an array of user objects named Sharlene Bush, Elma Head, Carey Barr and Sheree Anthony
Calling a function with random but valid arguments returns the correct value

 */

// Javascript Editor:
// START
/*
// Change code below this line
const getActiveUsers = (users) => {
   
};
// Change code above this line

*/

// Javascript Editor:
// FINISH
/*
// Change code below this line
const getActiveUsers = (users) => users.filter((user) => user.isActive === true);
// Change code above this line

console.log(getActiveUsers(users));
console.log(
*/

// RESULT
/*
The variable `getActiveUsers` is declared
An arrow function with the parameter `users` is assigned to the variable `getActiveUsers`
To iterate over the `users` parameter, use the `filter()` method
Calling the function with the specified array of users returns an array of user objects named `Sharlene Bush`, `Elma Head`, `Carey Barr` and `Sheree Anthony`
Calling a function with random but valid arguments returns the correct value
*/

///////////////////////////////////////////////
// JS V2 block-4 Autochecking  ASSIGNMENT 27/48  Status: Done

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
Modify the getInactiveUsers (users) function so that it returns an array of inactive users whose isActive property is false.

** Test
The variable getInactiveUsers is declared.
An arrow function with the parameter users is assigned to the variable getInactiveUsers
To iterate over the users parameter, the filter() method is used
Calling the function with the specified array of users returns an array of user objects named Moore Hensley, Ross Vazquez and Blackburn Dotson
Calling a function with random but valid arguments, returns the correct value

 */

// Javascript Editor:
// START
/*
// Change code below this line
const getInactiveUsers = (users) => {
   
};
// Change code above this line

*/

// Javascript Editor:
// FINISH
/*
// Change code below this line
const getInactiveUsers = (users) => users.filter((user) => user.isActive === false);
// Change code above this line

console.log(getInactiveUsers(users));

console.log(
*/

// RESULT
/*
Result

Done

Assignment 27/48
The variable `getInactiveUsers` is declared.
An arrow function with the parameter (`users`) is assigned to the variable `getInactiveUsers`
To iterate over the `users` parameter, the `filter()` method is used
Calling the function with the specified array of users returns an array of user objects named `Sharlene Bush`, `Elma Head`, `Carey Barr` and `Sheree Anthony`
Calling a function with random but valid arguments, returns the correct value
*/

///////////////////////////////////////////////
// JS V2 block-4 Autochecking  ASSIGNMENT 28/48  Status: Done

/*
** THEORY
If the filter(callback) method is used to find all elements that satisfy the condition, then the find(callback) method allows you to find and return the first matching element, after that the array iteration stops. That is, it searches until the first match.

array.find((element, index, array) => {
  // body of the callback function
});
Does not change the original array.
This method iterates over the original array element by element.
Returns the first element that satisfies the condition, that is, when the callback returns true.
If no element matches, that is, the callback returned false for all elements, the method returns undefined.
The find() method is used for one task - finding an element by a unique property value. For example, searching for a user by mail, a car by serial number, a book by name, etc.

const colorPickerOptions = [
  { label: "red", color: "#F44336" },
  { label: "green", color: "#4CAF50" },
  { label: "blue", color: "#2196F3" },
  { label: "pink", color: "#E91E63" },
  { label: "indigo", color: "#3F51B5" },
];

colorPickerOptions.find((option) => option.label === "blue"); // { label: "blue", color: "#2196F3" }
colorPickerOptions.find((option) => option.label === "pink"); // { label: "pink", color: "#E91E63" }
colorPickerOptions.find((option) => option.label === "white"); // undefined

** TASK
Using the find() method, modify the code so that:

In the variable bookWithTitle, the object of a book whose title (property title) coincides with the value of the variable BOOK_TITLE is obtained.
In the variable bookByAuthor, the object of the book whose author (property author) coincides with the value of the variable AUTHOR is obtained.

** Test
The variable books is declared
The value of the variable books is an array
The variable BOOK_TITLE is declared
The value of the variable BOOK_TITLE is the string "The Dream of a Ridiculous Man"
The variable AUTHOR is declared
The value of the variable AUTHOR is the string "Robert Sheckley"
The variable bookWithTitle is declared
The value of the bookWithTitle variable is the book object with the title above, "The Dream of a Ridiculous Man"
The variable bookByAuthor is declared
The value of the variable bookByAuthor is an object of the author's book, "Robert Sheckley"
To iterate over the books array, the find() method was used

 */

// Javascript Editor:
// START
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
// Change code below this line


*/

// Javascript Editor:
// FINISH
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
// Change code below this line

const bookWithTitle = books.find((book) => book.title === BOOK_TITLE);
const bookByAuthor = books.find((book) => book.author === AUTHOR);

console.log(bookWithTitle);
console.log(bookByAuthor);

console.log(
*/

// RESULT
/*
Result

Done

Assignment 28/48
The variable `books` is declared
The variable `BOOK_TITLE` is declared
The variable `AUTHOR` is declared
The variable `bookWithTitle` is declared
The variable `bookByAuthor` is declared
The value of the variable `books` is an array
The value of the variable `BOOK_TITLE` is the string `'The Dream of a Ridiculous Man'
The value of the variable `AUTHOR` is the string `'Robert Sheckley'`
The value of the variable `bookWithTitle` is the book object with the title above `'The Dream of a Ridiculous Man'
The value of the variable `bookByAuthor` is the book object by `'Robert Sheckley'`
The `find()`method was used to iterate over the array `books`

Result of code execution:
{
  title: 'The Dream of a Ridiculous Man',
  author: 'Fyodor Dostoevsky',
  rating: 7.75
}
{
  title: 'Beside Still Waters',
  author: 'Robert Sheckley',
  rating: 8.51
}
*/

///////////////////////////////////////////////
// JS V2 block-4 Autochecking  ASSIGNMENT 29/48  Status: Done

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
Modify the getUserWithEmail(users, email) function so that it returns a user object whose email address (the email property) matches the value of the email parameter.

** Test
The variable getUserWithEmail(users, email) is declared
To iterate over the users parameter, the find () method is used
If the value of the email parameter is "shereeanthony@kog.com", the function returns a user object named Sheree Anthony
If the value of the email parameter is "elmahead@omatom.com", the function returns a user object named Elma Head
If the value of the email parameter is "blackburndotson@furnigeer.com", the function returns a user object named Blackburn Dotson
If the users array does not contain a user with email address from the email parameter, the function returns undefined
Calling a function with random but valid arguments returns the correct value

 */

// Javascript Editor:
// START
/*
// Change code below this line
const getUserWithEmail = (users, email) => {
   
};
// Change code above this line
*/

// Javascript Editor:
// FINISH
/*
// Change code above this line
const getUserWithEmail = (users, email) => users.find((user) => user.email === email);
// Change code above this line

console.log(getUserWithEmail(users, "shereeanthony@kog.com"));
console.log(getUserWithEmail(users, "elmahead@omatom.com"));
console.log(getUserWithEmail(users, "blackburndotson@furnigeer.com"));
console.log(
*/

// RESULT
/*
The variable `getUserWithEmail` is declared
An arrow function with parameters `(users, email))` is assigned to variable `getUserWithEmail`
To iterate over the `users` parameter, the `find ()` method is used
If the value of the `email` parameter is `shereeanthony@kog.com`, the function returns a user object named `Sheree Anthony`
If the value of the `email` parameter is `elmahead@omatom.com`, the function returns a user object named `Elma Head`
If the value of the `email` parameter is `blackburndotson@furnigeer.com`, the function returns a user object named `Blackburn Dotson`
If the `users` array does not contain a user with mail from the `email` parameter, the function returns `undefined`
Calling a function with random but valid arguments, returns the correct value
*/

///////////////////////////////////////////////
// JS V2 block-4 Autochecking  ASSIGNMENT 30/48  Status: Done

/*
** THEORY
The every(callback) method checks if all elements of the array pass the test provided by the callback function. Returns true or false.

array.every((element, index, array) => {
  //  body of the callback function
});
Does not change the original array.
The method iterates over the original array element by element.
Returns true if all elements of the array satisfy the condition.
Returns false if at least one element of the array does not satisfy the condition.
The array iteration is terminated if the callback returns false.
// Are all elements greater than or equal to zero? - Yes
[1, 2, 3, 4, 5].every((value) => value >= 0); // true

// Are all elements greater than or equal to zero? - No
[1, 2, 3, -10, 4, 5].every((value) => value >= 0); // false
When working with an array of objects, the value of some of their properties is checked.

** TASK
Using the every() method, modify the code so that:

In the variable eachElementInFirstIsEven, there is the result of checking all elements of the array firstArray for evenness.
In the variable eachElementInFirstIsOdd, there is the result of checking all elements of the array firstArray for oddness.
In the variable eachElementInSecondIsEven, there is the result of checking all elements of the array secondArray for evenness.
In the variable eachElementInSecondIsOdd, there is the result of checking all elements of the array secondArray for oddness.
In the variable eachElementInThirdIsEven, there is the result of checking all elements of the array thirdArray for evenness.
In the variable eachElementInThirdIsOdd, there is the result of checking all elements of the array thirdArray for oddness.

** Test
The variable firstArray is declared
The value of the variable firstArray is the array [26, 94, 36, 18]
The variable secondArray is declared
The value of the variable secondArray is the array [17, 61, 23]
The variable thirdArray is declared
The value of the variable thirdArray is the array [17, 26, 94, 61, 36, 23, 18]
The variable eachElementInFirstIsEven is declared
The value of the variable eachElementInFirstIsEven is boolean true
The variable eachElementInFirstIsOdd is declared
The value of the variable eachElementInFirstIsOdd is boolean false
The variable eachElementInSecondIsEven is declared
The value of the variable eachElementInSecondIsEven is boolean false
The variable eachElementInSecondIsOdd is declared
The value of the variable eachElementInSecondIsOdd is boolean true
The variable eachElementInThirdIsEven is declared
The value of the variable eachElementInThirdIsEven is boolean false
The variable eachElementInThirdIsOdd is declared
The value of the variable eachElementInThirdIsOdd is boolean false
To iterate over arrays, the every() method is used

 */

// Javascript Editor:
// START
/*
const firstArray = [26, 94, 36, 18];
const secondArray = [17, 61, 23];
const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// Change code below this line

const eachElementInFirstIsEven = firstArray;
const eachElementInFirstIsOdd = firstArray;

const eachElementInSecondIsEven = secondArray;
const eachElementInSecondIsOdd = secondArray;

const eachElementInThirdIsEven = thirdArray;
const eachElementInThirdIsOdd = thirdArray;
*/

// Javascript Editor:
// FINISH
/*
const firstArray = [26, 94, 36, 18];
const secondArray = [17, 61, 23];
const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// Change code below this line

const eachElementInFirstIsEven = firstArray.every((value) => value % 2 === 0);
const eachElementInFirstIsOdd = firstArray.every((value) => value % 2 !== 0);

const eachElementInSecondIsEven = secondArray.every((value) => value % 2 === 0);
const eachElementInSecondIsOdd = secondArray.every((value) => value % 2 !== 0);

const eachElementInThirdIsEven = thirdArray.every((value) => value % 2 === 0);
const eachElementInThirdIsOdd = thirdArray.every((value) => value % 2 !== 0);

console.log(eachElementInFirstIsEven);
console.log(eachElementInFirstIsOdd);

console.log(eachElementInSecondIsEven);
console.log(eachElementInSecondIsOdd);

console.log(eachElementInThirdIsEven);
console.log(eachElementInThirdIsOdd);

console.log(
*/

// RESULT
/*
Result

Done

Assignment 30/48
The variable `firstArray` is declared
The variable `secondArray` is declared
The variable `thirdArray` is declared
The variable `eachElementInFirstIsEven` is declared
The variable `eachElementInFirstIsOdd` is declared
The variable `eachElementInSecondIsEven` is declared
The variable `eachElementInSecondIsOdd` is declared
The variable `eachElementInThirdIsEven` is declared
The variable `eachElementInThirdIsOdd` is declared
The value of the variable `firstArray` is the array `[26, 94, 36, 18]`
The value of the variable `secondArray` is the array `[17, 61, 23]`
The value of the variable `thirdArray` is the array `[17, 26, 94, 61, 36, 23, 18]`
The value of the variable `eachElementInFirstIsEven` is `true`
The value of the variable `eachElementInFirstIsOdd` is `false`
The value of the variable `eachElementInSecondIsEven` is `false`
The value of the variable `eachElementInSecondIsOdd` is `true`
The value of the variable `eachElementInThirdIsEven` is `false`
The value of the variable `eachElementInThirdIsOdd` is `false`
The `every()` method was used to iterate over the arrays

Result of code execution:
true
false
false
true
false
false
*/

///////////////////////////////////////////////
// JS V2 block-4 Autochecking  ASSIGNMENT 31/48  Status: Done

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
Modify the isEveryUserActive(users) function so that it checks if all users are currently active (the isActive property) and returns true or false.

** Test
The variable isEveryUserActive is declared
An arrow function with the parameter (users) is assigned to the variable isEveryUserActive
To iterate over the users parameter, the every() method is used
Calling the function with the specified array of users returns false
Calling a function with random but valid arguments returns the correct value

 */

// Javascript Editor:
// START
/*
// Change code below this line
const isEveryUserActive = (users) => {
   
};
// Change code above this line

*/

// Javascript Editor:
// FINISH
/*
// Change code below this line
const isEveryUserActive = (users) => users.every((user) => user.isActive === true);
// Change code above this line

console.log(isEveryUserActive(users));
// const isEveryUserActive = (users) => users.every((user) => user.isActive === true);
// const isEveryUserActive = users.every((user) => user.isActive === true);


console.log(
*/

// RESULT
/*
Result

Done

Assignment 31/48
The variable `isEveryUserActive` is declared
An arrow function with the parameter `(users)` is assigned to the variable `isEveryUserActive`
To iterate over the `users` parameter, the `every()` method is used
Calling the function with the specified array of users returns `false`
Calling a function with random but valid arguments, returns the correct value
*/

///////////////////////////////////////////////
// JS V2 block-4 Autochecking  ASSIGNMENT 32/48  Status: Done

/*
** THEORY
The some(callback) method checks if at least one element of the array passes the test provided by the callback function. Returns true or false.

array.some((element, index, array) => {
  // Callback function body
});
Does not change the original array.
The method iterates over the original array element by element.
Returns true if at least one element of the array satisfies the condition.
Returns false if no element of the array satisfies the condition.
The array iteration is terminated if the callback returns true.
// Is there at least one element greater than or equal to zero? - Yes
[1, 2, 3, 4, 5].some(value => value >= 0); // true

// Is there at least one element greater than or equal to zero? - Yes
[-7, -20, 3, -10, -14].some(value => value >= 0); // true

// Is there at least one element less than zero? - No
[1, 2, 3, 4, 5].some(value => value < 0); // false

// Is there at least one element less than zero? - Yes
[1, 2, 3, -10, 4, 5].some(value => value < 0); // true

** TASK
Using the some() method, modify the code so that:

In the variable anyElementInFirstIsEven, there is the result of checking for the presence of even elements in the array firstArray.
In the variable anyElementInFirstIsOdd, there is the result of checking for the presence of odd elements in the array firstArray.
In the variable anyElementInSecondIsEven, there is the result of checking the presence of even elements in the array secondArray.
In the variable anyElementInSecondIsOdd, there is the result of checking for the presence of odd elements in the array secondArray.
In the variable anyElementInThirdIsEven, there is the result of checking the presence of even elements in the array thirdArray.
In the variable anyElementInThirdIsOdd, there is the result of checking for the presence of odd elements in the array thirdArray.

** Test
The variable firstArray is declared
The value of the variable firstArray is the array [26, 94, 36, 18]
The variable secondArray is declared
The value of the variable secondArray is the array [17, 61, 23]
The variable thirdArray is declared
The value of the variable thirdArray is the array [17, 26, 94, 61, 36, 23, 18]
The variable anyElementInFirstIsEven is declared
The value of the variable anyElementInFirstIsEven is boolean true
The variable anyElementInFirstIsOdd is declared
The value of the variable anyElementInFirstIsOdd is boolean false
The variable anyElementInSecondIsEven is declared
The value of the variable anyElementInSecondIsEven is boolean false
The variable anyElementInSecondIsOdd is declared
The value of the variable anyElementInSecondIsOdd is boolean true
The variable anyElementInThirdIsEven is declared
The value of the variable anyElementInThirdIsEven is boolean true
The variable anyElementInThirdIsOdd is declared
The value of the variable anyElementInThirdIsOdd is boolean true
To iterate over arrays, the some() method was used

 */

// Javascript Editor:
// START
/*
const firstArray = [26, 94, 36, 18];
const secondArray = [17, 61, 23];
const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// Change below this line

const anyElementInFirstIsEven = firstArray;
const anyElementInFirstIsOdd = firstArray;

const anyElementInSecondIsEven = secondArray;
const anyElementInSecondIsOdd = secondArray;

const anyElementInThirdIsEven = thirdArray;
const anyElementInThirdIsOdd = thirdArray;

*/

// Javascript Editor:
// FINISH
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


console.log(
*/

// RESULT
/*
Result

Done

Assignment 32/48
The variable `firstArray` is declared
The variable `secondArray` is declared
The variable `thirdArray` is declared
The variable `anyElementInFirstIsEven` is declared
The variable `anyElementInFirstIsOdd` is declared
The variable `anyElementInSecondIsEven` is declared
The variable `anyElementInSecondIsOdd` is declared
The variable `anyElementInThirdIsEven` is declared
The variable `anyElementInThirdIsOdd` is declared
The value of the variable `firstArray` is the array `[26, 94, 36, 18]`
The value of the variable `secondArray` is the array `[17, 61, 23]`
The value of the variable `thirdArray` is the array `[17, 26, 94, 61, 36, 23, 18]`
The value of the variable `anyElementInFirstIsEven` is `true`
The value of the variable `anyElementInFirstIsOdd` is `false`
The value of the variable `anyElementInSecondIsEven` is `false`
The value of the variable `anyElementInSecondIsOdd` is `true`
The value of the variable `anyElementInThirdIsEven` is `true`
The value of the variable `anyElementInThirdIsOdd` is `true`
The `some()` method was used to iterate over the arrays

Result of code execution:
true
false
false
true
true
true
*/

///////////////////////////////////////////////
// JS V2 block-4 Autochecking  ASSIGNMENT 33/48  Status: Done

/*
** THEORY
We will pass this array of objects to the users parameter when calling the function in the task.
users =
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
Modify the isAnyUserActive(users) function so that it checks for active users (the isActive property) and returns true or false.

** Test
The variable isAnyUserActive is declared
To iterate over the users parameter, the some() method was used
Calling the function with the specified user array returns true
Calling a function with random but valid arguments returns the correct value

 */

// Javascript Editor:
// START
/*
// Change code below this line
const isAnyUserActive = users => {
   
};
// Change code above this line
*/

// Javascript Editor:
// FINISH
/*
// Change code below this line
const isAnyUserActive = (users) => users.some((user) => user.isActive === true);
// Change code above this line

console.log(
*/

// RESULT
/*
Result

Done

Assignment 33/48
The variable `isAnyUserActive` is declared
An arrow function with the parameter `(users)` is assigned to the variable `isAnyUserActive`
To iterate over the `users` parameter, the `some()` method was used
Calling the function with the specified user array returns true
Calling a function with random but valid arguments returns the correct value
*/

///////////////////////////////////////////////
// JS V2 block-4 Autochecking  ASSIGNMENT 34/48  Status: Done

/*
** THEORY
The reduce(callback, initialValue) method is used to sequentially process each element of the array, storing the intermediate result as an accumulator. A bit more difficult to learn than others, but the result is worth it.

array.reduce((previousValue, element, index, array) => {
  // body of the callback function
}, initialValue);
Does not change the original array.
The method iterates over the original array element by element .
Returns anything.
Does anything.
The easiest way to imagine how it works is by calculating the sum of array elements.

const total = [2, 7, 3, 14, 6].reduce((previousValue, number) => {
  return previousValue + number;
}, 0);

console.log(total); // 32
The first parameter of the callback function (previousValue) is the accumulator, that is, the intermediate result. The value returned by the callback function at the current iteration will be the value of this parameter at the next iteration.

For reduce() an optional initial value of the accumulator - the initialValue parameter can be passed as the second argument.

# First, the reduce() method creates an internal accumulator variable and
# assigns to it the value of the initialValue parameter or the first element
# of the array to iterate over, if initialValue is not specified.
previousValue = 0

# Next, the callback function is called for each element of the array. The present value
# of the previousValue parameter is what the callback function returned in the last iteration.
Iteration 1 -> previousValue = 0 -> number = 2 -> return 0 + 2 -> return 2
Iteration 2 -> previousValue = 2 -> number = 7 -> return 2 + 7 -> return 9
Iteration 3 -> previousValue = 9 -> number = 3 -> return 9 + 3 -> return 12
Iteration 4 -> previousValue = 12 -> number = 14 -> return 12 + 14 -> return 26
Iteration 5 -> previousValue = 26 -> number = 6 -> return 26 + 6 -> return 32

# After iterating over the entire array, reduce() method returns the value of the accumulator.
Result - 32
That is, the reduce() method is used when it is necessary to take "many" and reduce to "one". In everyday tasks, its application comes down to working with numbers.

** TASK
The gaming service needs the functionality of calculating the average time spent on games. Modify the code so that the totalPlayTime variable contains the total playing time from the playtimes array.

** Test
The variable players is declared
The value of the variable players is an object of the players with the playing time of each player
The variable playtimes is declared
The value of the variable playtimes is the array [1270, 468, 710, 244]
The variable totalPlayTime is declared
The value of the variable totalPlayTime is the number 2692
To iterate over the array playtimes, use the method reduce()
The variable averagePlayTime is declared
The value of the variable averagePlayTime is a number

 */

// Javascript Editor:
// START
/*
const players = {
  mango: 1270,
  poly: 468,
  ajax: 710,
  kiwi: 244
};
const playtimes = Object.values(players); // [1270, 468, 710, 244]
// Change code below this line

const totalPlayTime = playtimes.;

// Change code above this line
const averagePlayTime = totalPlayTime / playtimes.length;
*/

// Javascript Editor:
// FINISH
/*
const players = {
  mango: 1270,
  poly: 468,
  ajax: 710,
  kiwi: 244
};
const playtimes = Object.values(players); // [1270, 468, 710, 244]
// Change code below this line

const totalPlayTime = playtimes.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);

// Change code above this line
const averagePlayTime = totalPlayTime / playtimes.length;
console.log(averagePlayTime);


console.log(
*/

// RESULT
/*
Result

Done

Assignment 34/48
The variable `players` is declared
The variable `playtimes` is declared
The variable `totalPlayTime` is declared
The variable `averagePlayTime` is declared
The value of the variable `players` is an object of the players with the playing time of each
The value of the variable `playtimes` is an array `[1270, 468, 710, 244]`
The value of the variable `totalPlayTime` is the number `2692`
The value of the variable `averagePlayTime` is the number `673`
To iterate over the array `playtimes`, use the method `reduce()`

Result of code execution:
673
*/

///////////////////////////////////////////////
// JS V2 block-4 Autochecking  ASSIGNMENT 35/48  Status: Done

/*
** THEORY
const students = [
  { name: "Mango", score: 83 },
  { name: "Poly", score: 59 },
  { name: "Ajax", score: 37 },
  { name: "Kiwi", score: 94 },
  { name: "Houston", score: 64 },
];

// The name of the accumulator can be arbitrary, it's just a function parameter
const totalScore = students.reduce((total, student) => {
  return total + student.score;
}, 0);

const averageScore = totalScore / students.length;

** TASK
Our service needs to calculate the average time spent on one game for each player, and get the total amount of these times. You can calculate the time for each of the players by dividing its time (the playtime property) by the number of games (the gamesPlayed property).

** Test
The variable players is declared
The value of the variable players is an array of player objects
The variable totalAveragePlaytimePerGame is declared
The value of the variable totalAveragePlaytimePerGame is the number 1023
To iterate over the array players, the method reduce() is used

 */

// Javascript Editor:
// START
/*
const players = [
  { name: "Mango", playtime: 1270, gamesPlayed: 4 },
  { name: "Poly", playtime: 469, gamesPlayed: 2 },
  { name: "Ajax", playtime: 690, gamesPlayed: 3 },
  { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
];
// Change code below this line

const totalAveragePlaytimePerGame = players;

*/

// Javascript Editor:
// FINISH
/*
const players = [
  { name: "Mango", playtime: 1270, gamesPlayed: 4 },
  { name: "Poly", playtime: 469, gamesPlayed: 2 },
  { name: "Ajax", playtime: 690, gamesPlayed: 3 },
  { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
];
// Change code below this line

const totalAveragePlaytimePerGame = players.reduce(
  (total, player) => {
  return total + player.playtime / player.gamesPlayed ;
}, 0);

console.log(totalAveragePlaytimePerGame);

console.log(
*/

// RESULT
/*
Result

Done

Assignment 35/48
The variable `players` is declared
The variable `totalAveragePlaytimePerGame` is declared
The value of the variable `players` is an array of player objects
The value of the variable `totalAveragePlaytimePerGame` is the number `1023`
To iterate over the array `players`, the method `reduce()` is used

Result of code execution:
1023
*/

///////////////////////////////////////////////
// JS V2 block-4 Autochecking  ASSIGNMENT 36/48  Status: Done

/*
** THEORY
We will pass this array of objects to the users parameter when calling the function from the task.
users = 
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
Modify the calculateTotalBalance(users) function so that it calculates and returns the sum of all funds (the balance property) stored by users from the users array.

** Test
The variable calculateTotalBalance is declared
An arrow function with the parameter (users) is assigned to the calculateTotalBalance variable
To iterate over the users parameter, the reduce() method is used
Calling the function with the specified array of users returns the number 20916
Calling a function with random but valid arguments returns the correct value

 */

// Javascript Editor:
// START
/*
// Change code below this line
const calculateTotalBalance = users => {

};
// Change code above this line
*/

// Javascript Editor:
// FINISH
/*
const calculateTotalBalance = users => users.reduce(
  (totalBalance, user) => {
  return totalBalance + user.balance;
}, 0);
// Change code above this line
console.log(calculateTotalBalance);

console.log(
*/

// RESULT
/*
Result

Done

Assignment 36/48
The variable `calculateTotalBalance` is declared
An arrow function with the parameter `(users)` is assigned to the `calculateTotalBalance` variable
To iterate over the `users` parameter, the `reduce()` method is used
Calling the function with the specified array of users returns the number `20916`
Calling a function with random but valid arguments returns the correct value

Result of code execution:
20916
*/

///////////////////////////////////////////////
// JS V2 block-4 Autochecking  ASSIGNMENT 37/48  Status: Done

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
Modify the getTotalFriendCount(users) function so that it counts and returns the total number of friends (the friends property) of all users from the users array.

** Test
The variable getTotalFriendCount is declared
An arrow function with the parameter (users) is assigned to the variable getTotalFriendCount
To iterate over the users parameter, the reduce() method was used
Calling the function with the specified user array returns the number 14
Calling a function with random but valid arguments returns the correct value

 */

// Javascript Editor:
// START
/*
// Change code below this line
const getTotalFriendCount = users => {
   
};
// Change code above this line
*/

// Javascript Editor:
// FINISH
/*
// Change code below this line
const getTotalFriendCount = (users) =>
  users.reduce((totalFriends, user) => {
    return totalFriends + user.friends.length;
  }, 0);
// Change code above this line

console.log()
console.log(
*/

// RESULT
/*
Result

Done

Assignment 37/48
The variable `getTotalFriendCount` is declared
An arrow function with the parameter `(users)` is assigned to the variable `getTotalFriendCount`
To iterate over the `users` parameter, the `reduce()` method was used
Calling the function with the specified user array returns the number `14`
Calling a function with random but valid arguments returns the correct value
*/

///////////////////////////////////////////////
// JS V2 block-4 Autochecking  ASSIGNMENT 38/48  Status: Done

/*
** THEORY
The sort () method sorts the elements of an array, but unlike other iterating methods it sorts the original array.

Sorts and modifies the original array.
Returns the modified array, that is, a reference to the sorted source.
Sorts in ascending order by default.
Sorting occurs by converting the values ​​to a string and comparing the ordinal numbers in the Unicode table.
An array of numbers, such as the one below, will be sorted in ascending order.

const scores = [61, 19, 74, 35, 92, 56];
scores.sort();
console.log(scores); // [19, 35, 56, 61, 74, 92]
However, since the default values ​​are converted to a string, the standard sorting of numbers works in an unusual way. Therefore, in the next exercise, we will look at how to set a custom sort order.

const scores = [27, 2, 41, 4, 7, 3, 75];
scores.sort();
console.log(scores); // [2, 27, 3, 4, 41, 7, 75]
The array of strings is sorted alphabetically.

const students = ["Jacob", "Artemis", "Solomon", "Adrian", "Kai", "Ganymede"];
students.sort();
console.log(students); // [ "Adrian", "Artemis", "Ganymede", "Jacob", "Kai", "Solomon" ]
In this case, the ordinal number of capital letters is less than that of uppercase letters.

const letters = ["b", "B", "a", "A", "c", "C"];
letters.sort();
console.log(letters); // ["A", "B", "C", "a", "b", "c"]
Due to the fact that the original array is sorted, the principle of purity of functions is violated and it is impossible to conveniently make several derived collections based on the original one. For example, what if you needed to make a collection sorted in ascending order, and another sorted in descending. Therefore, before sorting, make a full copy of the original array and sort it.

const scores = [61, 19, 74, 35, 92, 56];
const ascendingScores = [...scores].sort();

console.log(scores); // [61, 19, 74, 35, 92, 56]
console.log(ascendingScores); // [19, 35, 56, 61, 74, 92]

** TASK
Modify the code so that the ascendingReleaseDates variable contains an ascending copy of the releaseDates array, and the alphabeticalAuthors variable contains a copy of the authors array of authors' names sorted in alphabetical order.

** Test
The variable releaseDates is declared
The value of the releaseDates variable is the array [2016, 1967, 2008, 1984, 1973, 2012, 1997]
The variable authors is declared
The value of the variable authors is the array ["Tanith Lee", "Bernard Cornwell", "Robert Sheckley", "Fyodor Dostoevsky"]
The variable ascendingReleaseDates is declared
The value of the variable ascendingReleaseDates is the array [1967, 1973, 1984, 1997, 2008, 2012, 2016]
The variable alphabeticalAuthors is declared
The value of the variable alphabeticalAuthors is the array ["Bernard Cornwell", "Tanith Lee", "Robert Sheckley", "Fyodor Dostoevsky"]
The sort() method is used

 */

// Javascript Editor:
// START
/*
const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
const authors = [
  "Tanith Lee",
  "Bernard Cornwell",
  "Robert Sheckley",
  "Fyodor Dostoevsky",
];
// Change code below this line

const ascendingReleaseDates = releaseDates

const alphabeticalAuthors = authors;

*/

// Javascript Editor:
// FINISH
/*
const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
const authors = [
  "Tanith Lee",
  "Bernard Cornwell",
  "Robert Sheckley",
  "Fyodor Dostoevsky",
];
// Change code below this line

const ascendingReleaseDates = [...releaseDates].sort();
const alphabeticalAuthors = [...authors].sort();

console.log(ascendingReleaseDates)
console.log(alphabeticalAuthors)

console.log(
*/

// RESULT
/*
Result

Done

Assignment 38/48
The variable `releaseDates` is declared
The variable `authors` is declared
The variable `ascendingReleaseDates` is declared
The variable `alphabeticalAuthors` is declared
The value of the variable `releaseDates` is the array `[2016, 1967, 2008, 1984, 1973, 2012, 1997]`
The value of the variable `authors` is the array `['Tanith Lee', 'Bernard Cornwell', 'Robert Sheckley', 'Fyodor Dostoevsky']`
The value of the variable `ascendingReleaseDates` is the array`[1967, 1973, 1984, 1997, 2008, 2012, 2016]`
The value of the variable `alphabeticalAuthors` is the array `['Bernard Cornwell', 'Tanith Lee', 'Robert Sheckley', 'Fyodor Dostoevsky']`
To iterate over the array `authors`, the method `sort()` is used

Result of code execution:
[
  1967, 1973,
  1984, 1997,
  2008, 2012,
  2016
]
[
  'Bernard Cornwell',
  'Fyodor Dostoevsky',
  'Robert Sheckley',
  'Tanith Lee'
]
*/

///////////////////////////////////////////////
// JS V2 block-4 Autochecking  ASSIGNMENT 39/48  Status: Done

/*
** THEORY
To specify a custom sort order, the sort(compareFunction) method needs to pass a callback function with two parameters. This is a compare function, the sort order depends on its result. The sort() method will call the compare function for two arbitrary elements.

array.sort((a, b) => {
  // Callback function body
});
a is the first element to compare.
b is the second element to compare.
If the call to compareFunction(a, b) returns any negative value, that is, a is less than b, sorting will put a before b. This is an ascending sort.

const scores = [61, 19, 74, 35, 92, 56];
const ascendingScores = [...scores].sort((a, b) => a - b);
console.log(ascendingScores); // [19, 35, 56, 61, 74, 92]
If the call to compareFunction(a, b) returns any positive value greater than zero, that is, b is greater than a, the sort will put b before a. This is a descending sort.

const scores = [61, 19, 74, 35, 92, 56];
const descendingScores = [...scores].sort((a, b) => b - a);
console.log(descendingScores); // [92, 74, 61, 56, 35, 19]
If the call to compareFunction(a, b) returns 0, sorting will leave a and b unchanged in relation to each other, but sort them in relation to all other elements. But it doesn't really matter what to return if their mutual order doesn't matter.

** TASK
The online library needs to display books sorted by publication date, ascending or descending order. Modify the code so that the ascendingReleaseDates variable contains a copy of the releaseDates array sorted in ascending order, and the descendingReleaseDates variable contains a copy sorted in descending order.

** Test
The variable releaseDates is declared
The value of the releaseDates variable is the array [2016, 1967, 2008, 1984, 1973, 2012, 1997]
The variable ascendingReleaseDates is declared
The value of the variable ascendingReleaseDates is the array [1967, 1973, 1984, 1997, 2008, 2012, 2016]
The variable descendingReleaseDatesis declared
The value of the variable descendingReleaseDates is the array [2016, 2012, 2008, 1997, 1984, 1973, 1967]
The sort() method is used

 */

// Javascript Editor:
// START
/*
const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// Change code below this line

const ascendingReleaseDates = releaseDates;

const descendingReleaseDates = releaseDates;
*/

// Javascript Editor:
// FINISH
/*
const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// Change code below this line

const ascendingReleaseDates = [...releaseDates].sort((a, b) => a - b);
const descendingReleaseDates = [...releaseDates].sort((a, b) => b - a);

console.log(ascendingReleaseDates); //[1967, 1973, 1984, 1997, 2008, 2012, 2016]
console.log(descendingReleaseDates); // [2016, 2012, 2008, 1997, 1984, 1973, 1967]

console.log(
*/

// RESULT
/*
Result

Done

Assignment 39/48
The variable `releaseDates` is declared
The variable `ascendingReleaseDates` is declared
The variable `descendingReleaseDates` is declared
The value of the variable `releaseDates` is the array `[2016, 1967, 2008, 1984, 1973, 2012, 1997]`
The value of the variable `ascendingReleaseDates` is the array `[1967, 1973, 1984, 1997, 2008, 2012, 2016]`
The value of the variable `descendingReleaseDates` is the array `[2016, 2012, 2008, 1997, 1984, 1973, 1967]`
To iterate over the `releaseDates` array, the `sort()` method is used`

Result of code execution:
[
  1967, 1973,
  1984, 1997,
  2008, 2012,
  2016
]
[
  2016, 2012,
  2008, 1997,
  1984, 1973,
  1967
]
*/

///////////////////////////////////////////////
// JS V2 block-4 Autochecking  ASSIGNMENT 40/48  Status: Done

/*
** THEORY
To sort strings alphabetically, ascending or descending, use the localeCompare() string method.

firstString.localeCompare(secondString)
It is called on the string to be compared (firstString) with the one passed as an argument (secondString).

"a".localeCompare("b"); // -1
"b".localeCompare("a"); // 1
"a".localeCompare("a"); // 0
"b".localeCompare("b"); // 0
Returns a negative value if firstString must be before secondString.
Returns a positive value greater than zero if firstString must be after secondString.
If the strings are the same, zero is returned.
This is useful when sorting strings, since the sort() method expects the same values ​​from the callback function.

const students = ["Jacob", "Artemis", "Solomon", "Adrian", "Kai", "Ganymede"];

const inAlphabetOrder = [...students].sort((a, b) => a.localeCompare(b));
console.log(inAlphabetOrder); // [ "Adrian", "Artemis", "Ganymede", "Jacob", "Kai", "Solomon" ]

const inReversedOrder = [...students].sort((a, b) => b.localeCompare(a));
console.log(inReversedOrder); // [ "Solomon", "Kai", "Jacob", "Ganymede", "Artemis", "Adrian" ]

** TASK
The online library needs to display books sorted by author, in alphabetical and reverse alphabetical order. Modify the code so that the authorsInAlphabetOrder variable is an alphabetically sorted copy of the authors array, and the authorsInReversedOrder variable has a copy sorted in reverse alphabetical order.

** Test
The variable authors is declared
The value of the variable authors is the array ["Tanith Lee", "Bernard Cornwell", "Robert Sheckley", "Fyodor Dostoevsky", "Howard Lovecraft"]
The variable authorsInAlphabetOrder is declared
The value of the variable authorsInAlphabetOrder is the array ["Bernard Cornwell", "Fyodor Dostoevsky", "Howard Lovecraft", "Robert Sheckley", "Tanith Lee"]
The variable authorsInReversedOrder is declared
The value of the variable authorsInReversedOrder is the array ["Tanith Lee", "Robert Sheckley", "Howard Lovecraft", "Fyodor Dostoevsky", "Bernard Cornwell"]
The sort() method is used

 */

// Javascript Editor:
// START
/*
const authors = [
  "Tanith Lee",
  "Bernard Cornwell",
  "Robert Sheckley",
  "Fyodor Dostoevsky",
  "Howard Lovecraft",
];
// Change code below this line

const authorsInAlphabetOrder = authors;

const authorsInReversedOrder = authors;

*/

// Javascript Editor:
// FINISH
/*
const authors = [
  "Tanith Lee",
  "Bernard Cornwell",
  "Robert Sheckley",
  "Fyodor Dostoevsky",
  "Howard Lovecraft",
];
// Change code below this line

const authorsInAlphabetOrder = [...authors].sort((a, b) => a.localeCompare(b));
const authorsInReversedOrder = [...authors].sort((a, b) => b.localeCompare(a));

console.log(authorsInAlphabetOrder);
console.log(authorsInReversedOrder);

console.log(
*/

// RESULT
/*
Result

Done

Assignment 40/48
The variable `authors` is declared
The variable `authorsInAlphabetOrder` is declared
The variable `authorsInReversedOrder` is declared
The value of the variable `authors` is the array `['Tanith Lee', 'Bernard Cornwell', 'Robert Sheckley', 'Fyodor Dostoevsky', 'Howard Lovecraft']`
The value of the variable `authorsInAlphabetOrder` is the array `['Bernard Cornwell', 'Fyodor Dostoevsky', 'Howard Lovecraft', 'Robert Sheckley', 'Tanith Lee']`
The value of the variable `authorsInReversedOrder` is the array `['Tanith Lee', 'Robert Sheckley', 'Howard Lovecraft', 'Fyodor Dostoevsky', 'Bernard Cornwell']`
To iterate over the array `authors`, the `sort()` method is used
Result of code execution:
[
  'Bernard Cornwell',
  'Fyodor Dostoevsky',
  'Howard Lovecraft',
  'Robert Sheckley',
  'Tanith Lee'
]
[
  'Tanith Lee',
  'Robert Sheckley',
  'Howard Lovecraft',
  'Fyodor Dostoevsky',
  'Bernard Cornwell'
]
*/

///////////////////////////////////////////////
// JS V2 block-4 Autochecking  ASSIGNMENT 41/48  Status: Done

/*
** THEORY
When working with an array of objects, sorting is performed by the numeric or string value of some property. For example, there is a group of students with test scores. It is necessary to sort the array of objects in ascending and descending order of the number of scores, and by the student's name.

const students = [
  { name: "Mango", score: 83 },
  { name: "Poly", score: 59 },
  { name: "Ajax", score: 37 },
  { name: "Kiwi", score: 94 },
];

const inAscendingScoreOrder = [...students].sort(
  (firstStudent, secondStudent) => firstStudent.score - secondStudent.score
);

const inDescendingScoreOrder = [...students].sort(
  (firstStudent, secondStudent) => secondStudent.score - firstStudent.score
);

const inAlphabeticalOrder = [...students].sort((firstStudent, secondStudent) =>
  firstStudent.name.localeCompare(secondStudent.name)
);

** TASK
Modify the code so that:

The sortedByAuthorName variable contains an array of books sorted by the author's name in alphabetical order.
The sortedByReversedAuthorName variable contains an array of books sorted by author name in reverse alphabetical order.
The sortedByAscendingRating variable contains an array of books sorted in ascending order of rating.
The sortedByDescentingRating variable has an array of books sorted in descending order of rating.

** Test
The variable books is declared
The value of the variable books is the original array of book objects
The variable sortedByAuthorName is declared
The value of the variable sortedByAuthorName is an array of books sorted by author name in alphabetical order
The variable sortedByReversedAuthorName is declared
The value of the variable sortedByReversedAuthorName is an array of books sorted by author name in reverse alphabetical order
The variable sortedByAscendingRating is declared
The value of the variable sortedByAscendingRating is an array of books sorted in ascending order of rating
The variable sortedByDescentingRating is declared
The value of the variable sortedByDescentingRating is an array of books sorted in descending order of rating
To iterate over the array books the sort() method is used

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

const sortedByAuthorName = books;

const sortedByReversedAuthorName = books;

const sortedByAscendingRating = books;

const sortedByDescentingRating = books;

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

const sortedByAuthorName = [...books].sort((firstBook, secondBook) => (firstBook.author).localeCompare(secondBook.author));

const sortedByReversedAuthorName = [...books].sort((firstBook, secondBook) => (secondBook.author).localeCompare(firstBook.author));

const sortedByAscendingRating = [...books].sort((firstBook, secondBook) => firstBook.rating - secondBook.rating);

const sortedByDescentingRating = [...books].sort((firstBook, secondBook) => secondBook.rating - firstBook.rating);

console.log(sortedByAuthorName);
console.log(sortedByReversedAuthorName);
console.log(sortedByAscendingRating);
console.log(sortedByDescentingRating);

console.log(
*/

// RESULT
/*
Result

Done

Assignment 41/48
The variable `books` is declared
The variable `sortedByAuthorName` is declared
The variable `sortedByReversedAuthorName` is declared
The variable `sortedByAscendingRating` is declared
The variable `sortedByDescentingRating` is declared
The value of the variable `books` is the original array of book objects
The value of the variable `sortedByAuthorName` is an array of books sorted alphabetically by author name
The value of the variable `sortedByReversedAuthorName` is an array of books sorted by author name in reverse alphabetical order
The value of the variable `sortedByAscendingRating` is an array of books sorted in ascending order of rating
The value of the variable `sortedByDescentingRating` is an array of books sorted in descending order of rating
The `sort()` method is used to iterate over the array `books`
Result of code execution:
[
  {
    title: 'The Last Kingdom',
    author: 'Bernard Cornwell',
    rating: 8.38
  },
  { title: 'Enemy of God', author: 'Bernard Cornwell', rating: 8.67 },
  {
    title: 'The Dream of a Ridiculous Man',
    author: 'Fyodor Dostoevsky',
    rating: 7.75
  },
  {
    title: 'Beside Still Waters',
    author: 'Robert Sheckley',
    rating: 8.51
  },
  { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 }
]
[
  { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
  {
    title: 'Beside Still Waters',
    author: 'Robert Sheckley',
    rating: 8.51
  },
  {
    title: 'The Dream of a Ridiculous Man',
    author: 'Fyodor Dostoevsky',
    rating: 7.75
  },
  {
    title: 'The Last Kingdom',
    author: 'Bernard Cornwell',
    rating: 8.38
  },
  { title: 'Enemy of God', author: 'Bernard Cornwell', rating: 8.67 }
]
[
  {
    title: 'The Dream of a Ridiculous Man',
    author: 'Fyodor Dostoevsky',
    rating: 7.75
  },
  { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
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
  { title: 'Enemy of God', author: 'Bernard Cornwell', rating: 8.67 },
  {
    title: 'Beside Still Waters',
    author: 'Robert Sheckley',
    rating: 8.51
  },
  {
    title: 'The Last Kingdom',
    author: 'Bernard Cornwell',
    rating: 8.38
  },
  { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
  {
    title: 'The Dream of a Ridiculous Man',
    author: 'Fyodor Dostoevsky',
    rating: 7.75
  }
]
*/

///////////////////////////////////////////////
// JS V2 block-4 Autochecking  ASSIGNMENT 42/48  Status: Done

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
Modify the sortByAscendingBalance(users) function so that it returns an array of users sorted in ascending order of their balance (the balance property).

** Test
The variable sortByAscendingBalance is declared
An arrow function with the parameter (users) is assigned to the variable sortByAscendingBalance
The value of the users parameter is not changed
Calling the function with the specified array of users returns a new array of users sorted in ascending order of their balance
Calling a function with random but valid arguments returns the correct value
To iterate over the users parameter, the sort() method is used

 */

// Javascript Editor:
// START
/*
// Change code below this line
const sortByAscendingBalance = users => {
   
};
// Change code above this line
*/

// Javascript Editor:
// FINISH
/*
// Change code below this line
const sortByAscendingBalance = users => [...users].sort((userA, userB) => userA.balance - userB.balance);
// Change code above this line

console.log(
*/

// RESULT
/*
Result

Done

Assignment 42/48
The variable `sortByAscendingBalance` is declared
An arrow function with the parameter `(users)` is assigned to the variable `sortByAscendingBalance
The value of the `users` parameter is not changed
To iterate over the `users` parameter, the `sort()` method is used
Calling the function with the specified array of users returns a new array of users sorted in ascending order of their balance
Calling a function with random but valid arguments returns the correct value
*/

///////////////////////////////////////////////
// JS V2 block-4 Autochecking  ASSIGNMENT 43/48  Status: Done

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
Modify the sortByDescendingFriendCount(users) function so that it returns an array of users sorted in descending order by the number of their friends (the friends property).

** Test
The variable sortByDescendingFriendCount is declared
An arrow function with the parameter (users) is assigned to the variable sortByDescendingFriendCount
The value of the users parameter is not changed
To iterate over the users parameter, the sort() method was used
Calling the function with the specified array of users returns a new array of users sorted in descending order by the number of their friends
Calling a function with random but valid arguments returns the correct value

 */

// Javascript Editor:
// START
/*
// Change code below this line
const sortByDescendingFriendCount = users => {
   
};
// Change code above this line
*/

// Javascript Editor:
// FINISH
/*
// Change code below this line
const sortByDescendingFriendCount = users => [...users].sort((userA, userB) => userB.friends.length - userA.friends.length);
// Change code above this line

console.log(
*/

// RESULT
/*
Result

Done

Assignment 43/48
The variable `sortByDescendingFriendCount` is declared
An arrow function with the parameter `(users)` is assigned to the variable `sortByDescendingFriendCount`
The value of the `users` parameter is not changed
To iterate over the `users` parameter, the `sort()` method was used
Calling the function with the specified array of users returns a new array of users sorted in descending order by the number of their friends
Calling a function with random but valid arguments returns the correct value
*/

///////////////////////////////////////////////
// JS V2 block-4 Autochecking  ASSIGNMENT 44/48  Status: Done

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
Modify the sortByName (users) function so that it returns an array of users sorted by their name (the name property) in alphabetical order.

** Test
The variable sortByName is declared
An arrow function with the parameter (users) is assigned to the variable sortByName
The value of the users parameter is not changed
To iterate over the users parameter, the sort() method was used
Calling the function with the specified array of users returns a new array of users sorted by name in alphabetical order
Calling a function with random but valid arguments returns the correct value

 */

// Javascript Editor:
// START
/*
// Change code below this line
const sortByName = users => {

};
// Change code above this line
*/

// Javascript Editor:
// FINISH
/*
// Change code below this line
const sortByName = users => [...users].sort((userA, userB) => userA.name.localeCompare(userB.name));
// Change code above this line

console.log(
*/

// RESULT
/*
The variable `sortByName` is declared
An arrow function with the parameter `(users)` is assigned to the variable `sortByName`
The value of the `users` parameter is not changed
To iterate over the `users` parameter, the `sort()` method was used
Calling the function with the specified array of users returns a new array of users sorted by name in alphabetical order
Calling a function with random but valid arguments returns the correct value
*/

///////////////////////////////////////////////
// JS V2 block-4 Autochecking  ASSIGNMENT 45/48  Status: Done

/*
** THEORY
There is an array of objects with names, grades and сourses attended by each student.

const students = [
  { name: "Mango", score: 83, courses: ["mathematics", "physics"] },
  { name: "Poly", score: 59, courses: ["science", "mathematics"] },
  { name: "Ajax", score: 37, courses: ["physics", "biology"] },
  { name: "Kiwi", score: 94, courses: ["literature", "science"] },
];
You need to get an array of their names sorted in ascending order of test scores. To do this, we will sort the copy of the array using the sort() method, and then, using the map() method, compose an array of the values ​​of the name property from the sorted

array.

const sortedByAscendingScore = [...students].sort((a, b) => a.score - b.score);
const names = sortedByAscendingScore.map(student => student.name);

console.log(names); // ["Ajax", "Poly", "Mango", "Kiwi"]
The problem is that we have intermediate variables after each operation except the final one. The sortedByAscendingScore variable is superfluous and is only needed to store the intermediate result.

You can get rid of such "dead" variables by grouping method calls into chains. Each next method will be executed on the result of the work of the previous one.

const names = [...students]
  .sort((a, b) => a.score - b.score)
  .map(student => student.name);

console.log(names); // ["Ajax", "Poly", "Mango", "Kiwi"]
Make a copy of the original array before sorting.
Call the sort() method on the copy.
Apply the map() method to the result of the sort() method.
The names variable is assigned the result of the map() method.
Let's get an alphabetically sorted array of unique visited courses.

const uniqueSortedCourses = students
  .flatMap(student => student.courses)
  .filter((course, index, array) => array.indexOf(course) === index)
  .sort((a, b) => a.localeCompare(b));

console.log(uniqueSortedCourses); // ["biology", "science", "literature", "mathematics", "physics"]
On the original array, call flatMap() and create a flattened array of all courses.
Apply the filter() method to the result of the flatMap() method to filter unique elements.
On the result of the filter() method, call sort().
The result of the sort() method is assigned to the uniqueSortedCourses variable .
The method chaining can be of arbitrary length, but usually no more than 2-3 operations. First, iteration methods are used for relatively simple collection operations. Secondly, the call of each subsequent method is an additional iteration over the array which with a sufficient number can affect performance.

** TASK
Modify the code so that the names variable contains an array of names of authors in alphabetical order, whose books have a rating higher than the value of the MIN_BOOK_RATING variable.

** Test
The variable books is declared
The value of the variable books is the original array of objects
The variable MIN_BOOK_RATING is declared
The value of the variable MIN_BOOK_RATING is the number 8
The variable names is declared
The value of the variable names is the array ["Bernard Cornwell", "Howard Lovecraft", "Robert Sheckley"]
No declared variables other than books, MIN_BOOK_RATING and names
The method chaining filter, map, sort is used

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
  {
    title: "The Dreams in the Witch House",
    author: "Howard Lovecraft",
    rating: 8.67,
  },
];
const MIN_BOOK_RATING = 8;
// Change code below this line

const names = books;

*/

// Javascript Editor:
// FINISH
/*
'use strict';

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

console.log(
*/

// RESULT
/*
Result

Done

Assignment 45/48
The variable `books` is declared
The variable `MIN_BOOK_RATING` is declared
The variable `names` is declared
The value of the variable `books` is the original array of objects
The value of the variable `MIN_BOOK_RATING` is the number `8`
The value of the variable `names` is the array `['Bernard Cornwell', 'Howard Lovecraft', 'Robert Sheckley']`
No declared variables other than `books`, `MIN_BOOK_RATING` and `names`
The method chaining `filter`, `map`, `sort` is used

Result of code execution:
[ 'Bernard Cornwell', 'Howard Lovecraft', 'Robert Sheckley' ]
*/

///////////////////////////////////////////////
// JS V2 block-4 Autochecking  ASSIGNMENT 46/48  Status: Done

/*
** THEORY
We will pass this array of objects to the users parameter when calling the function in the task.
const users =
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
    friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
    isActive: true,
    balance: 3951,
    gender: "male"
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman", "Adrian Cross", "Solomon Fokes"],
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
Modify the getNamesSortedByFriendCount(users) function so that it returns an array of usernames sorted in ascending order by the number of their friends (the friends property).

** Test
The variable getNamesSortedByFriendCount is declared
An arrow function with the parameter (users) is assigned to the variable getNamesSortedByFriendCount
The body of the function uses chaining methods
The value of the users parameter is not changed
Calling the function with the specified user array returns the array ["Moore Hensley", "Sharlene Bush", "Elma Head", "Sheree Anthony", "Ross Vazquez", "Carey Barr", "Blackburn Dotson"]
Calling a function with random but valid arguments returns the correct value

 */

// Javascript Editor:
// START
/*
// Change code below this line
const getNamesSortedByFriendCount = users => {
   
};
// Change code above this line
*/

// Javascript Editor:
// FINISH
/*
// Change code below this line
const getNamesSortedByFriendCount = users => {
   
};
// Change code above this line

const getNamesSortedByFriendCount = users => users.sort((userA, userB) => userA.friends.length - userB.friends.length)
  .map((user) => user.name);

console.log(getNamesSortedByFriendCount(users));

console.log(
*/

// RESULT
/*
Result

Done

Assignment 46/48
The variable `getNamesSortedByFriendCount` is declared
An arrow function with the parameter `(users)` is assigned to the variable `getNamesSortedByFriendCount`
The body of the function uses chaining methods
The value of the `users` parameter is not changed
Calling the function with the specified user array returns the array `['Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Sheree Anthony', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson']`
Calling a function with random but valid arguments returns the correct value

Result of code execution:
['Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Sheree Anthony', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson']
*/

///////////////////////////////////////////////
// JS V2 block-4 Autochecking  ASSIGNMENT 47/48  Status: Done

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
    friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
    isActive: true,
    balance: 3951,
    gender: "male"
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman", "Adrian Cross", "Solomon Fokes"],
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
Modify the getSortedFriends (users) function so that it returns an array of unique friends' names (the friends property) sorted alphabetically.

** Test
The variable getSortedFriends is declared
An arrow function with the parameter (users) is assigned to the variable getSortedFriends
The body of the function uses the chaining methods in the correct order
The value of the users parameter is not changed
Calling the function with the specified user array returns the array ["Adrian Cross", "Aisha Tran", "Briana Decker", "Eddie Strong", "Goldie Gentry", "Jacklyn Lucas", "Jordan Sampson", "Linda Chapman", "Marilyn Mcintosh", "Naomi Buckner", "Padilla Garrison", "Sharron Pace", "Solomon Fokes"]
Calling a function with random but valid arguments returns the correct value

 */

// Javascript Editor:
// START
/*
// Change code below this line
const getSortedFriends = users => {
   
};
// Change code above this line
*/

// Javascript Editor:
// FINISH
/*
// Change code below this line
const getSortedFriends = users => {
   
};
// Change code above this line


const getSortedFriends = users=> users
  .flatMap(user => user.friends)
  .filter((user, index, array) => array.indexOf(user) === index)
  .sort((userA, userB) => userA.localeCompare(userB));
console.log(
*/

// RESULT
/*
Result

Done

Assignment 47/48
The variable `getSortedFriends` is declared
An arrow function with the parameter `(users)` is assigned to the variable `getSortedFriends`
The body of the function uses the chaining methods in the correct order
The value of the `users` parameter is not changed
Calling the function with the specified user array returns the array `['Adrian Cross', 'Aisha Tran', 'Briana Decker', 'Eddie Strong', 'Goldie Gentry', 'Jacklyn Lucas', 'Jordan Sampson', 'Linda Chapman', 'Marilyn Mcintosh', 'Naomi Buckner', 'Padilla Garrison', 'Sharron Pace', 'Solomon Fokes']`
Calling a function with random but valid arguments returns the correct value

Result of code execution:
(13) ['Adrian Cross', 'Aisha Tran', 'Briana Decker', 'Eddie Strong', 'Goldie Gentry', 'Jacklyn Lucas', 'Jordan Sampson', 'Linda Chapman', 'Marilyn Mcintosh', 'Naomi Buckner', 'Padilla Garrison', 'Sharron Pace', 'Solomon Fokes']
*/

///////////////////////////////////////////////
// JS V2 block-4 Autochecking  ASSIGNMENT 48/48  Status: Done

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
    friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
    isActive: true,
    balance: 3951,
    gender: "male"
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman", "Adrian Cross", "Solomon Fokes"],
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
Modify the getTotalBalanceByGender (users, gender) function so that it returns the total balance of users (the balance property) whose gender (the gender property) matches the value of the gender parameter..

** Test
The variable getTotalBalanceByGender is declared
An arrow function with parameters (users, gender) is assigned to the variable getTotalBalanceByGender
The body of the function uses the methods chained in the correct order
The value of the users parameter is not changed
If the value of the parameter gender is the string "male", the function returns the number 12053
If the value of the gender parameter is the string "female", the function returns the number 8863
Calling a function with random but valid arguments, returns the correct value

 */

// Javascript Editor:
// START
/*
// Change code below this line
const getTotalBalanceByGender = (users, gender) => {

};
// Change code above this line
*/

// Javascript Editor:
// FINISH
/*
// Change code below this line
const getTotalBalanceByGender = (users, gender) =>
  users
    .filter((user) => user.gender === gender)
    .reduce((totalBalance, user) => {
      return totalBalance + user.balance;
    }, 0);
// Change code above this line

console.log(
*/

// RESULT
/*
Result

Done

Assignment 48/48
The variable `getTotalBalanceByGender` is declared
An arrow function with parameters `(users, gender)` is assigned to the variable `getTotalBalanceByGender`
The body of the function uses the methods chaining in the correct order
The value of the `users` parameter is not changed
If the value of the parameter `gender` is the string `male`, the function returns the number `12053`
If the value of the `gender` parameter is the string `female`, the function returns the number `8863`
Calling a function with random but valid arguments, returns the correct value

Result of code execution:
Male: 12053.
Female: 8863.
12053
8863
*/
