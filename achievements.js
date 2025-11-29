const achList = document.getElementById("ach-list");

function addAchievement(text) {
  const el = document.createElement("div");
  el.className = "achievement";
  el.innerText = text;
  achList.appendChild(el);
}
