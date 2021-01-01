// FUNCTION TO MAKE A RANDOM CHOICE FOR THE COMPUTER
function computerPlay() {
  let n = Math.floor(Math.random() * 3);
  let computerChoice;

  switch (n) {

    case 0:
      computerChoice = 'rock'
      break;

    case 1:
      computerChoice = 'scissors';
      break;

    case 2:
      computerChoice = 'paper'
  }

  return computerChoice;
}
// END FUNCTION

let nRound = 0;
let nWin = 0;
let nLost = 0;

// FUNCTION TO PLAY 1 ROUND AND KEEPS TRACK OF ALL ROUNDS
function playRound(playerSelection, computerSelection) {
  computerSelection = computerPlay();

  for (let i = 0; i < 3; ++i) {
    if (document.querySelectorAll('footer span').forEach((e) => e.classList.contains('visible'))) break;
    document.querySelectorAll('footer span').forEach((e) => e.classList.add('visible'));
    document.querySelectorAll('button').forEach((e) => {
      e.classList.remove('green', 'blue', 'red');
    })
  }

  if (playerSelection == 'rock' && computerSelection == 'rock') {
    results.textContent = 'Round is tie!';
    nRound += 1;
    document.getElementById('n-round').textContent = ` ${nRound}`;
    document.querySelector('button:nth-child(2)').classList.add('blue');
  }

  else if (playerSelection == 'rock' && computerSelection == 'paper') {
    results.textContent = 'Player loses!! Paper beats rock..';
    nRound += 1;
    nLost += 1;
    document.getElementById('n-round').textContent = ` ${nRound}`;
    document.getElementById('n-lost').textContent = ` ${nLost}`;
    document.querySelector('button:nth-child(3)').classList.add('green');
    document.querySelector('button:nth-child(2)').classList.add('red');
  }

  else if (playerSelection == 'rock' && computerSelection == 'scissors') {
    results.textContent = 'Player wins!! Rock beats scissors..';
    nRound += 1;
    nWin += 1;
    document.getElementById('n-round').textContent = ` ${nRound}`;
    document.getElementById('n-win').textContent = ` ${nWin}`;
    document.querySelector('button:nth-child(2)').classList.add('green');
    document.querySelector('button:nth-child(4)').classList.add('red');
  };

  if (playerSelection == 'paper' && computerSelection == 'paper') {
    results.textContent = 'Round is tie!';
    nRound += 1;
    document.getElementById('n-round').textContent = ` ${nRound}`;
    document.querySelector('button:nth-child(3)').classList.add('blue');
  }

  else if (playerSelection == 'paper' && computerSelection == 'rock') {
    results.textContent = 'Player wins!! Paper beats rock..';
    nRound += 1;
    nWin += 1;
    document.getElementById('n-round').textContent = ` ${nRound}`;
    document.getElementById('n-win').textContent = ` ${nWin}`;
    document.querySelector('button:nth-child(3)').classList.add('green');
    document.querySelector('button:nth-child(2)').classList.add('red');
  }

  else if (playerSelection == 'paper' && computerSelection == 'scissors') {
    results.textContent = 'Player loses!! Scissors cut paper..';
    nRound += 1;
    nLost += 1;
    document.getElementById('n-round').textContent = ` ${nRound}`;
    document.getElementById('n-lost').textContent = ` ${nLost}`;
    document.querySelector('button:nth-child(4)').classList.add('green');
    document.querySelector('button:nth-child(3)').classList.add('red');
  };

  if (playerSelection == 'scissors' && computerSelection == 'scissors') {
    results.textContent = 'Round is tie!';
    nRound += 1;
    document.getElementById('n-round').textContent = ` ${nRound}`;
    document.querySelector('button:nth-child(4)').classList.add('blue');
  }

  else if (playerSelection == 'scissors' && computerSelection == 'paper') {
    results.textContent = 'Player wins!! Scissors cut paper..';
    nRound += 1;
    nWin += 1;
    document.getElementById('n-round').textContent = ` ${nRound}`;
    document.getElementById('n-win').textContent = ` ${nWin}`;
    document.querySelector('button:nth-child(4)').classList.add('green');
    document.querySelector('button:nth-child(3)').classList.add('red');
  }

  else if (playerSelection == 'scissors' && computerSelection == 'rock') {
    results.textContent = 'Player loses!! Rock destroys scissors..';
    nRound += 1;
    nLost += 1;
    document.getElementById('n-round').textContent = ` ${nRound}`;
    document.getElementById('n-lost').textContent = ` ${nLost}`;
    document.querySelector('button:nth-child(2)').classList.add('green');
    document.querySelector('button:nth-child(4)').classList.add('red');
  };

  if (nWin === 5) {
    document.querySelector('#end-screen').classList.add('end-screen-win');
    document.querySelectorAll('#end-screen p, #new-game').forEach( (e) => e.classList.add('visible'));
    document.querySelector('#end-screen p').innerHTML = 'PLAYER HAS WON!<br>Congratulations human!';
    document.querySelector('#audio-win').play()
    for (let i = 0; i < 3; i++) {
      document.querySelectorAll('button').forEach((e) => {
        e.classList.remove('green', 'blue', 'red');
      })
    }
    return;
  }

  else if (nLost === 5) {
    document.querySelector('#end-screen').classList.add('end-screen-lose');
    document.querySelectorAll('#end-screen p, #new-game').forEach( (e) => e.classList.add('visible'));
    document.querySelector('#end-screen p').innerHTML = 'COMPUTER HAS WON!<br>Sad day for humans..';
    document.querySelector('#audio-lose').play()
    for (let i = 0; i < 3; i++) {
      document.querySelectorAll('button').forEach((e) => {
        e.classList.remove('blue', 'green', 'red');
      })
    }
    return;
  }
  playerSelection = 'You selected ' + playerSelection;
  computerSelection = '"He" selected ' + computerSelection;
  document.querySelector('.box-player').textContent = playerSelection;
  document.querySelector('.box-computer').textContent = computerSelection;
}
// END FUNCTION

const selectionRock = document.querySelector('#selection-rock');
const selectionPaper = document.querySelector('#selection-paper');
const selectionScissors = document.querySelector('#selection-scissors');
const results = document.querySelector('#results');

selectionRock.addEventListener('click', () => { playRound('rock'); document.querySelector('#audio-button').currentTime = 0; document.querySelector('#audio-button').play() });
selectionPaper.addEventListener('click', () => { playRound('paper'); document.querySelector('#audio-button').currentTime = 0; document.querySelector('#audio-button').play() });
selectionScissors.addEventListener('click', () => { playRound('scissors'); document.querySelector('#audio-button').currentTime = 0; document.querySelector('#audio-button').play() });
const newGame = document.querySelector('#new-game').addEventListener('click', () => {location.reload()});




