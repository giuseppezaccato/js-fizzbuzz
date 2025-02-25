/*  Scrivi un programma che stampi i numeri da 1 a 100,
ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per?
Abbiamo visto qualcosa di particolare che possiamo usare?
Consigli del giorno:
1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
2. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano" */

// ! ----------TASK 1----------
// * fare partire il ciclo da 1 a 100


for (let i = 1; i <= 100; i++) {

    // ! ----------TASK 2----------
    // * riconoscimento priorità e specificità delle condizioni 
    // * per evitare che con l'effetto a cascata vengano ignorate

    // ? una volta dentro al ciclo parto con le condizioni (usando il modulo di selezione %) per cui il numero selezionato deve dare in console una stampa diversa, 
    // ? tenendo SEMPRE conto del fatto che in generale negli IF funziona PRIMA la condizione piu SPECIFICA e poi quella piu GENERALE

    // todo  situazione piu specifica di partenza, con entrambe (&&) le condizioni true
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("FizzBuzz");
    }

    // todo situazione in condizione di % 3 == 0
    else if (i % 3 == 0) {
        console.log("Fizz");
    }

    // todo situazione in condizione di % 5 == 0
    else if (i % 5 == 0) {
        console.log("Buzz");
    } else {

        // todo situazione generale dove viene stampato il numero i nel resto delle condizioni possibili
        console.log(i);
    }
}

