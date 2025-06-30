// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqA4zI-7s_Ygs5wMqrfPK7Jhi4ce4Lbg8",
  authDomain: "mssc-portal.firebaseapp.com",
  projectId: "mssc-portal",
  storageBucket: "mssc-portal.firebasestorage.app",
  messagingSenderId: "483026231883",
  appId: "1:483026231883:web:e4c91f40f2eda87499a3ce",
  measurementId: "G-1JEEEPFDHP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);