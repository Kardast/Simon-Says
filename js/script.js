let myRandomNums = document.querySelector(".flex");
console.log(myRandomNums);


for (let i = 0; i < 5; i++) {
    let playNums = getRandomNumMinMax(1, 1000);
    console.log(playNums);
    const myDiv = document.createElement("div");
    myRandomNums.append(myDiv);
    myDiv.append(playNums);
}

let seconds = 1;
const counting = setInterval(myCountdown, 1000);

function myCountdown() {

    if (seconds === 0) {

        // clearInterval ti ferma il setInterval
        clearInterval(counting);
        parseInt(prompt("Inserisci il primo numero"));
        parseInt(prompt("Inserisci il secondo numero"));
        parseInt(prompt("Inserisci il terzo numero"));
        parseInt(prompt("Inserisci il quarto numero"));
        parseInt(prompt("Inserisci il quinto numero"));

    } else{
        
        seconds--;
        // seconds = seconds - 1;
    }
}

/*
Prova 1
creare un alert dopo tot secondi
var seconds = parseInt(prompt("Quanto manca alla cottura della pasta?"));
setTimeout(() => alert("la pasta è pronta!!"), seconds * 1000);
*/

/*
Prova 2
creare un countdown
const divEl = document.getElementById("grid");
let seconds = 10;
const counting = setInterval(conteggio, 1000);
*/

/*
Prova 3
creare un cronometro
var clock;
const divEl = document.getElementById("grid"); 
const startBtn = document.getElementById("mystart");
const endBtn = document.getElementById("myend");

click che fa partire il tempo e aumenta di secondo in secondo
startBtn.addEventListener("click",

    ()=> {
        let time = 0;
        clock = setInterval(
            function() {
                time++;
                divEl.innerHTML = time;
            }
        , 1000);
    }

);

endBtn.addEventListener("click", 

    ()=> {
        clearInterval(clock);
    }
)
*/





// funzione che crea un countdown
function conteggio() {

    divEl.innerHTML = seconds;

    if (seconds === 0) {

        // clearInterval ti ferma il setInterval
        clearInterval(counting);
        alert("Buon anno");

    } else{
        
        seconds--;
        // seconds = seconds - 1;
    }
}



// funzione che pusha numeri che scegli te da un min ad un max sempre diversi nell'array della dimensione che dai te
function createRandUniqueNumArr(numItems, min, max) {
    const arrInt = [];
    while (arrInt.length < numItems) {
        let randNumInt = getRandomNumMinMax(min, max);
        if(!arrInt.includes(randNumInt)){
            arrInt.push(randNumInt);
        }
    }
    return arrInt;
}


// funzione che crea un numero random
function getRandomNumMinMax(rangeMin, rangeMax) {
    let result = Math.floor(Math.random() * (rangeMax - rangeMin + 1)) + rangeMin;

    return result;
}


// funzione che controlla se un numero è pari o dispari
function pariODispari(numeroCheck) {
    // ritorna una stringa "pari" se il numero passato è pariODispari, sennò dispari
    let risultato;
    if (numeroCheck % 2 === 0) {
        risultato = "pari";
    } else {
        risultato = "dispari";
    }
    return risultato;
}


// funzione che crea 16 numeri casuali senza doppioni e nel range della difficoltà scelta
function getRandomBombMinMax(rangeMin, rangeMax) {
    let result = Math.floor(Math.random() * (rangeMax - rangeMin + 1)) + rangeMin;

    return result;
}


