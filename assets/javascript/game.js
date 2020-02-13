var game = {
  zoo_animals: ["owl", "cat", "bear", "gorilla", "tiger"],
  animal_data: { owl: ["owl.jpg", "owl.mp3"], cat: ["cat.jpg", "cat.mp3"] }
};

function computer_choice() {
  var rand = Math.floor(Math.random() * game.zoo_animals.length);
  console.log(game.zoo_animals[rand]);
}

$(document).keyup(function() {
  computer_choice();
});
