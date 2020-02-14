var game = {
  zoo_animals: ["OWL", "CAT", "BEAR", "GORILLA", "TIGER"],
  animal_data: { owl: ["owl.jpg", "owl.mp3"], cat: ["cat.jpg", "cat.mp3"] }
};
var word;
var guessed;
var win = 0;
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
}
// listen to any key pressed and check if the pressed key is in the word picked randomlly.
$(document).keyup(function(event) {
  var key = String.fromCharCode(event.which);
  var match_index = 0;

  //   this loop will keep search in for the pressed key on word till nothing is found
  while (word.indexOf(key, match_index) != -1) {
    match_index = word.indexOf(key, match_index);
    $("#p" + match_index).text(key);
    match_index++;
    guessed++;
  }
  //   if we guessed the whole word
  if (guessed === word.length) {
    win++;
    random();
  }
});
