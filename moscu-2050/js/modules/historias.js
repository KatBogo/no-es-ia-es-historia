/** «Historias que no se borran»: tarjetas narrativas expandibles y línea de tiempo. */
import { $, $$, esc, img, reducirMovimiento } from "../utils.js?v=20261122c";
import { HISTORIAS } from "../data/contenido.js?v=20261122c";
import { t } from "../i18n.js?v=20261122c";

export function iniciarHistorias(abrirRegistro) {
  const pista = $("#historias-pista");
  const tiempo = $("#historias-tiempo");

  tiempo.innerHTML = HISTORIAS.map((h, i) => `
    <button class="hito ${h.especulativa ? "especulativo-hito" : ""}" type="button" role="tab" id="hito-${h.id}"
      aria-selected="${i === 0}" aria-controls="historia-${h.id}" data-i="${i}">${esc(h.anio)}${h.especulativa ? `<span class="sr-only">${t("especulativa")}</span>` : ""}</button>`).join("");

  pista.innerHTML = HISTORIAS.map((h) => `
    <li class="historia ${h.especulativa ? "ficcion" : ""}" id="historia-${h.id}" role="tabpanel" aria-labelledby="hito-${h.id}">
      <button class="historia__boton" type="button" aria-expanded="false" aria-controls="det-${h.id}">
        <div class="historia__img ${h.img.startsWith("panorama") ? "historia__img--panorama" : ""}"><img src="${img(h.img)}" alt="" loading="lazy"></div>
        <div class="historia__cabeza">
          <span class="historia__anio">${esc(h.anio)}${h.especulativa ? t("escenarioEsp") : ""}</span>
          <span class="historia__titulo">${esc(h.titulo)}</span>
          <span class="historia__ampliar">${t("leer")}</span>
        </div>
      </button>
      <div class="historia__detalle" id="det-${h.id}">
        <div><div class="historia__texto">
          ${h.especulativa ? `<p class="sello-ficcion">${t("sello")}</p>` : ""}
          ${h.contexto.map((p) => `<p>${esc(p)}</p>`).join("")}
          ${h.fragmento ? `<blockquote class="historia__fragmento">
              <span class="mono">${esc(h.fragmento.tipo)}</span>
              ${h.fragmento.img ? `<img src="${img(h.fragmento.img, "sm")}" alt="${esc(h.fragmento.texto)}" loading="lazy">` : ""}
              <p>${esc(h.fragmento.texto)}</p>
            </blockquote>` : ""}
          <div class="historia__enlaces">
            ${h.enlace ? `<a href="${esc(h.enlace.url)}" target="_blank" rel="noopener">${esc(h.enlace.texto)} ↗</a>` : ""}
            ${h.registro ? `<button class="btn-texto" type="button" data-registro="${esc(h.registro)}">${t("verRegistro")}</button>` : ""}
          </div>
        </div></div>
      </div>
    </li>`).join("");

  const items = $$(".historia", pista);
  const hitos = $$(".hito", tiempo);

  const activar = (i, desplazar = true) => {
    hitos.forEach((h, j) => h.setAttribute("aria-selected", String(i === j)));
    if (desplazar) {
      const it = items[i];
      pista.scrollTo({ left: it.offsetLeft - pista.offsetLeft, behavior: reducirMovimiento() ? "auto" : "smooth" });
    }
  };

  tiempo.addEventListener("click", (e) => {
    const b = e.target.closest(".hito"); if (!b) return;
    activar(Number(b.dataset.i));
  });
  tiempo.addEventListener("keydown", (e) => {
    const i = hitos.indexOf(document.activeElement);
    if (i < 0) return;
    const sig = e.key === "ArrowRight" ? i + 1 : e.key === "ArrowLeft" ? i - 1 : null;
    if (sig != null && hitos[sig]) { e.preventDefault(); hitos[sig].focus(); activar(sig); }
  });

  pista.addEventListener("click", (e) => {
    const reg = e.target.closest("[data-registro]");
    if (reg) { abrirRegistro(reg.dataset.registro, reg); return; }
    const b = e.target.closest(".historia__boton"); if (!b) return;
    const li = b.parentElement;
    const abierto = b.getAttribute("aria-expanded") === "true";
    b.setAttribute("aria-expanded", String(!abierto));
    li.classList.toggle("abierta", !abierto);
    $(".historia__ampliar", b).textContent = abierto ? t("leer") : t("cerrarHistoria");
    const i = items.indexOf(li);
    activar(i, false);
    if (!abierto) setTimeout(() => pista.scrollTo({ left: li.offsetLeft - pista.offsetLeft, behavior: reducirMovimiento() ? "auto" : "smooth" }), 80);
  });

  // Sincroniza la línea de tiempo con el desplazamiento manual
  let espera;
  pista.addEventListener("scroll", () => {
    clearTimeout(espera);
    espera = setTimeout(() => {
      const x = pista.scrollLeft;
      let mejor = 0, dist = Infinity;
      items.forEach((it, i) => { const d = Math.abs(it.offsetLeft - pista.offsetLeft - x); if (d < dist) { dist = d; mejor = i; } });
      activar(mejor, false);
    }, 120);
  }, { passive: true });

  const mover = (d) => {
    const actual = hitos.findIndex((h) => h.getAttribute("aria-selected") === "true");
    const sig = Math.max(0, Math.min(items.length - 1, actual + d));
    activar(sig);
  };
  $("#historias-prev").addEventListener("click", () => mover(-1));
  $("#historias-sig").addEventListener("click", () => mover(1));
}
