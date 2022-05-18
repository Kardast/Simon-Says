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

let seconds = 30;
const counting = setInterval(myCountdown, 1000);

function myCountdown() {

    if (seconds === 0) {

        // clearInterval ti ferma il setInterval
        clearInterval(counting);

        myRandomNums.classList.add("disappear");

        while (userArray.length < 5) {
            const secretNum = parseInt(prompt("Inserisci il tuo numero"));
            userArray.push(secretNum);
        }

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


// funzione che crea un numero random
function getRandomNumMinMax(rangeMin, rangeMax) {
    let result = Math.floor(Math.random() * (rangeMax - rangeMin + 1)) + rangeMin;

    return result;
}


