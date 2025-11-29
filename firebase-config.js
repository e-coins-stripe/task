// firebase-config.js (module)
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

// <- your real config (you already provided these keys) ->
const firebaseConfig = {
  apiKey: "AIzaSyAsMxamUDdtbYbse359_wJJvU7smEMC7YI",
  authDomain: "task-6a033.firebaseapp.com",
  projectId: "task-6a033",
  storageBucket: "task-6a033.firebasestorage.app",
  messagingSenderId: "1058933867414",
  appId: "1:1058933867414:web:9a8bde3d596760b39013b7"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
