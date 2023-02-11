/* Lesson 3 */

/* FUNCTIONS */

// ADDITION

function add(number1, number2){
    let sum = number1 + number2;
    return sum;
}
function addNumbers(){
    let addend1 = parseFloat(document.querySelector("#addend1").value);
    let addend2 = parseFloat(document.querySelector("#addend2").value);
    document.querySelector("#sum1").value = add(addend1, addend2);
}
const addBtn = document.querySelector("#addNumbers");
addBtn.addEventListener("click", addNumbers);

// SUBTRACTION

function subtract(number1, number2){
    let subtraction = number1 - number2;
    return subtraction;
}
function subtractNumbers(){
    let n1 = parseFloat(document.querySelector("#minuend").value);
    let n2 = parseFloat(document.querySelector("#subtrahend").value);
    document.querySelector("#difference").value = subtract(n1, n2);
}
const subBtn = document.querySelector("#subtractNumbers");
subBtn.addEventListener("click", subtractNumbers);

// MULTIPLICATION

function multiple(number1, number2){
    let multiplication = number1*number2;
    return multiplication;
}
function multipleNumbers(){
    let n1 = parseFloat(document.querySelector("#factor1").value);
    let n2 = parseFloat(document.querySelector("#factor2").value);
    document.querySelector("#product").value = multiple(n1, n2);
}
const multiBtn = document.querySelector("#multiplyNumbers");
multiBtn.addEventListener("click", multipleNumbers);

// DIVISION

function division(number1, number2){
    let division = number1/number2;
    return division
}
function divideNumbers(){
    let n1 = parseFloat(document.querySelector("#dividend").value);
    let n2 = parseFloat(document.querySelector("#divisor").value);
    document.querySelector("#quotient").value = division(n1, n2);
}
const divBtn = document.querySelector("#divideNumbers");
divBtn.addEventListener("click", divideNumbers);


/* BUILT-IN METHODS */
// YEAR
const date = new Date();
let currentYear = date.getFullYear();
document.querySelector("#year").innerHTML = currentYear

/* ARRAY METHODS */

// Step 1: Declare and instantiate an array variable to hold the numbers 1 through 25

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]

// Step 2: Assign the value of the array variable to the HTML element with an ID of "array"
document.querySelector("#array").innerHTML = numbers

// Step 3: Use the filter array method to find all of the odd numbers of the array variable and assign the reult to the HTML element with an ID of "odds" ( hint: % (modulus operartor) )
const oddNumbers = numbers.filter((number) => number % 2);
document.querySelector("#odds").innerHTML = oddNumbers;

// Step 4: Use the filter array method to find all of the even numbers of the array variable and assign the result to the HTML element with an ID of "evens"
const evenNumbers = numbers.filter((number) => number % 2 == 0);
document.querySelector("#evens").innerHTML = evenNumbers;

// Step 5: Use the reduce array method to sum the array variable elements and assign the result to the HTML element with an ID of "sumOfArray"
const initialValue = 0;
const arraySum = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);
document.querySelector("#sumOfArray").innerHTML = arraySum;

// Step 6: Use the map array method to multiple each element in the array variable by 2 and assign the result to the HTML element with an ID of "multiplied"
const multipliedSource = numbers.map(x => x * 2);
document.querySelector("#multiplied").innerHTML = multipliedSource

// Step 7: Use the map and reduce array methods to sum the array elements after multiplying each element by two.  Assign the result to the HTML element with an ID of "sumOfMultiplied"
const sumOfMultiplied = numbers.map(x => x*2).reduce((accumulator, currentValue)=> accumulator + currentValue, 0);
document.querySelector("#sumOfMultiplied").innerHTML = sumOfMultiplied;