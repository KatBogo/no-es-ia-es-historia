/**
 * «El recorrido de la memoria»: cinco etapas conectadas, del post en redes al
 * registro compartido con su contexto. Cada etapa es un botón que muestra su
 * detalle y lleva a la sección de la página donde ocurre ese paso.
 */
import { $, $$, esc } from "../utils.js?v=20261122c";
import { RECORRIDO } from "../data/contenido.js?v=20261122c";
import { t } from "../i18n.js?v=20261122c";

export function iniciarRecorrido() {
  const lista = $("#recorrido");
  const detalle = $("#recorrido-detalle");
  if (!lista) return;

  lista.innerHTML = RECORRIDO.map((e, i) => `
    <li class="etapa" style="--i:${i}">
      <button class="etapa__boton" type="button" aria-pressed="${i === 0}" aria-controls="recorrido-detalle" data-i="${i}">
        <span class="etapa__nombre">${esc(e.etapa)}</span>
      </button>
    </li>`).join("");

  const mostrar = (i) => {
    const e = RECORRIDO[i];
    $$(".etapa__boton", lista).forEach((b, j) => {
      b.setAttribute("aria-pressed", String(i === j));
      b.parentElement.classList.toggle("hecha", j <= i);
    });
    lista.style.setProperty("--avance", `${(i / (RECORRIDO.length - 1)) * 100}%`);
    detalle.innerHTML = `
      <p class="mono">${esc(e.etapa)}</p>
      <p class="recorrido__texto">${esc(e.texto)}</p>
      <a class="btn btn--linea" href="${e.destino}">${esc(e.accion)} →</a>`;
  };

  lista.addEventListener("click", (ev) => {
    const b = ev.target.closest(".etapa__boton"); if (!b) return;
    mostrar(Number(b.dataset.i));
  });
  lista.addEventListener("keydown", (ev) => {
    const botones = $$(".etapa__boton", lista);
    const i = botones.indexOf(document.activeElement);
    const sig = ev.key === "ArrowRight" ? i + 1 : ev.key === "ArrowLeft" ? i - 1 : null;
    if (i >= 0 && sig != null && botones[sig]) { ev.preventDefault(); botones[sig].focus(); mostrar(sig); }
  });
  mostrar(0);
}
