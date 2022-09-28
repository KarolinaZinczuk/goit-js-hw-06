// Napisz skrypt, który przy wpisywaniu tekstu w polu input 
// input#name-input (zdarzenie input) wstawia jego aktualną wartość
// do span#name-output. Jeśli pole input jest puste, 
// w spanie powinien wyświetlić się komunikat "Anonymous".

const nameInput = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");

const newInput = (event) => {
nameOutput.textContent = event.currentTarget.value;
if (nameOutput.textContent === "") nameOutput.textContent = "Anonymous"
}

nameInput.addEventListener("input", newInput);