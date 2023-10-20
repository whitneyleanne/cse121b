/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = 'Whitney Hansen';
let currentYear = 2023;
let profilePicture = 'images/whitney.jpg';


/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
var imageElement = document.querySelector('img');

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('alt', `Profile image of ${fullName}`);


/* Step 5 - Array */
let favoriteFoods = ['Enchiladas', 'Pizza', 'Sushi', 'Nachos', 'Five Cheese Ziti Al Forno']

let newFavoriteFood = 'Spaghetti';
favoriteFoods.push(newFavoriteFood);

foodElement.innerHTML = favoriteFoods.join('<br>');
// Removes first element in the array
favoriteFoods.shift();

// Appends the modified array output with a line break
foodElement.innerHTML += '<br>' + favoriteFoods.join('<br>');

// this removes the last element in the favorite food array
favoriteFoods.pop();

// Append the array output with the final modified favorite foods array and a line break
foodElement.innerHTML += '<br>' + favoriteFoods.join('<br>');



