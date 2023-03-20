const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const themes = document.querySelector('.theme')
const moles = document.querySelectorAll('.mole');
const animals = document.querySelectorAll('.animals');
const computers = document.querySelectorAll('.computer');
const fruits = document.querySelectorAll('.fruit');
const shoes = document.querySelectorAll('.shoe')
let list = [".animals",".fruit",".shoe",".computer",".mole"]
let videoContainer = document.getElementById('video-container');
let lastHole;
let timeUp = false;
let score = 0;





//////////codeside////












////////////////Index////////////
function randomTime(min, max) {
return Math.round(Math.random() * (max - min) + min);
}
function randomTheme(){

    let randomThemes = Math.floor(Math.random()*list.length);
    
themes.textContent = list[randomThemes]
}

function randomHole(holes) {
const idx = Math.floor(Math.random() * holes.length);
const hole = holes[idx];
if (hole === lastHole) {
return randomHole(holes);
}
lastHole = hole;
return hole;
}

function peep() {
const time = randomTime(400, 2000);
const hole = randomHole(holes);

hole.classList.add('up');
setTimeout(() => {
hole.classList.remove('up');
if (!timeUp) peep();
}, time);
}
function startGame() {
    randomTheme()
scoreBoard.textContent = 0;
timeUp = false;
score = 0;
peep();
setTimeout(() => timeUp = true, 10000)
}
function whack(e) {
if(!e.isTrusted) return;
score++;

//if the peeper is of same theme as the choosen theme you get 1 point
//if the peeper is not of the same class, you get minus points
this.parentNode.classList.remove('up');
scoreBoard.textContent = score;
}
function whackTheme(e){
    if (e == themes.textContent){
        score++;
    }else{
        score--;
    }

    this.parentNode.classList.remove('up');
scoreBoard.textContent = score;
}
animals.forEach(animal => animal.addEventListener('click', whack));