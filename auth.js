const authUi = document.getElementById('auth-ui');
const mainUi = document.getElementById('main-ui');

function renderAuth() {
  authUi.innerHTML = `
    <div class="row">
      <input id="email" placeholder="Email">
      <input id="password" type="password" placeholder="Password">
      <button id="btn-signup">Signup</button>
      <button id="btn-login">Login</button>
    </div>
  `;
  document.getElementById('btn-signup').onclick = signup;
  document.getElementById('btn-login').onclick = login;
}

async function signup() {
  const e = email.value;
  const p = password.value;
  try { await auth.createUserWithEmailAndPassword(e,p); }
  catch(err){ alert(err.message); }
}

async function login(){
  const e = email.value;
  const p = password.value;
  try{ await auth.signInWithEmailAndPassword(e,p); }
  catch(err){ alert(err.message); }
}

function renderSignedIn(user){
  authUi.innerHTML = `<div class="row"><strong>${user.email}</strong><button id="btn-logout">Logout</button></div>`;
  btn-logout.onclick = ()=> auth.signOut();
}

auth.onAuthStateChanged(async user => {
  if (user) { renderSignedIn(user); mainUi.classList.remove('hidden'); await loadUserData(user.uid); }
  else { renderAuth(); mainUi.classList.add('hidden'); }
});