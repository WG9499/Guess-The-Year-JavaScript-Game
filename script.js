let correctYear = 2004;
let score = 7;

document.querySelector('.check').addEventListener('click', () => {
  const result = Number(document.querySelector('.guess').value);
  if (!result) {
    document.querySelector('.message').textContent =
      'You need to type a number!';
  } else if (result === correctYear) {
    document.querySelector('.message').textContent = 'Correct answer 👍 ';
    document.querySelector('.message').style.backgroundColor = 'green';
  } else if (result >= 2003 && result <= 2005) {
    document.querySelector('.message').textContent =
      'You so close keep trying! 😄';
    document.querySelector('.message').style.backgroundColor =
      'rgb(114, 114, 7)';

    score = Math.max(0, score - 1); // To ensure the score doesn't go below 0
    document.querySelector('.score').textContent = score;
    document.querySelector('.score').style.backgroundColor = 'red';
  } else if (result !== correctYear) {
    document.querySelector('.message').textContent = 'Wrong answer ⛔ ';
    document.querySelector('.message').style.backgroundColor = 'red';

    score = Math.max(0, score - 1);
    document.querySelector('.score').textContent = score;
    document.querySelector('.score').style.backgroundColor = 'red';
  }
});

// To reset the game with Try Again button
document.querySelector('.again').addEventListener('click', () => {
  score = 7; // Reset score to 7
  document.querySelector('.score').textContent = score;
  document.querySelector('.score').style.backgroundColor = '';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
  document.querySelector('.message').style.backgroundColor = '';
});

// To reset the game with Alert prompt

// document.querySelector('.check').addEventListener('click', () => {
//   if (score === 0) {
//     alert('You exeeded chances, start again!');
//     score = 7; // Reset score to 7
//     document.querySelector('.score').textContent = score;
//     document.querySelector('.score').style.backgroundColor = '';
//     document.querySelector('.message').textContent = 'Start guessing...';
//     document.querySelector('.guess').value = '';
//     document.querySelector('.message').style.backgroundColor = '';
//   }
// });
