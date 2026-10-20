/* =========================================================
   dashboard.js — Lógica del panel de control de PentestX
   Funciones: tarjetas con contador animado, tabla generada desde
   datos, búsqueda, filtros por estado/riesgo y orden por columna.
   Los datos son de muestra; para un sistema real se reemplazan
   por una llamada a tu backend (fetch).
   ========================================================= */
(() => {
  "use strict";

  /* ---------- 1. DATOS DE MUESTRA ---------- */
  // fecha en formato ISO (AAAA-MM-DD); criticas = vulnerabilidades críticas halladas.
  const evaluaciones = [
    { proyecto: "Servidor web principal",     fecha: "2026-10-01", estado: "Completado", riesgo: "Alto",  criticas: 5 },
    { proyecto: "Base de datos de clientes",  fecha: "2026-09-28", estado: "En proceso", riesgo: "Medio", criticas: 3 },
    { proyecto: "API de pagos",               fecha: "2026-09-15", estado: "Revisado",   riesgo: "Bajo",  criticas: 0 },
    { proyecto: "Portal de empleados",        fecha: "2026-09-09", estado: "Completado", riesgo: "Medio", criticas: 2 },
    { proyecto: "Aplicación móvil Android",   fecha: "2026-08-30", estado: "Revisado",   riesgo: "Bajo",  criticas: 0 },
    { proyecto: "Red interna (VPN)",          fecha: "2026-08-21", estado: "Completado", riesgo: "Alto",  criticas: 2 },
    { proyecto: "Entorno cloud (AWS)",        fecha: "2026-10-10", estado: "Pendiente",  riesgo: "Medio", criticas: 0 },
  ];

  const ORDEN_RIESGO = { Bajo: 1, Medio: 2, Alto: 3 };

  /* ---------- 2. REFERENCIAS AL DOM ---------- */
  const $ = (id) => document.getElementById(id);
  const tbody = $("tabla-evaluaciones");
  const inputTexto = $("filtro-texto");
  const selEstado = $("filtro-estado");
  const selRiesgo = $("filtro-riesgo");
  const btnLimpiar = $("filtro-limpiar");
  const contador = $("tabla-contador");
  const botonesOrden = document.querySelectorAll(".sort-btn");

  // Estado de la vista: columna y dirección de orden actuales.
  let orden = { campo: "fecha", dir: "desc" };

  /* ---------- 3. UTILIDADES ---------- */
  const normalizar = (t) =>
    t.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""); // ignora tildes

  const formatearFecha = (iso) => {
    const [a, m, d] = iso.split("-");
    return `${d}/${m}/${a}`;
  };

  const claseDe = (texto) => normalizar(texto).replace(/\s+/g, "-"); // "En proceso" → "en-proceso"

  /* ---------- 4. TARJETAS-RESUMEN (contador animado) ---------- */
  function animarNumero(elemento, destino, duracion = 900) {
    const reducir = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducir || destino === 0) {
      elemento.textContent = destino;
      return;
    }
    const inicio = performance.now();
    const paso = (ahora) => {
      const progreso = Math.min((ahora - inicio) / duracion, 1);
      const suave = 1 - Math.pow(1 - progreso, 3); // desaceleración al final
      elemento.textContent = Math.round(destino * suave);
      if (progreso < 1) requestAnimationFrame(paso);
    };
    requestAnimationFrame(paso);
  }

  function pintarResumen() {
    const criticas = evaluaciones.reduce((suma, e) => suma + e.criticas, 0);
    const sistemas = new Set(evaluaciones.map((e) => e.proyecto)).size;
    const auditorias = evaluaciones.filter((e) => e.estado === "Completado" || e.estado === "Revisado").length;
    animarNumero($("stat-criticas"), criticas);
    animarNumero($("stat-auditorias"), auditorias);
    animarNumero($("stat-sistemas"), sistemas);
  }

  /* ---------- 5. FILTRADO Y ORDEN ---------- */
  function obtenerVista() {
    const texto = normalizar(inputTexto.value.trim());
    const estado = selEstado.value;
    const riesgo = selRiesgo.value;

    const filtradas = evaluaciones.filter(
      (e) =>
        (!texto || normalizar(e.proyecto).includes(texto)) &&
        (!estado || e.estado === estado) &&
        (!riesgo || e.riesgo === riesgo)
    );

    const factor = orden.dir === "asc" ? 1 : -1;
    return filtradas.sort((a, b) => {
      if (orden.campo === "riesgo") return (ORDEN_RIESGO[a.riesgo] - ORDEN_RIESGO[b.riesgo]) * factor;
      if (orden.campo === "fecha") return a.fecha.localeCompare(b.fecha) * factor;
      return a.proyecto.localeCompare(b.proyecto, "es") * factor;
    });
  }

  /* ---------- 6. DIBUJAR LA TABLA ---------- */
  function celda(texto) {
    const td = document.createElement("td");
    td.textContent = texto; // textContent evita inyectar HTML desde los datos
    return td;
  }

  function pintarTabla() {
    const filas = obtenerVista();
    tbody.replaceChildren();

    if (filas.length === 0) {
      const tr = document.createElement("tr");
      const td = celda("No hay evaluaciones que coincidan con los filtros.");
      td.colSpan = 5;
      td.className = "tabla-vacia";
      tr.append(td);
      tbody.append(tr);
    }

    filas.forEach((e) => {
      const tr = document.createElement("tr");

      const tdEstado = document.createElement("td");
      const badge = document.createElement("span");
      badge.className = `badge badge-${claseDe(e.estado)}`;
      badge.textContent = e.estado;
      tdEstado.append(badge);

      const tdRiesgo = document.createElement("td");
      const riesgo = document.createElement("span");
      riesgo.className = `risk risk-${claseDe(e.riesgo)}`;
      riesgo.textContent = e.riesgo;
      tdRiesgo.append(riesgo);

      const tdAcceso = document.createElement("td");
      const enlace = document.createElement("a");
      enlace.href = "progreso.html";
      enlace.textContent = "Ver progreso";
      tdAcceso.append(enlace);

      tr.append(celda(e.proyecto), celda(formatearFecha(e.fecha)), tdEstado, tdRiesgo, tdAcceso);
      tbody.append(tr);
    });

    contador.textContent = `Mostrando ${filas.length} de ${evaluaciones.length} evaluaciones`;
    actualizarEncabezados();
  }

  function actualizarEncabezados() {
    botonesOrden.forEach((btn) => {
      const activo = btn.dataset.sort === orden.campo;
      btn.parentElement.setAttribute(
        "aria-sort",
        activo ? (orden.dir === "asc" ? "ascending" : "descending") : "none"
      );
      btn.classList.toggle("is-active", activo);
      btn.dataset.dir = activo ? orden.dir : "";
    });
  }

  /* ---------- 7. EVENTOS ---------- */
  [inputTexto, selEstado, selRiesgo].forEach((el) => {
    el.addEventListener("input", pintarTabla);
    el.addEventListener("change", pintarTabla);
  });

  btnLimpiar.addEventListener("click", () => {
    inputTexto.value = "";
    selEstado.value = "";
    selRiesgo.value = "";
    pintarTabla();
    inputTexto.focus();
  });

  botonesOrden.forEach((btn) => {
    btn.addEventListener("click", () => {
      const campo = btn.dataset.sort;
      orden = orden.campo === campo
        ? { campo, dir: orden.dir === "asc" ? "desc" : "asc" } // mismo campo: invertir
        : { campo, dir: campo === "fecha" ? "desc" : "asc" };  // campo nuevo
      pintarTabla();
    });
  });

  /* ---------- 8. INICIO ---------- */
  pintarResumen();
  pintarTabla();
})();
