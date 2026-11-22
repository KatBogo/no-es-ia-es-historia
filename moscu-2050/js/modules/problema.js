/** Sección «El problema»: tarjetas de riesgo expandibles y animación de fragmentación. */
import { $, esc, reducirMovimiento } from "../utils.js?v=20261122c";
import { RIESGOS } from "../data/contenido.js?v=20261122c";
import { t } from "../i18n.js?v=20261122c";

const ICONOS = {
  scissors: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M8.5 7.5 20 19M8.5 16.5 20 5"/></svg>',
  spark: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 2v6M12 16v6M2 12h6M16 12h6M5 5l4 4M15 15l4 4M19 5l-4 4M9 15l-4 4"/></svg>',
  chain: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M10 14a4 4 0 0 0 5.6 0l3-3a4 4 0 0 0-5.6-5.6l-1 1"/><path d="M14 10a4 4 0 0 0-5.6 0l-3 3a4 4 0 0 0 5.6 5.6l1-1"/><path d="M3 3l18 18" stroke-dasharray="2 2"/></svg>',
  eye: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/><path d="M4 20 20 4"/></svg>',
  fragment: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="4" width="7" height="7" transform="rotate(8 17 7)"/><rect x="4" y="14" width="7" height="7" transform="rotate(-10 7 17)"/><rect x="15" y="15" width="5" height="5" opacity=".5"/></svg>'
};

export function iniciarProblema(abrirRegistro) {
  const lista = $("#riesgos");
  lista.innerHTML = RIESGOS.map((r, i) => `
    <li class="riesgo reveal" style="transition-delay:${i * 80}ms">
      <button class="riesgo__boton" type="button" aria-expanded="false" aria-controls="ej-${r.id}">
        <span class="riesgo__icono" aria-hidden="true">${ICONOS[r.icono]}</span>
        <span><span class="riesgo__titulo">${esc(r.titulo)}</span><span class="riesgo__texto">${esc(r.texto)}</span></span>
        <span class="riesgo__mas" aria-hidden="true">+</span>
      </button>
      <div class="riesgo__ejemplo" id="ej-${r.id}" role="region" aria-label="${t("ejemplo")}: ${esc(r.titulo)}">
        <div>
          <p>${esc(r.ejemplo)}</p>
          ${r.registro ? `<button class="btn-texto" type="button" data-registro="${esc(r.registro)}">${t("verRegistro")}</button>` : ""}
        </div>
      </div>
    </li>`).join("");

  lista.addEventListener("click", (e) => {
    const ver = e.target.closest("[data-registro]");
    if (ver) { abrirRegistro(ver.dataset.registro, ver); return; }
    const boton = e.target.closest(".riesgo__boton");
    if (!boton) return;
    const item = boton.parentElement;
    const abierto = boton.getAttribute("aria-expanded") === "true";
    boton.setAttribute("aria-expanded", String(!abierto));
    item.classList.toggle("abierto", !abierto);
  });

  // Fragmentación: 8 × 6 piezas de la misma imagen que se separan al entrar en pantalla
  const figura = $("#fragmento");
  const lienzo = $("#fragmento-lienzo");
  const COLS = 8, FILAS = 6;
  const piezas = [];
  for (let f = 0; f < FILAS; f++) {
    for (let c = 0; c < COLS; c++) {
      const d = document.createElement("span");
      d.className = "frag";
      d.style.backgroundPosition = `${(c / (COLS - 1)) * 100}% ${(f / (FILAS - 1)) * 100}%`;
      const lejos = Math.random() < 0.45;
      d.style.setProperty("--dx", `${(Math.random() - 0.5) * (lejos ? 160 : 24)}px`);
      d.style.setProperty("--dy", `${(Math.random() - 0.3) * (lejos ? 140 : 18)}px`);
      d.style.setProperty("--rot", `${(Math.random() - 0.5) * (lejos ? 40 : 6)}deg`);
      d.style.setProperty("--op", lejos ? (Math.random() * 0.25).toFixed(2) : "0.85");
      d.style.transitionDelay = `${Math.random() * 0.5}s`;
      piezas.push(d);
    }
  }
  lienzo.append(...piezas);

  const boton = $("#fragmento-boton");
  const fijar = (roto) => {
    figura.classList.toggle("roto", roto);
    boton.textContent = roto ? t("recomponer") : t("fragmentar");
  };
  boton.addEventListener("click", () => fijar(!figura.classList.contains("roto")));

  if (reducirMovimiento()) { fijar(false); return; }
  const io = new IntersectionObserver((ents) => {
    ents.forEach((en) => { if (en.isIntersecting) { setTimeout(() => fijar(true), 700); io.disconnect(); } });
  }, { threshold: 0.5 });
  io.observe(figura);
}
