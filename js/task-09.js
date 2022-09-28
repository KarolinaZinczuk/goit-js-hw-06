// Napisz skrypt, który zmienia kolor tła elementu <body> poprzez
// style inline po kliknięciu na button.change-color i 
// wprowadza wartość koloru do span.color.

// Aby wygenerować losowy kolor użyj funkcji getRandomHexColor.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyColor = document.querySelector("body");
const spanColor = bodyColor.querySelector(".color");
const buttonColorRandom = bodyColor.querySelector(".change-color");

const changeColor = () => {
  const randomColor = getRandomHexColor ();
  bodyColor.style.backgroundColor = `${randomColor}`;
  spanColor.textContent = `${randomColor}`;
};

buttonColorRandom.addEventListener("click", changeColor);