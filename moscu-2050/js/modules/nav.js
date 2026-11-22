/** Navegación: menú fijo que cambia al hacer scroll, menú móvil, enlace activo y progreso de lectura. */
import { $, $$ } from "../utils.js?v=20261122b";
import { t } from "../i18n.js?v=20261122b";

export function iniciarNav() {
  const nav = $("#nav");
  const boton = $(".nav__toggle");
  const menu = $("#menu");
  const barra = $("#progreso");

  const abrir = (estado) => {
    boton.setAttribute("aria-expanded", String(estado));
    boton.querySelector(".sr-only").textContent = estado ? t("menuCerrar") : t("menuAbrir");
    menu.classList.toggle("abierto", estado);
    nav.classList.toggle("menu-abierto", estado);
    document.body.style.overflow = estado ? "hidden" : "";
  };
  boton.addEventListener("click", () => abrir(boton.getAttribute("aria-expanded") !== "true"));
  menu.addEventListener("click", (e) => { if (e.target.closest("a, button")) abrir(false); });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && menu.classList.contains("abierto")) { abrir(false); boton.focus(); }
  });
  window.matchMedia("(min-width: 1201px)").addEventListener("change", (m) => { if (m.matches) abrir(false); });

  // Apariencia compacta y barra de progreso
  let pendiente = false;
  const actualizar = () => {
    pendiente = false;
    const y = window.scrollY;
    nav.classList.toggle("compacta", y > 40);
    const total = document.documentElement.scrollHeight - window.innerHeight;
    barra.style.transform = `scaleX(${total > 0 ? Math.min(1, y / total) : 0})`;
  };
  window.addEventListener("scroll", () => { if (!pendiente) { pendiente = true; requestAnimationFrame(actualizar); } }, { passive: true });
  actualizar();

  // Enlace activo según la sección visible
  const enlaces = $$("#menu a");
  const mapa = {
    inicio: null, "moscu-2050": "moscu-2050", problema: "moscu-2050", manifiesto: "moscu-2050",
    archivo: "archivo", explora: "explora", "antes-despues": "explora", historias: "explora",
    campana: "campana", participa: "participa"
  };
  const io = new IntersectionObserver((entradas) => {
    entradas.forEach((en) => {
      if (!en.isIntersecting) return;
      const activo = mapa[en.target.id];
      enlaces.forEach((a) => {
        if (a.getAttribute("href") === "#" + activo) a.setAttribute("aria-current", "true");
        else a.removeAttribute("aria-current");
      });
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  Object.keys(mapa).forEach((id) => { const s = document.getElementById(id); if (s) io.observe(s); });
}

/** Aparición progresiva de bloques con la clase .reveal */
export function iniciarReveal() {
  const io = new IntersectionObserver((entradas, obs) => {
    entradas.forEach((en) => {
      if (en.isIntersecting) { en.target.classList.add("visible"); obs.unobserve(en.target); }
    });
  }, { threshold: 0.12 });
  $$(".reveal").forEach((el) => io.observe(el));
}
