const elem = document.querySelector("input");
let number, numberString, numberRE;
let check = document.getElementById("check");
check.innerHTML = "";

let handleInput = () => {
  let number = elem.value;
  let numberString = number.toString();
  let numberRev = numberString.split("").reverse().join("");
  if (number < 0) {
    check.innerHTML = "Not Vaild! Please enter a positve number";
    check.style.color = "red";
    return;
  } else {
    if (numberString === numberRev) {
      check.innerHTML = "Yes, This is a plindrome!";
      check.style.color = "green";
    } else {
      check.innerHTML = "No, Try again.";
      check.style.color = "red";
    }
  }
  return;
};
elem.addEventListener("input", handleInput);
