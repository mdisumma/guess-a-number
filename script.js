const result = 3;
console.log(typeof number);

const input = document.querySelector("#input");
const button = document.querySelector("#button");

console.log(button);
console.log(input);

button.addEventListener("click", function () {
  let guess = Number(input.value);
  if (guess === result) {
    console.log("yes");
  } else {
    console.log("no");
  }
});
