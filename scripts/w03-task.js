/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2) {
  return number1 + number2;
}

function addNumbers() {
  let addNumber1 = Number(document.querySelector('#add1').value);
  let addNumber2 = Number(document.querySelector('#add2').value);
  document.querySelector('#sum').value = add(addNumber1, addNumber2);
}

document.querySelector('#addNumbers').addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */
const subtract = function(number1, number2) {
  return number1 - number2;
};

const subtractNumbers = function() {
  let subNumber1 = Number(document.querySelector('#subtract1').value);
  let subNumber2 = Number(document.querySelector('#subtract2').value);
  document.querySelector('#difference').value = subtract(subNumber1, subNumber2);
};

document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);


/* Arrow Function - Multiply Numbers */
const multiply = (number1, number2) => number1 * number2;

const multiplyNumbers = () => {
    let factor1 = Number(document.querySelector('#factor1').value);
    let factor2 = Number(document.querySelector('#factor2').value);
    document.querySelector('#product').value = multiply(factor1, factor2);
};

document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);


/* Open Function Use - Divide Numbers */
function divide(number1, number2) {
  return number1 / number2;
}

const divideNumbers = function() {
  let dividend = Number(document.querySelector('#dividend').value);
  let divisor = Number(document.querySelector('#divisor').value);
  document.querySelector('#quotient').value = divide(dividend, divisor).toFixed(2);
};

document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);


/* Decision Structure */
document.querySelector('#getTotal').addEventListener('click', function() {
  let subtotal = Number(document.querySelector('#subtotal').value);
  let isMember = document.querySelector('#member').checked;
  let total = isMember ? subtotal * 0.85 : subtotal;
  document.querySelector('#total').textContent = `$ ${total.toFixed(2)}`;
});


  
/* ARRAY METHODS - Functional Programming */
let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

/* Output Source Array */
document.querySelector('#array').textContent = numbersArray.join(', ');

/* Output Odds Only Array */
document.querySelector('#odds').textContent = numbersArray.filter(number => number % 2 === 1).join(', ');

/* Output Evens Only Array */
document.querySelector('#evens').textContent = numbersArray.filter(number => number % 2 === 0).join(', ');

/* Output Sum of Org. Array */
document.querySelector('#sumOfArray').textContent = numbersArray.reduce((sum, number) => sum + number, 0);

/* Output Multiplied by 2 Array */
document.querySelector('#multiplied').textContent = numbersArray.map(number => number * 2).join(', ');

/* Output Sum of Multiplied by 2 Array */
document.querySelector('#sumOfMultiplied').textContent = numbersArray.map(number => number * 2).reduce((sum, number) => sum + number, 0);