// tasks.js (module)
import { auth } from "./firebase-config.js";
import { loadUserData, saveUserData } from "./db.js";
import { checkAchievements } from "./achievements.js";

const taskName = document.getElementById("taskName");
const taskRate = document.getElementById("taskRate");
const addTaskBtn = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

addTaskBtn.onclick = async () => {
  const name = taskName.value?.trim();
  const rate = Number(taskRate.value) || 0;
  if (!name || rate <= 0) return alert("Enter valid name and rate");
  const task = { id: Date.now().toString(), name, rate };
  window.APP_STATE.tasks.push(task);
  renderTaskList();
  await saveUserData();
  taskName.value = ""; taskRate.value = "";
};

export function renderTaskList() {
  taskList.innerHTML = "";
  window.APP_STATE.tasks.forEach(t => {
    const el = document.createElement("div");
    el.className = "task";
    el.innerHTML = `
      <strong>${t.name}</strong> <small>${t.rate} coins/min</small>
      <div class="row">
        <input type="number" min="1" placeholder="minutes" id="mins-${t.id}">
        <button id="complete-${t.id}">Complete</button>
      </div>
    `;
    taskList.appendChild(el);
    document.getElementById(`complete-${t.id}`).onclick = () => completeTask(t.id);
  });
}

async function completeTask(id) {
  const minsInput = document.getElementById(`mins-${id}`);
  const mins = Number(minsInput.value) || 0;
  if (mins <= 0) return alert("Enter minutes");
  const t = window.APP_STATE.tasks.find(x => x.id === id);
  const earned = mins * t.rate;
  window.APP_STATE.coins += earned;
  document.getElementById("coins").textContent = window.APP_STATE.coins;
  await saveUserData();
  checkAchievements("earn_coins", earned);
  alert(`You earned ${earned} coins`);
}

// Load user data after auth state change
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
onAuthStateChanged(auth, async user => {
  if (user) {
    await loadUserData(user.uid);
    renderTaskList();
  } else {
    // signed out: reset UI state
    window.APP_STATE = { uid: null, coins: 0, tasks: [], achievements: [] };
    document.getElementById("coins").textContent = 0;
    taskList.innerHTML = "";
  }
});
