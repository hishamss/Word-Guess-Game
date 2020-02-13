var game = {
  zoo_animals: ["owl", "cat", "bear", "gorilla", "tiger"],
  animal_data: { owl: ["owl.jpg", "owl.mp3"], cat: ["cat.jpg", "cat.mp3"] }
};
var word;

function computer_choice() {
  var rand = Math.floor(Math.random() * game.zoo_animals.length);
  word = game.zoo_animals[rand];
}

$(document).ready(function() {
  computer_choice();
  $("#curr-word").text("");
  for (i = 0; i < word.length; i++) {
    $("#curr-word").append("<p><strong>_</strong></p>");
  }
});

// listen to any key pressed to start the game
$(document).keyup(function() {});
