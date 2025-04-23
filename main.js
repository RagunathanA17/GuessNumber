let guessNo = document.getElementById('guessno');

let checks = document.getElementById('Check');
let result = document.getElementById('result');

let scores = document.getElementById('scores')


let name = document.getElementById('Namechange');

name.textContent = "Guess Game"


let randomno = Math.floor(Math.random()*10) + 1
let scorevalue = 10;

function Check(){
    let enterno = randomno;
    if(enterno == Number(guessNo.value)){
        result.textContent = "U R Won..."
        alert("won.... Super")

    }
    
    else{
        result.textContent = "You are Wrong Try Again..."
        scorevalue = scorevalue - 1;
        scores.textContent = "Score: " + scorevalue;

        checks.addEventListener("click", ()=>{
            guessNo.textContent = ""
            guessNo.value = ""
        })
    }

}