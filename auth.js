// auth.js
import { auth } from "./firebase-config.js";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut
} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

// UI elements
const authUI = document.getElementById("auth-ui");
const mainUI = document.getElementById("main-ui");

// Listen to login state
onAuthStateChanged(auth, user => {
  if (user) {
    authUI.innerHTML = `<button id="logout">Logout</button>`;
    mainUI.classList.remove("hidden");

    document.getElementById("logout").onclick = () => {
      signOut(auth);
    };

  } else {
    authUI.innerHTML = `
      <button id="login-btn">Login</button>
      <button id="signup-btn">Sign Up</button>
    `;
    mainUI.classList.add("hidden");

    document.getElementById("login-btn").onclick = showLogin;
    document.getElementById("signup-btn").onclick = showSignup;
  }
});

function showLogin() {
  const email = prompt("Email:");
  const pass = prompt("Password:");
  signInWithEmailAndPassword(auth, email, pass)
    .catch(e => alert(e.message));
}

function showSignup() {
  const email = prompt("Email:");
  const pass = prompt("Password:");
  createUserWithEmailAndPassword(auth, email, pass)
    .catch(e => alert(e.message));
}
