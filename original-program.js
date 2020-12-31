// FUNCTION TO MAKE A RANDOM CHOICE FOR THE COMPUTER
function computerPlay() {
  let n = Math.floor(Math.random() * 3);
  let computerChoice;

  switch (n) {

    case 0:
      computerChoice = 'rock'
      break;

    case 1:
      computerChoice = 'scissors'
      break;

    case 2:
      computerChoice = 'paper'
  }

  //console.log(computerChoice);
  //console.log( computerChoice);
  return computerChoice;
}



// FUNCTION TO PLAY 1 ROUND
function playRound(playerSelection, computerSelection) {
  playerSelection = (prompt('Choose rock, scissor or paper')).toLowerCase();
  computerSelection = computerPlay();
  //console.log(`Player chose ${playerSelection}!`);
  //console.log(`Computer chose ${computerSelection}!`);

  if (playerSelection == 'rock' && computerSelection == 'rock') {
    console.log('Round is tie!');
    return 0;
  }

  else if (playerSelection == 'rock' && computerSelection == 'paper') {
    console.log('Player loses!! Paper beats rock..');
    return -1;
  }

  else if (playerSelection == 'rock' && computerSelection == 'scissors') {
    console.log('Player wins!! Rock beats scissors..')
    return 1;
  };

  if (playerSelection == 'paper' && computerSelection == 'paper') {
    console.log('Round is tie!')
    return 0;
  }

  else if (playerSelection == 'paper' && computerSelection == 'rock') {
    console.log('Player wins!! Paper beats rock..');
    return 1;
  }

  else if (playerSelection == 'paper' && computerSelection == 'scissors') {
    console.log('Player loses!! Scissors cut paper..')
    return -1
  };

  if (playerSelection == 'scissors' && computerSelection == 'scissors') {
    console.log('Round is tie!');
    return 0;
  }

  else if (playerSelection == 'scissors' && computerSelection == 'paper') {
    console.log('Player wins!! Paper beats rock..');
    return 1;
  }

  else if (playerSelection == 'scissors' && computerSelection == 'rock') {
    console.log('Player loses!! Rock destroys scissors..');
    return -1;
  };
}
//console.log(playRound());  //COMMAND TO PLAY A SINGLE ROUND


// FUNCTION TO PLAY 5 ROUNDS IN A ROW AND ESTABILISH A WINNER
function game() {

  let finalScore = 0;

  for (i = 0; i < 5; i++) {
    roundScore = playRound();
    finalScore += roundScore;
  }

  console.log(finalScore);

  if (finalScore > 0) {
    console.log('Player has won! CONGRATULATIONS JULIA');
  }
  else if (finalScore < 0) {
    console.log('Computer has won! Sad day for humans..');
  }
  else console.log('The game is tie! Until the next time..');
}

//console.log(game());  // COMMAND TO PLAY THE GAME


