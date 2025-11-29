let coins = 0;

function updateCoins(amount) {
  coins += amount;
  document.getElementById("coins").innerText = coins;

  const ding = document.getElementById("ding");
  ding.currentTime = 0;
  ding.play();
}
