"use strict";

const randomNumber = Math.trunc(Math.random() * 20);
console.log(randomNumber);
let csore = 20;
document.querySelector(".again").addEventListener("click", function () {
  location.reload();
});
document.querySelector(".check").addEventListener("click", function () {
  csore--;
  document.querySelector(".label-score").textContent =
    "💯 Кол-во попыток:" + csore;
  const guess = document.querySelector(".guess").value;
  if (randomNumber > guess) {
    document.querySelector(".message").textContent = "Слишком мало";
  } else if (guess > randomNumber) {
    document.querySelector(".message").textContent = "Слишком мого";
  } else if (guess == randomNumber) {
    document.querySelector(".message").textContent = "Вы победили";
    document.querySelector("body").style.background = "green";
    document.querySelector(".number").textContent = randomNumber;
    document.querySelector(".label-highscore").textContent =
      "🥇 Рекорд: " + csore;
  }
  if (csore < 0) {
    location.reload();
  }
});
