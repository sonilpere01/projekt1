// documet.getElementById('result').innerHTML=localStorage.getItem("textvalue")



const diceButton = document.getElementById('dice-btn');
var name1 = prompt('Please enter your name');
var name2 = prompt('Please enter your name');
let highscore1 = 0;
let highscore2 = 0;

function diceGame() {


    var randomDice = Math.floor((Math.random()*6)+1);
    var diceLocation = "assets/dice/"+"Dice-"+randomDice+".png";
    var img1 = document.querySelectorAll("img.img-diceS:not(.gb)")[0];
    img1.setAttribute("src",diceLocation);


    var randomDice2 = Math.floor((Math.random()*6)+1);
    var diceLocation2 = "assets/dice/"+"Dice-"+ randomDice2 +".png";
    var img2 = document.querySelectorAll("img.img-diceS:not(.gb)")[1];
    img2.setAttribute("src",diceLocation2);

    var x =document.getElementById('lojtar1');
    x.innerHTML = name1;
    var y =document.getElementById('lojtar2');
    y.innerHTML = name2;


    var p1 =document.getElementById('piket1');
    highscore1 +=randomDice;
    p1.innerHTML=highscore1;
    var p2 = document.getElementById('piket2');
    highscore2 += randomDice2;
    p2.innerHTML=highscore2;


}

