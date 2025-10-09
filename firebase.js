// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyC1_whw3z9vFWX2-flyFo2rxGKNYCiEM5s",
  authDomain: "conectareciclagem.firebaseapp.com",
  projectId: "conectareciclagem",
  storageBucket: "conectareciclagem.firebasestorage.app",
  messagingSenderId: "106491447083",
  appId: "1:106491447083:web:1fd6117d59ed61cea8a76e",
  measurementId: "G-H3QRYP39JH"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
