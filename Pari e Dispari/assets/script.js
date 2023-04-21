/*
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/

//Creo la funzione per generare un numero random
function getRandomInteger(min, max) {
	const random = Math.floor(Math.random() * (max - min + 1) ) + min;
	return random;
}

// Creo una funzione che controlli se un numero è pari o dispari
function isEven(number) {
	if (number % 2 == 0) {
        return "pari";
    } else {
        return "dispari";
    }
}


// Chiedo all'utente di scegliere pari o dispari, inserisco un ciclo while per impedire all'utente di andare avanti nel caso in cui l'utente non inserisca i valori corretti.
let eleEvenOdd = "";
while (eleEvenOdd !== "pari" && eleEvenOdd !== "dispari") {
  eleEvenOdd = prompt("Inserisci 'pari' o 'dispari':");
}

// Chiedo all'utente un numero da uno a cinque
const eleNumUser = parseInt(prompt("Dammi un numero da 1 a 5"));

// Ora genero un numero random per il computer
let eleRandomPC = getRandomInteger(1, 5);
// console.log(eleRandomPC)

// Ora sommo i due numeri dei giocatori
let sum = eleNumUser + eleRandomPC; 

// Chiamo la funzione per controllare se la somma è pari o dispari
isEven(sum);

// Scrivo tutti i dati sulla console
console.log("Tu hai scelto:", eleEvenOdd);
console.log("Il tuo numero:", eleNumUser);
console.log("Il numero del computer:", eleRandomPC);
console.log("La somma è:", sum);

// Imposto una condizionale per stabilire il vincitore
if (eleEvenOdd == isEven(sum)) {
    console.log("Hai vinto!!!!");
} else {
    console.log("Hai perso!!!!");
}    




// else if (eleEvenOdd == "dispari" && isEven(sum) == false || eleEvenOdd == "pari" && isEven(sum) == true) {
//     console.log("Il tuo numero:", eleNumUser);
//     console.log("Il numero del computer:", eleRandomPC);
//     console.log("La somma è:", sum);
//     console.log("Hai vinto!!!!"); 