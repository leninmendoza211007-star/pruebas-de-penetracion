const loginForm = document.getElementById("login-form");
const loginError = document.getElementById("login-error");

if (loginForm && loginError) {
  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const correo = document.getElementById("correo");
    const clave = document.getElementById("clave");

    // Oculta el error anterior antes de validar.
    loginError.hidden = true;

    // Comprueba que ambos campos tengan contenido.
    if (!correo.value.trim() || !clave.value) {
      loginForm.reportValidity();
      return;
    }

    // Todavía no existe una autenticación real.
    loginError.hidden = false;
  });
}

// Mostrar u ocultar la contraseña.
const passwordInput = document.getElementById("clave");
const passwordToggle = document.getElementById("toggle-password");
if (passwordInput && passwordToggle) {
  passwordToggle.addEventListener("click", () => {
    const showing = passwordInput.type === "password";
    passwordInput.type = showing ? "text" : "password";
    passwordToggle.setAttribute("aria-pressed", String(showing));
    passwordToggle.setAttribute("aria-label", showing ? "Ocultar contraseña" : "Mostrar contraseña");
    passwordToggle.innerHTML = showing
      ? '<svg class="eye-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 3l18 18M10.6 10.6a2 2 0 0 0 2.8 2.8M9.9 5.2A10.8 10.8 0 0 1 12 5c6.4 0 10 7 10 7a16 16 0 0 1-3.1 3.8M6.2 6.2C3.5 8 2 12 2 12s3.6 7 10 7a10 10 0 0 0 4-.8"/></svg>'
      : '<svg class="eye-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/></svg>';
  });
}
