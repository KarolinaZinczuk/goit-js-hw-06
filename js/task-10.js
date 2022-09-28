// Napisz skrypt tworzenia i usuwania kolekcji elementów. 
// Użytkownik wprowadza liczbę elementów do input i naciska
// przycisk Utwórz, co rozpoczyna tworzenie się kolekcji. 
// Po naciśnięciu przycisku Usuń, kolekcja elementów zostaje 
// usunięta.

// Utwórz funkcję createBoxes(amount), która bierze jeden parametr 
// - liczbę. Funkcja tworzy tyle <div>, ile ukazano w amount i 
// dodaje je do div#boxes.

// 1. Wymiary pierwszego <div> - 30px na 30px.
// 2. Każdy następny element powinien być szerszy i wyższy od 
// poprzedniego o 10px.
// 3. Wszystkie elementy powinny mieć losowy kolor tła w formacie 
// NEX. Użyj gotowej funkcji getRandomHexColor aby otrzymać kolor.

// Utwórz funkcję destroyBoxes(), która usuwa zawartość div#boxes, 
// tym samym usuwając wszystkie utworzone elementy.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const divControls = document.getElementById("controls");
const input = divControls.querySelector("input");
const buttonCreate = divControls.querySelector("[data-create]");
const buttonDestroy = divControls.querySelector("[data-destroy]");
const boxes = document.getElementById("boxes");

const createBoxes = (amount) => {
  const divBoxes = [];

  for (let i =0; i < amount; i++) {
    const addBoxes = document.createElement(`div`);
    addBoxes.style.width = `${30 + 10 * i}px`;
    addBoxes.style.height = `${30 + 10 * i}px`;
    addBoxes.style.backgroundColor = getRandomHexColor();

    divBoxes.push(addBoxes);
  };  
  boxes.append(...divBoxes);
}

const destroyBoxes = () => boxes.innerHTML = ``;

buttonCreate.addEventListener(`click`, () => createBoxes(input.value));
buttonDestroy.addEventListener(`click`, destroyBoxes);