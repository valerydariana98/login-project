import { login } from './auth.js';

const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = loginForm.email.value.trim();
    const password = loginForm.password.value;

    try {
        await login(email, password);
        window.location.href = 'welcome.html';
    } catch (error) {
        console.error(error.code);
        alert(getErrorMessage(error.code));
    }
});

function getErrorMessage(code) {
    const messages = {
        "auth/invalid-credential": "Credenciales incorrectas. Verifica tu correo y contraseña.",
        "auth/user-not-found": "No existe una cuenta con ese correo.",
        "auth/wrong-password": "Contraseña incorrecta.",
        "auth/invalid-email": "El correo no es válido.",
        "auth/network-request-failed": "Error de red. Verifica tu conexión.",
    };
    return messages[code] || "Ocurrió un error. Intenta de nuevo.";
}
