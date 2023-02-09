'use strict';

let againButton = document.querySelector('button');
let rangeNumbers = document.querySelector('.range-nums');
let h1 = document.querySelector('h1');
let number = document.querySelector('.number p');
let inputNum = document.querySelector('.input');
let message = document.querySelector('.message');
// let scoreP = document.querySelector(".label-score")
let score = document.querySelector('.score');
// let highscoreP = document.querySelector('.label-highscore');
let highscore = document.querySelector('.highscore');
let submitCheck = document.querySelector('.submit');

// Again button onclick
againButton.addEventListener('click', function () {
  window.location.reload();
});

// number.value  is random
for (let i = 0; i < 1; i++) {
  number.value = Math.trunc(Math.random() * 20 + 1);
}

// check on session if exists and give its value to highscore
if (sessionStorage.getItem('highscore')) {
  highscore.textContent = sessionStorage.getItem('highscore');
}

// Submit button check onclick
submitCheck.addEventListener('click', function (event) {
  // preventDefault
  event.preventDefault();

  // check if there a guese number
  if (!inputNum.value) //falsy value => false
  {
    // if not
    message.textContent = '⛔️ No number!';
  } else {

    // INPUTNumber situations < > =
    // >
    if (inputNum.value < number.value) {
      // change message to too low
      message.textContent = '📉 Too low!';
    } // <
    else if (inputNum.value > number.value) {
      // change message to too high
      message.textContent = '📈 Too high!';
    } // =
    else if ((inputNum.value = number.value)) {
      // change message to win
      message.textContent = '🎉 Current number !';
      // check if the new score is bigger than the previous highscore then it'll become the new highscore
      if (score.textContent > highscore.textContent) {
        sessionStorage.setItem('highscore', score.textContent);
      }
      // winning style
      document.body.style.backgroundColor = '#0a6a5e';
      inputNum.style.backgroundColor = '#0a6a5e';
      number.style.width = '30rem';
      number.textContent = number.value;
    }

    // score reduce by 1 until reach 0
    if (score.textContent > 1 && inputNum.value != number.value) {
      score.textContent--;
    }
    // if score < 1 means = 0 then it's over!
    else if (score.textContent === '1') {
      // change message to lose;
      score.textContent = 0;
      message.textContent = '💥 You lost the game! ';
      // losing style
      document.body.style.backgroundColor = 'red';
      number.style.cssText = 'width : 30rem ; text-shadow: 0 0 5px #f00';
      inputNum.style.cssText =
        ' background-color : #f00 ; text-shadow : 0 0 5px #000 ;box-shadow : 0 0 10px #f00  ';
      againButton.style.bordserColor = '#000';
      //apper the number
      number.textContent = number.value;
    }
  }
});
