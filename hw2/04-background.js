// Add your code here
const button = document.getElementById("toggle");
const userInput = document.getElementById("userInput");

//randomColor
const randomColor = () => {
  const R = Math.floor(Math.random() * 250);
  const G = Math.floor(Math.random() * 250);
  const B = Math.floor(Math.random() * 250);
  const A = 0.5; //softer effect
  return `rgba(${R},${G},${B},${A})`;
};

//color should start randomaly changing
const changeBodyColor = () => {
  BodyColor.style.background = randomColor();
};
const handleClick = (() => {
  let change = null; //interval ID
  let isRunning = false;

  return function () {
    let changeTime = Number(userInput.value);

    if (!isRunning) {
      changeBodyColor();
      change = setInterval(changeBodyColor, changeTime * 1000);
      button.textContent = "Stop";
      button.classList.add("bg-danger");
    } else {
      clearInterval(change);
      button.textContent = "Start";
      button.classList.remove("bg-danger");
    }
    isRunning = !isRunning;
  };
})();

button.addEventListener("click", handleClick);
