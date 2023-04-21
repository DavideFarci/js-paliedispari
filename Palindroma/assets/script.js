/*
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/


//METODO FACILE trasforma la parola in un array (.split), inverto tutti i valori dell'arrai (.reverse) e infine riconverto in stringa (.join). Dopodichè verifico che le parole siano uguali o no.

// function reversingString(reversed){
//     let reversedStr = str.split('').reverse().join('');
//     if (str === reversedStr) {
//         console.log("La parola che hai inserito è:", str);
//         console.log("Questa è la stessa parola letta al contrario:", reversedStr);
//         console.log("Le parola è palindroma")
//     } else {
//         console.log("La parola che hai inserito è:", str);
//         console.log("Questa è la stessa parola letta al contrario:", reversedStr);
//         console.log("La parola non è palindroma")
//     }
// }


// Creo una funzione nella quale creo una variabile da riempire e imposto un ciclo for per leggere al contrario la parola sulla quale la funzione agisce, dopodichè assegno i valori letti alla variabile vuota per creare la parola al contrario, infine imposto una condizionale per riconoscere se le parole sono uguali.

function isPalindrom(word) {
    let elInversa = "";

    for (i = word.length - 1; i >= 0; i--) {
        elInversa += word[i];
    }
    
    if (word.toLowerCase() == elInversa.toLowerCase()) {
        console.log("Palindromo")
    } else {
        console.log("NON Palindromo")
    }
}

//Quindi chiedo una parola all'utente tramite un prompt e chiamo la funzione creata

let str = prompt("Dammi una parola").replace(/\s+/g, '');
isPalindrom(str);










