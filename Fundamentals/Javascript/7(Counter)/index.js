let increase=document.getElementById("incre");
let decrease=document.getElementById("decre");
let reset=document.getElementById("reset");

let counter=0;
increase.onclick=function(){
    counter++;
    document.getElementById("h1").textContent=counter;
}
decrease.onclick=function(){
    counter--;
    document.getElementById("h1").textContent=counter;
}
reset.onclick=function(){
    counter=0;
    document.getElementById("h1").textContent=counter;
}




