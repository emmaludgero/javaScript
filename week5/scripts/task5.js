/* Lesson 5 */
let result = null
const url = 'https://byui-cse.github.io/cse121b-course/week05/temples.json'
/* IF/ELSE IF */

const d = new Date();
let day = d.getDate();
let weekDay = d.getDay();
let message = "";

if (weekDay >= 1 && weekDay <= 5 ){
    message =  'Hang in there!'
} else {
    message = 'Woohoo! It is the weekend!'
}

/* SWITCH, CASE, BREAK */

let message2 = "";
switch (weekDay){
    case "1":
        message2 = "Hang in there!";
        break;
    case "2":
        message2 = "Hang in there!";
        break;
    case "3":
        message2 = "Hang in there!";
        break;
    case "4":
        message2 = "Hang in there!";
        break;
    case "5":
        message2 = "Hang in there!";
        break;

    default:
        message2 = 'Woohoo! It is the weekend!';
}

/* OUTPUT */

document.querySelector("#message1").innerHTML = message
document.querySelector("#message2").innerHTML = message2


/* FETCH */
// Step 1: Declare a global empty array variable to store a list of temples
const templeList = [];

const output = (templeList) => {
    
    templeList.forEach((temple)=>{   

        const article = document.createElement("article")

        const name = document.createElement("h3")
        name.innerHTML = temple.templeName

        const location = document.createElement("h4")
        location.innerHTML = temple.location
        const dedicated = document.createElement("h4")
        dedicated.innerHTML = temple.dedicated

        const img = document.createElement("img")
        img.setAttribute("src", temple.imageUrl)
        img.setAttribute("alt", temple.templeName)

        article.appendChild(name)
        article.append(location)
        article.append(dedicated)
        article.append(img)
        console.log("ARTICLE", article)

        const templeID = document.querySelector("#temples"); 
    });
} 

// Step 3: Create another function called getTemples. Make it an async function.

async function getTemples(){
    const response = await fetch("https://byui-cse.github.io/cse121b-course/week05/temples.json");
    console.log("response",response)
    if (response.ok){
        const templeList = await response.json();
        console.log("lista de templos",templeList)
        output(templeList)
    }
}

getTemples()
// Step 4: In the function, using the built-in fetch method, call this absolute URL: 'https://byui-cse.github.io/cse121b-course/week05/temples.json'. Create a variable to hold the response from your fetch. You should have the program wait on this line until it finishes.
// Step 5: Convert your fetch response into a Javascript object ( hint: .json() ). Store this in the templeList variable you declared earlier (Step 1). Make sure the the execution of the code waits here as well until it finishes.
// Step 6: Finally, call the output function and pass it the list of temples. Execute your getTemples function to make sure it works correctly.

// Step 7: Declare a function named reset that clears all of the <article> elements from the HTML element with an ID of temples

function reset(){
    const id = document.querySelector("#temples");
    id.replaceChildren();
}

// Step 8: Declare a function named sortBy that does the following:

function sortBy(){
    reset();
    const value = document.querySelector("#sortBy").value;
    if (value == "templeNameAscending"){
        
        output(templeList)
    } else {
        templeList.reverse();
        output(templeList)
    }  
    
}

// - Calls the reset function
// - Sorts the global temple list by the currently selected value of the HTML element with an ID of sortBy

// - Calls the output function passing in the sorted list of temples
sortBy()


// Step 9: Add a change event listener to the HTML element with an ID of sortBy that calls the sortBy function

addEventListener(document.querySelector("#sortBy"), sortBy(templeList));

/* STRETCH */

// Consider adding a "Filter by" feature that allows users to filter the list of temples
// This will require changes to both the HTML and the JavaScript files
