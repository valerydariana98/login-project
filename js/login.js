
// Importamos la instancia de autenticación configurada y la función oficial de Firebase
import { auth } from './firebase.js';
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";// Configuración del tema de Tailwind para la vista de Login
tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            "colors": {
                "on-primary": "#ffffff",
                "on-primary-container": "#003c0b",
                "primary-container": "#4caf50",
                "on-tertiary-fixed": "#002204",
                "background": "#f3faff",
                "on-surface": "#071e27",
                "primary": "#006e1c",
                "outline-variant": "#becab9",
                "outline": "#6f7a6b",
                "surface-container-lowest": "#ffffff"
            },
            "fontFamily": {
                "headline-md": ["Manrope"],
                "label-sm": ["Manrope"],
                "label-md": ["Manrope"],
                "headline-sm": ["Manrope"],
                "body-md": ["Manrope"]
            }
        }
    }
};
// --- Elementos del DOM ---
// Capturamos el formulario y los campos de entrada por sus IDs
const loginForm = document.getElementById('login-form');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

// Agregamos la palabra clave 'async' antes de los parámetros
loginForm.addEventListener('submit', async (e) => {
    e.preventDefault(); 
    
    const email = emailInput.value;
    const password = passwordInput.value;
    
    // El bloque try/catch es fundamental para manejar el éxito o el error de la conexión
    try {
        // Llamada asíncrona a Firebase Auth
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        
        // Si llegamos aquí, los datos son correctos
        console.log("Acceso concedido para:", userCredential.user.email);

        window.location.href = "welcome.html";
        
    } catch (error) {
        // Si hay un error (contraseña mal, usuario no existe, etc.) cae aquí
        console.error("Error detectado:", error.code);
        alert("Credenciales incorrectas. Por favor, verifica tu correo y contraseña.");
    }
});

