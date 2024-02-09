document.querySelector("h2").addEventListener("click",roll);
function roll() {
    var randomnumber1 = Math.round(Math.random()*6)+1;
    var randobDiceimage = "dice" + randomnumber1 +".png";
    var img1=document.querySelectorAll("img")[0].setAttribute("src",randobDiceimage);
    var randomNumber2 = Math.floor(Math.random()*6)+1;
    var randomDiceimage2 ="dice"+randomNumber2+".png";
    var img2 =document.querySelectorAll("img")[1].setAttribute("src",randomDiceimage2);


    if (randomnumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML="PLAYER 1 WINS 🚩 ";
    }
    else if (randomNumber2 > randomnumber1) {
        
        document.querySelector("h1").innerHTML="PLAYER 2 WINS 🚩 ";
    }
    else{
        document.querySelector("h1").innerHTML="ITS A DRAW😔 YOU BOTH LOSE 😔  ";
    }
}