// auth.js
import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

import { app } from "./firebase-config.js";

const auth = getAuth(app);

// Redirect unauthorized users from home.html back to login
if (location.pathname.endsWith("home.html")) {
  onAuthStateChanged(auth, (user) => {
    if (!user) {
      location.replace("index.html");
    }
  });
}

// Login form submit handler
document.getElementById("login-form")?.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = e.target.email.value;
  const password = e.target.password.value;

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      location.replace("home.html");
    })
    .catch((error) => {
      alert("Login failed: " + error.message);
    });
});

// Logout button handler
document.getElementById("logout-btn")?.addEventListener("click", () => {
  signOut(auth).then(() => {
    location.replace("index.html
