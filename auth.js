// auth.js (module)
import { auth } from "./firebase-config.js";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut
} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

const authUI = document.getElementById("auth-ui");
const mainUI = document.getElementById("main-ui");

function renderSignedOut() {
  authUI.innerHTML = `
    <div class="row">
      <button id="loginBtn">Login</button>
      <button id="signupBtn">Sign Up</button>
    </div>
  `;
  document.getElementById("loginBtn").onclick = showLogin;
  document.getElementById("signupBtn").onclick = showSignup;
  mainUI.classList.add("hidden");
}

function renderSignedIn(user) {
  authUI.innerHTML = `<div class="row"><strong>${user.email}</strong> <button id="logoutBtn">Logout</button></div>`;
  document.getElementById("logoutBtn").onclick = () => signOut(auth);
  mainUI.classList.remove("hidden");
}

// Observe auth state
onAuthStateChanged(auth, (user) => {
  if (user) renderSignedIn(user);
  else renderSignedOut();
});

function showLogin() {
  const email = prompt("Email:");
  if (!email) return;
  const pass = prompt("Password:");
  if (!pass) return;
  signInWithEmailAndPassword(auth, email, pass).catch((e) => alert(e.message));
}

function showSignup() {
  const email = prompt("Email:");
  if (!email) return;
  const pass = prompt("Password:");
  if (!pass) return;
  createUserWithEmailAndPassword(auth, email, pass).catch((e) => alert(e.message));
}
