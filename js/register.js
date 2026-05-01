import { register } from "./auth.js";
import { db } from "./firebase.js";
import { setDoc, doc } 
from "https://www.gstatic.com/firebasejs/12.12.1/firebase-firestore.js";

const form = document.getElementById("registerForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  try {
    const userCredential = await register(data.email, data.password);
    const user = userCredential.user;

    await setDoc(doc(db, "users", user.uid), {
      name: data.name,
      surname: data.surname,
      phone: data.phone,
      email: data.email
    });

    window.location.href = "welcome.html";

  } catch (error) {
    console.error("Error:", error.message);
  }
});