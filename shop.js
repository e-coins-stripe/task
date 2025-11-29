const entList = document.getElementById("ent-list");

document.getElementById("start-ent").onclick = () => {
  const name = document.getElementById("ent-name").value;
  const cost = Number(document.getElementById("ent-cost").value);
  const mins = Number(document.getElementById("ent-mins").value);

  if (!name || !cost || !mins) return alert("Enter all values!");

  const total = cost * mins;

  if (coins < total) return alert("Not enough coins!");

  updateCoins(-total);

  const item = document.createElement("div");
  item.className = "ent";
  item.innerText = `${name}: -${total} coins`;
  entList.appendChild(item);
};
