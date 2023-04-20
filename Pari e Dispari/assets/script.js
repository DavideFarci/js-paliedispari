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
        return true;
    } else {
        return false
    }
}


// Chiedo all'utente di scegliere pari o dispari, inserisco un controllo per i valori corretti
const eleEvenOdd = prompt("Scegli Pari o Dispari");
// if (eleEvenOdd !== "Pari" || eleEvenOdd !== "pari" || eleEvenOdd !== "Dispari" || eleEvenOdd !== "dispari"){
//     alert("Aggiorna la pagina e inserisci valore corretto!");
// }

// Chiedo all'utente un numero da uno a cinque
const eleNumUser = parseInt(prompt("Dammi un numero da 1 a 5"));

// Ora genero un numero random per il computer
let eleRandomPC = getRandomInteger(1, 5);
// console.log(eleRandomPC)

// Ora sommo i due numeri dei giocatori
let sum = eleNumUser + eleRandomPC; 

// Chiamo la funzione per controllare se la somma è pari o dispari
isEven(sum);

// Imposto una condizionale per stabilire il vincitore
if (eleEvenOdd == "pari" && isEven(sum) == true || eleEvenOdd == "dispari" && isEven(sum) == false) {
    console.log("Tu hai scelto:", eleEvenOdd);
    console.log("Il tuo numero:", eleNumUser);
    console.log("Il numero del computer:", eleRandomPC);
    console.log("La somma è:", sum);
    console.log("Hai vinto!!!!");
} else {
    console.log("Tu hai scelto:", eleEvenOdd);
    console.log("Il tuo numero:", eleNumUser);
    console.log("Il numero del computer:", eleRandomPC);
    console.log("La somma è:", sum);
    console.log("Hai perso!!!!");
}    




// else if (eleEvenOdd == "dispari" && isEven(sum) == false || eleEvenOdd == "pari" && isEven(sum) == true) {
//     console.log("Il tuo numero:", eleNumUser);
//     console.log("Il numero del computer:", eleRandomPC);
//     console.log("La somma è:", sum);
//     console.log("Hai vinto!!!!"); 