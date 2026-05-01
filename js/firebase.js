import { initializeApp } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyAgk46CK9QCIqJghu_wf9tkjEUdG4jp85o",
    authDomain: "loginapp-190a7.firebaseapp.com",
    projectId: "loginapp-190a7",
    storageBucket: "loginapp-190a7.firebasestorage.app",
    messagingSenderId: "370997497928",
    appId: "1:370997497928:web:b1d98eaa5a541b6f55887d",
    measurementId: "G-6X5Z611VYW"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
