/* Lesson 4 */

/* DATA */

// Step 1: Declare a new variable to hold information about yourself
const myInfo = {}

// Step 2: Inside of the object, add a property named name with a value of your name as a string
myInfo.name = "Emma"

// Step 3: Add another property named photo with a value of the image path and name (used in Task 2) as a string
myInfo.photo = "images/myphoto.jpeg"

// Step 4: Add another property named favoriteFoods with a value of an array of your favorite foods as strings ( hint: [] )
myInfo.favoriteFoods = ["açaí", "chocolate"] 

// Step 5: Add another property named hobbies with a value of an array of your hobbies as strings
myInfo.hobbies = ["piano", "volleyball"]

// Step 6: Add another property named placesLived with a value of an empty array
myInfo.placesLived = []

// Step 7: Inside of the empty array above, add a new object with two properties: place and length and values of an empty string
myInfo.placesLived.push({place:"",length:""})

// Step 8: For each property, add appropriate values as strings
myInfo.placesLived[0].place = "Curitiba"
myInfo.placesLived[0].length = "5 years"

// Step 9: Add additional objects with the same properties for each place you've lived
myInfo.placesLived.push({place:"",length:""})
myInfo.placesLived[1].place = "Londrina"
myInfo.placesLived[1].length = "3 months"

/* OUTPUT */

// Step 1: Assign the value of the name property (of the object declared above) to the HTML <span> element with an ID of name
document.querySelector("#name").innerHTML = myInfo.name

// Step 2: Assign the value of the photo property as the src attribute of the HTML <img> element with an ID of photo
document.querySelector("#photo").src = myInfo.photo

// Step 3: Assign the value of the name property as the alt attribute of the HTML <img> element with an ID of photo
document.querySelector("#photo").alt = myInfo.name

// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
let foodList = document.querySelector("#favorite-foods")
for (let i = 0; i < myInfo.favoriteFoods.length; i++){
    let listItem = document.createElement("li");
    listItem.textContent = myInfo.favoriteFoods[i];
    foodList.append(listItem);
}

// Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods

// Step 6: Repeat Step 4 for each hobby in the hobbies property
// Step 7: Repeat Step 5 using the HTML <ul> element with an ID of hobbies
let hobbiesList = document.querySelector("#hobbies")
for (let i=0; i<myInfo.hobbies.length; i++){
    let listItem = document.createElement("li");
    listItem.textContent = myInfo.hobbies[i];
    hobbiesList.append(listItem);
}

// Step 8: For each object in the <em>placesLived</em> property:
// - Create an HTML <dt> element and put its place property in the <dt> element

let placesList = document.querySelector("#places-lived")

myInfo.placesLived.map((elemento, i)=>{
    let dt = document.createElement("dt");
    let dd = document.createElement("dd");
    console.log(elemento)

    dd.innerHTML= elemento.length
    dt.innerHTML = elemento.place

    const dl = document.querySelector("#places-lived")
    dl.appendChild(dt);
    dl.appendChild(dd);
    
})   


// - Create an HTML <dd> element and put its length property in the <dd> element

// Step 9: Append the HTML <dt> and <dd> elements created above to the HTML <dl> element with an ID of places-lived


