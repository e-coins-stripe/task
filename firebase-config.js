const firebaseConfig = {
  apiKey: "AIzaSyAsMxamUDdtbYbse359_wJJvU7smEMC7YI",
  authDomain: "task-6a033.firebaseapp.com",
  projectId: "task-6a033",
  storageBucket: "task-6a033.firebasestorage.app",
  messagingSenderId: "1058933867414",
  appId: "1:1058933867414:web:9a8bde3d596760b39013b7"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
