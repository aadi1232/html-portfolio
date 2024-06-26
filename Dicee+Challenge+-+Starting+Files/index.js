
var randomNumber = Math.floor(Math.random() * 6) + 1;
var randomDiceImage = "dice" + randomNumber + ".png";
var randomImagesource = "images/" + randomDiceImage;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImagesource);


var randomnumber2 = Math.floor(Math.random()*6) +1;
var randomimagesource2 = "images/dice" + randomnumber2 +".png";
document.querySelectorAll("img")[1].setAttribute("src",randomimagesource2);


if(randomNumber>randomnumber2)
    {
        document.querySelector("h1").innerHTML = "🚩Player1 wins!";
    }else if(randomNumber<randomnumber2){
        document.querySelector("h1").innerHTML = "Player2 wins!🚩";
    }
    else
    {
        document.querySelector("h1").innerHTML = "🏳️It's a stalemate🏳️";
    }