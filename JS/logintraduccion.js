document.addEventListener("DOMContentLoaded", () => {
  const selectorIdioma = document.getElementById("language-select");

  if (!selectorIdioma) return;

  const traducciones = {
    es: {
      inicio: "Inicio",
      servicios: "Servicios",
      nosotros: "Nosotros",
      contacto: "Contacto",
      iniciarSesion: "Iniciar sesión",
      areaUsuario: "Área de usuario",
      titulo: "Iniciar sesión",
      descripcion: "Accede a tu panel de auditorías y reportes.",
      correo: "Correo electrónico",
      contrasena: "Contraseña",
      entrar: "Entrar",
      registrarse: "Registrarse",
      errorTitulo: "Credenciales incorrectas.",
      errorMensaje: "Comprueba tu correo electrónico o contraseña, o",
      registrate: "regístrate",
      sinCuenta: "si todavía no tienes una cuenta.",
      ayuda: "¿Necesitas ayuda? Contacta al equipo.",
      lema: "Tu seguridad, nuestra prioridad.",
      derechos: "© 2026 PentestX. Todos los derechos reservados.",
      idioma: "Seleccionar idioma"
    },

    en: {
      inicio: "Home",
      servicios: "Services",
      nosotros: "About us",
      contacto: "Contact",
      iniciarSesion: "Log in",
      areaUsuario: "User area",
      titulo: "Log in",
      descripcion: "Access your audit and report dashboard.",
      correo: "Email address",
      contrasena: "Password",
      entrar: "Log in",
      registrarse: "Sign up",
      errorTitulo: "Incorrect credentials.",
      errorMensaje: "Check your email address or password, or",
      registrate: "sign up",
      sinCuenta: "if you don't have an account yet.",
      ayuda: "Need help? Contact our team.",
      lema: "Your security, our priority.",
      derechos: "© 2026 PentestX. All rights reserved.",
      idioma: "Select language"
    }
  };

  // Guarda el texto original de los elementos antes de traducirlos.
  const elementos = {
    navegacion: document.querySelectorAll(".main-nav a"),
    botonAcceso: document.querySelector(".header-actions .button"),
    etiquetaArea: document.querySelector(".login-card .eyebrow"),
    titulo: document.querySelector(".login-card h1"),
    descripcion: document.querySelector(".login-card > p:not(.eyebrow)"),
    etiquetas: document.querySelectorAll(".login-card .field label"),
    botonEntrar: document.querySelector(
      '#login-form button[type="submit"]'
    ),
    botonRegistro: document.querySelector(".register-button"),
    errorTitulo: document.querySelector("#login-error strong"),
    errorEnlace: document.querySelector("#login-error a"),
    ayuda: document.querySelector(".login-footnote a"),
    lema: document.querySelector('[data-i18n="lema"]'),
    derechos: document.querySelector('[data-i18n="derechos"]'),
    selector: selectorIdioma
  };

  function traducir(idioma) {
    const t = traducciones[idioma] || traducciones.es;

    // Navegación superior.
    const enlaces = elementos.navegacion;

    if (enlaces.length >= 4) {
      enlaces[0].textContent = t.inicio;
      enlaces[1].textContent = t.servicios;
      enlaces[2].textContent = t.nosotros;
      enlaces[3].textContent = t.contacto;
    }

    if (elementos.botonAcceso) {
      elementos.botonAcceso.textContent = t.iniciarSesion;
    }

    // Tarjeta de inicio de sesión.
    if (elementos.etiquetaArea) {
      elementos.etiquetaArea.textContent = t.areaUsuario;
    }

    if (elementos.titulo) {
      elementos.titulo.textContent = t.titulo;
    }

    if (elementos.descripcion) {
      elementos.descripcion.textContent = t.descripcion;
    }

    if (elementos.etiquetas.length >= 2) {
      elementos.etiquetas[0].textContent = t.correo;
      elementos.etiquetas[1].textContent = t.contrasena;
    }

    if (elementos.botonEntrar) {
      elementos.botonEntrar.textContent = t.entrar;
    }

    if (elementos.botonRegistro) {
      elementos.botonRegistro.textContent = t.registrarse;
    }

    // Mensaje de error sin eliminar el enlace de registro.
    const error = document.getElementById("login-error");

    if (error && elementos.errorTitulo && elementos.errorEnlace) {
      elementos.errorTitulo.textContent = t.errorTitulo;

      const nodos = Array.from(error.childNodes);
      const textoError = nodos.find(
        nodo => nodo.nodeType === Node.TEXT_NODE &&
          nodo.textContent.trim() !== ""
      );

      if (textoError) {
        textoError.textContent = ` ${t.errorMensaje} `;
      }

      elementos.errorEnlace.textContent = t.registrate;

      const siguienteTexto = elementos.errorEnlace.nextSibling;

      if (siguienteTexto && siguienteTexto.nodeType === Node.TEXT_NODE) {
        siguienteTexto.textContent = ` ${t.sinCuenta}`;
      }
    }

    if (elementos.ayuda) {
      elementos.ayuda.textContent = t.ayuda;
    }

    // Pie de página.
    if (elementos.lema) {
      elementos.lema.textContent = t.lema;
    }

    if (elementos.derechos) {
      elementos.derechos.textContent = t.derechos;
    }

    // Actualiza el idioma declarado del documento.
    document.documentElement.lang = idioma;

    // Actualiza la etiqueta accesible del selector.
    elementos.selector.setAttribute("aria-label", t.idioma);
  }

  const idiomaGuardado = localStorage.getItem("pentestx-language") || "es";
  selectorIdioma.value = traducciones[idiomaGuardado] ? idiomaGuardado : "es";

  selectorIdioma.addEventListener("change", () => {
    localStorage.setItem("pentestx-language", selectorIdioma.value);
    traducir(selectorIdioma.value);
  });

  // Aplica el idioma global guardado al cargar la página.
  traducir(selectorIdioma.value);
});