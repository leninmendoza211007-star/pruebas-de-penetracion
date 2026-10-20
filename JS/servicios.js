document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".services-grid .service-card");
  const modal = document.getElementById("service-modal");

  if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const observer = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          currentObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll(".page-heading, .services-grid .card, .services-cta").forEach((element) => {
      element.classList.add("reveal-on-scroll");
      observer.observe(element);
    });
  }

  if (!modal) return;
  const title = document.getElementById("modal-title");
  const description = document.getElementById("modal-description");
  const featureList = document.getElementById("modal-features");
  const benefits = document.getElementById("modal-benefits");
  let lastFocused = null;
  let activeKey = null;

  const serviceContent = {
    vulnerabilidades: {
      es: { title: "Análisis de vulnerabilidades", description: "Identificamos debilidades técnicas en sistemas, aplicaciones y redes para que tu organización pueda corregirlas antes de que sean aprovechadas.", features: ["Escaneo de activos dentro del alcance autorizado.", "Identificación y clasificación de vulnerabilidades.", "Validación de hallazgos y evaluación de su impacto.", "Informe técnico con evidencias y recomendaciones priorizadas."], benefits: "Reduce la superficie de ataque, ayuda a priorizar correcciones y ofrece una visión clara del estado de seguridad." },
      en: { title: "Vulnerability Assessment", description: "We identify technical weaknesses in systems, applications, and networks so your organization can address them before they are exploited.", features: ["Scanning of assets within the authorized scope.", "Identification and classification of vulnerabilities.", "Validation of findings and impact assessment.", "Technical report with evidence and prioritized recommendations."], benefits: "Reduces the attack surface, helps prioritize fixes, and provides a clearer view of your security posture." }
    },
    pentesting: {
      es: { title: "Pruebas de penetración", description: "Simulamos ataques controlados y autorizados para evaluar cómo podrían explotarse las debilidades de los activos incluidos en el alcance.", features: ["Definición del alcance y las reglas de la prueba.", "Evaluación de sistemas y aplicaciones autorizados.", "Validación controlada de posibles vulnerabilidades.", "Informe de hallazgos, impacto y medidas correctivas."], benefits: "Permite entender los riesgos prácticos, validar controles defensivos y fortalecer la seguridad con recomendaciones concretas." },
      en: { title: "Penetration Testing", description: "We run controlled, authorized attack simulations to assess how weaknesses could be exploited in assets included in the agreed scope.", features: ["Definition of scope and rules of engagement.", "Assessment of authorized systems and applications.", "Controlled validation of potential vulnerabilities.", "Report of findings, impact, and remediation steps."], benefits: "Helps clarify practical risks, validate defensive controls, and strengthen security with actionable recommendations." }
    },
    auditoria: {
      es: { title: "Auditoría web y móvil", description: "Revisamos aplicaciones web y móviles para detectar problemas de autenticación, permisos, configuración y protección de datos.", features: ["Revisión de autenticación y gestión de sesiones.", "Evaluación de permisos y controles de acceso.", "Análisis de configuraciones y manejo de datos.", "Recomendaciones para corregir los hallazgos."], benefits: "Ayuda a proteger la información, reducir riesgos de aplicación y mejorar la confianza de los usuarios." },
      en: { title: "Web and Mobile Security Audit", description: "We review web and mobile applications for issues involving authentication, permissions, configuration, and data protection.", features: ["Review of authentication and session management.", "Assessment of permissions and access controls.", "Analysis of configurations and data handling.", "Recommendations to remediate findings."], benefits: "Helps protect information, reduce application risks, and strengthen user trust." }
    },
    social: {
      es: { title: "Ingeniería social", description: "Evaluamos cómo responde el personal ante intentos de engaño mediante ejercicios acordados, seguros y autorizados.", features: ["Planificación de ejercicios con autorización.", "Simulaciones controladas de phishing.", "Evaluación de procesos para reportar sospechas.", "Orientación y recomendaciones de concienciación."], benefits: "Mejora la capacidad de reconocer amenazas y fortalece los hábitos de seguridad de los equipos." },
      en: { title: "Social Engineering", description: "We assess how staff respond to deception attempts through agreed, safe, and authorized exercises.", features: ["Planning of authorized exercises.", "Controlled phishing simulations.", "Assessment of suspicious-activity reporting processes.", "Security awareness guidance and recommendations."], benefits: "Improves threat recognition and strengthens security habits across teams." }
    },
    nube: {
      es: { title: "Seguridad en la nube", description: "Evaluamos entornos cloud para detectar configuraciones inseguras, permisos excesivos y recursos expuestos.", features: ["Revisión de identidades, roles y permisos.", "Evaluación de almacenamiento y recursos expuestos.", "Análisis de configuraciones y controles de seguridad.", "Recomendaciones de protección y monitoreo."], benefits: "Ayuda a reducir errores de configuración, limitar accesos innecesarios y proteger los datos alojados en la nube." },
      en: { title: "Cloud Security", description: "We assess cloud environments to identify insecure configurations, excessive permissions, and exposed resources.", features: ["Review of identities, roles, and permissions.", "Assessment of exposed storage and resources.", "Analysis of configurations and security controls.", "Protection and monitoring recommendations."], benefits: "Helps reduce configuration errors, limit unnecessary access, and protect cloud-hosted data." }
    },
    incidentes: {
      es: { title: "Respuesta a incidentes", description: "Apoyamos la evaluación y contención de incidentes para entender lo ocurrido y reducir su impacto operativo.", features: ["Evaluación inicial y clasificación del incidente.", "Apoyo en medidas de contención.", "Revisión de evidencias disponibles.", "Recomendaciones para recuperación y prevención."], benefits: "Facilita una respuesta organizada, ayuda a limitar daños y mejora la preparación ante futuros incidentes." },
      en: { title: "Incident Response", description: "We support incident assessment and containment to understand what happened and reduce operational impact.", features: ["Initial assessment and incident classification.", "Support with containment measures.", "Review of available evidence.", "Recovery and prevention recommendations."], benefits: "Supports an organized response, helps limit damage, and improves readiness for future incidents." }
    }
  };

  function currentLanguage() {
    return document.getElementById("language-select")?.value === "en" ? "en" : "es";
  }
  function renderModal(key) {
    const item = serviceContent[key]?.[currentLanguage()] || serviceContent[key]?.es;
    if (!item) return;
    title.textContent = item.title;
    description.textContent = item.description;
    benefits.textContent = item.benefits;
    featureList.replaceChildren();
    item.features.forEach((feature) => {
      const li = document.createElement("li");
      li.textContent = feature;
      featureList.appendChild(li);
    });
  }
  function openModal(key, card) {
    if (!serviceContent[key]) return;
    activeKey = key;
    lastFocused = card;
    renderModal(key);
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
    modal.querySelector(".service-modal__close").focus();
  }
  function closeModal() {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
    if (lastFocused) lastFocused.focus();
  }

  cards.forEach((card) => {
    card.addEventListener("click", () => openModal(card.dataset.service, card));
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openModal(card.dataset.service, card);
      }
    });
  });
  modal.querySelectorAll("[data-close]").forEach((element) => element.addEventListener("click", closeModal));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.classList.contains("is-open")) closeModal();
  });
  document.getElementById("language-select")?.addEventListener("change", () => {
    if (modal.classList.contains("is-open") && activeKey) renderModal(activeKey);
  });
});
