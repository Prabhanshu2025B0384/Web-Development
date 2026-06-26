
function diceRoll(){
    let n=Number(document.getElementById("i1").value);
    const result=document.getElementById("diceResult");
    const images=document.getElementById("diceImage");
    let values=[];
    let image=[];
    for(let i=0;i<n;i++){
        let val=Math.floor(Math.random()*6)+1;

        values.push(val);
        image.push(`<img src=${val}.png>`)
    }
    result.textContent="Dice="+values.join(", ");
    images.innerHTML=image.join(" ");
 
}