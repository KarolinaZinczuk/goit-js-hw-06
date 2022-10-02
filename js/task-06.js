// Napisz skrypt, który przy utracie fokusu na polu input 
// (zdarzenie blur) sprawdza jego zawartość na prawidłową 
// liczbę wprowadzonych symboli.

// 1. Informacja o liczbie symboli, która powinna znajdować się 
// w polu input, pokazuje się w jego atrybucie data-length.
// 2. Jeśli wprowadzono odpowiednią liczbę symboli, to border pola 
// input staje się zielone, a jeśli liczba jest nieprawidłowa - 
// czerwone.

// Aby dodać style, używaj klas CSS valid i invalid,
//  które już dodaliśmy do plików źródłowych zadania.

const input = document.getElementById("validation-input");
const inputLength = input.dataset.length;

const validClass = (add, remove) => {
    input.classList.add(add);
    input.classList.remove(remove);
};

const blur = (event) => {
const length = event.currentTarget.value.length;
if (length == inputLength) {
    return validClass("valid", "invalid");
} else {
    return validClass("invalid", "valid");
}};

input.addEventListener("blur", blur);

// console.log(length);
// console.log(inputLength)