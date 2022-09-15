'use strict ';
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const currentScore0El = document.querySelector('#current--0');
const currentScore1El = document.querySelector('#current--1');
const btnRollDice = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNewGame = document.querySelector('.btn--new');
const diceEl = document.querySelector('.dice');
let playing = true;

let ran;
let currentScore = 0;
let activePlayer = 0;
diceEl.classList.add('hidden');
let scores = [0, 0];
score0El.textContent = '0';
score1El.textContent = '0';

btnRollDice.addEventListener('click', function () {
  currentScore = 0;

  if (playing) {
    ran = Math.trunc((Math.random() * 6) + 1);
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${ran}.png`;
    if (ran == 1) {
      document.getElementById(`current--${activePlayer}`).textContent = 0;
      document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
      activePlayer = activePlayer === 0 ? 1 : 0;
      currentScore = 0;
      document.querySelector(`.player--${activePlayer}`).classList.add('player--active');

    }
    else {
      currentScore = currentScore + ran;
      document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    }
  }

});


btnHold.addEventListener('click', function () {
  if (playing) {
    scores[activePlayer] = scores[activePlayer] + currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
    if (scores[activePlayer] >= 20) {
      playing = false;
      diceEl.classList.add('hidden');
      document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
      document.getElementById(`current--${activePlayer}`).textContent = 0;
      currentScore0El = 0;
      currentScore1El = 0;

    }
    else {
      document.getElementById(`current--${activePlayer}`).textContent = 0;
      document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
      activePlayer = activePlayer === 0 ? 1 : 0;
      currentScore = 0;
      document.querySelector(`.player--${activePlayer}`).classList.add('player--active');
    }
  }
});
btnNewGame.addEventListener('click', function () {

  diceEl.classList.add('hidden');
  playing = true;
  document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner');
  score0El.textContent = 0;
  score1El.textContent = 0;
  scores = [0, 0];
  currentScore0El.textContent = 0;
  currentScore1El.textContent = 0;
  activePlayer = 0;
  document.querySelector(`.player--1`).classList.remove('player--active');
  document.querySelector(`.player--0`).classList.add('player--active');

})



