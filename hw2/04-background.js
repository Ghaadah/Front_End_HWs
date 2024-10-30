// Add your code here
const BodyColor = document.getElementById("bodyColor");
const button = document.getElementById("toggle");
const userInput = document.getElementById("userInput");
let changeTime = userInput.value;
console.log(changeTime);

//randomColor
const randomColor = () => {
  const R = Math.floor(Math.random() * 250);
  const G = Math.floor(Math.random() * 250);
  const B = Math.floor(Math.random() * 250);
  const A = 0.5; //softer effect
  return `rgba(${R},${G},${B},${A})`;
};
//Apply to the body background at window onload
window.addEventListener("load", () => {
  console.log("page is loaded");

  //color should start randomaly changing
  const changeBodyColor = () => {
    if (changeTime > 0) {
      BodyColor.style.background = randomColor();
    }
    //document.body.style.backgroundColor= randomColor()
  };

  //set time 3 seconds
  setInterval(changeBodyColor, changeTime * 1000);
  if (changeTime > 0) {
    changeBodyColor();
  }
});

button.addEventListener("click", () => {
  if (button.value === "Start") {
    button.value = "Stop";
    button.textContent = "Stop";
    button.style.background = "#dc3545"; //red
    changeTime = 0;
    BodyColor.style.background = "#343a40";
  } else {
    button.value = "Start";
    button.textContent = "Start";
    button.style.background = "#0d6efd"; //blue
    changeTime = userInput.value;
  }
});
