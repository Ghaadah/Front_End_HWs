// Add your code here

const userInput = document.getElementById("userInput");
const Text = document.getElementById("para");
const str = Text.innerText;

//clear pprevious highlights

const handleKeyDown = () => {

  const inputText = userInput.value.trim(); //remove the white spaces
  const regexp = new RegExp(inputText, "gi"); //Case-insensitive search
 
  const matches = str.match(regexp);
  console.log(matches);
    for (let match of matches) {
      const highlightedText = str.replace(regexp, (match) => {
        return `<span class="highlight">${match}</span>`; // Highlight the match
    });
    Text.innerHTML = highlightedText; // Update paragraph with highlighted text
}

  
};
userInput.addEventListener("keydown", handleKeyDown);
//input.addEventListener("keydown", handleKeyDown);
