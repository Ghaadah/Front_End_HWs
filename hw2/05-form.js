// Add your code here
document.addEventListener()
const getForm = document.getElementById("formItems");
const printArea = document.getElementById("print");

getForm.addEventListener("submit", () => {
  const fullName = document.getElementById("name").value;
  const email = document.getElementById("Email").value;
  const status = document.getElementById("status").value;
  const userText = document.getElementById("textArea").value;

  const courseSelected = () => {
    let classes = []; // array to save selected classes
    const class1 = document.getElementById("Programing");
    const class2 = document.getElementById("Operation");
    const class3 = document.getElementById("FullStack");

    if (class1.checked) {
      classes.push(class1.value);
    } else if (class2.checked) {
      classes.push(class2.value);
    } else if (class3.checked) {
      classes.push(class3.value);
    } else return "No course is selected";

    return classes;
  };

  //printing the form
  const nameprint = document.createElement("h4");
  const emailPrint = document.createElement("p");
  const statusPrint = document.createElement("p");
  const classesPrint = document.createElement("p");
  const textPrint = document.createElement("p");

  nameprint.textContent = fullName;
  emailPrint.textContent = email;
  statusPrint.textContent = status;
  classesPrint.textContent = courseSelected();
  textPrint.textContent = userText;

  printArea.appendChild(nameprint);
  printArea.appendChild(emailPrint);
  printArea.appendChild(statusPrint);
  printArea.appendChild(classesPrint);
  printArea.appendChild(textPrint);
  // Clear the form after reset
});
