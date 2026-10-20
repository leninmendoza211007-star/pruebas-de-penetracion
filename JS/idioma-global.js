
(() => {
  const LANGUAGE_KEY = "pentestx-language";

  function getLanguage() {
    try {
      return localStorage.getItem(LANGUAGE_KEY) === "en" ? "en" : "es";
    } catch (error) {
      return "es";
    }
  }

  function saveLanguage(language) {
    const selectedLanguage = language === "en" ? "en" : "es";

    try {
      localStorage.setItem(LANGUAGE_KEY, selectedLanguage);
    } catch (error) {
      // El almacenamiento puede estar bloqueado.
    }

    document.querySelectorAll("#language-select").forEach((select) => {
      select.value = selectedLanguage;
    });

    document.dispatchEvent(
      new CustomEvent("pentestx:language-change", {
        detail: { language: selectedLanguage }
      })
    );
  }

  document.addEventListener("DOMContentLoaded", () => {
    const language = getLanguage();

    document.querySelectorAll("#language-select").forEach((select) => {
      select.value = language;

      select.addEventListener("change", () => {
        saveLanguage(select.value);
      });
    });

    document.documentElement.lang = language;
    document.documentElement.dataset.language = language;
  });

  window.addEventListener("storage", (event) => {
    if (event.key === LANGUAGE_KEY) {
      const language = event.newValue === "en" ? "en" : "es";

      document.querySelectorAll("#language-select").forEach((select) => {
        select.value = language;
      });

      document.documentElement.lang = language;
      document.documentElement.dataset.language = language;

      document.dispatchEvent(
        new CustomEvent("pentestx:language-change", {
          detail: { language }
        })
      );
    }
  });
})();
