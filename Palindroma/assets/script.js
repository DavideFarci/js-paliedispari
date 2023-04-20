/*
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/


//creo una funzione che prenda la stringa inserita, la converta in un array, inverta tutti i valori dell'array e la ritrasformi infine in una nuova stringa (ovvero la stringa inserita dall'utente ma letta al contrario).

//Infine eguaglio le due parole.



function reversingString(reversed){
    let reversedStr = str.split('').reverse().join('');
    if (str === reversedStr) {
        console.log("La parola che hai inserito è:", str);
        console.log("Questa è la stessa parola letta al contrario:", reversedStr);
        console.log("Le parola è palindroma")
    } else {
        console.log("La parola che hai inserito è:", str);
        console.log("Questa è la stessa parola letta al contrario:", reversedStr);
        console.log("La parola non è palindroma")
    }
}

//Quindi chiedo una parola all'utente tramite un prompt e chiamo la funzione creata

let str = prompt("Dammi una parola");
reversingString(str);







