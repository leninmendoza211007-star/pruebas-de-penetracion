(() => {
  const translations = {
    es: {
      languageLabel: 'Seleccionar idioma', eyebrow: 'Protección digital · PentestX', pageTitle: 'Servicios de ciberseguridad',
      introCopy: 'Evaluaciones especializadas para anticipar riesgos, fortalecer tus sistemas y responder con confianza.',
      conceptLabel: 'Concepto',
      title1: 'Análisis de vulnerabilidades', text1: 'Detectamos y priorizamos brechas en sistemas, aplicaciones y redes para que puedas corregirlas antes de que se conviertan en incidentes.', concept1: 'Visibilidad temprana de riesgos para fortalecer cada capa de tu infraestructura.',
      title2: 'Pruebas de penetración', text2: 'Simulamos ataques de forma controlada y con autorización para medir la resistencia de tus activos y revelar rutas de explotación.', concept2: 'Pensar como un atacante para ayudar a defenderte mejor, dentro de un alcance aprobado.',
      title3: 'Auditoría web y móvil', text3: 'Revisamos aplicaciones web y móviles, sus configuraciones y controles para identificar debilidades que afecten datos o usuarios.', concept3: 'Seguridad incorporada a la experiencia digital, desde el código hasta la configuración.',
      title4: 'Ingeniería social', text4: 'Diseñamos ejercicios aprobados de concienciación para evaluar procesos humanos y convertir los aprendizajes en hábitos seguros.', concept4: 'Fortalecer el factor humano con aprendizaje práctico, respetuoso y medible.',
      title5: 'Seguridad en la nube', text5: 'Evaluamos identidades, permisos, configuraciones y exposición para reducir riesgos en tus entornos cloud.', concept5: 'Mantener datos y servicios en la nube protegidos desde el acceso hasta la configuración.',
      title6: 'Respuesta a incidentes', text6: 'Apoyamos la contención, investigación y mitigación de incidentes para reducir su impacto y facilitar la recuperación.', concept6: 'Actuar con rapidez y claridad para contener el impacto y recuperar la operación.',
      authorizationNote: 'Toda evaluación se realiza con autorización y alcance previamente acordado.', footerText: 'Tu seguridad, nuestra prioridad.',
      alt1: 'Visualización de riesgos y brechas en sistemas', alt2: 'Especialista evaluando una red en un entorno controlado', alt3: 'Teléfono y computadora protegidos por un escudo digital', alt4: 'Personas y protección frente a amenazas digitales', alt5: 'Infraestructura cloud con conexiones seguras', alt6: 'Equipo respondiendo a una alerta de seguridad'
    },
    en: {
      languageLabel: 'Select language', eyebrow: 'Digital protection · PentestX', pageTitle: 'Cybersecurity Services',
      introCopy: 'Specialized assessments to anticipate risks, strengthen your systems, and respond with confidence.',
      conceptLabel: 'Concept',
      title1: 'Vulnerability Assessment', text1: 'We identify and prioritize weaknesses across systems, applications, and networks so you can address them before they become incidents.', concept1: 'Early risk visibility to strengthen every layer of your infrastructure.',
      title2: 'Penetration Testing', text2: 'We conduct controlled, authorized attack simulations to measure the resilience of your assets and uncover potential paths to exploitation.', concept2: 'Think like an attacker to strengthen your defenses, within an approved scope.',
      title3: 'Web and Mobile Security Audit', text3: 'We review web and mobile applications, their configurations, and security controls to identify weaknesses that could affect data or users.', concept3: 'Security built into the digital experience, from code to configuration.',
      title4: 'Social Engineering', text4: 'We design approved awareness exercises to assess human processes and turn lessons learned into safer habits.', concept4: 'Strengthen the human factor through practical, respectful, measurable learning.',
      title5: 'Cloud Security', text5: 'We assess identities, permissions, configurations, and exposure to reduce risk across your cloud environments.', concept5: 'Protect cloud data and services, from access management to configuration.',
      title6: 'Incident Response', text6: 'We support incident containment, investigation, and mitigation to reduce impact and help restore operations.', concept6: 'Act quickly and clearly to contain impact and restore operations.',
      authorizationNote: 'All assessments are performed with authorization and a scope agreed in advance.', footerText: 'Your security, our priority.',
      alt1: 'Visualization of system risks and security gaps', alt2: 'Specialist assessing a network in a controlled environment', alt3: 'Phone and computer protected by a digital shield', alt4: 'People and protection against digital threats', alt5: 'Cloud infrastructure with secure connections', alt6: 'Team responding to a security alert'
    }
  };

  const selector = document.getElementById('language-select');
  if (!selector) return;

  function setLanguage(language) {
    const dictionary = translations[language] || translations.es;
    document.documentElement.lang = language;
    document.querySelectorAll('[data-i18n]').forEach((element) => {
      const key = element.dataset.i18n;
      if (Object.prototype.hasOwnProperty.call(dictionary, key)) element.textContent = dictionary[key];
    });
    document.querySelectorAll('[data-i18n-alt]').forEach((element) => {
      const key = element.dataset.i18nAlt;
      if (Object.prototype.hasOwnProperty.call(dictionary, key)) element.alt = dictionary[key];
    });
    document.querySelectorAll('[data-es][data-en]').forEach((element) => {
      element.textContent = language === 'en' ? element.dataset.en : element.dataset.es;
    });
    selector.value = language;
    try { localStorage.setItem('pentestx-language', language); } catch (_) { /* Storage may be disabled. */ }
  }

  selector.addEventListener('change', () => setLanguage(selector.value));
  let savedLanguage = 'es';
  try { savedLanguage = localStorage.getItem('pentestx-language') || 'es'; } catch (_) { /* Use Spanish by default. */ }
  setLanguage(savedLanguage === 'en' ? 'en' : 'es');
})();
