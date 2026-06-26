// console.log(`Hello my friend i am the world `);
// window.alert(`Get wrecked bitches`);
// window.alert(`again`);
// document.getElementById(`h1`).textContent=`Hello`;

// let age=25;
// let firstname="Noob";
// let online=true;
// console.log(`You are ${age} years old`);
// console.log(typeof age);
// console.log(`Your name is ${firstname}`);
// console.log(age+30);
// if(online){
//     console.log(`You are online`);
// }
// document.getElementById(`h1`).textContent="Your Full name is ${firstname}";

//operators augmented operators
// precedence
// 1 parentheses
// 2 exponential
// 3 multiplication&divison&modulo
// 4 addition and subtraction


// let username;
// username=window.prompt("what is your name");
// console.log(username);

let username;
document.getElementById("b1").onclick=function(){
    username=document.getElementById("i1").value;
    document.getElementById("h1").textContent=`Hello ${username}`;
    console.log(username);
}

