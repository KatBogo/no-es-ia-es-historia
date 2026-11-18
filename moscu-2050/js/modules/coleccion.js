/**
 * «Mi colección»: selección de registros y descarga en alta resolución.
 * La selección se guarda en sessionStorage (solo esta pestaña); si no está disponible, solo en memoria.
 * Las imágenes se descargan desde su archivo de origen en Wikimedia Commons, en la mayor
 * resolución disponible (máx. 3840 px). Si Commons no responde, se usa la copia de esta web.
 */
import { $, $$, esc, img, slug, registroPorId, abrirDialogo, toast, descargarBlob, crearZip } from "../utils.js";

const CLAVE = "msk2050-coleccion";
const API_COMMONS = "https://commons.wikimedia.org/w/api.php";
const ANCHO_MAX = 3840;

let ids = leer();
const oyentes = new Set();

function leer() {
  try { return JSON.parse(sessionStorage.getItem(CLAVE)) || []; } catch { return []; }
}
function guardar() {
  try { sessionStorage.setItem(CLAVE, JSON.stringify(ids)); } catch { /* sin almacenamiento: se mantiene en memoria */ }
  oyentes.forEach((fn) => fn(ids));
}

export const coleccion = {
  tiene: (id) => ids.includes(id),
  alternar(id) {
    const r = registroPorId(id);
    if (ids.includes(id)) { ids = ids.filter((x) => x !== id); toast("Quitado de tu colección"); }
    else { ids = [...ids, id]; toast(`Guardado en tu colección: ${r ? r.titulo : id}`); }
    guardar();
  },
  quitar(id) { ids = ids.filter((x) => x !== id); guardar(); },
  vaciar() { ids = []; guardar(); },
  alCambiar(fn) { oyentes.add(fn); }
};

/* ---------- Alta resolución desde Commons ---------- */
const cacheAlta = new Map(); // id -> { url, ancho, alto } | null

async function resolverAlta(registros) {
  const faltan = registros.filter((r) => r.commons && !cacheAlta.has(r.id));
  for (let i = 0; i < faltan.length; i += 40) {
    const lote = faltan.slice(i, i + 40);
    try {
      const params = new URLSearchParams({
        action: "query", prop: "imageinfo", iiprop: "url|size", iiurlwidth: String(ANCHO_MAX),
        format: "json", formatversion: "2", origin: "*", titles: lote.map((r) => r.commons).join("|")
      });
      const res = await fetch(`${API_COMMONS}?${params}`);
      const j = await res.json();
      const normal = new Map((j.query?.normalized || []).map((n) => [n.from, n.to]));
      const paginas = new Map((j.query?.pages || []).map((p) => [p.title, p]));
      lote.forEach((r) => {
        const ii = paginas.get(normal.get(r.commons) || r.commons)?.imageinfo?.[0];
        if (!ii) { cacheAlta.set(r.id, null); return; }
        const escala = Math.min(1, ANCHO_MAX / ii.width);
        cacheAlta.set(r.id, { url: ii.thumburl || ii.url, ancho: Math.round(ii.width * escala), alto: Math.round(ii.height * escala) });
      });
    } catch { /* sin conexión con Commons: se usará la copia local */ }
  }
  return registros.map((r) => cacheAlta.get(r.id) || null);
}

const extension = (tipo) => ({ "image/png": "png", "image/webp": "webp", "image/gif": "gif" }[tipo] || "jpg");

async function obtenerImagen(r) {
  const [alta] = await resolverAlta([r]);
  if (alta) {
    try {
      const res = await fetch(alta.url);
      if (res.ok) { const blob = await res.blob(); return { blob, alta: true }; }
    } catch { /* se intenta con la copia local */ }
  }
  const res = await fetch(img(r.img));
  if (!res.ok) throw new Error("Imagen no disponible");
  return { blob: await res.blob(), alta: false };
}

const nombreArchivo = (r, blob) => `${r.id}_${slug(r.titulo)}.${extension(blob.type)}`;
const paginaCommons = (r) => r.commons ? `https://commons.wikimedia.org/wiki/${encodeURI(r.commons.replace(/ /g, "_"))}` : "";

function creditos(registros) {
  const lineas = [
    "NO ES IA. ES HISTORIA. · Archivo de la memoria · Moscú 2050",
    "Créditos de las imágenes descargadas",
    "Cita siempre autor, institución y licencia al reutilizar una imagen.",
    ""
  ];
  registros.forEach((r) => {
    lineas.push(
      `${r.id} · ${r.titulo}`,
      `  Fecha: ${r.fecha}`,
      `  Autor: ${r.autor}`,
      `  Institución: ${r.institucion}`,
      `  Licencia: ${r.licencia.nombre}${r.licencia.url ? ` (${r.licencia.url})` : ""}`,
      r.commons ? `  Archivo de origen: ${paginaCommons(r)}` : "",
      ""
    );
  });
  return lineas.filter((l, i, a) => l !== "" || a[i - 1] !== "").join("\r\n");
}

/* ---------- Interfaz ---------- */
export function iniciarColeccion(abrirRegistro) {
  const dialogo = $("#modal-coleccion");
  const lista = $("#coleccion-lista");
  const vacia = $("#coleccion-vacia");
  const vaciar = $("#coleccion-vaciar");
  const todo = $("#coleccion-descargar");
  let ocupado = false;

  const mostrarResoluciones = async () => {
    const regs = ids.map(registroPorId).filter(Boolean);
    const altas = await resolverAlta(regs);
    regs.forEach((r, i) => {
      const el = lista.querySelector(`[data-res="${CSS.escape(r.id)}"]`);
      if (el) el.textContent = altas[i] ? ` · ${altas[i].ancho} × ${altas[i].alto} px` : "";
    });
  };

  const pintar = () => {
    $$("[data-contador-coleccion]").forEach((c) => {
      c.textContent = ids.length;
      c.classList.remove("pulso"); void c.offsetWidth; c.classList.add("pulso");
    });
    lista.innerHTML = ids.map((id) => {
      const r = registroPorId(id);
      if (!r) return "";
      return `<li>
        <img src="${img(r.img, "sm")}" alt="" loading="lazy">
        <div><strong>${esc(r.titulo)}</strong><span class="mono">${esc(r.fecha)}<span data-res="${esc(id)}"></span></span>
          <div class="botones">
            <button class="btn-texto" type="button" data-ver="${esc(id)}">Ver ficha</button>
            <button class="btn-texto" type="button" data-descargar="${esc(id)}">Descargar</button>
            <button class="btn-texto" type="button" data-quitar="${esc(id)}">Quitar</button>
          </div>
        </div></li>`;
    }).join("");
    vacia.hidden = ids.length > 0;
    vaciar.hidden = ids.length === 0;
    todo.hidden = ids.length === 0;
    if (dialogo.open) mostrarResoluciones();
  };
  coleccion.alCambiar(pintar);
  pintar();

  const descargarUno = async (boton, id) => {
    const r = registroPorId(id);
    if (!r || boton.disabled) return;
    const txt = boton.textContent;
    boton.disabled = true;
    boton.textContent = "Descargando…";
    try {
      const { blob, alta } = await obtenerImagen(r);
      descargarBlob(blob, nombreArchivo(r, blob));
      toast(alta ? "Imagen descargada en alta resolución" : "Commons no responde: se descargó la copia de este archivo");
    } catch {
      toast("No se pudo descargar la imagen. Inténtalo de nuevo.");
    } finally {
      boton.disabled = false;
      boton.textContent = txt;
    }
  };

  const descargarTodo = async () => {
    if (ocupado || !ids.length) return;
    ocupado = true;
    const txt = todo.textContent;
    todo.disabled = true;
    const regs = ids.map(registroPorId).filter(Boolean);
    const archivos = [];
    let locales = 0, fallos = 0;
    await resolverAlta(regs);
    for (let i = 0; i < regs.length; i++) {
      todo.textContent = `Preparando ${i + 1} de ${regs.length}…`;
      try {
        const { blob, alta } = await obtenerImagen(regs[i]);
        if (!alta) locales++;
        archivos.push({ nombre: nombreArchivo(regs[i], blob), datos: blob });
      } catch { fallos++; }
    }
    if (archivos.length) {
      archivos.push({ nombre: "CREDITOS.txt", datos: creditos(regs) });
      todo.textContent = "Comprimiendo…";
      descargarBlob(await crearZip(archivos), `mi-coleccion-moscu-2050.zip`);
      const n = archivos.length - 1;
      toast(`${n} ${n === 1 ? "imagen descargada" : "imágenes descargadas"} con sus créditos${locales ? ` (${locales} en resolución web)` : ""}${fallos ? `. ${fallos} no disponibles` : ""}`);
    } else {
      toast("No se pudo descargar ninguna imagen. Inténtalo de nuevo.");
    }
    todo.textContent = txt;
    todo.disabled = false;
    ocupado = false;
  };

  $$("[data-abrir-coleccion]").forEach((b) => b.addEventListener("click", () => { abrirDialogo(dialogo, b); mostrarResoluciones(); }));
  lista.addEventListener("click", (e) => {
    const ver = e.target.closest("[data-ver]");
    const quitar = e.target.closest("[data-quitar]");
    const bajar = e.target.closest("[data-descargar]");
    if (bajar) { descargarUno(bajar, bajar.dataset.descargar); return; }
    if (quitar) coleccion.quitar(quitar.dataset.quitar);
    if (ver) { dialogo.close(); abrirRegistro(ver.dataset.ver); }
  });
  todo.addEventListener("click", descargarTodo);
  vaciar.addEventListener("click", () => { coleccion.vaciar(); toast("Colección vaciada"); });
}
