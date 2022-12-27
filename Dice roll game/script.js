
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var image1 = "dice" + randomNumber1 + ".png";
var image2 = "dice" + randomNumber2 + ".png";


var randomImage1 = document.getElementsByClassName("diceimg")[0].setAttribute("src", image1);
var randomImage2 = document.getElementsByClassName("diceimg")[1].setAttribute("src", image2);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
}else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
}else{
    document.querySelector("h1").textContent = "Draw!";
}