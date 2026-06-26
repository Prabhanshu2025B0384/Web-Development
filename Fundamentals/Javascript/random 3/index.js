// DOM = DOCUMENT OBJECT MODEL
//              Object{} that represents the page you see in the web browser 
//              and provides you with an API to interact with it.
//             Web browser constructs the DOM when it loads an HTML document,
//             and structures all the elements in a tree-like representation.
//             JavaScript can access the DOM to dynamically 
//             change the content, structure, and style of a web page.
// console.log(document);
// console.dir(document);
// document.title = "My website";
// document.body.style.backgroundColor = "hsl(0, 0%, 15%)";
// const username = "";
// const welcomeMsg = document.getElementById("welcome-msg");
// welcomeMsg.textContent += username === "" ? `Guest` : username;
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
//     <link rel="stylesheet" href="styles.css">
// </head>
// <body>
//     <h1 id="welcome-msg">Welcome </h1>
//     <script src="index.js"></script>
// </body>
// </html>




//(60)
// element selectors = Methods used to target and manipulate HTML elements 
//                                     They allow you to select one or multiple HTML elements
//                                     from the DOM (Document Object Model)

// 1. document.getElementById()                 // ELEMENT OR NULL
// 2. document.getElementsClassName()  // HTML COLLECTION
// 3. document.getElementsByTagName() // HTML COLLECTION
// 4. document.querySelector()                    // FIRST ELEMENT OR NULL
// 5. document.querySelectorAll()               // NODELIST

// ---------- getElementById() ----------

// const myHeading = document.getElementById("my-heading");
// myHeading.style.backgroundColor = "yellow";
// myHeading.style.textAlign = "center";

// // ---------- getElementsByClassName() ----------

// const fruits = document.getElementsByClassName("fruits");

// Array.from(fruits).forEach(fruit => {
//     fruit.style.backgroundColor = "yellow";
// });

// // ---------- getElementsByTagName() ----------

// const h4Elements = document.getElementsByTagName("h4");
// const liElements = document.getElementsByTagName("li");

// Array.from(h4Elements).forEach(h4Element => {
//     h4Element.style.backgroundColor = "yellow";
// });

// Array.from(liElements).forEach(liElement => {
//     liElement.style.backgroundColor = "lightgreen";
// });

// // ---------- querySelector() ----------

// const element = document.querySelector("li");

// element.style.backgroundColor = "yellow";

// // ---------- querySelectorAll() ----------

// const foods = document.querySelectorAll("li");

// foods.forEach(food => {
//     food.style.backgroundColor = "yellow"
// });















//(61)
// DOM Navigation = The process of navigating through the structure 
//                                  of an HTML document using JavaScript.
// .firstElementChild
// .lastElementChild
// .nextElementSibling
// .previousElementSibling
// .parentElement
// .children
// ---------- .firstElementChild ----------
// const ulElements = document.querySelectorAll("ul");
// ulElements.forEach(ulElement => {
//     const firstChild = ulElement.firstElementChild;
//     firstChild.style.backgroundColor = "yellow";
// });
// // ---------- .lastElementChild ----------
// const ulElements = document.querySelectorAll("ul");
// ulElements.forEach(ulElement => {
//     const lastChild = ulElement.lastElementChild;
//     lastChild.style.backgroundColor = "yellow";
// });
// // ---------- .nextElementSibling ----------
// const element = document.getElementById("vegetables");
// const nextSibling = element.nextElementSibling;
// nextSibling.style.backgroundColor = "yellow";
// // ---------- .previousElementSibling ----------
// const element = document.getElementById("desserts");
// const prevSibling = element.previousElementSibling;
// prevSibling.style.backgroundColor = "yellow";
// // ---------- .parentElement ----------
// const element = document.getElementById("ice cream");
// const parent = element.parentElement;
// parent.style.backgroundColor = "yellow";
// // ---------- .children ----------
// const element = document.getElementById("fruits");
// const children = element.children;
// Array.from(children).forEach(child => {
//     child.style.backgroundColor = "yellow";
// });





//(62)
// ---------- EXAMPLE 1 h1 ELEMENT ----------

// // STEP 1 CREATE THE ELEMENT
// const newH1 = document.createElement("h1");

// // STEP 2 ADD ATTRIBUTES/PROPERTIES
// newH1.textContent = "I like pizza!";
// newH1.id = "myH1";
// newH1.style.color = "tomato";
// newH1.style.textAlign = "center";

// // STEP 3 APPEND ELEMENT TO DOM
// document.body.append(newH1);
// // document.body.prepend(newH1);
// // document.getElementById("box1").append(newH1);
// // document.getElementById("box1").prepend(newH1);

// // const box4 = document.getElementById("box4");
// // document.body.insertBefore(newH1, box4);

// // const boxes = document.querySelectorAll(".box");
// // document.body.insertBefore(newH1, boxes[0]);

// // REMOVE HTML ELEMENT
// // document.body.removeChild(newH1);
// // document.getElementById("box1").removeChild(newH1);

// // ---------- EXAMPLE 2 li ELEMENT ----------

// // STEP 1 CREATE THE ELEMENT
// const newListItem = document.createElement("li");

// // STEP 2 ADD ATTRIBUTES/PROPERTIES
// newListItem.textContent = "coconut";
// newListItem.id = "coconut";
// newListItem.style.fontWeight = "bold";
// newListItem.style.backgroundColor = "lightgreen";

// // STEP 3 APPEND ELEMENT TO DOM
// document.body.append(newListItem);
// // document.body.prepend(newListItem);
// // document.getElementById("fruits").append(newListItem);
// // document.getElementById("fruits").prepend(newListItem);

// const banana = document.getElementById("banana");
// document.getElementById("fruits").insertBefore(newListItem, banana);

// const listItems = document.querySelectorAll("#fruits li");
// document.getElementById("fruits").insertBefore(newListItem, listItems[1]);

// REMOVE HTML ELEMENT
// document.body.removeChild(newLink);
// document.getElementById("fruits").removeChild(newListItem);




//(63)
// / eventListener = Listen for specific events to create interactive web pages
// //                             events: click, mouseover, mouseout
// //                            .addEventListener(event, callback);

// const myBox = document.getElementById("myBox");

// myBox.addEventListener("click", event => {
//     event.target.style.backgroundColor = "tomato";
//     event.target.textContent = "OUCH! 🤕";
// });

// myBox.addEventListener("mouseover", event => {
//     event.target.style.backgroundColor = "yellow";
//     event.target.textContent = "Don't do it 😲";
// });

// myBox.addEventListener("mouseout", event => {
//     event.target.style.backgroundColor = "lightgreen";
//     event.target.textContent = "Click Me 😀";
// });

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
//     <link rel="stylesheet" href="styles.css">
// </head>
// <body>

//     <div id="myBox">
//         Click Me 😀
//     </div>

//     <script src="index.js"></script>
// </body>
// </html>

// #myBox{
//     background-color: lightgreen;
//     width: 300px;
//     height: 300px;
//     font-size: 4.1rem;
//     font-weight: bold;
//     display: flex;
//     align-items: center;
//     text-align: center;
// }











//(64)
// eventListener = Listen for specific events to create interactive web pages
//                            events: keydown, keyup
//                            document.addEventListener(event, callback);

// const myBox = document.getElementById("myBox");
// const moveAmount = 10;
// let x = 0;
// let y = 0;

// document.addEventListener("keydown", event => {
//     myBox.textContent = "😲";
//     myBox.style.backgroundColor = "tomato";
// });

// document.addEventListener("keyup", event => {
//     myBox.textContent = "😀";
//     myBox.style.backgroundColor = "lightblue";
// });

// document.addEventListener("keydown", event => {

//     if(event.key.startsWith("Arrow")){

//         event.preventDefault();

//         switch(event.key){
//             case "ArrowUp":
//                 y -= moveAmount;
//                 break;
//             case "ArrowDown":
//                 y += moveAmount;
//                 break;
//             case "ArrowLeft":
//                 x -= moveAmount;
//                 break;
//             case "ArrowRight":
//                 x += moveAmount;
//                 break;
//         }

//         myBox.style.top = `${y}px`;
//         myBox.style.left = `${x}px`;
//     }
// });








//((65))
// const myButton = document.getElementById("myButton");
// const myImg = document.getElementById("myImg");

// myButton.addEventListener("click", event => {
   
//     // ----- DISPLAY -----
//     if(myImg.style.display === "none"){
//         myImg.style.display = "block";
//         myButton.textContent = "Hide";
//     }
//     else{
//         myImg.style.display = "none";
//         myButton.textContent = "Show";
//     }
   
//     // ----- VISIBILITY -----
//     if(myImg.style.visibility === "hidden"){
//         myImg.style.visibility = "visible";
//         myButton.textContent = "Hide";
//     }
//     else{
//         myImg.style.visibility = "hidden";
//         myButton.textContent = "Show";
//     }
// });

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
//     <link rel="stylesheet" href="styles.css">
// </head>
// <body>

//     <img id="myImg" src="car.jpg" width="400px"><br>

//     <button id="myButton">Hide</button><br>

//     <script src="index.js"></script>
// </body>
// </html>







//(66)
// NodeList = Static collection of HTML elements by (id, class, element)
//                     Can be created by using querySelectorAll()
//                     Similar to an array, but no (map, filter, reduce) 
//                     NodeList won't update to automatically reflect changes

// ---------- CREATE A NODELIST ----------

// let buttons = document.querySelectorAll(".myButtons");

// // ---------- ADD HTML/CSS PROPERTIES ----------

// buttons.forEach(button => {
//     button.style.backgroundColor = "green";
//     button.textContent += "😁";
// });

// // ---------- CLICK event listener ---------- 

// buttons.forEach(button => {
//     button.addEventListener("click", event => {
//         event.target.style.backgroundColor = "tomato";
//     });
// });

// // ----------  MOUSEOVER + MOUSEOUT event listener ---------- 

// buttons.forEach(button => {
//     button.addEventListener("mouseover", event => {
//         event.target.style.backgroundColor = "hsl(205, 100%, 40%)";
//     });
// });

// buttons.forEach(button => {
//     button.addEventListener("mouseout", event => {
//         event.target.style.backgroundColor = "hsl(205, 100%, 60%)";
//     });
// });

// // ---------- ADD AN ELEMENT ----------

// const newButton = document.createElement("button"); //STEP 1 
// newButton.textContent = "Button 5"; //STEP 2
// newButton.classList = "myButtons";
// document.body.appendChild(newButton); //STEP 3

// buttons = document.querySelectorAll(".myButtons");

// // ---------- REMOVE AN ELEMENT ----------

// buttons.forEach(button => {
//     button.addEventListener("click", event => {
//         event.target.remove();
//         buttons = document.querySelectorAll(".myButtons");
//     });
// });




//(67)
// classList = Element property in JavaScript used to interact
//                     with an element's list of classes (CSS classes)
//                     Allows you to make reusable classes for many elements
//                     across your webpage.

// add()
// remove()
// toggle(Remove if present, Add if not)
// replace(oldClass, newClass)
// contains()

// ---------- button ----------

// const myButton = document.getElementById("myButton");

// myButton.classList.add("enabled");

// myButton.addEventListener('mouseover', event => {
//     event.target.classList.toggle('hover');
// });

// myButton.addEventListener('mouseout', event => {
//     event.target.classList.toggle('hover');
// });

// myButton.addEventListener('click', event => {

//     if(event.target.classList.contains("disabled")){
//         event.target.textContent += "🤬";
//     }
//     else{
//         event.target.classList.replace("enabled", "disabled");
//     }
// });

// // ---------- h1 ----------

// const myH1 = document.getElementById("myH1");

// myH1.classList.add("enabled");

// myH1.addEventListener("mouseover", event => {
//     event.target.classList.toggle('hover');
// });

// myH1.addEventListener('mouseout', event => {
//     event.target.classList.toggle('hover');
// });

// myH1.addEventListener('click', event => {

//     if(event.target.classList.contains("disabled")){
//         event.target.textContent += "🤬";
//     }
//     else{
//         event.target.classList.replace("enabled", "disabled");
//     }
// });

// // ---------- NodeList ----------
// let buttons = document.querySelectorAll(".myButtons");

// buttons.forEach(button => {
//     button.classList.add("enabled");
// });

// buttons.forEach(button => {
//     button.addEventListener("mouseover", event => {
//         event.target.classList.toggle("hover");
//     });
// });

// buttons.forEach(button => {
//     button.addEventListener("mouseout", event => {
//         event.target.classList.toggle("hover");
//     });
// });

// buttons.forEach(button => {
//     button.addEventListener("click", event => {

//         if(event.target.classList.contains("disabled")){
//             event.target.textContent += "🤬";
//         }
//         else{
//             event.target.classList.replace("enabled", "disabled");
//         }
//     });
// });

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
//     <link rel="stylesheet" href="styles.css">
// </head>
// <body>

//     <h1 id="myH1">Hello</h1>
//     <button id="myButton">My button</button>

//     <button class="myButtons">Button 1</button>
//     <button class="myButtons">Button 2</button>
//     <button class="myButtons">Button 3</button>
//     <button class="myButtons">Button 4</button>

//     <script src="index.js"></script>
// </body>
// </html>

// #myH1{
//     font-size: 5rem;
// }
// #myButton, .myButtons{
//     font-size: 4rem;
//     margin: 10px;
//     border: none;
//     border-radius: 5px;
//     padding: 10px 15px;
// }
// .enabled{
//     background-color: hsl(204, 100%, 50%);
//     color: white;
// }
// .hover{
//     box-shadow: 0 0 10px hsla(0, 0%, 0%, 0.2);
//     font-weight: bold;
// }
// .disabled{
//     background-color: hsl(0, 0%, 60%);
//     color: hsl(0, 0%, 80%);
// }




//(70)
// Callback Hell = Situation in JavaScript where callbacks 
//                            are nested within other callbacks to the
//                           degree where the code is difficult to read.
//                           Old pattern to handle asynchronous functions.
//                           Use Promises + async/await to avoid Callback Hell

// function task1(callback){
//     setTimeout(() => {
//         console.log("Task 1 complete");
//         callback();
//     }, 2000);
// }

// function task2(callback){
//     setTimeout(() => {
//         console.log("Task 2 complete");
//         callback();
//     }, 1000);
// }

// function task3(callback){
//     setTimeout(() => {
//         console.log("Task 3 complete");
//         callback();
//     }, 3000);
// }

// function task4(callback){
//     setTimeout(() => {
//         console.log("Task 4 complete");
//         callback();
//     }, 1500);
// }

// task1(() => {
//     task2(() => {
//         task3(() => {
//             task4(() => console.log("All tasks completed"));
//         })
//     });
// })






//(71)
// Promise = An Object that manages asynchronous operations.
//                    Wrap a Promise Object around {asynchronous code}
//                    "I promise to return a value"
//                    PENDING -> RESOLVED or REJECTED
//                   new Promise((resolve, reject) => {asynchronous code})

// DO THESE CHORES IN ORDER

// 1. WALK THE DOG
// 2. CLEAN THE KITCHEN
// 3. TAKE OUT THE TRASH

// function walkDog(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {

//             const dogWalked = false;

//             if(dogWalked){
//                 resolve("You walk the dog 🐕");
//             }
//             else{
//                 reject("You DIDN'T walk the dog");
//             }
//         }, 1500);
//     });
// }

// function cleanKitchen(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
            
//             const kitchenCleaned = true;

//             if(kitchenCleaned){
//                 resolve("You clean the kitchen 🧹");
//             }
//             else{
//                 reject("You DIDN'T clean the kitchen");
//             }
//         }, 2500);
//     });
// }

// function takeOutTrash(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {

//             const trashTakenOut = true;

//             if(trashTakenOut){
//                 resolve("You take out the trash ♻");
//             }
//             else{
//                 reject("You DIDN'T take out the trash");
//             }

//         }, 500);
//     });
// }

// walkDog().then(value => {console.log(value); return cleanKitchen()})
//                   .then(value => {console.log(value); return takeOutTrash()})
//                   .then(value => {console.log(value); console.log("You finished all the chores!")})
//                   .catch(error => console.error(error));







//(72)
// Async/Await = Async = makes a function return a promise
//                            Await = makes an async function wait for a promise

// Allows you write asynchronous code in a synchronous manner
// Async doesn't have resolve or reject set up as parameters
// Everything after Await is placed in an event queue

// function walkDog(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {

//             const dogWalked = true;

//             if(dogWalked){
//                 resolve("You walk the dog 🐕");
//             }
//             else{
//                 reject("You DIDN'T walk the dog");
//             }
//         }, 1500);
//     });
// }

// function cleanKitchen(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
            
//             const kitchenCleaned = true;

//             if(kitchenCleaned){
//                 resolve("You clean the kitchen 🧹");
//             }
//             else{
//                 reject("You DIDN'T clean the kitchen");
//             }
//         }, 2500);
//     });
// }

// function takeOutTrash(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {

//             const trashTakenOut = true;

//             if(trashTakenOut){
//                 resolve("You take out the trash ♻");
//             }
//             else{
//                 reject("You DIDN'T take out the trash");
//             }

//         }, 500);
//     });
// }

// async function doChores(){

//     try{
//         const walkDogResult = await walkDog();
//         console.log(walkDogResult);
    
//         const cleanKitchenResult = await cleanKitchen();
//         console.log(cleanKitchenResult);
    
//         const takeOutTrashResult = await takeOutTrash();
//         console.log(takeOutTrashResult);
        
//         console.log("You finsihed all the chores!");
//     }
//     catch(error){
//         console.error(error);
//     }
// }

// doChores();