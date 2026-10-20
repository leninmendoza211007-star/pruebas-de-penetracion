(() => {
  const translations = {
    es: {
      pageTitle: "PentestX | Servicios", mainNavLabel: "Navegación principal", navHome: "Inicio",
      navServices: "Servicios", navAbout: "Nosotros", navContact: "Contacto", languageLabel: "Idioma",
      login: "Iniciar sesión", eyebrow: "Qué hacemos", heading: "Servicios de ciberseguridad",
      intro: "Soluciones integrales de auditoría y pentesting autorizadas, adaptadas a la infraestructura de tu organización.",
      service1Title: "Análisis de vulnerabilidades", service1Desc: "Escaneo y detección de brechas en sistemas, aplicaciones y redes.",
      service2Title: "Pruebas de penetración", service2Desc: "Simulación controlada de ataques para evaluar la resistencia de activos autorizados.",
      service3Title: "Auditoría web y móvil", service3Desc: "Revisión de aplicaciones, configuración y controles de seguridad.",
      service4Title: "Ingeniería social", service4Desc: "Ejercicios aprobados de concienciación y evaluación de procesos humanos.",
      service5Title: "Seguridad en la nube", service5Desc: "Evaluación de identidades, configuraciones y exposición en entornos cloud.",
      service6Title: "Respuesta a incidentes", service6Desc: "Apoyo en contención, investigación y mitigación de incidentes.",
      detailsLink: "Ver detalles →", modalEyebrow: "PENTESTX / SERVICIOS", modalIncludes: "¿Qué incluye?", modalBenefits: "Beneficios", modalMethod: "Nuestra metodología", methodStep1: "Planificación", methodStep2: "Evaluación", methodStep3: "Informe", modalCta: "Solicitar una evaluación", closeModalLabel: "Cerrar ventana", cta: "Solicitar una evaluación", footerSlogan: "Tu seguridad, nuestra prioridad.",
      footerNavLabel: "Enlaces del pie de página", copyright: "© 2026 PentestX. Todos los derechos reservados."
    },
    en: {
      pageTitle: "PentestX | Services", mainNavLabel: "Main navigation", navHome: "Home",
      navServices: "Services", navAbout: "About us", navContact: "Contact", languageLabel: "Language",
      login: "Log in", eyebrow: "What we do", heading: "Cybersecurity Services",
      intro: "Comprehensive, authorized security auditing and penetration testing tailored to your organization's infrastructure.",
      service1Title: "Vulnerability Assessment", service1Desc: "Scan and identify security gaps across systems, applications, and networks.",
      service2Title: "Penetration Testing", service2Desc: "Controlled attack simulations to assess the resilience of authorized assets.",
      service3Title: "Web and Mobile Security Audit", service3Desc: "Review of applications, configurations, and security controls.",
      service4Title: "Social Engineering", service4Desc: "Approved awareness exercises and assessments of human processes.",
      service5Title: "Cloud Security", service5Desc: "Assessment of identities, configurations, and exposure in cloud environments.",
      service6Title: "Incident Response", service6Desc: "Support with incident containment, investigation, and mitigation.",
      detailsLink: "View details →", modalEyebrow: "PENTESTX / SERVICES", modalIncludes: "What is included?", modalBenefits: "Benefits", modalMethod: "Our methodology", methodStep1: "Planning", methodStep2: "Assessment", methodStep3: "Report", modalCta: "Request an Assessment", closeModalLabel: "Close dialog", cta: "Request an Assessment", footerSlogan: "Your security, our priority.",
      footerNavLabel: "Footer links", copyright: "© 2026 PentestX. All rights reserved."
    }
  };

  function setLanguage(language) {
    const dictionary = translations[language] || translations.es;
    document.documentElement.lang = language === "en" ? "en" : "es";
    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const key = element.dataset.i18n;
      if (dictionary[key]) element.textContent = dictionary[key];
    });
    document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
      const key = element.dataset.i18nAria;
      if (dictionary[key]) element.setAttribute("aria-label", dictionary[key]);
    });
    document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
      const key = element.dataset.i18nAlt;
      if (dictionary[key]) element.alt = dictionary[key];
    });
    document.title = dictionary.pageTitle;
    try { localStorage.setItem("pentestx-language", language); } catch (_) {}
  }

  document.addEventListener("DOMContentLoaded", () => {
    const selector = document.getElementById("language-select");
    if (!selector) return;
    let savedLanguage = "es";
    try { savedLanguage = localStorage.getItem("pentestx-language") || "es"; } catch (_) {}
    selector.value = translations[savedLanguage] ? savedLanguage : "es";
    setLanguage(selector.value);
    selector.addEventListener("change", () => setLanguage(selector.value));
  });
})();
