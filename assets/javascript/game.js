var game = {
  zoo_animals: ["OWL", "CAT", "BEAR", "GORILLA", "TIGER"],
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
    $("#curr-word").append("<p id='p" + i + "'" + "><strong>_</strong></p>");
  }
});

// listen to any key pressed
$(document).keyup(function(event) {
  var key = String.fromCharCode(event.which);
  var match_index = 0;
  //   this loop will keep search in for the pressed key on word till nothing is found
  while (word.indexOf(key, match_index) != -1) {
    match_index = word.indexOf(key, match_index);
    $("#p" + match_index).text(key);
    match_index++;
  }
});
