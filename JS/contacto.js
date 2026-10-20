document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".form-grid");
  const nombre = document.getElementById("nombre");
  const email = document.getElementById("email");
  const servicio = document.getElementById("servicio");
  const mensaje = document.getElementById("mensaje");
  const boton = form?.querySelector('button[type="submit"]');
  const tarjetas = document.querySelectorAll("body.page-contact .grid.two > .card");

  if (!form || !nombre || !email || !servicio || !mensaje || !boton) {
    console.error("No se encontraron todos los elementos del formulario de contacto.");
    return;
  }

  const idiomaActual = () =>
    document.documentElement.dataset.language === "en" ? "en" : "es";
  const traducciones = () => window.PentestXTranslations?.[idiomaActual()] || {};

  function crearError(campo) {
    const contenedor = campo.closest(".field");
    let error = contenedor.querySelector(".field-error");

    if (!error) {
      error = document.createElement("small");
      error.className = "field-error";
      error.id = `${campo.id}-error`;
      error.setAttribute("aria-live", "polite");
      contenedor.appendChild(error);
    }

    campo.setAttribute("aria-describedby", error.id);
    return error;
  }

  const campos = [nombre, email, servicio];
  const errores = new Map(campos.map((campo) => [campo, crearError(campo)]));

  function mostrarError(campo, texto) {
    const error = errores.get(campo);
    error.textContent = texto || "";
    campo.classList.toggle("is-invalid", Boolean(texto));
    campo.setAttribute("aria-invalid", texto ? "true" : "false");
    return !texto;
  }

  function validarNombre() {
    const t = traducciones();
    const valor = nombre.value.trim();
    if (!valor) return mostrarError(nombre, t.errorNombreObligatorio || "El nombre es obligatorio.");
    if (valor.length < 2) return mostrarError(nombre, t.errorNombre || "Introduce al menos 2 caracteres.");
    return mostrarError(nombre, "");
  }

  function validarEmail() {
    const t = traducciones();
    const valor = email.value.trim();
    const formatoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!valor) return mostrarError(email, t.errorCorreoObligatorio || "El correo es obligatorio.");
    if (!formatoEmail.test(valor)) return mostrarError(email, t.errorCorreo || "Introduce un correo válido.");
    return mostrarError(email, "");
  }

  function validarServicio() {
    const t = traducciones();
    if (!servicio.value) return mostrarError(servicio, t.errorServicio || "Selecciona un servicio.");
    return mostrarError(servicio, "");
  }

  nombre.addEventListener("input", validarNombre);
  email.addEventListener("input", validarEmail);
  servicio.addEventListener("change", validarServicio);

  // Contador de caracteres del mensaje.
  const maxCaracteres = Number(mensaje.getAttribute("maxlength")) || 1000;
  const contador = document.createElement("small");
  contador.className = "character-counter";
  contador.setAttribute("aria-live", "polite");
  contador.id = "mensaje-counter";
  mensaje.closest(".field").appendChild(contador);
  mensaje.setAttribute("aria-describedby", contador.id);

  function actualizarContador() {
    const t = traducciones();
    contador.textContent = `${mensaje.value.length} / ${maxCaracteres} ${t.contadorCaracteres || "caracteres"}`;
    contador.classList.toggle("near-limit", mensaje.value.length >= maxCaracteres * 0.9);
  }

  mensaje.addEventListener("input", actualizarContador);
  actualizarContador();

  // Actualizar mensajes y contador si cambia el idioma globalmente.
  document.addEventListener("contacto:idioma-cambiado", () => {
    if (nombre.getAttribute("aria-invalid") === "true") validarNombre();
    if (email.getAttribute("aria-invalid") === "true") validarEmail();
    if (servicio.getAttribute("aria-invalid") === "true") validarServicio();
    actualizarContador();
    if (!boton.disabled) boton.textContent = traducciones().enviar || boton.textContent;
  });

  const estado = document.createElement("p");
  estado.className = "form-status";
  estado.setAttribute("role", "status");
  estado.setAttribute("aria-live", "polite");
  estado.hidden = true;
  form.appendChild(estado);

  let enviando = false;
  let textoOriginalBoton = boton.textContent.trim();

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (enviando) return;

    const resultados = [validarNombre(), validarEmail(), validarServicio()];
    if (resultados.includes(false)) {
      campos.find((campo) => campo.getAttribute("aria-invalid") === "true")?.focus();
      return;
    }

    const t = traducciones();
    estado.hidden = true;
    enviando = true;
    boton.disabled = true;
    textoOriginalBoton = boton.textContent.trim();
    boton.textContent = t.enviando || (idiomaActual() === "en" ? "Checking..." : "Validando...");
    form.setAttribute("aria-busy", "true");

    // Demostración local: NO se envían ni se almacenan datos en un servidor.
    await new Promise((resolve) => window.setTimeout(resolve, 350));
    estado.textContent = traducciones().validacionDemo || "Validación completada. El formulario aún no envía datos a un servidor.";
    estado.className = "form-status success";
    estado.hidden = false;

    enviando = false;
    boton.disabled = false;
    boton.textContent = traducciones().enviar || textoOriginalBoton;
    form.removeAttribute("aria-busy");
  });

  // Animación suave y respetuosa con la preferencia de movimiento del usuario.
  const reducirMovimiento = window.matchMedia("(prefers-reduced-motion: reduce)");
  function actualizarAnimaciones(reducir) {
    tarjetas.forEach((tarjeta, indice) => {
      if (reducir) {
        tarjeta.classList.remove("card-animated");
        tarjeta.style.removeProperty("--animation-delay");
      } else {
        tarjeta.classList.add("card-animated");
        tarjeta.style.setProperty("--animation-delay", `${indice * 120}ms`);
      }
    });
  }
  actualizarAnimaciones(reducirMovimiento.matches);
  reducirMovimiento.addEventListener("change", (event) => actualizarAnimaciones(event.matches));
});
