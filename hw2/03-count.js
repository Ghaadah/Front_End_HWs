// Add your code here

const userInput = document.getElementById("userInput");
const Text = document.getElementById("para");
const str = Text.innerText; // originalText

const handleKeyDown = () => {
  const inputText = userInput.value.trim(); //remove the white spaces
  //case 1: blank - no format
  if (inputText === "") {
    Text.innerHTML = str;
    return;
  }

  const regexp = new RegExp(inputText, "gi"); //Case-insensitive search

  const matches = str.match(regexp);
  console.log(matches);
  let highlightedText = str;

  for (let match of matches) {
    highlightedText = highlightedText.replace(regexp, (match) => {
      return `<span style = "background-color : yellow">${match}</span>`; // Highlight the match
    });
    Text.innerHTML = highlightedText; // Update paragraph with highlighted text
  }
};
userInput.addEventListener("keydown", handleKeyDown);
//input.addEventListener("keydown", handleKeyDown);
