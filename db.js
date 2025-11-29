function userDocRef(uid){ return db.collection('users').doc(uid); }

async function loadUserData(uid){
  const doc = await userDocRef(uid).get();
  const data = doc.exists ? doc.data() : { coins:0, tasks:[], achievements:[] };
  window.APP_STATE = data;
  window.APP_STATE.uid = uid;
  coins.textContent = data.coins;
  renderTaskList();
  renderAchievements();
}

async function saveUserData(){
  await userDocRef(APP_STATE.uid).set(APP_STATE);
}