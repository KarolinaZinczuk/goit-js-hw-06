// Napisz skrypt, który reaguje na zmianę wartości
// input#font-size-control (zdarzenie input) i zmienia styl inline 
// span#text aktualizując właściwość font-size. W rezultacie,
// podczas przeciągania paska przesuwania będzie zmieniał się 
// rozmiar tekstu.

const input = document.getElementById("font-size-control")
const text = document.getElementById("text");

const textSize = (size) =>{
    text.style.fontSize = `${size.target.value}px`;
};

input.addEventListener("input", textSize);