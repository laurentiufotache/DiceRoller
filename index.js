var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6
var randomDiceImage1 = "dice" + randomNumber1 + ".png"; //dice1.png-dice6.png
var randomImageSource1 = randomDiceImage1; // images/dice1.png - images/dice6.png

var randomNumber2 = Math.floor(Math.random() * 6) + 1; //1-6
var randomDiceImage2 = "dice" + randomNumber2 + ".png"; //dice1.png-dice6.png
var randomImageSource2 = randomDiceImage2; // images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource1);

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource2);
