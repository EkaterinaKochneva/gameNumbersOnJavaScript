let randomNumber = Math.floor(Math.random() * 100) + 1;

let guesses = document.querySelector('.guesses');
let lastResult = document.querySelector('.lastResult');
let lowOrHi = document.querySelector('.lowOrHi');

let guessSubmit = document.querySelector('.guessSubmit');
let guessField = document.querySelector('.guessField');

// let parent = document.querySelector('game');

let guessCount = 1;
let resetButton;

guessField.focus();

function checkGuess() {
    let userGuess = Number(guessField.value);
    if (guessCount === 1) {
      guesses.textContent = 'Предыдущий ответ: ';
    }
    guesses.textContent += userGuess + ' ';
  
    if (userGuess === randomNumber) {
      lastResult.textContent = 'Поздравляю! Ты отгадал!';
      lastResult.classList.remove('wrong');
      lastResult.classList.add('right');
      lowOrHi.textContent = '';
      setGameOver();
    } else if (guessCount === 10) {
      lastResult.textContent = 'Игра окончена =(';
      setGameOver();
    } else {
      lastResult.textContent = 'Неверно! Попробуй еще раз.';
      lastResult.classList.add('wrong');
      if(userGuess < randomNumber) {
        lowOrHi.textContent = 'Подсказка: загадоное число - больше.';
      } else if(userGuess > randomNumber) {
        lowOrHi.textContent = 'Подсказка: загаданное число - меньше.';
      }
    }
  
    guessCount++;
    guessField.value = '';
    guessField.focus();
  }

  guessSubmit.addEventListener('click', checkGuess);

  function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = 'Начать новую игру';
    document.getElementById('create__button').appendChild(resetButton);
    resetButton.addEventListener('click', resetGame);
  }

  function resetGame() {
    guessCount = 1;
  
    let resetParas = document.querySelectorAll('.resultParas p,.resultParas div');
    for (var i = 0 ; i < resetParas.length ; i++) {
      resetParas[i].textContent = '';
    }
  
    resetButton.parentNode.removeChild(resetButton);
  
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();
  
    lastResult.classList.remove('wrong');
    lastResult.classList.remove('right');
  
    randomNumber = Math.floor(Math.random() * 100) + 1;
  }