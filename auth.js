import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
import { app } from "./firebase-config.js";

const auth = getAuth(app);

// Protect home page
if (location.pathname.endsWith("home.html")) {
  onAuthStateChanged(auth, user => {
    if (!user) location.replace("index.html");
  });
}

// Login
document.getElementById("login-form")?.addEventListener("submit", (e) => {
  e.preventDefault();
  const { email, password } = e.target;
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then(() => { location.replace("home.html") })
    .catch(err => alert("Login failed: " + err.message));
});

// Logout
document.getElementById("logout-btn")?.addEventListener("click", () => {
  signOut(auth).then(() => location.replace("index.html"));
});