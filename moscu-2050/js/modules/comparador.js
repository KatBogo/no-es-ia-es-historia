/**
 * «Antes y después»: comparador con deslizador.
 * Usa un <input type="range"> invisible sobre la imagen, así funciona con ratón,
 * pantalla táctil y teclado (flechas, Inicio, Fin) sin código adicional.
 * Debajo explica el origen de cada versión (evidencia documental frente a
 * intervención histórica o demostrativa) y cómo cambia la lectura del hecho.
 * Tras usar el control aparece la pregunta de reflexión.
 */
import { $, $$, esc, img } from "../utils.js";
import { COMPARACIONES } from "../data/contenido.js";
import { t } from "../i18n.js";

export function iniciarComparador(abrirRegistro) {
  const tabs = $("#comparador-tabs");
  const visor = $("#visor");
  const original = $("#visor-original");
  const intervenida = $("#visor-intervenida");
  const rango = $("#visor-rango");
  const texto = $("#comparador-texto");
  const lectura = $("#comparador-lectura");
  let usado = false;

  tabs.innerHTML = COMPARACIONES.map((c, i) =>
    `<button class="pestana" type="button" role="tab" aria-selected="${i === 0}" aria-controls="visor" data-i="${i}">${esc(c.titulo)}</button>`).join("");

  const posicion = (v) => {
    visor.style.setProperty("--pos", v + "%");
    rango.setAttribute("aria-valuetext", t("valorRango", 100 - v));
  };
  const revelarPregunta = () => {
    if (usado) return;
    usado = true;
    const p = $("#comparador-pregunta");
    if (p) { p.hidden = false; p.classList.add("aparece"); }
  };
  rango.addEventListener("input", () => { posicion(rango.value); if (Math.abs(rango.value - 50) > 8) revelarPregunta(); });

  const mostrar = (i) => {
    const c = COMPARACIONES[i];
    usado = false;
    $$(".pestana", tabs).forEach((tb, j) => tb.setAttribute("aria-selected", String(i === j)));
    original.src = img(c.original);
    original.alt = t("docOriginal") + c.titulo;
    intervenida.src = img(c.intervenida);
    intervenida.alt = t("versionInt") + c.titulo;
    intervenida.style.filter = c.filtro || "none";
    visor.classList.toggle("con-capa", c.capa);
    rango.value = 50; posicion(50);
    const tipoInt = c.tipoIntervencion === "historica" ? t("intHistorica") : t("intDemostrativa");
    texto.innerHTML = `
      <h3>${esc(c.titulo)}</h3>
      <p class="mono comparador__origen-t">${t("origenCada")}</p>
      <div class="origenes">
        <div class="origen origen--doc"><span class="mono">${t("evidenciaDoc")}</span><p>${esc(c.origenOriginal)}</p></div>
        <div class="origen origen--int origen--${c.tipoIntervencion}"><span class="mono">${tipoInt}</span><p>${esc(c.origenIntervenida)}</p></div>
      </div>
      <button class="btn-texto" type="button" data-registro="${esc(c.registro)}">${t("verOriginal")}</button>
      <p class="pista mono">${t("pistaComparar")}</p>`;
    lectura.innerHTML = `
      <p class="mono lectura__t">${t("comoCambia")}</p>
      <div class="lectura__grid">
        <div class="lectura__bloque"><span class="mono">${t("leeOriginal")}</span><p>${esc(c.lecturaOriginal)}</p></div>
        <span class="lectura__flecha" aria-hidden="true">→</span>
        <div class="lectura__bloque lectura__bloque--int"><span class="mono">${t("leeIntervenida")}</span><p>${esc(c.lecturaIntervenida)}</p></div>
      </div>
      <div class="comparador__pregunta" id="comparador-pregunta" hidden role="status">
        <span class="mono">${t("preguntaLbl")}</span>
        <p>${esc(c.pregunta)}</p>
      </div>`;
  };

  tabs.addEventListener("click", (e) => { const b = e.target.closest(".pestana"); if (b) mostrar(Number(b.dataset.i)); });
  tabs.addEventListener("keydown", (e) => {
    const lista = $$(".pestana", tabs);
    const i = lista.indexOf(document.activeElement);
    const sig = e.key === "ArrowRight" ? i + 1 : e.key === "ArrowLeft" ? i - 1 : null;
    if (i >= 0 && sig != null && lista[sig]) { e.preventDefault(); lista[sig].focus(); mostrar(sig); }
  });
  texto.addEventListener("click", (e) => { const b = e.target.closest("[data-registro]"); if (b) abrirRegistro(b.dataset.registro, b); });

  mostrar(0);
}
