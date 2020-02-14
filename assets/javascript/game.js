var game = {
  zoo_animals: ["OWL", "CAT", "BEAR", "GORILLA", "TIGER"],
  animal_data: { owl: ["owl.jpg", "owl.mp3"], cat: ["cat.jpg", "cat.mp3"] }
};
var word,
  guessed,
  attempts,
  match_index,
  alreadyguessed = [],
  win = 0;
function computer_choice() {
  var rand = Math.floor(Math.random() * game.zoo_animals.length);
  word = game.zoo_animals[rand];
}

$(document).ready(function() {
  random();
});

// this function will be called after the page load or the user guess the whole word
function random() {
  computer_choice();
  $("#curr-word").text("");
  for (i = 0; i < word.length; i++) {
    $("#curr-word").append("<p id='p" + i + "'" + "><strong>_</strong></p>");
  }
  guessed = 0;
  alreadyguessed = [];
  //   the user can try the lenght of the picked word plus 4 to guess
  attempts = word.length + 4;
  $("#win").text(win);
}
// listen to any key pressed and check if the pressed key is in the word picked randomlly.
$(document).keyup(function(event) {
  var key = String.fromCharCode(event.which);
  match_index = 0;
  //   check if the pressed key is already guessed
  if (!alreadyguessed.includes(key)) {
    //   this loop will keep search in for the pressed key on word till nothing is found
    while (word.indexOf(key, match_index) != -1) {
      match_index = word.indexOf(key, match_index);
      $("#p" + match_index).text(key);
      match_index++;
      guessed++;
      alreadyguessed.push(key);
    }
  }

  //   if the user guessed the whole word
  if (guessed === word.length) {
    win++;
    random();
  }
});
