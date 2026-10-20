/* Traducción completa ES/EN para Nosotros */

document.addEventListener("DOMContentLoaded", () => {
  const selector = document.getElementById("language-select");

  if (!selector) return;

  const t = {
    es: {
      skipLink: "Saltar al contenido",
      brandTagline: "Ciberseguridad ofensiva",
      menuLabel: "Abrir menú",
      mainNavLabel: "Navegación principal",
      footerNavLabel: "Enlaces del pie de página",
      navHome: "Inicio",
      navServices: "Servicios",
      navAbout: "Nosotros",
      navContact: "Contacto",
      login: "Iniciar sesión",
      languageLabel: "Seleccionar idioma",

      eyebrow: "Quiénes somos",
      heroTitle: "Seguridad digital con criterio, ética y propósito.",
      heroText: "Ayudamos a las organizaciones a entender sus riesgos y fortalecer sus defensas mediante evaluaciones de seguridad autorizadas y recomendaciones claras.",
      heroCta: "Solicitar una evaluación",
      heroSecondary: "Conoce nuestra metodología",
      trustNote: "Pruebas únicamente con autorización y alcance definido.",
      heroImageAlt: "Especialista de PentestX trabajando frente a monitores de análisis de ciberseguridad",

      purposeEyebrow: "Nuestro propósito",
      purposeTitle: "Convertimos hallazgos técnicos en decisiones más seguras.",
      purposeIntro: "Trabajamos con transparencia y enfoque práctico para que cada evaluación ayude a priorizar mejoras reales.",
      missionTitle: "Nuestra misión",
      missionText: "Identificar riesgos de seguridad antes de que puedan ser aprovechados y orientar a nuestros clientes hacia una mitigación efectiva.",
      visionTitle: "Nuestra visión",
      visionText: "Ser un aliado confiable en ciberseguridad ofensiva, reconocido por la responsabilidad, la claridad y la calidad de nuestras recomendaciones.",
      valuesTitle: "Nuestros valores",
      valuesText: "Confidencialidad, ética, mejora continua y respeto estricto por el alcance autorizado de cada trabajo.",

      methodEyebrow: "Cómo trabajamos",
      methodTitle: "Una metodología clara, de principio a fin.",
      methodIntro: "Cada proyecto comienza con autorización expresa, objetivos acordados y medidas para reducir el impacto en las operaciones.",
      step1Title: "Planificación y alcance",
      step1Text: "Definimos objetivos, activos, límites, permisos y reglas de ejecución con el cliente.",
      step2Title: "Reconocimiento",
      step2Text: "Recopilamos información pertinente de los sistemas incluidos en el alcance autorizado.",
      step3Title: "Evaluación controlada",
      step3Text: "Analizamos posibles debilidades y validamos hallazgos de forma proporcional y segura.",
      step4Title: "Informe y mejoras",
      step4Text: "Entregamos riesgos priorizados, evidencias pertinentes y recomendaciones de remediación.",

      benefitsEyebrow: "Por qué PentestX",
      benefitsTitle: "Más claridad para tomar mejores decisiones de seguridad.",
      benefitsIntro: "No se trata solo de encontrar fallos: buscamos explicar su impacto y ayudarte a decidir qué corregir primero.",
      benefitsLink: "Explorar nuestros servicios",
      benefit1Title: "Alcance acordado",
      benefit1Text: "Actividades planificadas con permisos explícitos y límites documentados.",
      benefit2Title: "Resultados comprensibles",
      benefit2Text: "Hallazgos explicados con contexto, impacto y pasos de corrección.",
      benefit3Title: "Confidencialidad",
      benefit3Text: "Tratamiento responsable de la información obtenida durante el proyecto.",
      benefit4Title: "Enfoque práctico",
      benefit4Text: "Recomendaciones priorizadas según el riesgo y el contexto de la organización.",

      teamEyebrow: "Personas y especialidades",
      teamTitle: "Un enfoque colaborativo para la seguridad.",
      teamIntro: "La seguridad requiere distintas perspectivas. Estas tarjetas representan roles que pueden participar según las necesidades del proyecto.",
      teamRole1: "Pruebas de penetración",
      teamTitle1: "Especialista Pentest",
      teamText1: "Evalúa sistemas dentro del alcance autorizado y documenta hallazgos reproducibles.",
      teamRole2: "Análisis de riesgos",
      teamTitle2: "Analista de seguridad",
      teamText2: "Ayuda a interpretar el impacto de los hallazgos y a priorizar acciones de mejora.",
      teamRole3: "Remediación y mejora",
      teamTitle3: "Asesor de seguridad",
      teamText3: "Orienta sobre controles y recomendaciones para reducir la exposición al riesgo.",
      teamDisclaimer: "Nota: los perfiles mostrados describen funciones de trabajo, no identidades personales. Sustitúyelos por integrantes reales si deseas presentar al equipo nominalmente.",

      ctaEyebrow: "Da el siguiente paso",
      ctaTitle: "Conoce mejor la seguridad de tu organización.",
      ctaText: "Conversemos sobre tus objetivos y definamos una evaluación responsable, con alcance claro.",
      ctaButton: "Solicitar una evaluación",

      footerSlogan: "Tu seguridad, nuestra prioridad.",
      footerExplore: "Explorar",
      footerCommitment: "Nuestro compromiso",
      footerCommitmentText: "Evaluaciones autorizadas, confidencialidad y recomendaciones responsables.",
      copyright: "© 2026 PentestX. Todos los derechos reservados.",
      backTop: "Volver arriba ↑"
    },

    en: {
      skipLink: "Skip to content",
      brandTagline: "Offensive cybersecurity",
      menuLabel: "Open menu",
      mainNavLabel: "Main navigation",
      footerNavLabel: "Footer links",
      navHome: "Home",
      navServices: "Services",
      navAbout: "About Us",
      navContact: "Contact",
      login: "Log in",
      languageLabel: "Select language",

      eyebrow: "Who we are",
      heroTitle: "Digital security with judgment, ethics, and purpose.",
      heroText: "We help organizations understand their risks and strengthen their defenses through authorized security assessments and clear recommendations.",
      heroCta: "Request an assessment",
      heroSecondary: "Explore our methodology",
      trustNote: "Testing is performed only with authorization and a defined scope.",
      heroImageAlt: "PentestX specialist working at cybersecurity analysis monitors",

      purposeEyebrow: "Our purpose",
      purposeTitle: "Turning technical findings into safer decisions.",
      purposeIntro: "We work transparently and practically so each assessment helps prioritize meaningful improvements.",
      missionTitle: "Our mission",
      missionText: "Identify security risks before they can be exploited and guide our clients toward effective mitigation.",
      visionTitle: "Our vision",
      visionText: "To be a trusted offensive cybersecurity partner, recognized for responsible practices, clarity, and high-quality recommendations.",
      valuesTitle: "Our values",
      valuesText: "Confidentiality, ethics, continuous improvement, and strict respect for each engagement's authorized scope.",

      methodEyebrow: "How we work",
      methodTitle: "A clear methodology from start to finish.",
      methodIntro: "Every project begins with explicit authorization, agreed objectives, and safeguards to reduce operational impact.",
      step1Title: "Planning and scope",
      step1Text: "We define objectives, assets, boundaries, permissions, and rules of engagement with the client.",
      step2Title: "Reconnaissance",
      step2Text: "We collect relevant information about systems included in the authorized scope.",
      step3Title: "Controlled assessment",
      step3Text: "We analyze potential weaknesses and validate findings proportionately and safely.",
      step4Title: "Reporting and improvements",
      step4Text: "We deliver prioritized risks, relevant evidence, and remediation recommendations.",

      benefitsEyebrow: "Why PentestX",
      benefitsTitle: "More clarity for better security decisions.",
      benefitsIntro: "Finding flaws is only part of the work: we explain their impact and help you decide what to fix first.",
      benefitsLink: "Explore our services",
      benefit1Title: "Agreed scope",
      benefit1Text: "Activities planned with explicit permissions and documented boundaries.",
      benefit2Title: "Clear results",
      benefit2Text: "Findings explained with context, impact, and remediation steps.",
      benefit3Title: "Confidentiality",
      benefit3Text: "Responsible handling of information gathered during the engagement.",
      benefit4Title: "Practical approach",
      benefit4Text: "Recommendations prioritized according to risk and organizational context.",

      teamEyebrow: "People and expertise",
      teamTitle: "A collaborative approach to security.",
      teamIntro: "Security requires different perspectives. These cards represent roles that may contribute depending on project needs.",
      teamRole1: "Penetration testing",
      teamTitle1: "Penetration Tester",
      teamText1: "Assesses systems within the authorized scope and documents reproducible findings.",
      teamRole2: "Risk analysis",
      teamTitle2: "Security Analyst",
      teamText2: "Helps interpret the impact of findings and prioritize improvement actions.",
      teamRole3: "Remediation and improvement",
      teamTitle3: "Security Advisor",
      teamText3: "Advises on controls and recommendations to reduce risk exposure.",
      teamDisclaimer: "Note: the profiles shown describe work functions, not personal identities. Replace them with actual team members if you want to present named staff.",

      ctaEyebrow: "Take the next step",
      ctaTitle: "Get a clearer view of your organization's security.",
      ctaText: "Let's discuss your goals and define a responsible assessment with a clear scope.",
      ctaButton: "Request an assessment",

      footerSlogan: "Your security, our priority.",
      footerExplore: "Explore",
      footerCommitment: "Our commitment",
      footerCommitmentText: "Authorized assessments, confidentiality, and responsible recommendations.",
      copyright: "© 2026 PentestX. All rights reserved.",
      backTop: "Back to top ↑"
    }
  };

  function applyLanguage(language) {
    const dict = t[language] || t.es;

    document.documentElement.lang = language;

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.dataset.i18n;

      if (Object.prototype.hasOwnProperty.call(dict, key)) {
        el.textContent = dict[key];
      }
    });

    document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
      const key = el.dataset.i18nAlt;

      if (dict[key]) {
        el.setAttribute("alt", dict[key]);
      }
    });

    document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
      const key = el.dataset.i18nAria;

      if (dict[key]) {
        el.setAttribute("aria-label", dict[key]);
      }
    });

    selector.setAttribute("aria-label", dict.languageLabel);

    const menuLabel = document.querySelector(".menu-toggle .sr-only");

    if (menuLabel) {
      menuLabel.textContent = dict.menuLabel;
    }

    document.title =
      language === "en"
        ? "About Us | PentestX"
        : "Nosotros | PentestX";

    try {
      localStorage.setItem("pentestx-language", language);
    } catch (error) {
      // El almacenamiento local puede estar bloqueado.
    }
  }

  let initialLanguage = "es";

  try {
    initialLanguage =
      localStorage.getItem("pentestx-language") || "es";
  } catch (error) {
    // Se utilizará español si el almacenamiento no está disponible.
  }

  selector.value = Object.prototype.hasOwnProperty.call(t, initialLanguage)
    ? initialLanguage
    : "es";

  applyLanguage(selector.value);

  selector.addEventListener("change", () => {
    applyLanguage(selector.value);
  });
});