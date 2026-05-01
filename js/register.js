const form = document.getElementById("registerForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(form);

  const data = Object.fromEntries(formData.entries());

  //console.log("Datos capturados:", data);

});