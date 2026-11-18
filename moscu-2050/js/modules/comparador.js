/**
 * «Antes y después»: comparador con deslizador.
 * Usa un <input type="range"> invisible sobre la imagen, así funciona con ratón,
 * pantalla táctil y teclado (flechas, Inicio, Fin) sin código adicional.
 */
import { $, $$, esc, img } from "../utils.js";
import { COMPARACIONES } from "../data/contenido.js";

export function iniciarComparador(abrirRegistro) {
  const tabs = $("#comparador-tabs");
  const visor = $("#visor");
  const original = $("#visor-original");
  const intervenida = $("#visor-intervenida");
  const rango = $("#visor-rango");
  const texto = $("#comparador-texto");

  tabs.innerHTML = COMPARACIONES.map((c, i) =>
    `<button class="pestana" type="button" role="tab" aria-selected="${i === 0}" aria-controls="visor" data-i="${i}">${esc(c.titulo)}</button>`).join("");

  const posicion = (v) => {
    visor.style.setProperty("--pos", v + "%");
    rango.setAttribute("aria-valuetext", `${100 - v} % de la versión intervenida visible`);
  };
  rango.addEventListener("input", () => posicion(rango.value));

  const mostrar = (i) => {
    const c = COMPARACIONES[i];
    $$(".pestana", tabs).forEach((t, j) => t.setAttribute("aria-selected", String(i === j)));
    original.src = img(c.original);
    original.alt = `Documento original: ${c.titulo}`;
    intervenida.src = img(c.intervenida);
    intervenida.alt = `Versión intervenida: ${c.titulo}`;
    intervenida.style.filter = c.filtro || "none";
    visor.classList.toggle("con-capa", c.capa);
    rango.value = 50; posicion(50);
    texto.innerHTML = `
      <h3>${esc(c.titulo)}</h3>
      <dl>
        <div><dt>Qué cambió</dt><dd>${esc(c.explicacion)}</dd></div>
        <div><dt>Por qué importa identificar la intervención</dt><dd>${esc(c.importancia)}</dd></div>
        <div><dt>Fuentes</dt><dd>${esc(c.fuente)}</dd></div>
      </dl>
      <button class="btn-texto" type="button" data-registro="${esc(c.registro)}">Ver la ficha del documento original</button>`;
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
