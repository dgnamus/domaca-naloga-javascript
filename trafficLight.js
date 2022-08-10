let red = document.getElementById("red");
let yellow = document.getElementById("yellow");
let green = document.getElementById("green");

red.addEventListener("mouseover", function (e) {
  red.classList.add("red");
});

red.addEventListener("mouseout", function (e) {
  red.classList.remove("red");
});

yellow.addEventListener("mouseover", function (e) {
  yellow.classList.add("yellow");
});

yellow.addEventListener("mouseout", function (e) {
  yellow.classList.remove("yellow");
});

green.addEventListener("mouseover", function (e) {
  green.classList.add("green");
});

green.addEventListener("mouseout", function (e) {
  green.classList.remove("green");
});
