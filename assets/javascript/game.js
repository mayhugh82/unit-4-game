//used crystal example and lottery generator for blueprint

$(document).ready(function () {
  // target random number between 19 -120
  let random = Math.floor(Math.random() * 101) + 19;
  $(".target-number").html(random);

 //player's wins and losses
  let wins = 0;
  let losses = 0;

  //points player has during the game
  let points = 0;
  $('.points').html(points);

  //and array with numbers 1-12 for each crystal to pick a random number from

  let randomGem = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  let blue = randomGem[Math.floor(Math.random() * randomGem.length)];
  let red = randomGem[Math.floor(Math.random() * randomGem.length)];
  let green = randomGem[Math.floor(Math.random() * randomGem.length)];
  let yellow = randomGem[Math.floor(Math.random() * randomGem.length)];

  // Here we created an on-click event that responds to button clicks of the crystal image.
  $("#blue").on("click", function () {
    //each time the user clicks the blue crystal the counter goes up by 1.
    blue 

    // Clicking the button triggers an alert message.
    alert("Your new score is " + blue);
  });

  $("#red").on("click", function () {
    //each time the user clicks the blue crystal the counter goes up by 1.
    red 

    // Clicking the button triggers an alert message.
    alert("Your new score is " + red);
  });

  $("#green").on("click", function () {
    //each time the user clicks the blue crystal the counter goes up by 1.
    green

    // Clicking the button triggers an alert message.
    alert("Your new score is " + green);
  });

  $("#yellow").on("click", function () {
    //each time the user clicks the blue crystal the counter goes up by 1.
    blue ++

    // Clicking the button triggers an alert message.
    alert("Your new score is " + yellow);
  });

  
});
