const { response } = require("express");

const elem = document.querySelector("input");

let handleInput = () => {
  const number = elem.value;
  let numberString = number.toString();
  let numberRev = numberString.split("").reverse().join("");
  console.log(number, numberString, numberRev);

  let check = document.getElementById("check");
  check.innerText = "";
  if (number < 0) {
    check.innerText = "Not Vaild! Please enter a positve number";
    check.style.color = "#FF0000";
  } else {
    if (numberString === numberRev) {
      check.innerText = "Yes, This is a plindrome!";
      check.style.color = "#556B2F";
    } else {
      check.innerText = "No, Try again.";
      check.style.color = "#FF0000";
    }
  }
  return;
};
elem.addEventListener("input", handleInput);

