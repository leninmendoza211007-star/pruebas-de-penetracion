/* =====================================================
   PENTESTX - ANIMACIONES Y FUNCIONES DE PROGRESO
   Archivo: js/progreso.js
   ===================================================== */

   document.addEventListener("DOMContentLoaded", () => {

    // 1. Animación de las barras de progreso
    const barras = document.querySelectorAll(".progress-fill");
  
    barras.forEach((barra) => {
      const anchoFinal = getComputedStyle(barra)
        .getPropertyValue("--progress")
        .trim() || "0%";
  
      barra.style.width = "0%";
      barra.style.transition = "width 1.5s ease-in-out";
  
      requestAnimationFrame(() => {
        barra.style.width = anchoFinal;
      });
    });
  
    // 2. Animación de aparición de las tarjetas
    const tarjetas = document.querySelectorAll(".card");
  
    tarjetas.forEach((tarjeta, indice) => {
      tarjeta.style.opacity = "0";
      tarjeta.style.transform = "translateY(20px)";
      tarjeta.style.transition =
        "opacity 0.6s ease, transform 0.6s ease";
  
      setTimeout(() => {
        tarjeta.style.opacity = "1";
        tarjeta.style.transform = "translateY(0)";
      }, 100 + indice * 120);
    });
  
    // 3. Efecto al señalar las tarjetas con el cursor
    tarjetas.forEach((tarjeta) => {
      tarjeta.addEventListener("mouseenter", () => {
        tarjeta.style.transform = "translateY(-6px)";
        tarjeta.style.boxShadow =
          "0 18px 38px rgba(10, 35, 65, 0.15)";
        tarjeta.style.borderColor = "#1389ef";
      });
  
      tarjeta.addEventListener("mouseleave", () => {
        tarjeta.style.transform = "translateY(0)";
        tarjeta.style.boxShadow = "";
        tarjeta.style.borderColor = "";
      });
    });
  
    // 4. Selector de idioma español / inglés
    const selector = document.getElementById("language-select");
  
    if (selector) {
      selector.addEventListener("change", () => {
        if (selector.value === "en") {
          alert(
            "English translation is not configured yet. " +
            "La traducción debe implementarse."
          );
          selector.value = "es";
        }
      });
    }
  
    // 5. Animación de la barra cuando se mueve el cursor
    barras.forEach((barra) => {
      barra.style.borderRadius = "999px";
  
      barra.addEventListener("mouseenter", () => {
        barra.style.filter = "brightness(1.15)";
      });
  
      barra.addEventListener("mouseleave", () => {
        barra.style.filter = "brightness(1)";
      });
    });
  
    // 6. Efecto visual del botón de inicio de sesión
    const botones = document.querySelectorAll(".button");
  
    botones.forEach((boton) => {
      boton.style.transition =
        "transform 0.25s ease, background 0.25s ease";
  
      boton.addEventListener("mouseenter", () => {
        boton.style.transform = "translateY(-2px)";
      });
  
      boton.addEventListener("mouseleave", () => {
        boton.style.transform = "translateY(0)";
      });
    });
  
  });