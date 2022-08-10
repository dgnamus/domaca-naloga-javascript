let button = document.getElementById("convert");

let convertedToKm = document.getElementById("result");

button.addEventListener("click", function (e) {
  let input = document.getElementById("input").value;
  convertedToKm.innerText = `That's ${
    input * (1.609344).toFixed(2)
  } kilometers`;
});
