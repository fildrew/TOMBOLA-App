const controllo = [];

const generateTable = function (){
    const board = document.querySelector('#board')
    for(i = 1 ; i <= 76 ; i++){
        let cell = `<div id="${i}"><p>${i}</p></div>`
        board.innerHTML += cell;

    }
}
generateTable();
let button = document.querySelectorAll('button');


const reset = function(){
    window.location.reload();
}
button[0].addEventListener('click' , reset)


const randomNumber = function (){
    let randomNumber = Math.floor(Math.random()*77)+1;
    if(!controllo.includes(randomNumber)){
        controllo.push(randomNumber)
        let selectedCell1 = document.getElementById(randomNumber);
        let selectedCell2 = document.getElementsByClassName(`${randomNumber}`);
        selectedCell1.classList.add('marcato')
        selectedCell2[0].classList.add('marcato')
        let pickedNumber = document.querySelector('p');
        pickedNumber.innerText = `Il numero estratto è: ${randomNumber}`
    }
}


button[1].addEventListener('click' , randomNumber)


const schedeGioco = function (){
let numeroSchede = document.querySelector('input');
let postoSchede = document.querySelector('#partita > div')
for( i=0 ; i < numeroSchede.value ; i++ ){
    let scheda = document.createElement('section');
    postoSchede.appendChild(scheda);
    for(x = 0 ; x <= 24 ; x++){
        let newRandom = Math.floor(Math.random()*77)+1;
        let cella = `<div class="${newRandom}"><p>${newRandom}</p></div>`
        scheda.innerHTML += cella;
    }
}    
}

button[2].addEventListener('click' , schedeGioco)

