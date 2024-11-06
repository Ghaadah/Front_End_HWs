// Add your code here
import characters from "./02-data.js";

const userText = document.getElementById("userInput");
const resultDiv = document.getElementById("result");

function handleClick() {
  const userText = userInput.value.toLowerCase();
  resultDiv.innerHTML = "";

  characters.forEach((element) => {
    if (element.name.toLowerCase().includes(userText)) {
      const cardCol = document.createElement("div");
      cardCol.classList.add("col-sm-6", "col-md-4", "col-lg-3", "mt-5");
      //true - creating the card
      const card = document.createElement("div");
      card.classList.add("card", "h-100", "text-center");

      const cardBody = document.createElement("div");
      cardBody.classList.add("card-body");

      const cardTitle = document.createElement("h3");
      cardTitle.classList.add("card-title");
      cardTitle.textContent = element.name;

      const cardtext = document.createElement("p");
      cardtext.classList.add("card-text");
      cardtext.textContent = "Birth Year: " + element.birth_year;

      cardBody.appendChild(cardTitle);
      cardBody.appendChild(cardtext);
      card.appendChild(cardBody);
      cardCol.appendChild(card);

      resultDiv.appendChild(cardCol);
    }
  });
}

//userInput.addEventListener("click", handleClick);
Search.addEventListener("click", handleClick);
