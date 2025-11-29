// shop.js (module)
import { saveUserData } from "./db.js";
import { notify } from "./notifications.js";
import { checkAchievements } from "./achievements.js";

const entName = document.getElementById("entName");
const entCost = document.getElementById("entCost");
const entMins = document.getElementById("entMins");
const startEnt = document.getElementById("startEnt");
const entList = document.getElementById("entList");

startEnt.onclick = (ev) => startEntertainment();

function startEntertainment(){
  const name = entName.value?.trim();
  const cost = Number(entCost.value) || 0;
  const mins = Number(entMins.value) || 0;
  if (!name || cost <= 0 || mins <= 0) return alert("Fill all fields properly");

  const total = cost * mins;
  if (window.APP_STATE.coins < total) return alert("Not enough coins");

  window.APP_STATE.coins -= total;
  document.getElementById("coins").textContent = window.APP_STATE.coins;
  saveUserData();

  const id = Date.now().toString();
  const div = document.createElement("div");
  div.className = "ent-item";
  div.id = "ent-" + id;
  div.textContent = `${name} — ${mins} minute(s) running...`;
  entList.appendChild(div);

  setTimeout(() => {
    div.textContent = `${name} — finished`;
    notify(`${name} finished after ${mins} minute(s)`);
    checkAchievements("use_ent", mins);
  }, mins * 60000);
}
