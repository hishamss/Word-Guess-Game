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
    // $("#curr-word").append("<p id='p" + i + "'" + "><strong>_</strong></p>");
    $("#curr-word").append(
      "<button class='btn btn-primary' id='b" + i + "'" + "></button>"
    );
  }
  guessed = 0;
  alreadyguessed = [];
  //   the user can try the lenght of the picked word plus 4 to guess
  attempts = word.length + 4;
  $("#attempts").text(attempts);
  $("#win").text(win);
  $("#failed").text("");
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
      $("#b" + match_index).text(key);
      match_index++;
      guessed++;
      alreadyguessed.push(key);
    }
  }

  if (word.indexOf(key) == -1) {
    attempts--;
    $("#attempts").text(attempts);
    $("#failed").append("<p>" + key + ", </p>");
  }
  //   Game Over
  if (attempts == 0) {
    location.replace("GameOver.html");
  }

  //   if the user guessed the whole word
  if (guessed === word.length) {
    win++;
    // this will display the word after the user guess it
    $("#answer").text("The answer was " + word);
    setTimeout(random, 300);
  }
});
