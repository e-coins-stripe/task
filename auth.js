auth.onAuthStateChanged(user => {
  if (!user) {
    const providerUI = `
      <button id="login-btn">Login</button>
      <button id="signup-btn">Sign Up</button>
      <button id="logout-btn" class="hidden">Logout</button>
    `;
    document.getElementById("auth-ui").innerHTML = providerUI;

    document.getElementById("login-btn").onclick = () => {
      const email = prompt("Email:");
      const pass = prompt("Password:");
      auth.signInWithEmailAndPassword(email, pass);
    };

    document.getElementById("signup-btn").onclick = () => {
      const email = prompt("Email:");
      const pass = prompt("Password:");
      auth.createUserWithEmailAndPassword(email, pass);
    };
  } else {
    document.getElementById("logout-btn").classList.remove("hidden");
    document.getElementById("login-btn")?.classList.add("hidden");
    document.getElementById("signup-btn")?.classList.add("hidden");

    document.getElementById("logout-btn").onclick = () => auth.signOut();
    document.getElementById("main-ui").classList.remove("hidden");
  }
});
