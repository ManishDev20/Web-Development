const random1 = Math.floor(Math.random() * 6 + 1);
const random2 = Math.floor(Math.random() * 6 + 1);

if (random1 > random2) {
  document.querySelector("h1").innerHTML = "🚩player 1 wins!";
} else if (random2 > random1) {
  document.querySelector("h1").innerHTML = "player 2 wins!🚩";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}

const randomImageSource1 = "./dice" + random1 + ".png";
const randomImageSource2 = "./dice" + random2 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", randomImageSource1);
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);
