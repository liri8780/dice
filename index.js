var randomNumber1 = Math.floor(Math.random()*6)+1; //random number between 0-6//

var randomimgsource1 = "images/dice"+ randomNumber1 + ".png"; // images/dice1.png - images/dice6.png

var image1  = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomimgsource1);



var randomNumber2 = Math.floor(Math.random()*6)+1;

var randomimgsource2 = "images/dice"+ randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src",randomimgsource2);




if (randomNumber1>randomNumber2){

    document.querySelector("h1").innerHTML = " Player 1 Wins 🙋!";
}

else if (randomNumber2>randomNumber1) {

    document.querySelector("h1").innerHTML = " Player 2 Wins 🙌 !";
}

else {
    document.querySelector("h1").innerHTML = "A Draw  - Refresh Me! 🙏";
}

