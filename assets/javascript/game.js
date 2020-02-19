var word,
  guessed,
  attempts,
  match_index,
  alreadyguessed = [],
  BodyHeight,
  CalculatedBodyHeight,
  animal_sound,
  background_sound,
  win = 0;
var game = {
  zoo_animals: ["ZEBRA", "MONKEY", "LION", "ELEPHANT", "TIGER"],
  animal_data: {
    ZEBRA: ["zebra.mp3", "zebra.jpg"],
    MONKEY: ["monkey.mp3", "monkey.jpg"],
    LION: ["lion.mp3", "lion.jpg"],
    ELEPHANT: ["elephant.mp3", "elephant.jpg"],
    TIGER: ["tiger.mp3", "tiger.jpg"]
  },
  computer_choice: function() {
    var rand = Math.floor(Math.random() * this.zoo_animals.length);
    word = this.zoo_animals[rand];
  },
  // this function will be called after the page load or the user guess the whole word
  random_pick: function() {
    $("#answer").text("");
    $("#answer").append(
      "<img src='assets/images/guess.jpg' class='img-thumbnail img-fluid rounded'>"
    );
    this.computer_choice();
    $("#curr-word").text("");
    for (i = 0; i < word.length; i++) {
      $("#curr-word").append(
        "<button class='btn btn-primary btn-lg dashes' id='b" +
          i +
          "'" +
          "></button>"
      );
    }
    guessed = 0;
    alreadyguessed = [];
    // the user can try the lenght of the picked word plus 4 to guess
    attempts = word.length + 4;
    $("#attempts").text(attempts);
    $("#win").text(win);
    $("#failed").text("");
  }
};

$(document).ready(function() {
  $(".main").hide();
  $(".welcom").hide();
  $(".game_over").hide();
  $("#start").show();
  // PLACEHOLDER VALUE WHEN PAUSE FOR THE FIRST TIME
  animal_sound = document.getElementById(game.animal_data.LION[0]);
  BodyHeight = $("body").height();
  CalculatedBodyHeight = BodyHeight * 0.5 - 60;
  CalculatedBodyHeight1 = BodyHeight * 0.5 - 102;
  CalculatedBodyHeight2 = BodyHeight * 0.5 - 275;
  CalculatedBodyHeight3 = BodyHeight * 0.5 - 92;
  $("#start").css("margin-top", CalculatedBodyHeight);
  $(".welcom").css("margin-top", CalculatedBodyHeight1);
  $(".main").css("margin-top", CalculatedBodyHeight2);
  $(".game_over").css("margin-top", CalculatedBodyHeight3);
  game.random_pick();
  $("#start-btn").click(function() {
    $("#start").hide();
    $(".welcom").show();
    background_sound = document.getElementById("jungle.mp3");
    background_sound.loop = true;
    background_sound.play();
    setTimeout(function() {
      $(".welcom").hide();
      $(".main").show();
    }, 2500);
  });

  $("#play_again-btn").click(function() {
    // location.replace("index.html");
    location.reload(true);
  });

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
      $(".main").hide();
      $(".game_over").show();
      background_sound.pause();
      var Over = document.getElementById("GameOver.mp3");
      Over.play();
    }

    //   if the user guessed the whole word
    if (guessed === word.length) {
      win++;
      // this will play the animal sound based on the cuessed word
      animal_sound = document.getElementById(game.animal_data[word][0]);
      animal_sound.play();
      // this will display the word animal imgae after the user guess it
      $("#answer").text("");
      $("#answer").append(
        "<img src='assets/images/" +
          game.animal_data[word][1] +
          "' class='img-thumbnail img-fluid rounded'>"
      );
      // dilay 3000 ms before call random() function
      setTimeout(function() {
        // THIS WILL STOP THE PRVIOUS VOICE FROM PLAYING
        animal_sound.pause();
        game.random_pick();
      }, 3000);
    }
  });

  window.addEventListener("resize", reposition);
  // to keep start button alway in the middle of the screen
  function reposition() {
    BodyHeight = $("body").height();
    CalculatedBodyHeight = BodyHeight * 0.5 - 60;
    $("#start").css("margin-top", CalculatedBodyHeight);
    CalculatedBodyHeight1 = BodyHeight * 0.5 - 102;
    $(".welcom").css("margin-top", CalculatedBodyHeight1);
    CalculatedBodyHeight2 = BodyHeight * 0.5 - 275;
    $(".main").css("margin-top", CalculatedBodyHeight2);
    CalculatedBodyHeight3 = BodyHeight * 0.5 - 92;
    $(".game_over").css("margin-top", CalculatedBodyHeight3);
  }
});
