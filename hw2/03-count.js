const userInput = document.getElementById("userInput");
const Text = document.getElementById("para");
const originalText = Text.textContent;

const handleKeyDown = () => {
  const searchText = userInput.value.trim();

  if (searchText.length > 0) {
    const TextParts = originalText.split(/\b/);

    const highlightedText = TextParts.map((wordInText) => {
      if (wordInText.toLowerCase() === searchText.toLowerCase()) {
        return `<span style = "background-color : yellow">${wordInText}</span>`; // Highlight the match
      }
      return wordInText;
    });
    Text.innerHTML = highlightedText.join("");
  } else {
    Text.innerHTML = originalText;
  }
};
userInput.addEventListener("keydown", handleKeyDown);
