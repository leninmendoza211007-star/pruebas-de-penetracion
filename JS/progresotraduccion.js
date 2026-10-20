document.addEventListener("DOMContentLoaded", function () {
    const selector = document.getElementById("language-select");
  
    if (!selector) {
      console.error("No se encontró el selector de idioma.");
      return;
    }
  
    const traducciones = {
      es: {
        inicio: "Inicio",
        servicios: "Servicios",
        nosotros: "Nosotros",
        contacto: "Contacto",
        login: "Iniciar sesión",
        titulo: "Avance de tus pruebas de penetración",
        eyebrow: "Área de usuario · Seguimiento",
        avance: "Avance general",
        eslogan: "Tu seguridad, nuestra prioridad."
      },
  
      en: {
        inicio: "Home",
        servicios: "Services",
        nosotros: "About Us",
        contacto: "Contact",
        login: "Log In",
        titulo: "Penetration Testing Progress",
        eyebrow: "User Area · Progress Tracking",
        avance: "Overall Progress",
        eslogan: "Your security, our priority."
      }
    };
  
    function traducir(idioma) {
      const textos = traducciones[idioma];
  
      document.documentElement.lang = idioma;
  
      document.querySelectorAll("[data-i18n]").forEach(function (elemento) {
        const clave = elemento.getAttribute("data-i18n");
  
        if (textos[clave]) {
          elemento.textContent = textos[clave];
        }
      });
  
      try {
        localStorage.setItem("pentestx-idioma", idioma);
      } catch (error) {
        // El cambio de idioma sigue funcionando.
      }
    }
  
    // Recuperar idioma guardado
    let idiomaInicial = "es";
  
    try {
      idiomaInicial = localStorage.getItem("pentestx-idioma") || "es";
    } catch (error) {}
  
    if (!traducciones[idiomaInicial]) {
      idiomaInicial = "es";
    }
  
    selector.value = idiomaInicial;
    traducir(idiomaInicial);
  
    // Traducir al cambiar el selector
    selector.addEventListener("change", function () {
      traducir(selector.value);
    });
  
    console.log("Selector de idioma conectado correctamente.");
  });