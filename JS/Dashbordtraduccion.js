
/*
 * PentestX - Sistema de traducción
 * Idiomas: Español e Inglés
 *
 * Independiente del CSS y de otros scripts.
 * No utiliza librerías externas.
 */

(() => {
  "use strict";

  // Evita inicializar el sistema dos veces.
  if (window.__pentestXTranslationLoaded) {
    return;
  }

  const selector = document.getElementById("language-select");

  // Si esta página no tiene selector, no hace nada.
  if (!selector) {
    return;
  }

  window.__pentestXTranslationLoaded = true;

  // Diccionario de traducciones.
  // Las claves son los textos originales en español.
  const translations = {
    "Inicio": "Home",
    "Servicios": "Services",
    "Nosotros": "About Us",
    "Contacto": "Contact",

    "Idioma": "Language",
    "Seleccionar idioma": "Select language",
    "Español": "Spanish",
    "Inglés": "English",

    "Iniciar sesión": "Log In",
    "Área de usuario": "User Area",
    "Panel de control": "Dashboard",

    "Resumen general de estado, auditorías activas y resultados de pruebas autorizadas.":
      "Overview of status, active audits, and authorized testing results.",

    "Vulnerabilidades críticas": "Critical Vulnerabilities",
    "Auditorías realizadas": "Audits Completed",
    "Sistemas evaluados": "Systems Evaluated",

    "Evaluaciones recientes": "Recent Assessments",
    "Proyecto / sistema": "Project / System",
    "Fecha": "Date",
    "Estado": "Status",
    "Riesgo": "Risk",
    "Acceso": "Access",

    "Servidor web principal": "Main Web Server",
    "Base de datos de clientes": "Customer Database",
    "API de pagos": "Payment API",

    "Completado": "Completed",
    "En proceso": "In Progress",
    "Revisado": "Reviewed",

    "Alto": "High",
    "Medio": "Medium",
    "Bajo": "Low",

    "Ver progreso": "View Progress",
    "Consultar mi avance": "View My Progress",

    "Tu seguridad, nuestra prioridad.":
      "Your security, our priority.",

    "Enlaces del pie de página": "Footer Links",
    "© 2026 PentestX. Todos los derechos reservados.":
      "© 2026 PentestX. All rights reserved."
  };

  /*
   * Guarda los textos originales de la página.
   * Así se puede volver al español sin perder contenido.
   */
  const originalTexts = [];
  const originalAttributes = [];

  const walker = document.createTreeWalker(
    document.body,
    NodeFilter.SHOW_TEXT,
    {
      acceptNode(node) {
        const parent = node.parentElement;

        if (!parent) {
          return NodeFilter.FILTER_REJECT;
        }

        if (
          parent.closest("script, style, noscript, textarea")
        ) {
          return NodeFilter.FILTER_REJECT;
        }

        return NodeFilter.FILTER_ACCEPT;
      }
    }
  );

  while (walker.nextNode()) {
    const node = walker.currentNode;

    originalTexts.push({
      node: node,
      original: node.nodeValue
    });
  }

  // Guarda los atributos traducibles sin alterar los enlaces.
  const elements = document.body.querySelectorAll(
    "[aria-label], title"
  );

  elements.forEach((element) => {
    ["aria-label", "title"].forEach((attribute) => {
      if (element.hasAttribute(attribute)) {
        originalAttributes.push({
          element: element,
          attribute: attribute,
          original: element.getAttribute(attribute)
        });
      }
    });
  });

  // Guarda el título original de la pestaña.
  const originalTitle = document.title;

  // Traduce o restaura el contenido original.
  function setLanguage(language) {
    const useEnglish = language === "en";

    // Actualiza el idioma declarado en el documento.
    document.documentElement.lang = useEnglish ? "en" : "es";

    // Actualiza el título de la pestaña.
    document.title = useEnglish
      ? "PentestX | User Dashboard"
      : originalTitle;

    // Traduce los textos originales sin reconstruir el HTML.
    originalTexts.forEach(({ node, original }) => {
      const trimmed = original.trim();

      if (!trimmed) {
        return;
      }

      if (useEnglish && translations[trimmed]) {
        const leading = original.match(/^\s*/)[0];
        const trailing = original.match(/\s*$/)[0];

        node.nodeValue =
          leading + translations[trimmed] + trailing;
      } else {
        node.nodeValue = original;
      }
    });

    // Traduce atributos accesibles y títulos.
    originalAttributes.forEach(
      ({ element, attribute, original }) => {
        if (useEnglish && translations[original]) {
          element.setAttribute(
            attribute,
            translations[original]
          );
        } else {
          element.setAttribute(attribute, original);
        }
      }
    );
  }

  // Usa el idioma seleccionado por el usuario.
  selector.addEventListener("change", function () {
    setLanguage(selector.value);
  });

  // Aplica el idioma inicial.
  setLanguage(selector.value || "es");
})();
