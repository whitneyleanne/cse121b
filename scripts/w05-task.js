/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.getElementById('temples');
let templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {
    temples.forEach(temple => {
      
      const article = document.createElement('article');
  
      const h3 = document.createElement('h3');
      h3.textContent = temple.templeName;
  
      const img = document.createElement('img');
      img.src = temple.imageUrl;
      img.alt = temple.location;
  
      article.appendChild(h3);
      article.appendChild(img);
  
      templesElement.appendChild(article);
    });
  };  



/* async getTemples Function using fetch()*/
const getTemples = async () => {
    try {
      const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
  
      templeList = await response.json();
  
      displayTemples(templeList);
    } catch (error) {
      console.error("Error fetching temple data:", error);
    }
  };
  
  getTemples().then(() => {
    console.log(templeList); 
  });
  

/* reset Function */
const reset = () => {
    templesElement.innerHTML = '';
  };
  

/* sortBy Function */
const sortBy = (temples) => {
    reset();
  
    const filter = document.getElementById('sortBy').value;
  
    let filteredTemples;
  
    switch (filter) {
      case 'utah':
        filteredTemples = temples.filter(temple => temple.location.includes("Utah"));
        break;
      case 'nonutah':
        filteredTemples = temples.filter(temple => !temple.location.includes("Utah"));
        break;
      case 'older':
        filteredTemples = temples.filter(temple => new Date(temple.dedicated) < new Date(1950, 0, 1));
        break;
      case 'all':
        filteredTemples = temples;
        break;
      default:
        console.error('Invalid filter option');
        return;
    }
  
    displayTemples(filteredTemples);
  };
  


getTemples();

/* Event Listener */
document.querySelector("#sortBy").addEventListener("change", () => {
    sortBy(templeList);
  });
  