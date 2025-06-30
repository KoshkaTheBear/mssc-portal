// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqA4zI-7s_Ygs5wMqrfPK7Jhi4ce4Lbg8",
  authDomain: "mssc-portal.firebaseapp.com",
  projectId: "mssc-portal",
  storageBucket: "mssc-portal.firebasestorage.app",
  messagingSenderId: "483026231883",
  appId: "1:483026231883:web:e4c91f40f2eda87499a3ce"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
