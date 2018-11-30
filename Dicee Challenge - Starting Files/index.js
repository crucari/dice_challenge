var randomNumber1 = Math.floor(Math.random() * 6) + 1; //produces a random # btw 1-

var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice.png - dice.ong 

var randomImageSource = "images/" + randomDiceImage; //images.dice.png - images.dice.png 

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource); 

var randomNumber2 = Math.floor(Math.random() * 6) + 1; 

var randomImageSource2 = "images/dice" + randomNumber2 + ".png"; 

var image2 = document.querySelectorAll("img")[1]; 

image2.setAttribute("src", randomImageSource);

//If player 1 wins 
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 wins!";
} 
//if player 2 wins
else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 wins!"; 
}
//if the dice are equal 
else {
    document.querySelector("h1").innerHTML = "Draw!"; 
}