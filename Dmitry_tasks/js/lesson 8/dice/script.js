'use strict';
const dice = document.querySelector('.dice');
const player1 = document.querySelector('.player--0')
const player2 = document.querySelector('.player--1')
const score1 = document.getElementById('score--0');
const score2 = document.getElementById('score--1');
const current1 = document.getElementById('current--0');
const current2 = document.getElementById('current--1');
let scores, playing, current, activePlayer;
function start(){
    scores = [0, 0]
    dice.style.display = 'none';
    current = 0;
    activePlayer = 0;
    playing = true;
    current1.textContent = 0;
    current2.textContent = 0;
    score1.textContent = 0;
    score2.textContent = 0;
    player1.classList.remove('player--winner');
    player2.classList.remove('player--winner');
    player1.classList.add('player--active');
    player2.classList.remove('player--active');
}
start();
function changePlayer(){
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    current = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player1.classList.toggle('player--active')
    player2.classList.toggle('player--active')
}
const rollDice = document.querySelector('.btn--roll')
rollDice.addEventListener('click', () =>{
    if (playing) {
        const random = Math.trunc(Math.random() * 6) +1;
        dice.src = `dice-${random}.png`;
        dice.style.display = 'block';
        if (random !== 1) {
            current += random;
            document.getElementById(`current--${activePlayer}`).textContent = current;
            } else {
               changePlayer()
            }
        }
});
const hold = document.querySelector('.btn--hold')
hold.addEventListener('click', () =>{
    if (playing){
        scores[activePlayer] += current;
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
    }
     if (scores[activePlayer] >= 100){
        playing = false;
        dice.style.display = 'none';
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
         document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
     }
    else {
         changePlayer()
     }
});
const restart = document.querySelector('.btn--new');
restart.addEventListener('click', start);