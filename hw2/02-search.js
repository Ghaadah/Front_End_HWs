// Add your code here
import characters from "./02-data.js";

userInput.addEventListener("click", handleClick);
Search.addEventListener("click", handleClick);

const userText = document.getElementById("userInput");
const resultDiv = document.getElementById("result");

function handleClick() {
  const userText = userInput.value.toLowerCase();
  resultDiv.innerHTML = "";
  characters.forEach((element) => {
    if (element.name.toLowerCase().includes(userText)) {
      //true - creating the card
      const card = document.createElement("div");
      card.className = "card";
      card.className = "m-2";
      card.className = "bg-white";
      card.style.width = "300px";

      const cardBody = document.createElement("div");
      cardBody.className = "card-body";

      const cardTitle = document.createElement("h3");
      cardTitle.className = "card-title";
      cardTitle.textContent = element.name;

      // //to highlight the similar text
      // const highlighText = element.name.replace(
      //   new RegExp("(${userText})", "gi"),
      //   (match) => `span style="background-color:yellow>${match}</span>`
      // );
      // cardTitle.innerHTML = highlighText;

      const cardtext = document.createElement("p");
      cardtext.className = "card-p";
      cardtext.textContent = "Birth Year: " + element.birth_year;

      cardBody.appendChild(cardTitle);
      cardBody.appendChild(cardtext);
      card.appendChild(cardBody);
      resultDiv.appendChild(card);
    }
  });
}
