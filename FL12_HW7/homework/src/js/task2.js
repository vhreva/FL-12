let game = confirm('Do you want to play a game?');
let maxRange = 8;
let increment = 4;
let two = 2;
let totalPrize = 0;
let currentPrize;
let maxPrize = 100;

if (game) {
  let continueGame = true;
  while (continueGame) {
    let totalPrize = 0;
    for (; continueGame; maxRange += increment, maxPrize *= two) {
      let randomNum = Math.floor(Math.random() * (maxRange + 1));
      let attempts = 3;
      for (currentPrize = maxPrize; attempts > 0; attempts--) {
        let guess = prompt(
          `Enter a number from 0 to ${maxRange}
          \n Attempts left: ${attempts}
          \n Prize: ${totalPrize}$
          \n Possible prize on current attempt: ${currentPrize}$`
        );
        guess = Number(guess);
        if (guess === randomNum) {
          totalPrize += currentPrize;
          break;
        }
        currentPrize /= two
      }
      if (attempts > 0) {
        let playAgain = confirm('Congratulation, you won! Your prize is: ' + totalPrize + '$. Do you want to continue?')

        if (playAgain) {
          continueGame;
        } else {
          alert('Thank you for your participation. Your prize is: ' + totalPrize + ' $');
          continueGame = false;
        }
      } else {
        totalPrize = 0;
        alert('Thank you for your participation. Your prize is: ' + totalPrize + ' $');
        continueGame = confirm('Do you want to play a game?');
        break;
      }
    }
  }
} else {
  alert('You did not become a billionaire, but can.')
}
