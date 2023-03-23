// Code goes here!
const userName = "Max";

let age = 30;

const add = (a: number, b: number) => a + b;

const printOutput: (a: number | string) => void = (output) =>
  console.log(output);

const button = document.querySelector("button");

if (button) {
  button.addEventListener("click", (event) => {
    console.log(event);
  });
}

printOutput(add(2, 5));

// if (age > 20) {
//   let isOld = true;
// }

// console.log(isOld);

// console.log(result);
