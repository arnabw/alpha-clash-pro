function displayOn(elementID, className) {
  document.getElementById(elementID).classList.add(className);
}
function displayOff(elementID, className) {
  document.getElementById(elementID).classList.remove(className);
}

function randomAlphabet() {
  const allAlphabet = "qwertyuiopasdfghjklzxcvbnm".split("");
  const randomDigit = Math.round(Math.random() * 25);
  return allAlphabet[randomDigit];
}

function setInnerText(elementID, theWord) {
  document.getElementById(elementID).innerText = theWord;
}

function catchWord() {
  document.addEventListener("keyup", function (e) {
    const getWord = document
      .getElementById("displayWord")
      .innerText.toLowerCase();
    displayOff(getWord, "bg-orange-500");
    if (e.key === getWord) {
      const score = parseInt(document.getElementById("score-gain").innerText);
      setInnerText("score-gain", score + 1);
      setInnerText("final-score", score + 1);
    } else {
      const life = parseInt(document.getElementById("life-remain").innerText);
      if (life === 0 || e.key === "Escape") {
        displayOn("gamePlay", "hidden");
        displayOff("gameEnd", "hidden");
      }
      setInnerText("life-remain", life - 1);
    }
    const displayWord2 = randomAlphabet();
    setInnerText("displayWord", displayWord2);
    displayOn(displayWord2, "bg-orange-500");
  });
}
