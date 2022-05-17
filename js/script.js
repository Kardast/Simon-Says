let myRandomNums = document.querySelector(".flex");
console.log(myRandomNums);

let myArray = [];
let userArray = [];

for (let i = 0; i < 5; i++) {
    let playNums = getRandomNumMinMax(1, 1000);
    console.log(playNums);
    const myDiv = document.createElement("div");
    myRandomNums.append(myDiv);
    myDiv.append(playNums);
    myArray.push(playNums);
    console.log(myArray);
}

let seconds = 1;
const counting = setInterval(myCountdown, 1000);

function myCountdown() {

    if (seconds === 0) {

        // clearInterval ti ferma il setInterval
        clearInterval(counting);

        myRandomNums.classList.add("disappear");
        const numberOne = parseInt(prompt("Inserisci il primo numero"));
        const numberTwo = parseInt(prompt("Inserisci il secondo numero"));
        const numberThree = parseInt(prompt("Inserisci il terzo numero"));
        const numberFour = parseInt(prompt("Inserisci il quarto numero"));
        const numberFive = parseInt(prompt("Inserisci il quinto numero"));
        userArray.push(numberOne, numberTwo, numberThree, numberFour, numberFive);

        console.log(userArray);
    } else{
        
        seconds--;
    }

    let resultNum = 0;

    for (let j = 0; j < myArray.length; j++) {
        for (let k = 0; k < userArray.length; k++) {

            if (myArray[j] === userArray[k]) {
                resultNum++;
                console.log(userArray[k]);
            }
        }
    }

    if (resultNum > 0) {
        console.log("Il tuo risultato è:", resultNum);
    }
}



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


// funzione che crea un numero random
function getRandomNumMinMax(rangeMin, rangeMax) {
    let result = Math.floor(Math.random() * (rangeMax - rangeMin + 1)) + rangeMin;

    return result;
}


