document.addEventListener("DOMContentLoaded", () => {
  const languageSelect = document.getElementById("language-select");

  if (!languageSelect) {
    console.error("No se encontró el selector de idioma.");
    return;
  }

  // ==========================================
  // 1. TRADUCCIONES
  // ==========================================

  const translations = {
    es: {
      navLabel: "Navegación principal",
      footerNavLabel: "Redes sociales",
      seleccionarIdioma: "Seleccionar idioma",

      inicio: "Inicio",
      servicios: "Servicios",
      nosotros: "Nosotros",
      contacto: "Contacto",
      login: "Iniciar sesión",

      eyebrow: "Hablemos",
      titulo: "Solicita una evaluación de seguridad",
      descripcion:
        "Completa el formulario y nuestro equipo podrá ponerse en contacto contigo para definir alcance y siguientes pasos.",

      formularioTitulo: "Cuéntanos sobre tu necesidad",
      nombre: "Nombre completo *",
      empresa: "Empresa",
      correo: "Correo electrónico *",
      telefono: "Teléfono",
      servicio: "Servicio de interés *",
      seleccionarServicio: "Selecciona un servicio",
      pentest: "Pruebas de penetración",
      auditoria: "Auditoría web y móvil",
      vulnerabilidades: "Análisis de vulnerabilidades",
      nube: "Seguridad en la nube",
      otro: "Otro",
      mensaje: "Descripción",
      placeholder:
        "Cuéntanos brevemente sobre el alcance que necesitas.",
      enviar: "Enviar solicitud",

      porque: "¿Por qué PentestX?",
      beneficios:
        "Equipo especializado, metodología estructurada, resultados accionables y confidencialidad durante la evaluación.",
      contactoDirecto: "Contacto directo",
      correoLabel: "Correo:",
      telefonoLabel: "Teléfono:",

      facebook: "Facebook",
      tiktok: "TikTok",
      youtube: "YouTube",

      seguridad: "Tu seguridad, nuestra prioridad.",
      derechos: "Todos los derechos reservados.",

      // Mensajes de validación
      errorNombre: "El nombre debe tener al menos 2 caracteres.",
      errorCorreo: "Introduce un correo electrónico válido.",
      errorServicio: "Selecciona el servicio que te interesa.",

      // Mensajes del formulario
      enviando: "Enviando...",
      errorEnvio:
        "No se pudo enviar la solicitud. Inténtalo de nuevo más tarde.",
      contadorCaracteres: "caracteres",
      errorNombreObligatorio: "El nombre es obligatorio.",
      errorCorreoObligatorio: "El correo electrónico es obligatorio.",
      validacionDemo: "La validación está completa. Este formulario aún no envía datos; se conectará a un servidor en una próxima etapa."
    },

    en: {
      navLabel: "Main navigation",
      footerNavLabel: "Social media",
      seleccionarIdioma: "Select language",

      inicio: "Home",
      servicios: "Services",
      nosotros: "About Us",
      contacto: "Contact",
      login: "Log In",

      eyebrow: "Let's Talk",
      titulo: "Request a Security Assessment",
      descripcion:
        "Complete the form and our team will contact you to define the scope and next steps.",

      formularioTitulo: "Tell Us About Your Needs",
      nombre: "Full Name *",
      empresa: "Company",
      correo: "Email Address *",
      telefono: "Phone",
      servicio: "Service of Interest *",
      seleccionarServicio: "Select a service",
      pentest: "Penetration Testing",
      auditoria: "Web and Mobile Security Audit",
      vulnerabilidades: "Vulnerability Assessment",
      nube: "Cloud Security",
      otro: "Other",
      mensaje: "Description",
      placeholder:
        "Briefly tell us about the scope of your requirements.",
      enviar: "Submit Request",

      porque: "Why PentestX?",
      beneficios:
        "A specialized team, a structured methodology, actionable results, and confidentiality throughout the assessment.",
      contactoDirecto: "Direct Contact",
      correoLabel: "Email:",
      telefonoLabel: "Phone:",

      facebook: "Facebook",
      tiktok: "TikTok",
      youtube: "YouTube",

      seguridad: "Your security, our priority.",
      derechos: "All rights reserved.",

      // Validation messages
      errorNombre: "Your name must contain at least 2 characters.",
      errorCorreo: "Enter a valid email address.",
      errorServicio: "Please select the service you are interested in.",

      // Form messages
      enviando: "Submitting...",
      errorEnvio:
        "Your request could not be submitted. Please try again later.",
      contadorCaracteres: "characters",
      errorNombreObligatorio: "Name is required.",
      errorCorreoObligatorio: "Email address is required.",
      validacionDemo: "Validation is complete. This form does not send data yet; it will be connected to a server in a later step."
    }
  };
  window.PentestXTranslations = translations;
  // ==========================================
  // 2. SELECTORES DE LOS ELEMENTOS HTML
  // ==========================================

  const selectors = [
    [".main-nav a:nth-child(1)", "inicio"],
    [".main-nav a:nth-child(2)", "servicios"],
    [".main-nav a:nth-child(3)", "nosotros"],
    [".main-nav a:nth-child(4)", "contacto"],

    [".header-actions .button", "login"],

    [".page-heading .eyebrow", "eyebrow"],
    [".page-heading h1", "titulo"],
    [".page-heading > p:not(.eyebrow)", "descripcion"],

    [".grid.two > section.card h2", "formularioTitulo"],

    ['label[for="nombre"]', "nombre"],
    ['label[for="empresa"]', "empresa"],
    ['label[for="email"]', "correo"],
    ['label[for="telefono"]', "telefono"],
    ['label[for="servicio"]', "servicio"],
    ['label[for="mensaje"]', "mensaje"],

    ['#servicio option[value=""]', "seleccionarServicio"],
    ['#servicio option:nth-child(2)', "pentest"],
    ['#servicio option:nth-child(3)', "auditoria"],
    ['#servicio option:nth-child(4)', "vulnerabilidades"],
    ['#servicio option:nth-child(5)', "nube"],
    ['#servicio option:nth-child(6)', "otro"],

    [".form-grid button[type='submit']", "enviar"],

    [".grid.two > aside.card h2", "porque"],
    [".grid.two > aside.card > p:first-of-type", "beneficios"],
    [".grid.two > aside.card h3", "contactoDirecto"],
    [".contact-email-label", "correoLabel"],
    [".contact-phone-label", "telefonoLabel"],

    [".site-footer .footer-inner > p:first-of-type", "seguridad"],

    [".footer-links a:nth-child(1) span", "facebook"],
    [".footer-links a:nth-child(2) span", "tiktok"],
    [".footer-links a:nth-child(3) span", "youtube"]
  ];

  // ==========================================
  // 3. GUARDAR LOS TEXTOS ORIGINALES
  // ==========================================

  const originalTexts = new Map();

  selectors.forEach(([selector, key]) => {
    document.querySelectorAll(selector).forEach((element) => {
      if (!originalTexts.has(element)) {
        originalTexts.set(element, {
          key,
          text: element.textContent
        });
      }
    });
  });

  // ==========================================
  // 4. TRADUCIR LA PÁGINA
  // ==========================================

  function changeLanguage(lang) {
    const language = translations[lang] ? lang : "es";
    const t = translations[language];

    // Traducir textos seleccionados.
    originalTexts.forEach((data, element) => {
      if (t[data.key] !== undefined) {
        element.textContent = t[data.key];
      }
    });

    // Traducir el placeholder del mensaje.
    const mensaje = document.getElementById("mensaje");

    if (mensaje) {
      mensaje.placeholder = t.placeholder;
    }

    // Traducir etiquetas de navegación.
    const mainNav = document.querySelector(".main-nav");

    if (mainNav) {
      mainNav.setAttribute("aria-label", t.navLabel);
    }

    const footerNav = document.querySelector(".footer-links");

    if (footerNav) {
      footerNav.setAttribute("aria-label", t.footerNavLabel);
    }

    // Traducir el selector de idioma.
    languageSelect.setAttribute(
      "aria-label",
      t.seleccionarIdioma
    );

    const languageLabel = document.querySelector(
      'label[for="language-select"]'
    );

    if (languageLabel) {
      languageLabel.textContent =
        language === "en" ? "Language" : "Idioma";
    }

    // Traducir los atributos accesibles de las redes sociales.
    const socialLinks = [
      [".footer-links a:nth-child(1)", "facebook"],
      [".footer-links a:nth-child(2)", "tiktok"],
      [".footer-links a:nth-child(3)", "youtube"]
    ];

    socialLinks.forEach(([selector, key]) => {
      const link = document.querySelector(selector);

      if (link) {
        link.setAttribute("aria-label", t[key]);
      }
    });

    // Actualizar el idioma del documento y el título.
    document.documentElement.lang = language;

    document.title =
      language === "en"
        ? "PentestX | Contact"
        : "PentestX | Contacto";

    // Traducir el texto de derechos de autor sin alterar el año ni la marca.
    const footerParagraphs = document.querySelectorAll(
      ".site-footer .footer-inner > p"
    );

    const copyright = Array.from(footerParagraphs).find((p) =>
      p.textContent.includes("PentestX")
    );

    if (copyright) {
      copyright.textContent = `© 2026 PentestX. ${t.derechos}`;
    }

    // Guardar el idioma actual para que otros scripts puedan consultarlo.
    document.documentElement.dataset.language = language;
    document.dispatchEvent(
      new CustomEvent("contacto:idioma-cambiado", {
        detail: { language }
      })
    );
  }

  // ==========================================
  // 5. EVENTO DEL SELECTOR
  // ==========================================

  function getSavedLanguage() {
    try {
      return localStorage.getItem("pentestx-language") === "en" ? "en" : "es";
    } catch (error) {
      return "es";
    }
  }

  languageSelect.addEventListener("change", () => {
    const language = languageSelect.value === "en" ? "en" : "es";
    try {
      localStorage.setItem("pentestx-language", language);
    } catch (error) {
      // La página seguirá funcionando aunque el almacenamiento esté bloqueado.
    }
    changeLanguage(language);
  });

  // Escuchar cambios globales del selector compartido por todas las páginas.
  document.addEventListener("pentestx:language-change", (event) => {
    const language = event.detail?.language === "en" ? "en" : "es";
    languageSelect.value = language;
    changeLanguage(language);
  });

  // Sincronizar pestañas abiertas cuando cambia el idioma en otra página.
  window.addEventListener("storage", (event) => {
    if (event.key === "pentestx-language") {
      const language = event.newValue === "en" ? "en" : "es";
      languageSelect.value = language;
      changeLanguage(language);
    }
  });

  // Aplicar la preferencia guardada al cargar la página.
  languageSelect.value = getSavedLanguage();
  changeLanguage(languageSelect.value);
});