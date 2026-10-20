
document.addEventListener("DOMContentLoaded", () => {
  const selector = document.getElementById("language-select");
  if (!selector) return;

  // Traducciones para textos estáticos y dinámicos de PentestX.
  const traducciones = {
    "Inicio": "Home",
    "Servicios": "Services",
    "Nosotros": "About Us",
    "Contacto": "Contact",
    "Idioma": "Language",
    "Iniciar sesión": "Log In",
    "Iniciar Sesion": "Log In",
    "Registrarse": "Sign Up",
    "Seguridad que anticipa riesgos": "Security That Anticipates Risks",
    "Ciberseguridad ofensiva y defensiva": "Offensive and Defensive Cybersecurity",
    "Detectamos hoy las vulnerabilidades de mañana": "We Detect Tomorrow's Vulnerabilities Today",
    "Servicios de pentesting para que tu empresa esté un paso adelante de los ciberataques. Analizamos, comprobamos y te damos soluciones.": "Penetration testing services that keep your company one step ahead of cyberattacks. We analyze, test, and provide solutions.",
    "Qué hacemos": "What We Do",
    "Nuestros servicios": "Our Services",
    "Soluciones de ciberseguridad para identificar riesgos y proteger tus activos digitales. Selecciona un servicio para conocer más.": "Cybersecurity solutions to identify risks and protect your digital assets. Select a service to learn more.",
    "Análisis de vulnerabilidades": "Vulnerability Assessment",
    "Detectamos debilidades en sistemas, aplicaciones y redes.": "We detect weaknesses in systems, applications, and networks.",
    "Pruebas de penetración": "Penetration Testing",
    "Simulamos ataques controlados sobre activos autorizados.": "We simulate controlled attacks on authorized assets.",
    "Auditoría web y móvil": "Web and Mobile Auditing",
    "Revisamos aplicaciones y sus controles de seguridad.": "We review applications and their security controls.",
    "Ingeniería social": "Social Engineering",
    "Evaluamos la concienciación y los procesos humanos.": "We assess security awareness and human processes.",
    "Seguridad en la nube": "Cloud Security",
    "Evaluamos permisos, identidades y configuraciones cloud.": "We assess permissions, identities, and cloud configurations.",
    "Respuesta a incidentes": "Incident Response",
    "Apoyamos la investigación y mitigación de incidentes.": "We support incident investigation and mitigation.",
    "Ver detalles →": "View Details →",
    "Servicio PentestX": "PentestX Service",
    "¿Para qué sirve?": "What Is It For?",
    "¿Qué incluye?": "What's Included?",
    "Solicitar información": "Request Information",
    "Identificamos debilidades que podrían comprometer la seguridad de tus sistemas, aplicaciones y redes.": "We identify weaknesses that could compromise the security of your systems, applications, and networks.",
    "Permite conocer los riesgos antes de que sean aprovechados por un atacante.": "It helps identify risks before an attacker can exploit them.",
    "Revisión de activos autorizados": "Review of authorized assets",
    "Identificación de vulnerabilidades": "Vulnerability identification",
    "Informe con recomendaciones de mejora": "Report with improvement recommendations",
    "Realizamos simulaciones controladas para evaluar la resistencia de los sistemas frente a posibles ataques.": "We conduct controlled simulations to assess how systems withstand potential attacks.",
    "Ayuda a comprobar qué tan efectivas son las medidas de seguridad existentes.": "It helps assess the effectiveness of existing security measures.",
    "Definición del alcance autorizado": "Definition of the authorized scope",
    "Pruebas controladas de seguridad": "Controlled security tests",
    "Informe de hallazgos y prioridades": "Findings and priorities report",
    "Revisamos aplicaciones web y móviles para detectar errores de configuración y posibles fallas de seguridad.": "We review web and mobile applications to detect misconfigurations and potential security flaws.",
    "Ayuda a proteger la información de los usuarios y el funcionamiento de las aplicaciones.": "It helps protect user information and application functionality.",
    "Revisión de configuraciones": "Configuration review",
    "Evaluación de controles de acceso": "Access control assessment",
    "Recomendaciones para corregir problemas": "Recommendations to fix issues",
    "Evaluamos, con autorización previa, cómo responden las personas y los procesos ante intentos de engaño.": "With prior authorization, we assess how people and processes respond to deception attempts.",
    "Permite detectar necesidades de capacitación y reducir el riesgo de phishing.": "It helps identify training needs and reduce phishing risks.",
    "Planificación de ejercicios autorizados": "Planning authorized exercises",
    "Evaluación de concienciación": "Awareness assessment",
    "Recomendaciones de capacitación": "Training recommendations",
    "Revisamos permisos, identidades y configuraciones de servicios alojados en la nube.": "We review permissions, identities, and configurations of cloud-hosted services.",
    "Ayuda a reducir exposiciones accidentales y accesos no autorizados.": "It helps reduce accidental exposure and unauthorized access.",
    "Revisión de permisos": "Permission review",
    "Evaluación de configuraciones": "Configuration assessment",
    "Recomendaciones de protección": "Protection recommendations",
    "Apoyamos el análisis de incidentes de seguridad y la planificación de acciones para contener sus efectos.": "We support security incident analysis and plan actions to contain their effects.",
    "Permite organizar la respuesta, limitar daños y prevenir incidentes similares.": "It helps organize the response, limit damage, and prevent similar incidents.",
    "Análisis inicial del incidente": "Initial incident analysis",
    "Orientación para contención y recuperación": "Guidance for containment and recovery",
    "Medidas preventivas": "Preventive measures",
    "Protege tu organización": "Protect Your Organization",
    "Planes de suscripción": "Subscription Plans",
    "Elige el nivel de acompañamiento que mejor se adapte a tus necesidades.": "Choose the level of support that best fits your needs.",
    "PLAN BÁSICO": "BASIC PLAN",
    "Básico": "Basic",
    "Evaluación básica de vulnerabilidades": "Basic vulnerability assessment",
    "Informe de resultados": "Results report",
    "Recomendaciones de seguridad": "Security recommendations",
    "Agregar al carrito": "Add to Cart",
    "¡Agregado!": "Added!",
    "PLAN PROFESIONAL": "PROFESSIONAL PLAN",
    "Profesional": "Professional",
    "Recomendado": "Recommended",
    "Evaluación ampliada": "Extended assessment",
    "Informe técnico y ejecutivo": "Technical and executive report",
    "Asesoría para corregir vulnerabilidades": "Guidance for fixing vulnerabilities",
    "PLAN EMPRESARIAL": "BUSINESS PLAN",
    "Empresarial": "Business",
    "Evaluaciones ampliadas": "Extended assessments",
    "Seguimiento de hallazgos": "Findings follow-up",
    "Asesoría prioritaria": "Priority consulting",
    "Tu carrito": "Your Cart",
    "Todavía no agregaste ningún plan.": "You haven't added any plans yet.",
    "Total mensual:": "Monthly total:",
    "Vaciar carrito": "Clear Cart",
    "Quitar": "Remove",
    "Opiniones de demostración": "Sample Reviews",
    "Lo que opinan nuestros usuarios": "What Our Users Say",
    "Explora las opiniones y selecciona una tarjeta para leer el comentario completo.": "Browse the reviews and select a card to read the full comment.",
    "Comentarios anteriores": "Previous reviews",
    "Comentarios siguientes": "Next reviews",
    "Comparte tu opinión": "Share Your Opinion",
    "El formulario es una demostración local; no publica opiniones en un servidor.": "This form is a local demonstration; it does not publish reviews to a server.",
    "Agregar comentario": "Add a Review",
    "Tu nombre": "Your Name",
    "Ocupación (opcional)": "Occupation (optional)",
    "Valoración": "Rating",
    "Tu comentario": "Your Review",
    "Publicar comentario": "Post Review",
    "Las opiniones precargadas son ficticias y solo ilustran el diseño.": "The preloaded reviews are fictional and are only used to demonstrate the design.",
    "Emprendedor": "Entrepreneur",
    "Administradora": "Administrator",
    "Estudiante de TI": "IT Student",
    "Emprendedora": "Entrepreneur",
    "Técnico informático": "IT Technician",
    "Diseñadora web": "Web Designer",
    "Analista de sistemas": "Systems Analyst",
    "Estudiante": "Student",
    "Dueño de negocio": "Business Owner",
    "Profesional de TI": "IT Professional",
    "La explicación de los riesgos fue clara y fácil de entender.": "The explanation of the risks was clear and easy to understand.",
    "Me gustó el enfoque preventivo y las recomendaciones.": "I liked the preventive approach and the recommendations.",
    "El informe de ejemplo me ayudó a entender mejor las vulnerabilidades.": "The sample report helped me better understand vulnerabilities.",
    "La seguridad digital es importante incluso para negocios pequeños.": "Digital security is important even for small businesses.",
    "La revisión de seguridad permite detectar puntos por mejorar.": "The security review helps identify areas for improvement.",
    "Es útil considerar la seguridad desde el desarrollo.": "It is useful to consider security from the development stage.",
    "Las pruebas autorizadas ayudan a conocer el estado de los sistemas.": "Authorized testing helps assess the state of systems.",
    "La información está presentada de manera ordenada y comprensible.": "The information is presented clearly and in an organized way.",
    "Me parece importante conocer los riesgos antes de un incidente.": "I think it is important to understand risks before an incident occurs.",
    "Las recomendaciones preventivas son un buen punto de partida.": "Preventive recommendations are a good starting point.",
    "Leer comentario →": "Read Review →",
    "La explicación de los riesgos fue clara y fácil de entender. Las recomendaciones me ayudaron a comprender por qué es importante revisar la seguridad de los sistemas.": "The explanation of the risks was clear and easy to understand. The recommendations helped me understand why reviewing system security is important.",
    "Me gustó el enfoque preventivo y la manera ordenada de presentar las recomendaciones. Es importante identificar los riesgos antes de que se conviertan en problemas.": "I liked the preventive approach and the organized presentation of recommendations. It is important to identify risks before they become problems.",
    "El informe de ejemplo me ayudó a entender mejor qué son las vulnerabilidades y cómo se pueden priorizar para corregirlas.": "The sample report helped me better understand vulnerabilities and how to prioritize them for remediation.",
    "La seguridad digital también es importante para los negocios pequeños. La información está explicada de una forma que se puede comprender sin ser especialista.": "Digital security is also important for small businesses. The information is explained in a way that non-specialists can understand.",
    "La revisión de seguridad permite reconocer puntos por mejorar y organizar las acciones necesarias para reducir los riesgos.": "The security review helps identify areas for improvement and organize the actions needed to reduce risks.",
    "Es útil considerar la seguridad desde el desarrollo de una página web y no dejarla como una tarea para el final del proyecto.": "It is useful to consider security from the start of website development rather than leaving it until the end of the project.",
    "Las pruebas autorizadas pueden ayudar a conocer el estado de los sistemas y a preparar mejoras de seguridad con mayor claridad.": "Authorized testing can help assess systems and plan security improvements more clearly.",
    "La información está presentada de manera ordenada y comprensible. Me parece una buena forma de aprender sobre prevención de ciberataques.": "The information is presented clearly and in an organized way. It is a good way to learn about cyberattack prevention.",
    "Me parece importante conocer los riesgos antes de que ocurra un incidente. La prevención ayuda a tomar decisiones con más información.": "I think it is important to understand risks before an incident occurs. Prevention helps people make better-informed decisions.",
    "Las recomendaciones preventivas son un buen punto de partida para revisar las medidas de seguridad y establecer prioridades de mejora.": "Preventive recommendations are a good starting point for reviewing security measures and setting improvement priorities.",
    "Las personas detrás del proyecto": "The People Behind the Project",
    "Nuestro equipo": "Our Team",
    "Cinco integrantes comprometidos con el aprendizaje y la seguridad digital.": "Five team members committed to learning and digital security.",
    "Integrante 1": "Team Member 1",
    "Integrante 2": "Team Member 2",
    "Integrante 3": "Team Member 3",
    "Integrante 4": "Team Member 4",
    "Integrante 5": "Team Member 5",
    "Especialista en Pentesting": "Penetration Testing Specialist",
    "Analista de vulnerabilidades": "Vulnerability Analyst",
    "Auditor de aplicaciones": "Application Auditor",
    "Tu seguridad, nuestra prioridad.": "Your Security, Our Priority.",
    "Seguridad digital para un mundo conectado.": "Digital Security for a Connected World.",
    "© 2026 PentestX. Todos los derechos reservados.": "© 2026 PentestX. All rights reserved.",
    "Elegir plan": "Choose Plan",
    "Compara nuestros planes": "Compare Our Plans",
    "Características": "Features",
    "Evaluación de vulnerabilidades": "Vulnerability assessment",
    "Evaluación de vulnerabilidades": "Vulnerability assessment",
    "Seguimiento de hallazgos": "Findings follow-up",
    "Asesoría prioritaria": "Priority consulting",
    "Precios y pago mostrados como demostración; no se realiza ningún cobro.": "Prices and payment are shown for demonstration only; no charge will be made.",
    "Pago seguro · Demostración": "Secure Checkout · Demo",
    "Confirmar tu plan": "Confirm Your Plan",
    "Revisa tu selección antes de continuar.": "Review your selection before continuing.",
    "Plan Básico": "Basic Plan",
    "Plan Profesional": "Professional Plan",
    "Plan Empresarial": "Business Plan",
    "Continuar al pago": "Continue to Payment",
    "Demostración completada": "Demo Completed",
    "Esta es una simulación para la presentación. No se solicitarán datos bancarios ni se realizará ningún cobro real.": "This is a presentation demo. No bank details will be requested and no real payment will be made.",
    "Cerrar ventana": "Close window",
    "Pago simulado · PentestX": "Simulated Payment · PentestX",
    "Finalizar compra": "Complete Purchase",
    "Plan Básico": "Basic Plan",
    "S/ 99 / mes": "S/ 99 / month",
    "Datos del titular": "Cardholder Details",
    "Nombre completo": "Full Name",
    "Nombre del titular": "Cardholder Name",
    "Correo electrónico": "Email Address",
    "correo@ejemplo.com": "email@example.com",
    "Datos de tarjeta de prueba": "Test Card Details",
    "Número de tarjeta": "Card Number",
    "Vencimiento": "Expiration Date",
    "CVV de prueba": "Test CVV",
    "Demostración académica. No ingreses datos de tarjetas reales. No se realizará ningún cobro ni se guardará información.": "Academic demo. Do not enter real card details. No charge will be made and no information will be stored.",
    "Confirmar pago simulado": "Confirm Simulated Payment",
    "Completa tus datos personales.": "Complete your personal details.",
    "Ingresa un número de tarjeta de prueba válido.": "Enter a valid test card number.",
    "Usa el formato MM/AA para el vencimiento.": "Use MM/YY for the expiration date.",
    "El CVV debe tener 3 o 4 dígitos.": "The CVV must contain 3 or 4 digits.",
    "¡Compra simulada exitosa! Elegiste el plan ": "Simulated purchase successful! You selected the ",
    " al mes. No se realizó ningún cobro.": " plan per month. No payment was charged.",
    "¿POR QUÉ ELEGIR MAGITECH?": "WHY CHOOSE MAGITECH?",
    "Años de experiencia": "Years of experience",
    "Clientes satisfechos": "Satisfied customers",
    "Equipos atendidos": "Devices serviced",
    "Técnicos": "Technicians",
    "Certificados": "Certified",
    "Atención": "Service",
    "Rápida y profesional": "Fast and professional",
    "Garantía": "Warranty",
    "En cada servicio": "With every service"

  };

  const inglesAEspanol = Object.fromEntries(
    Object.entries(traducciones).map(([es, en]) => [en, es])
  );

  const textosConClave = {
    "nav-home": ["Inicio", "Home"],
    "nav-services": ["Servicios", "Services"],
    "nav-about": ["Nosotros", "About Us"],
    "nav-contact": ["Contacto", "Contact"],
    "login": ["Iniciar sesión", "Log In"],
    "eyebrow": ["Seguridad que anticipa riesgos", "Security That Anticipates Risks"],
    "title": [
      "Detectamos hoy las vulnerabilidades de mañana",
      "We Detect Tomorrow's Vulnerabilities Today"
    ],
    "description": [
      "Servicios de pentesting para que tu empresa esté un paso adelante de los ciberataques. Analizamos, comprobamos y te damos soluciones.",
      "Penetration testing services that keep your company one step ahead of cyberattacks. We analyze, test, and provide solutions."
    ],
    "login-button": ["Iniciar Sesion", "Log In"],
    "register-button": ["Registrarse", "Sign Up"],
    "slogan": ["Tu seguridad, nuestra prioridad.", "Your Security, Our Priority."],
    "copyright": [
      "© 2026 PentestX. Todos los derechos reservados.",
      "© 2026 PentestX. All rights reserved."
    ]
  };

  function idiomaActual() {
    return selector.value === "en" ? "en" : "es";
  }

  function traducirNodoTexto(nodo, idioma) {
    const original = nodo.nodeValue;
    const limpio = original.trim();
    if (!limpio) return;

    let traduccion;

    if (idioma === "en") {
      traduccion = traducciones[limpio];
    } else {
      traduccion = inglesAEspanol[limpio];
    }

    if (traduccion && traduccion !== limpio) {
      const inicio = original.match(/^\s*/)?.[0] || "";
      const final = original.match(/\s*$/)?.[0] || "";
      nodo.nodeValue = inicio + traduccion + final;
    }
  }

  function traducirAtributos(idioma) {
    const atributos = ["aria-label", "title", "placeholder"];

    document.querySelectorAll("*").forEach(elemento => {
      atributos.forEach(atributo => {
        const valor = elemento.getAttribute(atributo);
        if (!valor) return;

        const nuevo = idioma === "en"
          ? traducciones[valor]
          : inglesAEspanol[valor];

        if (nuevo) elemento.setAttribute(atributo, nuevo);
      });
    });
  }

  function traducirPagina(idioma) {
    document.documentElement.lang = idioma;

    // Traduce las claves declaradas directamente en el HTML.
    document.querySelectorAll("[data-i18n]").forEach(elemento => {
      const clave = elemento.dataset.i18n;
      const par = textosConClave[clave];
      if (!par) return;

      elemento.textContent = idioma === "en" ? par[1] : par[0];
    });

    // Traduce textos normales y elementos que crea index.js.
    const caminante = document.createTreeWalker(
      document.body,
      NodeFilter.SHOW_TEXT
    );

    const nodos = [];
    while (caminante.nextNode()) nodos.push(caminante.currentNode);
    nodos.forEach(nodo => traducirNodoTexto(nodo, idioma));

    // Traduce los textos de las opciones de selección.
    document.querySelectorAll("option").forEach(opcion => {
      traducirNodoTexto(
        { get nodeValue() { return opcion.textContent; },
          set nodeValue(valor) { opcion.textContent = valor; } },
        idioma
      );
    });

    traducirAtributos(idioma);
    document.dispatchEvent(new CustomEvent("pentestx:languagechange", {
      detail: { language: idioma }
    }));
  }

  const guardado = localStorage.getItem("idiomaPentestX");
  selector.value = guardado === "en" ? "en" : "es";
  traducirPagina(selector.value);

  selector.addEventListener("change", () => {
    const idioma = idiomaActual();
    localStorage.setItem("idiomaPentestX", idioma);
    traducirPagina(idioma);
  });

  // Revisa los textos nuevos que crea el carrito, las ventanas y los comentarios.
  const observador = new MutationObserver(() => {
    const idioma = idiomaActual();
    const caminante = document.createTreeWalker(
      document.body,
      NodeFilter.SHOW_TEXT
    );

    const nodos = [];
    while (caminante.nextNode()) nodos.push(caminante.currentNode);
    nodos.forEach(nodo => traducirNodoTexto(nodo, idioma));
    traducirAtributos(idioma);
  });

  observador.observe(document.body, {
    childList: true,
    subtree: true,
    characterData: true
  });
});
