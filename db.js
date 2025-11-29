// db.js
import { db, auth } from "./firebase-config.js";
import {
  doc,
  setDoc,
  getDoc
} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

export async function saveUserData(data) {
  const user = auth.currentUser;
  if (!user) return;

  await setDoc(doc(db, "users", user.uid), data, { merge: true });
}

export async function loadUserData() {
  const user = auth.currentUser;
  if (!user) return null;

  const snap = await getDoc(doc(db, "users", user.uid));
  return snap.exists() ? snap.data() : null;
}
