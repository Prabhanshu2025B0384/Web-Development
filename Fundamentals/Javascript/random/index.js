//Math library(round,floor,ceil,trunc,pow,sqrt,log,trigono,abs,sign,max,min)

// let min=1;
// let max=6;
// let random=Math.floor(Math.random()*max)+min;
// console.log(random);

//if statements
//user enters age you check and display results

// .checked = property that determines the checked state of an 
//                     HTML checkbox or radio button element

// const myCheckBox = document.getElementById("myCheckBox");
// const visaBtn = document.getElementById("visaBtn");
// const masterCardBtn = document.getElementById("masterCardBtn");
// const payPalBtn = document.getElementById("payPalBtn");
// const mySubmit = document.getElementById("mySubmit");
// const subResult = document.getElementById("subResult");
// const paymentResult = document.getElementById("paymentResult");

// mySubmit.onclick = function(){

//     if(myCheckBox.checked){
//         subResult.textContent = `You are subscribed!`;
//     }
//     else{
//         subResult.textContent = `You are NOT subscribed!`;
//     }

//     if(visaBtn.checked){
//         paymentResult.textContent = `You are paying with Visa`;
//     }
//     else if(masterCardBtn.checked){
//         paymentResult.textContent = `You are paying with MasterCard`;
//     }
//     else if(payPalBtn.checked){
//         paymentResult.textContent = `You are paying with PayPal`;
//     }
//     else{
//         paymentResult.textContent = `You must select a payment type`;
//     }
// }

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>My website</title>
//     <link rel="stylesheet" href="style.css">
// </head>
// <body>
//     <input type="checkbox" id="myCheckBox">
//     <label for="myCheckBox">subscribe</label><br><br>

//     <input type="radio" id="visaBtn" name="card">
//     <label for="visaBtn">Visa</label><br>
//     <input type="radio" id="masterCardBtn" name="card">
//     <label for="masterCardBtn">MasterCard</label><br>
//     <input type="radio" id="payPalBtn" name="card">
//     <label for="payPalBtn">PayPal</label><br><br>

//     <button type="submit" id="mySubmit">submit</button>

//     <p id="subResult"></p>
//     <p id="paymentResult"></p>

//     <script src="index.js"></script>
// </body>
// </html>

// body{
//     font-family: Verdana;
//     font-size: 2em;
// }
// #mySubmit{
//     font-size: 1em;
// }


//ternary operator(useful for assigning a variable)

//switch case break

//string methods(charAt,indeOf,lastindeof,length,trim,touppercase,tolowercase,repeat,startswith,endswith,replaceall,padstart,padend,includes)

//string slicing
//string.slice(start,end(exclusive)) //negative indices work too

//method chaining
// let username=window.prompt("Enter your name");
// username=username.trim().charAt(0).toUpperCase() +username.slice(1).toLowerCase();
// console.log(username);

//logical operators

//=== strict equality operator datatype and value
//!== strict inequality operator

// while loop used for input

//for loop


// function divide(x,z){
//     return x+z;
// }

//local scope

//temperature conversion

//let fruits=["apple","banana"];
// Push,pop,shift,unshift,length
// for(let fruit of fruits){
//     console.log(fruit);
// }
// array.splice(startIndex, deleteCount)

// startIndex → index where deletion starts

// deleteCount → number of elements to remove
//fruits.sort().reverse();



// spread operator =  ... allows an iterable such as an
//                                  array or string to be expanded
//                                  into separate elements
//                                 (unpacks the elements)
// // ------------- EXAMPLE 1 -------------
// let numbers = [1, 2, 3, 4, 5];
// let maximum = Math.max(...numbers);
// let minimum = Math.min(...numbers);
// console.log(maximum);
// // ------------- EXAMPLE 2 -------------
// let username = "Bro Code";
// let letters = [...username]; 
// console.log(letters);
// // ------------- EXAMPLE 3 -------------
// let fruits = ["apple", "orange", "banana"];
// let vegetables = ["carrots", "celery", "potatoes"];
// let foods = [...fruits, ...vegetables, "eggs", "milk"];
// console.log(foods);



// rest parameters = (...rest) allow a function work with a variable
//                                  number of arguments by bundling them into an array
//                                 spread = expands an array into separate elements
//                                 rest = bundles separate elements into an array
// // -------- EXAMPLE 1 --------
// function openFridge(...foods){
//     console.log(...foods);
// }
// function getFood(...foods){
//     return foods;
// }
// const food1 = "pizza";
// const food2 = "hamburger";
// const food3 = "hotdog";
// const food4 = "sushi";
// const food5 = "ramen";
// openFridge(food1, food2, food3, food4, food5);
// const foods = getFood(food1, food2, food3, food4, food5);
// // -------- EXAMPLE 2 --------
// function sum(...numbers){
//     let result = 0;
//     for(let number of numbers){
//         result += number;
//     }
//     return result;
// }
// function getAverage(...numbers){
//     let result = 0;
//     for(let number of numbers){
//         result += number;
//     }
//     return result / numbers.length;
// }
// const average = getAverage(75, 100, 85, 90, 50);
// console.log(average);
// // -------- EXAMPLE 3 --------
// function combineStrings(...strings){
//     return strings.join(" ");
// }
// const fullName = combineStrings("Mr.", "Spongebob", "Squarepants", "III");
// console.log(fullName);


//dice roller program
//random password generaor



// callback = a function that is passed as an argument
//                    to another function.
//                    used to handle asynchronous operations:
//                    1. Reading a file
//                    2. Network requests
//                    3. Interacting with databases
//                    "Hey, when you're done, call this next."
// hello(goodbye);
// function hello(callback){
//     console.log("Hello!");
//     callback();
// }
// function goodbye(){
//     console.log("Goodbye!");
// }


// // forEach() = method used to iterate over the elements 
// //                     of an array and apply a specified function (callback)
// //                     to each element
// //                     array.forEach(callback)
// //                     element, index, array are provided
// // -------------- EXAMPLE 1 --------------
// const numbers = [1, 2, 3, 4, 5];
// numbers.forEach(cube);
// numbers.forEach(display);
// function double(element, index, array){
//     array[index] = element * 2;
// }
// function triple(element, index, array){
//     array[index] = element * 3;
// }
// function square(element, index, array){
//     array[index] = Math.pow(element, 2);
// }
// function cube(element, index, array){
//     array[index] = Math.pow(element, 3);
// }
// function display(element){
//     console.log(element);
// }
// // -------------- EXAMPLE 2 --------------
// let fruits = ["apple", "orange", "banana", "coconut"];
// fruits.forEach(capitalize);
// fruits.forEach(display);
// function upperCase(element, index, array){
//     array[index] = element.toUpperCase();
// }
// function lowercase(element, index, array){
//     array[index] = element.toLowerCase();
// }
// function capitalize(element, index, array){
//     array[index] = element.charAt(0).toUpperCase() + element.slice(1);
// }
// /*
// function display(element){
//     console.log(element);
// }
// */



// // .map() = accepts a callback and applies that function 
// //                 to each element of an array, then return a new array
//array.map(element => newValue)
// // ------------ EXAMPLE 1 ------------
// const numbers = [1, 2, 3, 4, 5];
// const squared = numbers.map(square);
// const cubed = numbers.map(cube);

// console.log(cubed);

// function square(element){
//     return Math.pow(element, 2);
// }

// function cube(element){
//     return Math.pow(element, 3);
// }

// // ------------ EXAMPLE 2 ------------
// const students = ["Spongebob", "Patrick", "Squidward", "Sandy"];
// const studentsUpper = students.map(upperCase);
// const studentsLower = students.map(lowerCase);

// console.log(studentsLower);

// function upperCase(element){
//     return element.toUpperCase();
// }

// function lowerCase(element){
//     return element.toLowerCase();
// }

// // ------------ EXAMPLE 3 ------------
// const dates = ["2024-1-10", "2025-2-20", "2026-3-30"];
// const formattedDates = dates.map(formatDates);

// console.log(formattedDates);

// function formatDates(element){
//     const parts = element.split("-");
//     return `${parts[1]}/${parts[2]}/${parts[0]}`;
// }








// // filter() = creates a new array by filtering out
// //                elements with a callback
//array.filter((element, index, array) => condition)
// // ----------- EXAMPLE 1 -----------
// let numbers = [1, 2, 3, 4, 5, 6, 7];
// let evenNums = numbers.filter(isEven);
// let oddNums = numbers.filter(isOdd);
// console.log(oddNums);
// function isEven(element){
//     return element % 2 === 0;
// }
// function isOdd(element){
//     return element % 2 !== 0;
// }
// // ----------- EXAMPLE 2 -----------
// let ages = [16, 17, 17, 18, 19, 20, 65];
// let adults = ages.filter(isAdult);
// let children = ages.filter(isChild);
// console.log(children);
// function isAdult(element){
//     return element >= 18;
// }
// function isChild(element){
//     return element < 18;
// }
// // ----------- EXAMPLE 3 -----------
// const words = ['apple', 'orange', 'kiwi', 'banana', 'pomegranate', 'coconut',];
// const longWords = words.filter(getLongWords);
// const shortWords = words.filter(getShortWords);
// console.log(shortWords);
// function getShortWords(element){
//     return element.length <= 6;
// }
// function getLongWords(element){
//     return element.length > 6;
// }








// // .reduce() = reduce the elements of an array
// //                     to a single value  
//array.reduce((acc, curr) => acc + curr, initialValue)  
// // ----------- EXAMPLE 1 -----------
// const prices = [5, 30, 10, 25, 15, 20];
// const total = prices.reduce(sum);
// console.log(`$${total.toFixed(2)}`);
// function sum(accumulator, element){
//     return accumulator + element;
// }
// // ----------- EXAMPLE 2 -----------
// const scores = [75, 50, 90, 80, 65, 95];
// const maximum = scores.reduce(getMax);
// const minimum = scores.reduce(getMin);
// console.log(maximum);
// console.log(minimum);
// function getMax(accumulator, element){
//     return Math.max(accumulator, element);
// }
// function getMin(accumulator, element){
//     return Math.min(accumulator, element);
// }




// function expressions = a way to define functions as
//                                          values or variables
// const numbers = [1, 2, 3, 4, 5, 6];
// const squares = numbers.map(function(element){
//     return Math.pow(element, 2);
// });
// const cubes = numbers.map(function(element){
//     return Math.pow(element, 3);
// });
// const evenNums = numbers.filter(function(element){
//     return element % 2 === 0;
// });
// const oddNums = numbers.filter(function(element){
//     return element % 2 !== 0;
// });
// const total = numbers.reduce(function(accumulator, element){
//     return accumulator + element;
// });
// console.log(total);






// // arrow functions = a concise way to write function expressions
// //                                good for simple functions that you use only once
// //                                (parameters) => some code
// // ---------- EXAMPLE 1 ----------
// const hello = (name, age) => {console.log(`Hello ${name}`)
//                               console.log(`You are ${age} years old`)}; 
// hello("Bro", 25);
// // ---------- EXAMPLE 2 ----------
// setTimeout(() => {console.log("Hello"); 
//                   console.log("Goodbye");}, 3000);
// // ---------- EXAMPLE 3 ----------               
// const numbers = [1, 2, 3, 4, 5, 6];
// const squares = numbers.map((element) => Math.pow(element, 2));
// const cubes = numbers.map((element) => Math.pow(element, 3));
// const evenNums = numbers.filter((element) => element % 2 === 0);
// const oddNums = numbers.filter((element) => element % 2 !== 0);
// const total = numbers.reduce((accumulator, element) => accumulator + element);
// console.log(total);