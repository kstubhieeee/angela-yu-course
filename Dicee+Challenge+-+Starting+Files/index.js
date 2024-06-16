function startGame() {
  var player1 = random();
  var player2 = random();

  changeImage(player1, "img1");
  changeImage(player2, "img2");

  if (player1 > player2) {
    document.getElementById("title").innerHTML = "Player 1 wins 🏆";
  } else {
    document.getElementById("title").innerHTML = "Player 2 wins 🏆";
  }
}

function random() {
  var random_number1 = Math.random();
  random_number1 = random_number1 * 6 + 1;
  random_number1 = Math.floor(random_number1);
  return random_number1;
}

function changeImage(number, img) {
  switch (number) {
    case 1:
      document.getElementById(img).src = "images/dice1.png";
      break;
    case 2:
      document.getElementById(img).src = "images/dice2.png";
      break;
    case 3:
      document.getElementById(img).src = "images/dice3.png";
      break;
    case 4:
      document.getElementById(img).src = "images/dice4.png";
      break;
    case 5:
      document.getElementById(img).src = "images/dice5.png";
      break;
    default:
      document.getElementById(img).src = "images/dice5.png";
  }
}
