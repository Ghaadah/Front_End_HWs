// Add your code here
import characters from "./02-data.js";

//userInput.addEventListener("click", handleClick);
Search.addEventListener("click", handleClick);

const userText = document.getElementById("userInput");
const resultDiv = document.getElementById("result");

function handleClick() {
  const userText = userInput.value.toLowerCase();
  resultDiv.innerHTML = "";
  characters.forEach((element) => {
    if (element.name.toLowerCase().includes(userText)) {
      //creating the card
      const card = document.createElement("div");
      card.classList.add("card");// what is the difference between classList and ClassName?
      resultDiv.appendChild(card);

      const cardTitle = document.createElement("h3");
      cardTitle.innerHTML = element.name ;
      cardTitle.classList.add("card-Title");
      card.appendChild(cardTitle);

      const cardtext = document.createElement("p");
      cardtext.textContent = "Birth Year: " + element.birth_year;
      card.appendChild(cardtext);
    }
  });
}

