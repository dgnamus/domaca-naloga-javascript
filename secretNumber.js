let button = document.getElementById("guess");

let result = document.getElementById("result");
const secret = Math.floor(Math.random() * 100) + 1;

button.addEventListener("click", function (e) {
  let input = document.getElementById("input").value;

  if (input < secret) {
    result.innerText = "Try again, the number you entered is too low 👎";
  } else if (input > secret) {
    result.innerText = "Try again, the number you entered is too high 🤌";
  } else {
    result.innerText = "Congratz, you guessed the number 🫶";
  }
});

console.log(secret);
