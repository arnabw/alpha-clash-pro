function playOn() {
  displayOn("gameStart", "hidden");
  displayOff("gamePlay", "hidden");
  const displayWord = randomAlphabet();
  setInnerText("displayWord", displayWord);
  displayOn(displayWord, "bg-orange-500");
  catchWord(displayWord);
}

function playAgain() {
  displayOn("gameEnd", "hidden");
  displayOff("gamePlay", "hidden");
  setInnerText("score-gain", 0);
  setInnerText("life-remain", 5);
}
