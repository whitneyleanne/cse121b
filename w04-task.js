/* LESSON 3 - Programming Tasks */

/* Profile Object  */


let myProfile = {
    name: "Whitney Hansen",
    photo: 'images/whitney.jpg',  // Replace with the actual path and name of your image
    favoriteFoods: [
      'Pizza',
      'Enchiladas',
      'Sushi',
      'Nachos',
      'Spaghetti'
    ],
    hobbies: [
      'Reading',
      'Hiking',
      'Collecting Rocks',
      'Watching TV'
    ],
    placesLived: []  
  };
  

/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push({
    place: 'New Zealand',
    length: '5 months'
  });

  myProfile.placesLived.push({
    place: 'Island Park, Idaho',
    length: '1 year'
  });
  
  myProfile.placesLived.push({
    place: 'Rexburg, Idaho',
    length: '5 years'
  });
  
  myProfile.placesLived.push({
    place: 'Chester, Idaho',
    length: '18 years'
  });


  


/* DOM Manipulation - Output */

/* Name */
document.getElementById('name').textContent = myProfile.name;

/* Photo with attributes */
let photoElement = document.getElementById('photo');
photoElement.src = myProfile.photo;
photoElement.alt = myProfile.name;

/* Favorite Foods List*/
let favoriteFoodsList = document.getElementById('favorite-foods');
myProfile.favoriteFoods.forEach(food => {
  let listItem = document.createElement('li');
  listItem.textContent = food;
  favoriteFoodsList.appendChild(listItem);
});

/* Hobbies List */
let hobbiesList = document.getElementById('hobbies');
myProfile.hobbies.forEach(hobby => {
  let listItem = document.createElement('li');
  listItem.textContent = hobby;
  hobbiesList.appendChild(listItem);
});

/* Places Lived DataList */
let placesLivedList = document.getElementById('places-lived');
myProfile.placesLived.forEach(placeLived => {
  let dtElement = document.createElement('dt');
  dtElement.textContent = placeLived.place;
  placesLivedList.appendChild(dtElement);

  let ddElement = document.createElement('dd');
  ddElement.textContent = placeLived.length;
  placesLivedList.appendChild(ddElement);
});


