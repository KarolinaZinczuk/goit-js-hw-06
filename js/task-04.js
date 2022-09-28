// Licznik składa się ze spana i przycisków, które, 
// po ich kliknięciu, powinny zwiększać i zmniejszać jego wartość 
// na jednostkę.

// 1. Utwórz zmienną counterValue w której będzie przechowywana 
// aktualna wartość licznika i inicjalizuj wartość 0.
// 2. Dodaj click listeners do przycisków, wewnątrz których 
// zwiększaj i zmniejszaj wartość licznika.
// 3. Aktualizuj interfejs nową wartością zmiennej counterValue.

let counterValue = 0;

const buttonDecrement = document.querySelector('button[data-action="decrement"]');
const buttonIncrement = document.querySelector('button[data-action="increment"]');
const value = document.getElementById(`value`);

const decrement = () => {
    counterValue -=1;
    value.textContent = counterValue;
};

const increment = () => {
    counterValue +=1;
    value.textContent = counterValue;
};

buttonDecrement.addEventListener("click", decrement);
buttonIncrement.addEventListener("click", increment);