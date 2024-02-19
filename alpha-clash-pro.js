function playOn() {
  displayOn("gameStart", "hidden");
  audio.src = "./play.mp3";
  audio.play();
  displayOff("gamePlay", "hidden");
  const displayWord = randomAlphabet();
  setInnerText("displayWord", displayWord);
  displayOn(displayWord, "bg-orange-500");
  catchWord(displayWord);
}

function playAgain() {
  displayOn("gameEnd", "hidden");
  document.getElementById("artboard").style.background = "#FFFFFFB2";
  audio.src = "./play.mp3";
  audio.play();
  displayOff("gamePlay", "hidden");
  setInnerText("score-gain", 0);
  setInnerText("life-remain", 5);
}
