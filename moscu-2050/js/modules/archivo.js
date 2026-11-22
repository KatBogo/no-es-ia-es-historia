/**
 * Archivo de la memoria: galería de registros VERIFICADOS, buscador, categorías,
 * línea de tiempo, ficha ampliada y panel «¿Cómo se verificó esta imagen?».
 * Los casos de estudio (material no verificado o reconstruido) no aparecen en la
 * galería; solo se abren desde el ejercicio, el comparador o la campaña, y su
 * ficha lo indica de forma visible.
 */
import { $, $$, esc, normalizar, img, registroPorId, abrirDialogo, copiar, toast } from "../utils.js?v=20261122b";
import { ARCHIVO, CATEGORIAS, urlCommons } from "../data/registros.js?v=20261122b";
import { CONTRASTE, CASOS } from "../data/verificacion.js?v=20261122b";
import { t, LANG } from "../i18n.js?v=20261122b";
import { coleccion } from "./coleccion.js?v=20261122b";

const filtro = { q: "", categoria: "", decada: "" };
const POR_PAGINA = 12; // 4 × 3
let visibles = [];
let pagina = 1;

const decadaDe = (r) => (r.anio == null ? "sin-fecha" : String(Math.floor(r.anio / 10) * 10));
const etiquetaDecada = (d) => (d === "sin-fecha" ? t("sinFecha") : LANG === "ru" ? `${d}-е` : d);
const categoriaLabel = (id) => (CATEGORIAS.find((c) => c.id === id) || {}).label || id;
/** Sello visible del estado: verificado, reconstrucción o no verificado. */
const sello = (r) => {
  if (!r.caso) return `<span class="estado estado--documentada"><i aria-hidden="true"></i>${t("verificado")}</span>`;
  if (r.estado === "reconstruccion") return `<span class="estado estado--reconstruccion"><i aria-hidden="true"></i>${t("reconstruccionCorto")}</span>`;
  return `<span class="estado estado--conflicto"><i aria-hidden="true"></i>${t("noVerificadoCorto")}</span>`;
};

function coincide(r) {
  if (filtro.categoria && r.categoria !== filtro.categoria) return false;
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
        <img src="${img(r.img, "sm")}" alt="${esc(r.titulo)}. ${esc(r.fecha)}. ${esc(r.ubicacion)}." loading="lazy" decoding="async">
        <span class="tarjeta__tipo">${esc(r.tipo)}</span>
        <span class="tarjeta__hover" aria-hidden="true">${esc(r.fecha)}<br>${esc(nombreArchivo)}</span>
      </button>
      <div class="tarjeta__cuerpo">
        <p class="tarjeta__meta"><span>${esc(categoriaLabel(r.categoria))}</span><span>${r.anio ?? t("sf")}</span></p>
        <h3 class="tarjeta__titulo">${esc(r.titulo)}</h3>
        <p class="tarjeta__lugar">${esc(r.ubicacion)}</p>
        <p class="tarjeta__fuente">${esc(r.institucion)}</p>
        <div class="tarjeta__pie">
          ${sello(r)}
          <div class="tarjeta__botones">
            <button class="btn-texto" type="button" data-accion="ampliar">${t("ampliar")}</button>
            <button class="btn-texto" type="button" data-accion="verificacion">${t("comoVerifico")}</button>
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
  const cats = $("#categorias");
  const tiempo = $("#linea-tiempo");

  cats.innerHTML = [{ id: "", label: t("todas") }, ...CATEGORIAS]
    .map((c) => `<button type="button" class="chip" data-cat="${c.id}" aria-pressed="${c.id === ""}">${esc(c.label)}</button>`).join("");

  const decadas = [...new Set(ARCHIVO.map(decadaDe))].sort((a, b) => (a === "sin-fecha" ? 1 : b === "sin-fecha" ? -1 : a - b));
  const conteo = (d) => ARCHIVO.filter((r) => decadaDe(r) === d).length;
  tiempo.innerHTML = `<button type="button" class="decada" data-decada="" aria-pressed="true">${t("todas")}<span class="decada__barra" style="--n:4" aria-hidden="true"></span></button>` +
    decadas.map((d) => `<button type="button" class="decada" data-decada="${d}" aria-pressed="false" aria-label="${t("decadaAria", etiquetaDecada(d), conteo(d))}">${etiquetaDecada(d)}<span class="decada__barra" style="--n:${conteo(d)}" aria-hidden="true"></span></button>`).join("");

  const paginador = $("#paginacion");

  // nuevaBusqueda = true cuando cambia un filtro: vuelve a la página 1
  const pintar = (nuevaBusqueda = true) => {
    if (nuevaBusqueda) { visibles = ARCHIVO.filter(coincide); pagina = 1; }
    const n = visibles.length;
    const paginas = Math.max(1, Math.ceil(n / POR_PAGINA));
    pagina = Math.min(pagina, paginas);
    const desde = (pagina - 1) * POR_PAGINA;
    galeria.innerHTML = visibles.slice(desde, desde + POR_PAGINA).map(tarjeta).join("");
    resultados.textContent = n === ARCHIVO.length ? t("nRegistros", n) : t("nDeTotal", n, ARCHIVO.length);
    vacio.hidden = n > 0;
    galeria.hidden = n === 0;
    pintarPaginador(paginas);
    prepararImagenes();
  };

  function pintarPaginador(paginas) {
    if (!paginador) return;
    paginador.hidden = paginas <= 1;
    if (paginas <= 1) { paginador.innerHTML = ""; return; }
    const numeros = Array.from({ length: paginas }, (_, i) => i + 1).map((i) =>
      `<button type="button" class="pagina__num" data-pagina="${i}" aria-label="${t("irPagina", i)}" ${i === pagina ? 'aria-current="page"' : ""}>${i}</button>`).join("");
    paginador.innerHTML = `
      <button type="button" class="btn-texto" data-pagina="${pagina - 1}" ${pagina === 1 ? "disabled" : ""}>${t("pagAnterior")}</button>
      <div class="pagina__numeros">${numeros}</div>
      <p class="mono pagina__estado" aria-live="polite">${t("pagina", pagina, paginas)}</p>
      <button type="button" class="btn-texto" data-pagina="${pagina + 1}" ${pagina === paginas ? "disabled" : ""}>${t("pagSiguiente")}</button>`;
  }

  paginador?.addEventListener("click", (e) => {
    const b = e.target.closest("[data-pagina]"); if (!b || b.disabled) return;
    pagina = Number(b.dataset.pagina);
    pintar(false);
    $(".resultados-barra").scrollIntoView({ block: "start" });
    $("#galeria .tarjeta__media")?.focus({ preventScroll: true });
  });

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
    Object.assign(filtro, { q: "", categoria: "", decada: "" });
    buscar.value = "";
    marcar(cats, "data-cat", ""); marcar(tiempo, "data-decada", "");
    pintar();
  };
  $("#limpiar").addEventListener("click", limpiar);
  $("#vacio-limpiar").addEventListener("click", () => { limpiar(); buscar.focus(); });

  galeria.addEventListener("click", (e) => {
    const b = e.target.closest("[data-accion]"); if (!b) return;
    const id = b.closest(".tarjeta").dataset.id;
    if (b.dataset.accion === "ampliar") abrirRegistro(id, b);
    if (b.dataset.accion === "verificacion") abrirVerificacion(id, b);
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
  iniciarVerificacion();
}

/* --------------------------- Ficha ampliada --------------------------- */
let actual = null;
let dialogo;

function enlacesFuente(r) {
  return `<div class="procedencia__enlaces">
      ${r.original ? `<a href="${esc(r.original)}" target="_blank" rel="noopener">${t("catalogo")}</a>` : ""}
      <a href="${urlCommons(r.commons)}" target="_blank" rel="noopener">${t("fichaCommons")}</a>
    </div>`;
}

function pintarFicha(id) {
  const r = registroPorId(id);
  if (!r) return;
  actual = id;
  const pos = visibles.findIndex((x) => x.id === id);
  $("#mr-codigo").textContent = `${r.id} · ${pos >= 0 ? `${pos + 1} / ${visibles.length}` : t("fueraFiltro")}`;
  $("#mr-prev").disabled = pos <= 0;
  $("#mr-sig").disabled = pos < 0 || pos >= visibles.length - 1;
  const guardado = coleccion.tiene(id);
  const licencia = r.licencia.url ? `<a href="${r.licencia.url}" target="_blank" rel="noopener">${esc(r.licencia.nombre)}</a>` : esc(r.licencia.nombre);

  $("#mr-cuerpo").innerHTML = `
    ${r.caso ? `<p class="caso-banner" role="note"><strong class="mono">${t("casoBanner")}</strong> ${esc(CASOS[r.id])}</p>` : ""}
    <div class="ficha">
      <figure class="ficha__media">
        <img src="${img(r.img)}" alt="${esc(r.titulo)}. ${esc(r.descripcion)}">
        <figcaption>${esc(r.autor)} · ${esc(r.institucion)} · ${licencia}</figcaption>
      </figure>
      <div class="ficha__info">
        <div class="ficha__tags">${sello(r)}<span class="mono">${esc(categoriaLabel(r.categoria))}</span><span class="mono">${esc(r.tipo)}</span></div>
        <h2 class="ficha__titulo" id="mr-titulo">${esc(r.titulo)}</h2>
        <p>${esc(r.descripcion)}</p>
        <dl class="ficha__datos">
          <div><dt>${t("fecha")}</dt><dd>${esc(r.fecha)}</dd></div>
          <div><dt>${t("ubicacion")}</dt><dd>${esc(r.ubicacion)}</dd></div>
          <div class="ancho"><dt>${t("autor")}</dt><dd>${esc(r.autor)}</dd></div>
          <div class="ancho"><dt>${t("institucion")}</dt><dd>${esc(r.institucion)}</dd></div>
          <div class="ancho"><dt>${t("licencia")}</dt><dd>${licencia}</dd></div>
        </dl>
        <section><h3>${t("intervenciones")}</h3><p class="intervencion">${esc(r.intervenciones)}</p></section>
        <button class="btn btn--verificacion" type="button" data-ficha="verificacion" aria-haspopup="dialog">
          <span class="btn__icono" aria-hidden="true">${r.caso ? "!" : "✓"}</span>${r.caso ? t("porQueNo") : t("comoVerifico")}
        </button>
        ${enlacesFuente(r)}
        <div class="ficha__acciones">
          <button class="btn ${guardado ? "btn--linea" : "btn--rojo"}" type="button" data-ficha="guardar" aria-pressed="${guardado}">${guardado ? t("quitarColeccion") : t("guardarColeccion")}</button>
          <button class="btn btn--linea" type="button" data-ficha="copiar">${t("copiarEnlace")}</button>
        </div>
      </div>
    </div>`;
  dialogo.scrollTop = 0;
}

function iniciarFicha() {
  dialogo = $("#modal-registro");
  const mover = (delta) => {
    const pos = visibles.findIndex((x) => x.id === actual);
    const sig = visibles[pos + delta];
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
    if (b.dataset.ficha === "verificacion") abrirVerificacion(actual, b);
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

/** Abre la ficha de un registro (o de un caso de estudio). Exportada para otras secciones. */
export function abrirRegistro(id, origen) {
  if (!registroPorId(id)) return;
  pintarFicha(id);
  if (location.hash !== "#registro/" + id) history.replaceState(null, "", "#registro/" + id);
  abrirDialogo(dialogo, origen || document.activeElement);
}

/* ------------------- Panel «¿Cómo se verificó esta imagen?» ------------------- */
let panel;

function paso(num, titulo, contenido, extra = "") {
  return `<li class="vpaso ${extra}" style="--i:${num}">
      <span class="vpaso__num mono" aria-hidden="true">${String(num).padStart(2, "0")}</span>
      <div class="vpaso__cuerpo"><h3 class="vpaso__titulo">${titulo}</h3>${contenido}</div>
    </li>`;
}
const lista = (arr) => `<ul class="vlista">${arr.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>`;

function pintarVerificacion(id) {
  const r = registroPorId(id);
  $("#mv-titulo").textContent = r.titulo;
  $("#mv-codigo").textContent = `${t("panelTitulo")} · ${r.id}`;
  const fuente = `<p><strong>${esc(r.institucion)}</strong></p><p>${t("autor")}: ${esc(r.autor)} · ${t("licencia")}: ${esc(r.licencia.nombre)}</p>${enlacesFuente(r)}`;
  const contexto = `<p><strong>${esc(r.fecha)}</strong> · ${esc(r.ubicacion)}</p><p>${esc(r.descripcion)}</p>`;
  let html;
  if (r.caso) {
    html =
      paso(1, t("v1"), fuente) +
      paso(2, t("v2"), contexto) +
      paso(3, t("v3"), r.pendiente.length ? `<p class="vsub">${t("discrepancias")}</p>${lista(r.pendiente)}` : "") +
      paso(4, t("v4"), `<p>${esc(CASOS[r.id])}</p><p class="vnota">${t("usoCaso")}</p>`) +
      paso(5, t("v5"), `<p class="vresultado vresultado--no">${t("noVerificado")}</p><p class="vnota">${t("casoBanner")}</p>`, "vpaso--resultado");
  } else {
    html =
      paso(1, t("v1"), fuente) +
      paso(2, t("v2"), contexto) +
      paso(3, t("v3"), `<p>${esc(CONTRASTE[r.id] || "")}</p>${r.pendiente.length ? `<p class="vsub">${t("discrepancias")}</p>${lista(r.pendiente)}` : ""}`) +
      paso(4, t("v4"), `<p class="vsub">${t("comprobaciones")}</p>${lista(r.verificado)}<p class="vnota">${t("alcance")}</p>`) +
      paso(5, t("v5"), `<p class="vresultado">${t("verificadoMayus")}</p><p class="vnota">${t("verificadoDoc")}</p>`, "vpaso--resultado");
  }
  $("#mv-pasos").innerHTML = html;
  panel.scrollTop = 0;
}

function iniciarVerificacion() {
  panel = $("#modal-verificacion");
}

/** Abre el panel de verificación de un registro concreto. */
export function abrirVerificacion(id, origen) {
  if (!registroPorId(id)) return;
  pintarVerificacion(id);
  abrirDialogo(panel, origen || document.activeElement);
}
