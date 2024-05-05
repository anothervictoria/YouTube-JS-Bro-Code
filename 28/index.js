function rollDice() {
  const numOfDice = document.getElementById("numOfDice").value;
  const diceResult = document.getElementById("diceResult");
  const diceImages = document.getElementById("diceImages");
  const values = [];
  const images = [];

  for (let i = 0; i < numOfDice; i++) {
    const value = Math.floor(Math.random() * 6) + 1;
    values.push(value);
    images.push("");
    images.push(`<img src="images/dice-${value}.png" alt='Dice ${value}'>`);
  }

  console.log(values);
  diceResult.textContent = `Dice: ${values.join(", ")}`;
  diceImages.innerHTML = images.join("");
}
