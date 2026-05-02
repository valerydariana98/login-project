console.log("app.js cargado");

import { db, auth } from "./firebase.js";
import { register, logout } from "./auth.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-auth.js";

import { doc, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-firestore.js";


const registerForm = document.getElementById("registerForm");

if (registerForm) {
    registerForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        const name = registerForm.name.value.trim();
        const surname = registerForm.surname.value.trim();
        const phone = registerForm.phone.value.trim();
        const email = registerForm.email.value.trim();
        const password = registerForm.password.value;

        try {
            const userCredential = await register(email, password);
            const uid = userCredential.user.uid;

            await setDoc(doc(db, "users", uid), {
                name,
                surname,
                phone,
                email,
                createdAt: new Date()
            });

            window.location.href = "welcome.html";

        } catch (error) {
            console.error(error);
            alert(getErrorMessage(error.code));
        }
    });
}



const userNameEl = document.getElementById("user-name");

if (userNameEl) {
    onAuthStateChanged(auth, async (user) => {
        if (user) {
            const docSnap = await getDoc(doc(db, "users", user.uid));
            if (docSnap.exists()) {
                userNameEl.textContent = docSnap.data().name;
            }
        } else {
            window.location.href = "index.html";
        }
    });
}

if (btnLogout) {
    btnLogout.addEventListener("click", async () => {
        await logout();
        window.location.href = "index.html";
    });
}


function getErrorMessage(code) {
    const messages = {
        "auth/email-already-in-use": "Ya existe una cuenta con ese correo.",
        "auth/invalid-email": "El correo no es válido.",
        "auth/weak-password": "La contraseña es muy débil (mínimo 6 caracteres).",
        "auth/network-request-failed": "Error de red. Verifica tu conexión.",
    };
    return messages[code] || "Ocurrió un error. Intenta de nuevo.";
}
