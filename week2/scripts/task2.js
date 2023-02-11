/* Lesson 2 */

/* VARIABLES */

// Step 1: declare and instantiate a variable to hold your name
const nome = "Emma"

// Step 2: place the value of the name variable into the HTML file (hint: document.querySelector())
document.querySelector('#name').innerHTML = nome

// Step 3: declare and instantiate a variable to hold the current year
const year = 2023

// Step 4: place the value of the current year variable into the HTML file
document.querySelector('#year').innerHTML = year

// Step 5: declare and instantiate a variable to hold the name of your picture
const imageName = "images/myphoto.jpeg"


// Step 6: copy your image into the "images" folder

// Step 7: place the value of the picture variable into the HTML file (hint: document.querySelector().setAttribute())
document.querySelector('img').src = imageName



/* ARRAYS */

// Step 1: declare and instantiate an array variable to hold your favorite foods
const favoriteFoods =[' açaí', ' strawberry', ' chocolate']
const saltyFood = ' pasta'
favoriteFoods.push(saltyFood)
const food2 = ' macaron'
favoriteFoods.push(food2)
favoriteFoods.shift()
const food3 = ' ice cream'
favoriteFoods.push(food3)
favoriteFoods.pop()
const food4 = ' oreo    '
favoriteFoods.push(food4)

// Step 2: place the values of the favorite foods variable into the HTML file
document.querySelector('#food').innerHTML = favoriteFoods

//      Step 3: declare and instantiate a variable to hold another favorite food


//      Step 4: add the variable holding another favorite food to the favorite food array

//      Step 5: repeat Step 2


//      Step 6: remove the first element in the favorite foods array


//      Step 7: repeat Step 2


//      Step 8: remove the last element in the favorite foods array


//      Step 7: repeat Step 2



