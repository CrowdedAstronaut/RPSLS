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

// function checkWinner(playerChoice, computerChoice) {
//   computerChoice = randomChoice();
//   randomChoice();
//   if (playerChoice === computerChoice) {
//     // document.getElementById("status").innerHTML +=
//     console.log("You tied");
//   } else if (
//     (playerChoice === choices[1] &&
//       (computerChoice === choices[0] ||
//         computerChoice === choices[4] ||
//         computerChoice === choices[2] ||
//         computerChoice === choices[3])) ||
//     (playerChoice === choices[3] &&
//       (computerChoice === choices[4] ||
//         computerChoice === choices[1])) ||
//     (playerChoice === choices[4] &&
//       (computerChoice === choices[2] ||
//         computerChoice === choices[0]))
//   ) {
//     // document.getElementById("status").innerHTML +=
//     //   "You win! :) ";
//     console.log("You Win");
//     // updateScore(1);
//   } else {
//     // document.getElementById("status").innerHTML +=
//     //   "You lose. :(";
//     // updateScore(-1);
//     console.log("You Lose");
//   }
// }
//   function updateScore(value) {
//     score += value;
//     scoreDisplay.textContent = score;
//     return score;
//   }
// }
// console.log(playerChoice);

// add event listeners to buttons
// for (let i = 0; i < buttons.length; i++) {
//   buttons[i].addEventListener(
//     "click",
//     checkWinner.bind(
//       null,
//       console.log("you clicked on " + choices[i])
//     )
//   );
// }

// // Event listeners
// choices.forEach((choice) =>
//   choice.addEventListener("click", play)
// );
// window.addEventListener("click", clearModal);
// restart.addEventListener("click", restartGame);
