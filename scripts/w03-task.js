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
    let subtractNumber1 = Number(document.querySelector('#subtract1').value);
    let subtractNumber2 = Number(document.querySelector('#subtract2').value);
  
    document.querySelector('#difference').value = subtract(subtractNumber1, subtractNumber2);
  };

  document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);


/* Arrow Function - Multiply Numbers */
const multiply = (number1, number2) => {
    return number1 * number2;
  };
  
  const multiplyNumbers = () => {
    
    let factor1 = Number(document.querySelector('#factor1').value);
    let factor2 = Number(document.querySelector('#factor2').value);
  
    document.querySelector('#product').value = multiply(factor1, factor2);
  };
  
  document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);


/* Open Function Use - Divide Numbers */
function divide(dividend, divisor) {
    if (divisor === 0) {
      return null;
    }
  
    return dividend / divisor;
  }
  
  const divideNumbers = () => {
    let dividend = Number(document.querySelector('#dividend').value);
    let divisor = Number(document.querySelector('#divisor').value);
  
    /* calls */
    let result = divide(dividend, divisor);
  
    /* In case of user putting 0 in divisor  */
    if (result === null) {
      alert("You cannot divide by zero!");

    } else {
      // If the result is valid, update the HTML document with the result.
      document.querySelector('#quotient').value = result;
    }
  };
  
  document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);


/* Decision Structure */

document.querySelector('#getTotalDue').addEventListener('click', () => {
    /* this will get the subtotal entered by the user and convert it to a number*/
    let subtotal = Number(document.querySelector('#subtotal').value);
  
    /* this checks if the membership checkbox is checked*/
    let hasMembership = document.querySelector('#membership').checked;
  
    /* if the user has a membership, apply 15% discount! */
    let total = hasMembership ? subtotal * 0.85 : subtotal; 
  
    let totalFormatted = total.toFixed(2);

    document.querySelector('#total').textContent = `$${totalFormatted}`;
  });
  
/* ARRAY METHODS - Functional Programming */
let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

/* Output Source Array */
document.querySelector('#array').innerHTML = numbersArray.join(', ');

/* Output Odds Only Array */
let oddNumbers = numbersArray.filter(number => number % 2 !== 0);
document.querySelector('#odds').innerHTML = oddNumbers.join(', ');

/* Output Evens Only Array */
let evenNumbers = numbersArray.filter(number => number % 2 === 0);
document.querySelector('#evens').innerHTML = evenNumbers.join(', ');

/* Output Sum of Org. Array */
let sum = numbersArray.reduce((accumulator, currentNumber) => accumulator + currentNumber, 0);
document.querySelector('#sumOfArray').textContent = sum;

/* Output Multiplied by 2 Array */
let multipliedNumbers = numbersArray.map(number => number * 2);
document.querySelector('#multiplied').innerHTML = multipliedNumbers.join(', ');

/* Output Sum of Multiplied by 2 Array */
let sumOfMultiplied = numbersArray.map(number => number * 2).reduce((accumulator, currentNumber) => accumulator + currentNumber, 0);
document.querySelector('#sumOfMultiplied').textContent = sumOfMultiplied;