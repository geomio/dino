import DinoApi from './dino.js';
export default class DinoGame {
  constructor(dinoWord) {
    this.dinoWord = dinoWord;
    this.wordDisplay = [];
    this.rightGuess = [];
    this.splitWord = [];
    this.wrongGuess = [];
    this.underScore = [];
    this.gameScore = 0;
    this.endOfGame = 0;
  }



  checkLetter(letter) {
    return this.splitWord.includes(letter)
  }
  score(guessLetter) {
    if (this.repeatLetter(guessLetter)) {
      console.log('here is repeat');
    } else {
      if (this.checkLetter(guessLetter)) {
        this.rightGuess.push(guessLetter);
        this.changeUnderscore(guessLetter);
      } else {
        this.wrongGuess.push(guessLetter);
        this.gameScore = this.wrongGuess.length;

      }
      this.endGameCheck();
    }
  }

  repeatLetter(doubleLetter) {
    if (this.rightGuess.includes(doubleLetter) || this.wrongGuess.includes(doubleLetter)) {
      return true;
    } else {
      return false;
    }
  }

  endGameCheck() {
    if (this.gameScore >= 5) {
      this.endOfGame = 2;
      console.log("lose");
    } else if (this.dinoWord === this.underScore.join("")) {
      this.endOfGame = 1;
      console.log("win");
    }
  }

  // gameWinCheck() {
  //   if (t) {
  //     console.log("game won");
  //   }
  // }

  changeUnderscore(letter) {
    for (let index = 0; index < this.splitWord.length; index++) {
      if (this.splitWord[index] === letter) {
        this.underScore.splice(index, 1, letter)
      }

    }
  }

  // async apiCall() {

  //   return returnWord;
  // };

  setupGame() {
    this.splitWord = this.dinoWord.split('');
    this.underScore = this.splitWord.map(letter => "_");
  };

};





// let game1 = new DinoGame('apple')

// game1.score('a')
// game1.score('b')
// game1.score('d')
// game1.score('f')
// game1.score('h')
// game1.score('g')
// game1.score('e')
// game1.score('z')

// console.table(game1);
