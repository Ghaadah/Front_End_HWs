const elem = document.querySelector("input");
let check = document.getElementById("check");
check.innerHTML = "";

let handleInput = () => {
  const number = elem.value;
  let numberString = number.toString();
  let numberRev = numberString.split("").reverse().join("");
  if (number < 0) {
    check.innerHTML = "Not Vaild! Please enter a positve number";
    check.style.color = "red";
    return;
  } else {
    if (numberString === numberRev) {
      check.innerHTML = "It is plindrome";
      check.style.color = "blue";
    } else {
      check.innerHTML = "It is not a plindrome";
      check.style.color = "gray";
    }
  }
  return;
};
elem.addEventListener("input", handleInput);
