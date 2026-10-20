const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

function changeSlide() {
  if (slides.length === 0) return;

  slides[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + 1) % slides.length;
  slides[currentIndex].classList.add('active');
}

let slideInterval = setInterval(changeSlide, 5000);

if (typeof nextBtn !== 'undefined' && nextBtn) {
  nextBtn.addEventListener('click', () => {
    changeSlide();
    clearInterval(slideInterval);
    slideInterval = setInterval(changeSlide, 5000);
  });
}

document.addEventListener("DOMContentLoaded", () => {

  // Animaciones de entrada al desplazarse
  const elementosAnimados = document.querySelectorAll(
    ".services-section .section-title, " +
    ".services-section .section-description, " +
    ".service-card, .plan-card, .magitech-benefits"
  );

  if ("IntersectionObserver" in window) {
    elementosAnimados.forEach(elemento => {
      elemento.classList.add("reveal-on-scroll");
    });

    const observador = new IntersectionObserver((entradas) => {
      entradas.forEach(entrada => {
        if (entrada.isIntersecting) {
          entrada.target.classList.add("is-visible");
          observador.unobserve(entrada.target);
        }
      });
    }, { threshold: 0.12 });

    elementosAnimados.forEach(elemento => observador.observe(elemento));
  }

  const servicios = [
    {
      titulo: "Análisis de vulnerabilidades",
      descripcion: "Identificamos debilidades que podrían comprometer la seguridad de tus sistemas, aplicaciones y redes.",
      utilidad: "Permite conocer los riesgos antes de que sean aprovechados por un atacante.",
      incluye: ["Revisión de activos autorizados", "Identificación de vulnerabilidades", "Informe con recomendaciones de mejora"]
    },
    {
      titulo: "Pruebas de penetración",
      descripcion: "Realizamos simulaciones controladas para evaluar la resistencia de los sistemas frente a posibles ataques.",
      utilidad: "Ayuda a comprobar qué tan efectivas son las medidas de seguridad existentes.",
      incluye: ["Definición del alcance autorizado", "Pruebas controladas de seguridad", "Informe de hallazgos y prioridades"]
    },
    {
      titulo: "Auditoría web y móvil",
      descripcion: "Revisamos aplicaciones web y móviles para detectar errores de configuración y posibles fallas de seguridad.",
      utilidad: "Ayuda a proteger la información de los usuarios y el funcionamiento de las aplicaciones.",
      incluye: ["Revisión de configuraciones", "Evaluación de controles de acceso", "Recomendaciones para corregir problemas"]
    },
    {
      titulo: "Ingeniería social",
      descripcion: "Evaluamos, con autorización previa, cómo responden las personas y los procesos ante intentos de engaño.",
      utilidad: "Permite detectar necesidades de capacitación y reducir el riesgo de phishing.",
      incluye: ["Planificación de ejercicios autorizados", "Evaluación de concienciación", "Recomendaciones de capacitación"]
    },
    {
      titulo: "Seguridad en la nube",
      descripcion: "Revisamos permisos, identidades y configuraciones de servicios alojados en la nube.",
      utilidad: "Ayuda a reducir exposiciones accidentales y accesos no autorizados.",
      incluye: ["Revisión de permisos", "Evaluación de configuraciones", "Recomendaciones de protección"]
    },
    {
      titulo: "Respuesta a incidentes",
      descripcion: "Apoyamos el análisis de incidentes de seguridad y la planificación de acciones para contener sus efectos.",
      utilidad: "Permite organizar la respuesta, limitar daños y prevenir incidentes similares.",
      incluye: ["Análisis inicial del incidente", "Orientación para contención y recuperación", "Medidas preventivas"]
    }
  ];

  const serviceModal = document.getElementById("service-modal");

  document.querySelectorAll("[data-service]").forEach(boton => {
    boton.addEventListener("click", () => {
      const servicio = servicios[Number(boton.dataset.service)];
      if (!servicio || !serviceModal) return;

      document.getElementById("service-modal-title").textContent = servicio.titulo;
      document.getElementById("service-modal-description").textContent = servicio.descripcion;
      document.getElementById("service-modal-purpose").textContent = servicio.utilidad;

      const lista = document.getElementById("service-modal-list");
      lista.replaceChildren();

      servicio.incluye.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        lista.appendChild(li);
      });

      abrirModal(serviceModal);
    });
  });

  function abrirModal(modal) {
    modal.hidden = false;
    document.body.classList.add("modal-open");

    const cerrar = modal.querySelector(".modal-close");
    if (cerrar) cerrar.focus();
  }

  function cerrarModal(modal) {
    modal.hidden = true;

    if (!document.querySelector(".custom-modal:not([hidden])") &&
        !document.querySelector(".cart-overlay:not([hidden])")) {
      document.body.classList.remove("modal-open");
    }
  }

  document.querySelectorAll("[data-close-modal]").forEach(boton => {
    boton.addEventListener("click", () => {
      const modal = boton.closest(".custom-modal");
      if (modal) cerrarModal(modal);
    });
  });

  document.addEventListener("keydown", evento => {
    if (evento.key === "Escape") {
      document.querySelectorAll(".custom-modal:not([hidden])").forEach(cerrarModal);
    }
  });

  const checkoutModal = document.getElementById("checkout-modal");
  const checkoutPlanName = document.getElementById("checkout-plan-name");
  const checkoutPlanPrice = document.getElementById("checkout-plan-price");
  let planSeleccionado = null;

  document.querySelectorAll(".add-plan").forEach(boton => {
    boton.addEventListener("click", () => {
      planSeleccionado = {
        nombre: boton.dataset.plan,
        precio: Number(boton.dataset.price)
      };

      if (!checkoutModal) {
        console.error("No se encontró checkout-modal");
        return;
      }

      const ingles = document.documentElement.lang === "en";

      checkoutPlanName.textContent = `Plan ${planSeleccionado.nombre}`;
      checkoutPlanPrice.textContent = ingles
        ? `S/ ${planSeleccionado.precio} / month`
        : `S/ ${planSeleccionado.precio} / mes`;

      const mensaje = document.getElementById("payment-message");
      if (mensaje) mensaje.textContent = "";

      const formulario = document.getElementById("payment-form");
      if (formulario) formulario.reset();

      checkoutModal.hidden = false;
      document.body.classList.add("modal-open");
    });
  });

  const opiniones = [
    {
      nombre: "Daniel R.", cargo: "Emprendedor", estrellas: 5,
      texto: "La explicación de los riesgos fue clara y fácil de entender. Las recomendaciones me ayudaron a comprender por qué es importante revisar la seguridad de los sistemas."
    },
    {
      nombre: "María P.", cargo: "Administradora", estrellas: 5,
      texto: "Me gustó el enfoque preventivo y la manera ordenada de presentar las recomendaciones. Es importante identificar los riesgos antes de que se conviertan en problemas."
    },
    {
      nombre: "Jorge M.", cargo: "Estudiante de TI", estrellas: 5,
      texto: "El informe de ejemplo me ayudó a entender mejor qué son las vulnerabilidades y cómo se pueden priorizar para corregirlas."
    },
    {
      nombre: "Lucía G.", cargo: "Emprendedora", estrellas: 5,
      texto: "La seguridad digital también es importante para los negocios pequeños. La información está explicada de una forma que se puede comprender sin ser especialista."
    },
    {
      nombre: "Carlos V.", cargo: "Técnico informático", estrellas: 5,
      texto: "La revisión de seguridad permite reconocer puntos por mejorar y organizar las acciones necesarias para reducir los riesgos."
    },
    {
      nombre: "Andrea T.", cargo: "Diseñadora web", estrellas: 5,
      texto: "Es útil considerar la seguridad desde el desarrollo de una página web y no dejarla como una tarea para el final del proyecto."
    },
    {
      nombre: "Miguel A.", cargo: "Analista de sistemas", estrellas: 5,
      texto: "Las pruebas autorizadas pueden ayudar a conocer el estado de los sistemas y a preparar mejoras de seguridad con mayor claridad."
    },
    {
      nombre: "Valeria C.", cargo: "Estudiante", estrellas: 5,
      texto: "La información está presentada de manera ordenada y comprensible. Me parece una buena forma de aprender sobre prevención de ciberataques."
    },
    {
      nombre: "Andrés L.", cargo: "Dueño de negocio", estrellas: 5,
      texto: "Me parece importante conocer los riesgos antes de que ocurra un incidente. La prevención ayuda a tomar decisiones con más información."
    },
    {
      nombre: "Fernanda S.", cargo: "Profesional de TI", estrellas: 5,
      texto: "Las recomendaciones preventivas son un buen punto de partida para revisar las medidas de seguridad y establecer prioridades de mejora."
    }
  ];

  const track = document.getElementById("reviews-track");
  const viewport = document.getElementById("reviews-viewport");
  const prev = document.getElementById("reviews-prev");
  const next = document.getElementById("reviews-next");
  const dots = document.getElementById("reviews-dots");
  const reviewModal = document.getElementById("review-modal");
  let reviewIndex = 0;
  let arrastre = null;
  let huboArrastre = false;

  function tarjetaOpinion(opinion, indice) {
    const tarjeta = document.createElement("button");
    tarjeta.className = "review-card";
    tarjeta.type = "button";
    tarjeta.dataset.review = String(indice);

    const estrellas = document.createElement("span");
    estrellas.className = "review-stars";
    estrellas.textContent = "★".repeat(opinion.estrellas) +
      "☆".repeat(5 - opinion.estrellas);

    const nombre = document.createElement("strong");
    nombre.textContent = opinion.nombre;

    const cargo = document.createElement("span");
    cargo.className = "review-role";
    cargo.textContent = opinion.cargo || "Usuario";

    const texto = document.createElement("span");
    texto.className = "review-preview";
    texto.textContent = opinion.texto;

    const leer = document.createElement("span");
    leer.className = "review-read";
    leer.textContent = "Leer comentario →";

    tarjeta.append(estrellas, nombre, cargo, texto, leer);
    return tarjeta;
  }

  function mostrarOpinionCompleta(indice) {
    const opinion = opiniones[indice];
    if (!opinion || !reviewModal) return;

    document.getElementById("review-modal-name").textContent = opinion.nombre;
    document.getElementById("review-modal-role").textContent = opinion.cargo || "Usuario";
    document.getElementById("review-modal-stars").textContent =
      "★".repeat(opinion.estrellas) + "☆".repeat(5 - opinion.estrellas);
    document.getElementById("review-modal-text").textContent = opinion.texto;

    abrirModal(reviewModal);
  }

  function actualizarTarjetas() {
    track.replaceChildren();

    opiniones.forEach((opinion, indice) => {
      track.appendChild(tarjetaOpinion(opinion, indice));
    });

    crearPuntos();
    posicionarCarrusel();
  }

  function cantidadVisible() {
    if (window.matchMedia("(max-width: 600px)").matches) return 1;
    if (window.matchMedia("(max-width: 900px)").matches) return 2;
    return 3;
  }

  function indiceMaximo() {
    return Math.max(0, opiniones.length - cantidadVisible());
  }

  function posicionarCarrusel() {
    reviewIndex = Math.min(reviewIndex, indiceMaximo());

    const tarjeta = track.querySelector(".review-card");
    if (!tarjeta) return;

    const estilo = getComputedStyle(track);
    const gap = parseFloat(estilo.gap) || 0;
    const ancho = tarjeta.getBoundingClientRect().width + gap;

    track.style.transform = `translateX(${-reviewIndex * ancho}px)`;

    dots.querySelectorAll(".carousel-dot").forEach((punto, indice) => {
      punto.classList.toggle("active", indice === reviewIndex);
      punto.setAttribute("aria-current", indice === reviewIndex ? "true" : "false");
    });

    prev.disabled = reviewIndex === 0;
    next.disabled = reviewIndex === indiceMaximo();
  }

  function crearPuntos() {
    dots.replaceChildren();

    for (let i = 0; i <= indiceMaximo(); i++) {
      const punto = document.createElement("button");
      punto.type = "button";
      punto.className = "carousel-dot";
      punto.setAttribute("aria-label", `Mostrar grupo de comentarios ${i + 1}`);
      punto.addEventListener("click", () => {
        reviewIndex = i;
        posicionarCarrusel();
      });
      dots.appendChild(punto);
    }
  }

  prev.addEventListener("click", () => {
    reviewIndex = Math.max(0, reviewIndex - 1);
    posicionarCarrusel();
  });

  next.addEventListener("click", () => {
    reviewIndex = Math.min(indiceMaximo(), reviewIndex + 1);
    posicionarCarrusel();
  });

  track.addEventListener("click", evento => {
    if (huboArrastre) {
      huboArrastre = false;
      evento.preventDefault();
      return;
    }

    const tarjeta = evento.target.closest("[data-review]");
    if (tarjeta) mostrarOpinionCompleta(Number(tarjeta.dataset.review));
  });

  viewport.addEventListener("pointerdown", evento => {
    if (evento.target.closest("button") && evento.pointerType === "touch") {
    }

    arrastre = {
      inicioX: evento.clientX,
      inicioY: evento.clientY,
      inicioIndice: reviewIndex,
      movido: false
    };
    huboArrastre = false;
  });

  viewport.addEventListener("pointermove", evento => {
    if (!arrastre) return;

    const deltaX = evento.clientX - arrastre.inicioX;
    const deltaY = evento.clientY - arrastre.inicioY;

    if (Math.abs(deltaX) > 8 && Math.abs(deltaX) > Math.abs(deltaY)) {
      arrastre.movido = true;
      huboArrastre = true;
      viewport.classList.add("is-dragging");
      track.classList.add("is-dragging");

      const tarjeta = track.querySelector(".review-card");
      if (!tarjeta) return;

      const gap = parseFloat(getComputedStyle(track).gap) || 0;
      const ancho = tarjeta.getBoundingClientRect().width + gap;
      const inicio = -arrastre.inicioIndice * ancho;

      track.style.transform = `translateX(${inicio + deltaX}px)`;

      if (evento.pointerType === "mouse" && evento.buttons === 1) {
        evento.preventDefault();
      }
    }
  });

  function terminarArrastre(evento) {
    if (!arrastre) return;

    if (arrastre.movido) {
      const deltaX = evento.clientX - arrastre.inicioX;
      const tarjeta = track.querySelector(".review-card");
      const gap = parseFloat(getComputedStyle(track).gap) || 0;
      const ancho = tarjeta ? tarjeta.getBoundingClientRect().width + gap : 1;

      if (Math.abs(deltaX) > ancho * 0.15) {
        reviewIndex = deltaX < 0
          ? Math.min(indiceMaximo(), arrastre.inicioIndice + 1)
          : Math.max(0, arrastre.inicioIndice - 1);
      } else {
        reviewIndex = arrastre.inicioIndice;
      }

      posicionarCarrusel();
      track.classList.remove("is-dragging");
      viewport.classList.remove("is-dragging");

      setTimeout(() => { huboArrastre = false; }, 0);
    }

    arrastre = null;
  }

  viewport.addEventListener("pointerup", terminarArrastre);
  viewport.addEventListener("pointercancel", terminarArrastre);
  viewport.addEventListener("lostpointercapture", terminarArrastre);

  window.addEventListener("resize", () => {
    crearPuntos();
    posicionarCarrusel();
  });

  const toggleForm = document.getElementById("review-form-toggle");
  const reviewForm = document.getElementById("review-form");

  toggleForm.addEventListener("click", () => {
    reviewForm.hidden = !reviewForm.hidden;

    if (!reviewForm.hidden) {
      document.getElementById("review-name").focus();
    }
  });

  reviewForm.addEventListener("submit", evento => {
    evento.preventDefault();

    const datos = new FormData(reviewForm);
    const nombre = String(datos.get("name") || "").trim();
    const cargo = String(datos.get("role") || "").trim();
    const texto = String(datos.get("comment") || "").trim();
    const estrellas = Number(datos.get("rating"));

    if (!nombre || !texto || estrellas < 1 || estrellas > 5) return;

    opiniones.push({
      nombre,
      cargo: cargo || "Usuario",
      texto,
      estrellas
    });

    reviewIndex = Math.max(0, indiceMaximo());
    actualizarTarjetas();

    reviewForm.reset();
    reviewForm.hidden = true;

    document.getElementById("comentarios").scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });

  actualizarTarjetas();
  renderCarrito();
});
