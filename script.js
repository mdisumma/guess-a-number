const result = Math.round(Math.random() * 100);
console.log(result);

const input = document.querySelector("#input");
const submit = document.querySelector("#submit");
const closerLabel = document.querySelector(".answere");
const answere = document.querySelector("#answere");
const previousLabel = document.querySelector(".previous");
const previous = document.querySelector("#previous");

let guess = result;
let counter = guess - result;

submit.addEventListener("click", function () {
  const guess = Number(input.value);

  if (guess - result === 0) {
    console.log("you won");
    closed.textContent = "you won";
    closed.style = "color:red";
  }
  if (guess - result !== 0) {
    let preCounter = counter;

    console.log("counter before " + counter);
    counter = Math.abs(guess - result);
    console.log("pre counter " + preCounter);
    console.log("counter after " + counter);

    if (preCounter < counter) {
      console.log("no");
      answere.textContent = "no";
    }
    if (preCounter > counter) {
      console.log("yes");
      answere.textContent = "yes";
    }
  }
});
