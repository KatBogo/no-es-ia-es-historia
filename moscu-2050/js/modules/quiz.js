/** «¿Real o generado?»: ejercicio educativo paso a paso con revelación y resumen final. */
import { $, esc, img, registroPorId, reducirMovimiento } from "../utils.js";
import { QUIZ } from "../data/contenido.js";

const OPCIONES = [
  { id: "registro", label: "Registro histórico" },
  { id: "alterada", label: "Imagen generada o alterada" },
  { id: "duda", label: "No estoy seguro" }
];

export function iniciarQuiz(abrirRegistro) {
  const cuerpo = $("#quiz-cuerpo");
  const paso = $("#quiz-paso");
  const barra = $("#quiz-barra");
  let indice = 0;
  let respuestas = [];

  const resultado = (item, r) => {
    if (r === "duda") return { clave: "duda", texto: "Sin respuesta: está bien dudar" };
    if (r === item.clase) return { clave: "ok", texto: "Tu respuesta coincide con la clasificación documentada" };
    if (r === item.parcial) return { clave: "parcial", texto: "Tu respuesta tiene parte de razón" };
    return { clave: "no", texto: "Tu respuesta no coincide con la clasificación documentada" };
  };

  function mostrarPaso() {
    const item = QUIZ[indice];
    const reg = registroPorId(item.registro);
    paso.textContent = `Imagen ${indice + 1} de ${QUIZ.length}`;
    barra.style.width = `${(indice / QUIZ.length) * 100}%`;
    cuerpo.innerHTML = `
      <div class="quiz__grid">
        <figure class="quiz__imagen" id="quiz-figura">
          <img src="${img(reg.img)}" alt="Imagen ${indice + 1} del ejercicio. Su descripción aparece después de responder." id="quiz-img">
        </figure>
        <div>
          <p class="quiz__pregunta" id="quiz-pregunta" tabindex="-1">¿Qué crees que es esta imagen?</p>
          <div class="opciones" role="group" aria-labelledby="quiz-pregunta">
            ${OPCIONES.map((o) => `<button class="opcion" type="button" data-op="${o.id}">${o.label}<span aria-hidden="true">→</span></button>`).join("")}
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
    const fig = $("#quiz-figura");
    fig.classList.add("revelando");
    $("#quiz-img").alt = `${reg.titulo}. ${reg.fecha}.`;
    barra.style.width = `${((indice + 1) / QUIZ.length) * 100}%`;
    const ultimo = indice === QUIZ.length - 1;
    const zona = $("#quiz-revelacion");
    zona.innerHTML = `
      <div class="revelacion" style="animation-delay:${reducirMovimiento() ? 0 : 0.5}s">
        <p class="revelacion__resultado ${res.clave === "no" ? "no" : ""}">${esc(res.texto)}</p>
        <p class="mono">Clasificación documentada</p>
        <p class="revelacion__clase">${esc(item.clasificacion)}</p>
        <dl>
          <div><dt>Explicación</dt><dd>${esc(item.explicacion)}</dd></div>
          <div><dt>Pistas que pueden engañar</dt><dd>${esc(item.pistas)}</dd></div>
          <div><dt>Fuente disponible</dt><dd>${esc(item.fuente)} · <button class="btn-texto" type="button" data-ver="${esc(reg.id)}">Ver ficha</button></dd></div>
          <div><dt>Por qué verificar</dt><dd>Mirar no basta: la procedencia —quién la hizo, cuándo y quién la conserva— es lo que permite clasificar una imagen.</dd></div>
        </dl>
        <button class="btn btn--rojo" type="button" id="quiz-siguiente">${ultimo ? "Ver resumen" : "Siguiente imagen"}</button>
      </div>`;
    $("#quiz-siguiente").focus({ preventScroll: true });
  }

  function resumen() {
    paso.textContent = "Resumen";
    barra.style.width = "100%";
    const cuenta = (k) => respuestas.filter((r) => r.res.clave === k).length;
    cuerpo.innerHTML = `
      <div class="resumen">
        <p class="resumen__frase" tabindex="-1" id="quiz-final">No basta con mirar. <span>Hay que investigar.</span></p>
        <p>Coincidencias: <strong>${cuenta("ok")}</strong> · Parcialmente correctas: <strong>${cuenta("parcial")}</strong> · No coincidentes: <strong>${cuenta("no")}</strong> · Dudas: <strong>${cuenta("duda")}</strong>. El resultado no mide tu capacidad para detectar falsificaciones: muestra lo difícil que es clasificar una imagen sin conocer su origen.</p>
        <ol>
          ${respuestas.map(({ item, op, res }) => {
            const reg = registroPorId(item.registro);
            const elegida = OPCIONES.find((o) => o.id === op).label;
            return `<li><img src="${img(reg.img, "sm")}" alt=""><div><span class="mono">${esc(res.texto)}</span>${esc(item.clasificacion)}<br><small>Tu respuesta: ${esc(elegida)}</small></div></li>`;
          }).join("")}
        </ol>
        <div class="resumen__acciones">
          <button class="btn btn--rojo" type="button" id="quiz-reiniciar">Repetir el ejercicio</button>
          <a class="btn btn--linea" href="#archivo">Investigar en el archivo</a>
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

  // «Descubrir la verdad» lleva al ejercicio y lo deja listo
  document.querySelectorAll("[data-iniciar-quiz]").forEach((a) => a.addEventListener("click", () => {
    if (indice >= QUIZ.length || respuestas.length === QUIZ.length) reiniciar(false);
    setTimeout(() => $("#quiz-pregunta")?.focus({ preventScroll: true }), reducirMovimiento() ? 0 : 700);
  }));
}
