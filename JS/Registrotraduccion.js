const translations = {
 es: {"html-title":"Crear Cuenta - PentestX",inicio:"Inicio",servicios:"Servicios",nosotros:"Nosotros",contacto:"Contacto",login:"Iniciar sesión",crear:"Crear",cuenta:"Cuenta",sub_titulo:"Únete a nuestra plataforma de ciberseguridad",nombre:"Nombre Completo",placeholder_nombre:"Tu nombre",correo:"Correo Electrónico",contrasena:"Contraseña",confirmar_contrasena:"Confirmar Contraseña",btn_registrarse:"Registrarse",tiene_cuenta:"¿Ya tienes una cuenta?",inicia_sesion:"Inicia sesión",volver:"— Volver al inicio",footer_text:"Tu seguridad, nuestra prioridad.",derechos:"© 2026 PentestX. Todos los derechos reservados."},
 en: {"html-title":"Create Account - PentestX",inicio:"Home",servicios:"Services",nosotros:"About Us",contacto:"Contact",login:"Log in",crear:"Create",cuenta:"Account",sub_titulo:"Join our cybersecurity platform",nombre:"Full Name",placeholder_nombre:"Your name",correo:"Email Address",contrasena:"Password",confirmar_contrasena:"Confirm Password",btn_registrarse:"Sign Up",tiene_cuenta:"Already have an account?",inicia_sesion:"Sign in",volver:"— Back to home",footer_text:"Your security, our priority.",derechos:"© 2026 PentestX. All rights reserved."}
};
function changeLanguage(lang) {
 const language = translations[lang] ? lang : 'es';
 localStorage.setItem('pentestx-language', language);
 document.documentElement.lang = language;
 document.querySelectorAll('[data-translate]').forEach(el => { const key=el.getAttribute('data-translate'); if(translations[language][key]) el.textContent=translations[language][key]; });
 document.querySelectorAll('[data-placeholder-translate]').forEach(el => { const key=el.getAttribute('data-placeholder-translate'); if(translations[language][key]) el.placeholder=translations[language][key]; });
 if(translations[language]['html-title']) document.title=translations[language]['html-title'];
}
document.addEventListener('DOMContentLoaded', () => {
 const selector=document.getElementById('langSelector') || document.getElementById('language-select');
 const saved=localStorage.getItem('pentestx-language') || 'es';
 if(selector){ selector.value=translations[saved]?saved:'es'; selector.addEventListener('change',()=>changeLanguage(selector.value)); }
 changeLanguage(translations[saved]?saved:'es');
});
