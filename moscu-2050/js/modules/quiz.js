/** «Реальное или сгенерированное?» / “Real or generated?”: ejercicio educativo paso a paso. */
import { $, esc, img, registroPorId, reducirMovimiento } from "../utils.js?v=20261122b";
import { QUIZ } from "../data/contenido.js?v=20261122b";
import { t } from "../i18n.js?v=20261122b";

const OPCIONES = [
  { id: "registro", label: () => t("opRegistro") },
  { id: "alterada", label: () => t("opAlterada") },
  { id: "duda", label: () => t("opDuda") }
];

export function iniciarQuiz(abrirRegistro) {
  const cuerpo = $("#quiz-cuerpo");
  const paso = $("#quiz-paso");
  const barra = $("#quiz-barra");
  let indice = 0;
  let respuestas = [];

  const resultado = (item, r) => {
    if (r === "duda") return { clave: "duda", texto: t("resDuda") };
    if (r === item.clase) return { clave: "ok", texto: t("resOk") };
    if (r === item.parcial) return { clave: "parcial", texto: t("resParcial") };
    return { clave: "no", texto: t("resNo") };
  };

  function mostrarPaso() {
    const item = QUIZ[indice];
    const reg = registroPorId(item.registro);
    paso.textContent = t("pasoN", indice + 1, QUIZ.length);
    barra.style.width = `${(indice / QUIZ.length) * 100}%`;
    cuerpo.innerHTML = `
      <div class="quiz__grid">
        <figure class="quiz__imagen" id="quiz-figura">
          <img src="${img(reg.img)}" alt="${esc(t("altQuiz", indice + 1))}" id="quiz-img">
        </figure>
        <div>
          <p class="quiz__pregunta" id="quiz-pregunta" tabindex="-1">${t("pregunta")}</p>
          <div class="opciones" role="group" aria-labelledby="quiz-pregunta">
            ${OPCIONES.map((o) => `<button class="opcion" type="button" data-op="${o.id}">${o.label()}<span aria-hidden="true">→</span></button>`).join("")}
          </div>
          <div id="quiz-revelacion"></div>
        </div>
      </div>`;
  }

  function revelar(op, boton) {
    const item = QUIZ[indice];
    const reg = registroPorId(item.registro);
    const res = resultado(item, op);
    respuestas.push({ item, op, res });
    cuerpo.querySelectorAll(".opcion").forEach((b) => { b.disabled = true; });
    boton.classList.add("elegida");
    $("#quiz-figura").classList.add("revelando");
    $("#quiz-img").alt = `${reg.titulo}. ${reg.fecha}.`;
    barra.style.width = `${((indice + 1) / QUIZ.length) * 100}%`;
    const ultimo = indice === QUIZ.length - 1;
    $("#quiz-revelacion").innerHTML = `
      <div class="revelacion" style="animation-delay:${reducirMovimiento() ? 0 : 0.5}s">
        <p class="revelacion__resultado ${res.clave === "no" ? "no" : ""}">${esc(res.texto)}</p>
        <p class="mono">${t("clasificacion")}</p>
        <p class="revelacion__clase">${esc(item.clasificacion)}</p>
        <dl>
          <div><dt>${t("explicacion")}</dt><dd>${esc(item.explicacion)}</dd></div>
          <div><dt>${t("pistas")}</dt><dd>${esc(item.pistas)}</dd></div>
          <div><dt>${t("fuenteDisponible")}</dt><dd>${esc(item.fuente)} · <button class="btn-texto" type="button" data-ver="${esc(reg.id)}">${t("verFicha")}</button></dd></div>
          <div><dt>${t("porQue")}</dt><dd>${t("porQueTexto")}</dd></div>
        </dl>
        <button class="btn btn--rojo" type="button" id="quiz-siguiente">${ultimo ? t("verResumen") : t("siguiente")}</button>
      </div>`;
    $("#quiz-siguiente").focus({ preventScroll: true });
  }

  function resumen() {
    paso.textContent = t("resumen");
    barra.style.width = "100%";
    const cuenta = (k) => respuestas.filter((r) => r.res.clave === k).length;
    cuerpo.innerHTML = `
      <div class="resumen">
        <p class="resumen__frase" tabindex="-1" id="quiz-final">${t("fraseA")} <span>${t("fraseB")}</span></p>
        <p>${t("conteo", cuenta("ok"), cuenta("parcial"), cuenta("no"), cuenta("duda"))}</p>
        <ol>
          ${respuestas.map(({ item, op, res }) => {
            const reg = registroPorId(item.registro);
            const elegida = OPCIONES.find((o) => o.id === op).label();
            return `<li><img src="${img(reg.img, "sm")}" alt=""><div><span class="mono">${esc(res.texto)}</span>${esc(item.clasificacion)}<br><small>${t("tuRespuesta")} ${esc(elegida)}</small></div></li>`;
          }).join("")}
        </ol>
        <div class="resumen__acciones">
          <button class="btn btn--rojo" type="button" id="quiz-reiniciar">${t("repetir")}</button>
          <a class="btn btn--linea" href="#archivo">${t("investigar")}</a>
        </div>
      </div>`;
    $("#quiz-final").focus({ preventScroll: true });
  }

  cuerpo.addEventListener("click", (e) => {
    const op = e.target.closest("[data-op]");
    if (op && !op.disabled) { revelar(op.dataset.op, op); return; }
    const ver = e.target.closest("[data-ver]");
    if (ver) { abrirRegistro(ver.dataset.ver, ver); return; }
    if (e.target.closest("#quiz-siguiente")) {
      indice += 1;
      if (indice >= QUIZ.length) resumen();
      else { mostrarPaso(); $("#quiz-pregunta").focus({ preventScroll: true }); }
      return;
    }
    if (e.target.closest("#quiz-reiniciar")) reiniciar(true);
  });

  function reiniciar(enfocar) {
    indice = 0; respuestas = [];
    mostrarPaso();
    if (enfocar) $("#quiz-pregunta").focus({ preventScroll: true });
  }
  reiniciar(false);

  // El botón de la portada lleva al ejercicio y lo deja listo
  document.querySelectorAll("[data-iniciar-quiz]").forEach((a) => a.addEventListener("click", () => {
    if (respuestas.length === QUIZ.length) reiniciar(false);
    setTimeout(() => $("#quiz-pregunta")?.focus({ preventScroll: true }), reducirMovimiento() ? 0 : 700);
  }));
}
