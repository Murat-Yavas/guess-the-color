const rgbCode = document.getElementById("rgb-code");
const c1 = document.querySelector(".colors").children[0];
const c2 = document.querySelector(".colors").children[1];
const c3 = document.querySelector(".colors").children[2];
const c4 = document.querySelector(".colors").children[3];
const c5 = document.querySelector(".colors").children[4];
const c6 = document.querySelector(".colors").children[5];
const info = document.getElementById("isTrue");
const reset = document.getElementById("reset-btn");

let num1 = Math.floor(Math.random() * 256);
let num2 = Math.floor(Math.random() * 256);
let num3 = Math.floor(Math.random() * 256);

rgbCode.innerHTML = "(" + num1 + ", " + num2 + ", " + num3 + ")";

function eventListeners() {
  c1.addEventListener("click", check1);
  c2.addEventListener("click", check2);
  c3.addEventListener("click", check3);
  c4.addEventListener("click", check4);
  c5.addEventListener("click", check5);
  c6.addEventListener("click", check6);
  reset.addEventListener("click", reload);
}
eventListeners();

window.addEventListener("load", () => {
  c1.style.backgroundColor =
    "rgb(" +
    Math.floor(Math.random() * 256) +
    "," +
    Math.floor(Math.random() * 256) +
    "," +
    Math.floor(Math.random() * 256) +
    ")";
  c2.style.backgroundColor =
    "rgb(" +
    Math.floor(Math.random() * 256) +
    "," +
    Math.floor(Math.random() * 256) +
    "," +
    Math.floor(Math.random() * 256) +
    ")";
  c3.style.backgroundColor =
    "rgb(" +
    Math.floor(Math.random() * 256) +
    "," +
    Math.floor(Math.random() * 256) +
    "," +
    Math.floor(Math.random() * 256) +
    ")";
  c4.style.backgroundColor =
    "rgb(" +
    Math.floor(Math.random() * 256) +
    "," +
    Math.floor(Math.random() * 256) +
    "," +
    Math.floor(Math.random() * 256) +
    ")";
  c5.style.backgroundColor =
    "rgb(" +
    Math.floor(Math.random() * 256) +
    "," +
    Math.floor(Math.random() * 256) +
    "," +
    Math.floor(Math.random() * 256) +
    ")";
  c6.style.backgroundColor =
    "rgb(" +
    Math.floor(Math.random() * 256) +
    "," +
    Math.floor(Math.random() * 256) +
    "," +
    Math.floor(Math.random() * 256) +
    ")";
});

let trueButton = Math.floor(Math.random() * 6);
console.log(trueButton);

if (trueButton === 0) {
  window.addEventListener("load", () => {
    c1.style.backgroundColor = "rgb(" + num1 + "," + num2 + "," + num3 + ")";
  });
} else if (trueButton === 1) {
  window.addEventListener("load", () => {
    c2.style.backgroundColor = "rgb(" + num1 + "," + num2 + "," + num3 + ")";
  });
} else if (trueButton === 2) {
  window.addEventListener("load", () => {
    c3.style.backgroundColor = "rgb(" + num1 + "," + num2 + "," + num3 + ")";
  });
} else if (trueButton === 3) {
  window.addEventListener("load", () => {
    c4.style.backgroundColor = "rgb(" + num1 + "," + num2 + "," + num3 + ")";
  });
} else if (trueButton === 4) {
  window.addEventListener("load", () => {
    c5.style.backgroundColor = "rgb(" + num1 + "," + num2 + "," + num3 + ")";
  });
} else {
  window.addEventListener("load", () => {
    c6.style.backgroundColor = "rgb(" + num1 + "," + num2 + "," + num3 + ")";
  });
}

function check1(e) {
  if (trueButton === 0) {
    info.innerHTML = "Correct!";
  } else {
    info.innerHTML = "Wrong choice, guess again!";
  }
}
function check2(e) {
  if (trueButton === 1) {
    info.innerHTML = "Correct";
  } else {
    info.innerHTML = "Wrong choice, guess again!";
  }
}
function check3(e) {
  if (trueButton === 2) {
    info.innerHTML = "Correct";
  } else {
    info.innerHTML = "Wrong choice, guess again!";
  }
}
function check4(e) {
  if (trueButton === 3) {
    info.innerHTML = "Correct";
  } else {
    info.innerHTML = "Wrong choice, guess again!";
  }
}
function check5(e) {
  if (trueButton === 4) {
    info.innerHTML = "Correct";
  } else {
    info.innerHTML = "Wrong choice, guess again!";
  }
}
function check6(e) {
  if (trueButton === 5) {
    info.innerHTML = "Correct";
  } else {
    info.innerHTML = "Wrong choice, guess again!";
  }
}

function reload(e) {
  window.location.reload();
}

console.log(info.style.color);
