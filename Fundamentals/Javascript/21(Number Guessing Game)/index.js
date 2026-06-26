let number=Math.floor(Math.random()*100+1);
count =0;
document.getElementById("b1").onclick=function(){
    count++;
    if(document.getElementById("i1").value==number){
        document.getElementById("h1").textContent=`You guessed correctly in ${count} number of attempts`;
        
    }
    else if(document.getElementById("i1").value>number){
        document.getElementById("h1").textContent=`Too High! try again`;
    }
    else{
        document.getElementById("h1").textContent=`Too Low! try again`;
    }
}