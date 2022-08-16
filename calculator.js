let firstNum = document.getElementById("firstNum");
let secondNum = document.getElementById("secondNum");

let addition = document.getElementById("addition");
let subtraction = document.getElementById("subtraction");
let multiplication = document.getElementById("multiplication");
let division = document.getElementById("division");

let result = document.getElementById("result");
let clear = document.getElementById("clear");

addition.addEventListener("click", function (e) {
  //result.innerText = firstNum.value + secondNum.value;
  let first = parseInt(firstNum.value);
  let second = parseInt(secondNum.value);
  result.innerText = first + second;
});

subtraction.addEventListener("click", function (e) {
  //result.innerText = firstNum.value + secondNum.value;
  let first = parseInt(firstNum.value);
  let second = parseInt(secondNum.value);
  result.innerText = first - second;
});

multiplication.addEventListener("click", function (e) {
  //result.innerText = firstNum.value + secondNum.value;
  let first = parseInt(firstNum.value);
  let second = parseInt(secondNum.value);
  result.innerText = first * second;
});

division.addEventListener("click", function (e) {
  //result.innerText = firstNum.value + secondNum.value;
  let first = parseInt(firstNum.value);
  let second = parseInt(secondNum.value);
  result.innerText = first / second;
});

clear.addEventListener("click", function (e) {
  firstNum.value = " ";
  secondNum.value = " ";
});
