/**
 * Archivo de la memoria: galería, buscador, categorías, estado, línea de tiempo
 * y ficha ampliada (modal) con procedencia.
 */
import { $, $$, esc, normalizar, img, registroPorId, abrirDialogo, copiar, toast, etiquetaEstado } from "../utils.js";
import { REGISTROS, CATEGORIAS, ESTADOS, urlCommons } from "../data/registros.js";
import { coleccion } from "./coleccion.js";

const filtro = { q: "", categoria: "", estado: "", decada: "" };
let visibles = [];

const decadaDe = (r) => (r.anio == null ? "sin-fecha" : String(Math.floor(r.anio / 10) * 10));
const etiquetaDecada = (d) => (d === "sin-fecha" ? "Sin fecha" : `${d}s`);
const categoriaLabel = (id) => (CATEGORIAS.find((c) => c.id === id) || {}).label || id;

function coincide(r) {
  if (filtro.categoria && r.categoria !== filtro.categoria) return false;
  if (filtro.estado && r.estado !== filtro.estado) return false;
  if (filtro.decada && decadaDe(r) !== filtro.decada) return false;
  if (filtro.q) {
    const texto = normalizar([r.id, r.titulo, r.descripcion, r.ubicacion, r.fecha, r.anio, r.autor, r.institucion, r.tipo, categoriaLabel(r.categoria)].join(" "));
    return normalizar(filtro.q).split(/\s+/).filter(Boolean).every((t) => texto.includes(t));
  }
  return true;
}

function tarjeta(r, i) {
  const guardado = coleccion.tiene(r.id);
  const nombreArchivo = r.commons.replace(/^File:/, "");
  return `<li>
    <article class="tarjeta cargando" style="--delay:${Math.min(i, 8) * 60}ms" data-id="${esc(r.id)}">
      <button class="tarjeta__media" type="button" data-accion="ampliar" aria-label="Ampliar: ${esc(r.titulo)}">
        <img src="${img(r.img, "sm")}" alt="${esc(r.titulo)}. ${esc(r.fecha)}." loading="lazy" decoding="async">
        <span class="tarjeta__tipo">${esc(r.tipo)}</span>
        <span class="tarjeta__hover" aria-hidden="true">${esc(r.fecha)}<br>${esc(nombreArchivo)}</span>
      </button>
      <div class="tarjeta__cuerpo">
        <p class="tarjeta__meta"><span>${esc(categoriaLabel(r.categoria))}</span><span>${r.anio ?? "s. f."}</span></p>
        <h3 class="tarjeta__titulo">${esc(r.titulo)}</h3>
        <p class="tarjeta__lugar">${esc(r.ubicacion)}</p>
        <p class="tarjeta__fuente">${esc(r.institucion)}</p>
        <div class="tarjeta__pie">
          ${etiquetaEstado(r.estado, ESTADOS)}
          <div class="tarjeta__botones">
            <button class="btn-texto" type="button" data-accion="ampliar">Ampliar</button>
            <button class="btn-texto" type="button" data-accion="procedencia">Ver procedencia</button>
            <button class="btn-texto guardar" type="button" data-accion="guardar" aria-pressed="${guardado}">${guardado ? "Guardado" : "Guardar"}</button>
          </div>
        </div>
      </div>
    </article>
  </li>`;
}

export function iniciarArchivo() {
  const galeria = $("#galeria");
  const resultados = $("#resultados");
  const vacio = $("#vacio");
  const buscar = $("#buscar");
  const selEstado = $("#estado");
  const cats = $("#categorias");
  const tiempo = $("#linea-tiempo");

  // Controles
  cats.innerHTML = [{ id: "", label: "Todas" }, ...CATEGORIAS]
    .map((c) => `<button type="button" class="chip" data-cat="${c.id}" aria-pressed="${c.id === ""}">${esc(c.label)}</button>`).join("");
  selEstado.insertAdjacentHTML("beforeend", Object.entries(ESTADOS).map(([k, v]) => `<option value="${k}">${esc(v.label)}</option>`).join(""));

  const decadas = [...new Set(REGISTROS.map(decadaDe))].sort((a, b) => (a === "sin-fecha" ? 1 : b === "sin-fecha" ? -1 : a - b));
  const conteo = (d) => REGISTROS.filter((r) => decadaDe(r) === d).length;
  tiempo.innerHTML = `<button type="button" class="decada" data-decada="" aria-pressed="true">Todas<span class="decada__barra" style="--n:4" aria-hidden="true"></span></button>` +
    decadas.map((d) => `<button type="button" class="decada" data-decada="${d}" aria-pressed="false" aria-label="${etiquetaDecada(d)}: ${conteo(d)} registros">${etiquetaDecada(d)}<span class="decada__barra" style="--n:${conteo(d)}" aria-hidden="true"></span></button>`).join("");

  const pintar = () => {
    visibles = REGISTROS.filter(coincide);
    galeria.innerHTML = visibles.map(tarjeta).join("");
    const n = visibles.length;
    resultados.textContent = n === REGISTROS.length ? `${n} registros en el archivo` : `${n} de ${REGISTROS.length} registros`;
    vacio.hidden = n > 0;
    galeria.hidden = n === 0;
    prepararImagenes();
  };

  // Estado de carga y error de cada imagen + animación de aparición
  const io = new IntersectionObserver((ents) => ents.forEach((en) => {
    if (en.isIntersecting) { en.target.classList.add("visible"); io.unobserve(en.target); }
  }), { threshold: 0.08 });
  function prepararImagenes() {
    $$(".tarjeta", galeria).forEach((t) => {
      const im = $("img", t);
      const listo = () => t.classList.remove("cargando");
      if (im.complete && im.naturalWidth) listo();
      else {
        im.addEventListener("load", listo, { once: true });
        im.addEventListener("error", () => { t.classList.remove("cargando"); t.classList.add("error"); }, { once: true });
      }
      io.observe(t);
    });
  }

  const marcar = (contenedor, attr, valor) => $$(`[${attr}]`, contenedor).forEach((b) => b.setAttribute("aria-pressed", String(b.getAttribute(attr) === valor)));

  buscar.addEventListener("input", () => { filtro.q = buscar.value.trim(); pintar(); });
  selEstado.addEventListener("change", () => { filtro.estado = selEstado.value; pintar(); });
  cats.addEventListener("click", (e) => {
    const b = e.target.closest("[data-cat]"); if (!b) return;
    filtro.categoria = b.dataset.cat; marcar(cats, "data-cat", filtro.categoria); pintar();
  });
  tiempo.addEventListener("click", (e) => {
    const b = e.target.closest("[data-decada]"); if (!b) return;
    filtro.decada = filtro.decada === b.dataset.decada ? "" : b.dataset.decada;
    marcar(tiempo, "data-decada", filtro.decada); pintar();
  });
  const limpiar = () => {
    Object.assign(filtro, { q: "", categoria: "", estado: "", decada: "" });
    buscar.value = ""; selEstado.value = "";
    marcar(cats, "data-cat", ""); marcar(tiempo, "data-decada", "");
    pintar();
  };
  $("#limpiar").addEventListener("click", limpiar);
  $("#vacio-limpiar").addEventListener("click", () => { limpiar(); buscar.focus(); });

  galeria.addEventListener("click", (e) => {
    const b = e.target.closest("[data-accion]"); if (!b) return;
    const id = b.closest(".tarjeta").dataset.id;
    if (b.dataset.accion === "ampliar") abrirRegistro(id, b);
    if (b.dataset.accion === "procedencia") abrirRegistro(id, b, true);
    if (b.dataset.accion === "guardar") coleccion.alternar(id);
  });

  coleccion.alCambiar(() => {
    $$(".tarjeta", galeria).forEach((t) => {
      const g = $(".guardar", t), on = coleccion.tiene(t.dataset.id);
      g.setAttribute("aria-pressed", String(on)); g.textContent = on ? "Guardado" : "Guardar";
    });
    if (actual) {
      // Repinta la ficha abierta sin perder la posición ni el foco
      const y = dialogo.scrollTop;
      const enfocado = document.activeElement && document.activeElement.dataset.ficha;
      pintarFicha(actual);
      dialogo.scrollTop = y;
      if (enfocado) $(`[data-ficha="${enfocado}"]`, dialogo)?.focus({ preventScroll: true });
    }
  });

  try { pintar(); }
  catch (err) { console.error(err); $("#error-archivo").hidden = false; resultados.textContent = "Error al cargar el archivo"; }

  iniciarFicha();
}

/* --------------------------- Ficha ampliada --------------------------- */
let actual = null;
let dialogo;

function pintarFicha(id, verProcedencia = false) {
  const r = registroPorId(id);
  if (!r) return;
  actual = id;
  const lista = visibles.length ? visibles : REGISTROS;
  const pos = lista.findIndex((x) => x.id === id);
  $("#mr-codigo").textContent = `${r.id} · ${pos >= 0 ? `${pos + 1} / ${lista.length}` : "fuera del filtro actual"}`;
  $("#mr-prev").disabled = pos <= 0;
  $("#mr-sig").disabled = pos < 0 || pos >= lista.length - 1;
  const guardado = coleccion.tiene(id);
  const licencia = r.licencia.url ? `<a href="${r.licencia.url}" target="_blank" rel="noopener">${esc(r.licencia.nombre)}</a>` : esc(r.licencia.nombre);
  const li = (arr) => (arr && arr.length ? arr.map((t) => `<li>${esc(t)}</li>`).join("") : "<li>Nada pendiente en los datos consultados.</li>");

  $("#mr-cuerpo").innerHTML = `
    <div class="ficha">
      <figure class="ficha__media">
        <img src="${img(r.img)}" alt="${esc(r.titulo)}. ${esc(r.descripcion)}">
        <figcaption>${esc(r.autor)} · ${esc(r.institucion)} · ${licencia}</figcaption>
      </figure>
      <div class="ficha__info">
        <div class="ficha__tags">${etiquetaEstado(r.estado, ESTADOS)}<span class="mono">${esc(categoriaLabel(r.categoria))}</span><span class="mono">${esc(r.tipo)}</span></div>
        <h2 class="ficha__titulo" id="mr-titulo">${esc(r.titulo)}</h2>
        <p>${esc(r.descripcion)}</p>
        <dl class="ficha__datos">
          <div><dt>Fecha</dt><dd>${esc(r.fecha)}</dd></div>
          <div><dt>Ubicación</dt><dd>${esc(r.ubicacion)}</dd></div>
          <div class="ancho"><dt>Autor o autora</dt><dd>${esc(r.autor)}</dd></div>
          <div class="ancho"><dt>Institución o procedencia</dt><dd>${esc(r.institucion)}</dd></div>
          <div class="ancho"><dt>Licencia</dt><dd>${licencia}</dd></div>
        </dl>
        <section class="procedencia" id="mr-procedencia" tabindex="-1" aria-labelledby="mr-proc-t">
          <h3 id="mr-proc-t">Procedencia y fuentes consultables</h3>
          <ul class="lista lista--ok">${li(r.verificado)}</ul>
          <div class="procedencia__enlaces">
            <a href="${urlCommons(r.commons)}" target="_blank" rel="noopener">Ficha en Wikimedia Commons ↗</a>
            ${r.original ? `<a href="${esc(r.original)}" target="_blank" rel="noopener">Catálogo de origen ↗</a>` : ""}
          </div>
        </section>
        <section><h3>Información pendiente</h3><ul class="lista lista--pend">${li(r.pendiente)}</ul></section>
        <section><h3>Intervenciones conocidas</h3><p class="intervencion">${esc(r.intervenciones)}</p></section>
        <div class="ficha__acciones">
          <button class="btn ${guardado ? "btn--linea" : "btn--rojo"}" type="button" data-ficha="guardar" aria-pressed="${guardado}">${guardado ? "Quitar de mi colección" : "Guardar en mi colección"}</button>
          <button class="btn btn--linea" type="button" data-ficha="copiar">Copiar enlace</button>
        </div>
      </div>
    </div>`;
  if (verProcedencia) {
    const p = $("#mr-procedencia");
    requestAnimationFrame(() => { p.scrollIntoView({ block: "center" }); p.classList.add("resaltar"); p.focus({ preventScroll: true }); });
  } else {
    dialogo.scrollTop = 0;
  }
}

function iniciarFicha() {
  dialogo = $("#modal-registro");
  const mover = (delta) => {
    const lista = visibles.length ? visibles : REGISTROS;
    const pos = lista.findIndex((x) => x.id === actual);
    const sig = lista[pos + delta];
    if (sig) { pintarFicha(sig.id); history.replaceState(null, "", "#registro/" + sig.id); }
  };
  $("#mr-prev").addEventListener("click", () => mover(-1));
  $("#mr-sig").addEventListener("click", () => mover(1));
  dialogo.addEventListener("keydown", (e) => {
    if (e.target.matches("input, textarea")) return;
    if (e.key === "ArrowRight") mover(1);
    if (e.key === "ArrowLeft") mover(-1);
  });
  dialogo.addEventListener("click", async (e) => {
    const b = e.target.closest("[data-ficha]"); if (!b) return;
    if (b.dataset.ficha === "guardar") coleccion.alternar(actual);
    if (b.dataset.ficha === "copiar") toast((await copiar(location.href)) ? "Enlace de la ficha copiado" : "No se pudo copiar el enlace");
  });
  dialogo.addEventListener("cerrado", () => {
    actual = null;
    if (location.hash.startsWith("#registro/")) history.replaceState(null, "", "#archivo");
  });
  // Enlace directo: …/#registro/MSK-1941-22
  const abrirDesdeHash = () => {
    const m = location.hash.match(/^#registro\/(.+)$/);
    if (m && registroPorId(decodeURIComponent(m[1]))) abrirRegistro(decodeURIComponent(m[1]), $("#buscar"));
  };
  window.addEventListener("hashchange", abrirDesdeHash);
  abrirDesdeHash();
}

/** Abre la ficha de un registro. Exportada para otras secciones. */
export function abrirRegistro(id, origen, verProcedencia = false) {
  if (!registroPorId(id)) return;
  pintarFicha(id, verProcedencia);
  if (location.hash !== "#registro/" + id) history.replaceState(null, "", "#registro/" + id);
  abrirDialogo(dialogo, origen || document.activeElement);
  if (verProcedencia) {
    const p = $("#mr-procedencia");
    requestAnimationFrame(() => { p.scrollIntoView({ block: "center" }); p.focus({ preventScroll: true }); });
  }
}
