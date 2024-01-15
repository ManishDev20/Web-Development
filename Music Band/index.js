var countDrum = document.querySelectorAll(".drum").length;

//detecting button press

for (i = 0; i < countDrum; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    var buttonPress = this.innerHTML;
    makeSound(buttonPress);
    buttonAnimation(buttonPress);
  });
}

//detecting keyboard press

document.addEventListener("keydown", function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

// make sound acc. to above to conditions

function makeSound(key) {
  switch (key) {
    case "w":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "a":
      var crash = new Audio("sounds/kick-bass.mp3");
      crash.play();
      break;
    case "s":
      var crash = new Audio("sounds/snare.mp3");
      crash.play();
      break;
    case "d":
      var crash = new Audio("sounds/tom-1.mp3");
      crash.play();
      break;
    case "j":
      var crash = new Audio("sounds/tom-2.mp3");
      crash.play();
      break;
    case "k":
      var crash = new Audio("sounds/tom-3.mp3");
      crash.play();
      break;
    case "l":
      var crash = new Audio("sounds/tom-4.mp3");
      crash.play();
      break;
    default:
      break;
  }
}

// add Animation to our buttons

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function () {
    activeButton.classList.remove("pressed");
  });
}
