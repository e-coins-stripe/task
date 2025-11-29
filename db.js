// db.js (module)
import { db, auth } from "./firebase-config.js";
import {
  doc,
  setDoc,
  getDoc
} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

window.APP_STATE = {
  uid: null,
  coins: 0,
  tasks: [],
  achievements: []
};

export async function loadUserData(uid) {
  if (!uid) return;
  const ref = doc(db, "users", uid);
  const snap = await getDoc(ref);
  if (snap.exists()) {
    const data = snap.data();
    window.APP_STATE.coins = data.coins || 0;
    window.APP_STATE.tasks = data.tasks || [];
    window.APP_STATE.achievements = data.achievements || [];
  } else {
    window.APP_STATE.coins = 0;
    window.APP_STATE.tasks = [];
    window.APP_STATE.achievements = [];
    await saveUserData(); // create doc
  }
  document.getElementById("coins").textContent = window.APP_STATE.coins;
  return window.APP_STATE;
}

export async function saveUserData() {
  const user = auth.currentUser;
  if (!user) return;
  const ref = doc(db, "users", user.uid);
  await setDoc(ref, {
    coins: window.APP_STATE.coins,
    tasks: window.APP_STATE.tasks,
    achievements: window.APP_STATE.achievements
  }, { merge: true });
}
