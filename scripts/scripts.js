const buttons = document.querySelectorAll(".btn-circle");
const score = document.getElementById("score");
const result = document.getElementById("result");
const restart = document.getElementById("restart");
const modal = document.querySelector(".modal");

// The available choices can be stored in an array
let choices = [
  "rock",
  "paper",
  "scissors",
  "lizard",
  "spock",
];

//function definition that will return a random value based upon the choices in the array defined above using built in JavaScript methods
function randomChoice() {
  return choices[
    Math.floor(Math.random() * choices.length)
  ];
}
window.addEventListener("load", () => {
  let userChoice = "";

  document
    .querySelectorAll(".user-choice .game-card")
    .forEach((card) => {
      card.addEventListener("click", (ev) => {});
    });
});

function startGame() {}
