import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import DinoGame from './gameObject';
import DinoApi from './dino.js';


function updateUi(game) {
  $("#underscoreArea").text(game.underScore);
  $("#wrongGuess").text(game.wrongGuess);
  $("#guess").text(game.gameScore);
  $(document.activeElement).hide();
  if (game.endOfGame === 1) {
    $('#win').show();
    $('#game').hide();
  } else if (game.endOfGame === 2) {
    $('#end').show();
    $('#game').hide();
  }
};

//make jquery function
function runGame(word) {
  let dinoGame1 = new DinoGame(word);
  dinoGame1.setupGame();
  updateUi(dinoGame1);
  $("#letterArea").show()
  $("form").submit(function (event) {
    event.preventDefault();
    let clickedLetter = $(document.activeElement).val();
    dinoGame1.score(clickedLetter);
    updateUi(dinoGame1);
  })
};

$(document).ready(function () {

  $("#clickMe").click(function (event) {
    let promise = DinoApi.getDinoName();
    let returnWord = promise.then(function (response) {
      const body = JSON.parse(response);
      //code here for game run game below
      let wordBody = body[0][0].toLowerCase();
      runGame(wordBody);
      $('.reset').click(function () {
        location.reload();
      });
    }, function (error) {
      return `There was an error processing your request: ${error}`
    });
  })

  // $('.showErrors').text(`There was an error processing your request: ${error}`);
});

