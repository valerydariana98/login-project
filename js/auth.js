import { auth } from "./firebase.js";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut }
    from "https://www.gstatic.com/firebasejs/12.12.1/firebase-auth.js";

export async function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
}

export async function register(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
}

export async function logout() {
    return signOut(auth);
}
