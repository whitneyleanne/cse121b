document.addEventListener('DOMContentLoaded', (event) => {
    // Step 2 - Variables
    let fullName = 'Whitney Hansen';
    let currentYear = 2023;
    let profilePicture = 'images/whitney.jpg';

    // Step 3 - Element Variables
    const nameElement = document.getElementById('name');
    const foodElement = document.getElementById('food');
    const yearElement = document.getElementById('year');
    var imageElement = document.querySelector('img');

    // Step 4 - Adding Content
    nameElement.innerHTML = `<strong>${fullName}</strong>`;
    yearElement.textContent = currentYear;
    imageElement.setAttribute('src', profilePicture);
    imageElement.setAttribute('alt', `Profile image of ${fullName}`);

    // Step 5 - Array
    let favoriteFoods = ['Enchiladas', 'Pizza', 'Sushi', 'Nachos', 'Five Cheese Ziti Al Forno'];
    
    let newFavoriteFood = 'Spaghetti';
    favoriteFoods.push(newFavoriteFood);
    
    // Build the content string
    let contentString = favoriteFoods.join(', ');

    favoriteFoods.shift(); // Removes first element
    contentString += ', ' + favoriteFoods.join(', ');

    favoriteFoods.pop(); // Removes last element
    contentString += ', ' + favoriteFoods.join(', ');

    // Update the innerHTML with the final content
    foodElement.textContent = contentString; // Using textContent for plain text
});
