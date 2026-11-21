/**
 * Archivo de la memoria: galería, buscador, categorías, estado, línea de tiempo
 * y ficha ampliada (modal) con procedencia.
 */
import { $, $$, esc, normalizar, img, registroPorId, abrirDialogo, copiar, toast, etiquetaEstado } from "../utils.js";
import { REGISTROS, CATEGORIAS, ESTADOS, urlCommons } from "../data/registros.js";
import { t, LANG } from "../i18n.js";
import { coleccion } from "./coleccion.js";

const filtro = { q: "", categoria: "", estado: "", decada: "" };
let visibles = [];

const decadaDe = (r) => (r.anio == null ? "sin-fecha" : String(Math.floor(r.anio / 10) * 10));
const etiquetaDecada = (d) => (d === "sin-fecha" ? t("sinFecha") : LANG === "ru" ? `${d}-е` : `${d}`);
const categoriaLabel = (id) => (CATEGORIAS.find((c) => c.id === id) || {}).label || id;

function coincide(r) {
  if (filtro.categoria && r.categoria !== filtro.categoria) return false;
  if (filtro.estado && r.estado !== filtro.estado) return false;
  if (filtro.decada && decadaDe(r) !== filtro.decada) return false;
  if (filtro.q) {
    const texto = normalizar([r.id, r.titulo, r.descripcion, r.ubicacion, r.fecha, r.anio, r.autor, r.institucion, r.tipo, categoriaLabel(r.categoria)].join(" "));
    return normalizar(filtro.q).split(/\s+/).filter(Boolean).every((p) => texto.includes(p));
  }
  return true;
}

function tarjeta(r, i) {
  const guardado = coleccion.tiene(r.id);
  const nombreArchivo = r.commons.replace(/^File:/, "");
  return `<li>
    <article class="tarjeta cargando" style="--delay:${Math.min(i, 8) * 60}ms" data-id="${esc(r.id)}">
      <button class="tarjeta__media" type="button" data-accion="ampliar" aria-label="${t("ampliarDe")}${esc(r.titulo)}">
        <img src="${img(r.img, "sm")}" alt="${esc(r.titulo)}. ${esc(r.fecha)}." loading="lazy" decoding="async">
        <span class="tarjeta__tipo">${esc(r.tipo)}</span>
        <span class="tarjeta__hover" aria-hidden="true">${esc(r.fecha)}<br>${esc(nombreArchivo)}</span>
      </button>
      <div class="tarjeta__cuerpo">
        <p class="tarjeta__meta"><span>${esc(categoriaLabel(r.categoria))}</span><span>${r.anio ?? t("sf")}</span></p>
        <h3 class="tarjeta__titulo">${esc(r.titulo)}</h3>
        <p class="tarjeta__lugar">${esc(r.ubicacion)}</p>
        <p class="tarjeta__fuente">${esc(r.institucion)}</p>
        <div class="tarjeta__pie">
          ${etiquetaEstado(r.estado, ESTADOS)}
          <div class="tarjeta__botones">
            <button class="btn-texto" type="button" data-accion="ampliar">${t("ampliar")}</button>
            <button class="btn-texto" type="button" data-accion="procedencia">${t("verProcedencia")}</button>
            <button class="btn-texto guardar" type="button" data-accion="guardar" aria-pressed="${guardado}">${guardado ? t("guardado") : t("guardar")}</button>
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
  cats.innerHTML = [{ id: "", label: t("todas") }, ...CATEGORIAS]
    .map((c) => `<button type="button" class="chip" data-cat="${c.id}" aria-pressed="${c.id === ""}">${esc(c.label)}</button>`).join("");
  selEstado.insertAdjacentHTML("beforeend", Object.entries(ESTADOS).map(([k, v]) => `<option value="${k}">${esc(v.label)}</option>`).join(""));

  const decadas = [...new Set(REGISTROS.map(decadaDe))].sort((a, b) => (a === "sin-fecha" ? 1 : b === "sin-fecha" ? -1 : a - b));
  const conteo = (d) => REGISTROS.filter((r) => decadaDe(r) === d).length;
  tiempo.innerHTML = `<button type="button" class="decada" data-decada="" aria-pressed="true">${t("todas")}<span class="decada__barra" style="--n:4" aria-hidden="true"></span></button>` +
    decadas.map((d) => `<button type="button" class="decada" data-decada="${d}" aria-pressed="false" aria-label="${t("decadaAria", etiquetaDecada(d), conteo(d))}">${etiquetaDecada(d)}<span class="decada__barra" style="--n:${conteo(d)}" aria-hidden="true"></span></button>`).join("");

  const pintar = () => {
    visibles = REGISTROS.filter(coincide);
    galeria.innerHTML = visibles.map(tarjeta).join("");
    const n = visibles.length;
    resultados.textContent = n === REGISTROS.length ? t("nRegistros", n) : t("nDeTotal", n, REGISTROS.length);
    vacio.hidden = n > 0;
    galeria.hidden = n === 0;
    prepararImagenes();
  };

  // Estado de carga y error de cada imagen + animación de aparición
  const io = new IntersectionObserver((ents) => ents.forEach((en) => {
    if (en.isIntersecting) { en.target.classList.add("visible"); io.unobserve(en.target); }
  }), { threshold: 0.08 });
  function prepararImagenes() {
    $$(".tarjeta", galeria).forEach((tj) => {
      const im = $("img", tj);
      const listo = () => tj.classList.remove("cargando");
      if (im.complete && im.naturalWidth) listo();
      else {
        im.addEventListener("load", listo, { once: true });
        im.addEventListener("error", () => { tj.classList.remove("cargando"); tj.classList.add("error"); }, { once: true });
      }
      io.observe(tj);
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
    $$(".tarjeta", galeria).forEach((tj) => {
      const g = $(".guardar", tj), on = coleccion.tiene(tj.dataset.id);
      g.setAttribute("aria-pressed", String(on)); g.textContent = on ? t("guardado") : t("guardar");
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
  catch (err) { console.error(err); $("#error-archivo").hidden = false; resultados.textContent = t("errorArchivo"); }

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
  $("#mr-codigo").textContent = `${r.id} · ${pos >= 0 ? `${pos + 1} / ${lista.length}` : t("fueraFiltro")}`;
  $("#mr-prev").disabled = pos <= 0;
  $("#mr-sig").disabled = pos < 0 || pos >= lista.length - 1;
  const guardado = coleccion.tiene(id);
  const licencia = r.licencia.url ? `<a href="${r.licencia.url}" target="_blank" rel="noopener">${esc(r.licencia.nombre)}</a>` : esc(r.licencia.nombre);
  const li = (arr) => (arr && arr.length ? arr.map((x) => `<li>${esc(x)}</li>`).join("") : `<li>${t("nadaPendiente")}</li>`);

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
          <div><dt>${t("fecha")}</dt><dd>${esc(r.fecha)}</dd></div>
          <div><dt>${t("ubicacion")}</dt><dd>${esc(r.ubicacion)}</dd></div>
          <div class="ancho"><dt>${t("autor")}</dt><dd>${esc(r.autor)}</dd></div>
          <div class="ancho"><dt>${t("institucion")}</dt><dd>${esc(r.institucion)}</dd></div>
          <div class="ancho"><dt>${t("licencia")}</dt><dd>${licencia}</dd></div>
        </dl>
        <section class="procedencia" id="mr-procedencia" tabindex="-1" aria-labelledby="mr-proc-t">
          <h3 id="mr-proc-t">${t("procedenciaTitulo")}</h3>
          <ul class="lista lista--ok">${li(r.verificado)}</ul>
          <div class="procedencia__enlaces">
            <a href="${urlCommons(r.commons)}" target="_blank" rel="noopener">${t("fichaCommons")}</a>
            ${r.original ? `<a href="${esc(r.original)}" target="_blank" rel="noopener">${t("catalogo")}</a>` : ""}
          </div>
        </section>
        <section><h3>${t("pendiente")}</h3><ul class="lista lista--pend">${li(r.pendiente)}</ul></section>
        <section><h3>${t("intervenciones")}</h3><p class="intervencion">${esc(r.intervenciones)}</p></section>
        <div class="ficha__acciones">
          <button class="btn ${guardado ? "btn--linea" : "btn--rojo"}" type="button" data-ficha="guardar" aria-pressed="${guardado}">${guardado ? t("quitarColeccion") : t("guardarColeccion")}</button>
          <button class="btn btn--linea" type="button" data-ficha="copiar">${t("copiarEnlace")}</button>
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
    if (b.dataset.ficha === "copiar") toast((await copiar(location.href)) ? t("enlaceFicha") : t("noCopiado"));
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
