/** Utilidades compartidas por todos los módulos. */
import { REGISTROS } from "./data/registros.js";

export const $ = (sel, ctx = document) => ctx.querySelector(sel);
export const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

export const reducirMovimiento = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/** Escapa texto para insertarlo en HTML. */
export function esc(texto) {
  return String(texto ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

/** Normaliza para búsquedas: minúsculas y sin tildes. */
export function normalizar(texto) {
  return String(texto ?? "").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
}

/** Ruta de una imagen del archivo. tam: "" (grande) o "sm" (miniatura). */
export function img(nombre, tam = "") {
  const conMiniatura = !["catedral-1931", "yezhov-original-1937", "yezhov-retocada", "vasnetsov-kremlin-1921"].includes(nombre);
  return `img/archivo/${nombre}${tam === "sm" && conMiniatura ? "-sm" : ""}.jpg`;
}

const indice = new Map(REGISTROS.map((r) => [r.id, r]));
export const registroPorId = (id) => indice.get(id);
export const registroPorImagen = (nombre) => REGISTROS.find((r) => r.img === nombre);

/** Aviso breve en pantalla. */
let temporizador;
export function toast(mensaje) {
  const el = $("#toast");
  el.textContent = mensaje;
  el.classList.add("visible");
  clearTimeout(temporizador);
  temporizador = setTimeout(() => el.classList.remove("visible"), 2600);
}

/** Copia texto al portapapeles con alternativa para navegadores antiguos. */
export async function copiar(texto) {
  try {
    await navigator.clipboard.writeText(texto);
    return true;
  } catch {
    const area = document.createElement("textarea");
    area.value = texto;
    area.setAttribute("readonly", "");
    area.style.position = "fixed";
    area.style.opacity = "0";
    document.body.appendChild(area);
    area.select();
    let ok = false;
    try { ok = document.execCommand("copy"); } catch { ok = false; }
    area.remove();
    return ok;
  }
}

/**
 * Abre un <dialog> como modal y devuelve el foco al elemento de origen al cerrarlo.
 * Los botones con [data-cerrar] y el clic en el fondo lo cierran.
 */
const origenes = new WeakMap();
const abiertos = new WeakSet();
export function abrirDialogo(dialogo, origen = document.activeElement) {
  if (!dialogo.open) {
    origenes.set(dialogo, origen);
    abiertos.add(dialogo);
    dialogo.showModal();
  }
}
/** Se ejecuta una sola vez por apertura, se cierre con botón, fondo o Esc. */
function alCerrar(d) {
  if (!abiertos.has(d)) return;
  abiertos.delete(d);
  const origen = origenes.get(d);
  if (origen && document.body.contains(origen)) origen.focus({ preventScroll: true });
  d.dispatchEvent(new CustomEvent("cerrado"));
}
export function cerrarDialogo(dialogo) {
  if (dialogo.open) dialogo.close();
  alCerrar(dialogo);
}
export function prepararDialogos() {
  $$("dialog").forEach((d) => {
    d.addEventListener("click", (e) => {
      if (e.target === d || e.target.closest("[data-cerrar]")) cerrarDialogo(d);
    });
    d.addEventListener("close", () => alCerrar(d));
  });
}

/** Nombre de archivo seguro: minúsculas, sin tildes ni signos. */
export function slug(texto) {
  return normalizar(texto).replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 60);
}

/** Descarga un Blob con el nombre indicado. */
export function descargarBlob(blob, nombre) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = nombre;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 4000);
}

/* ZIP sin compresión (método «store»): suficiente para imágenes, que ya van comprimidas. */
const TABLA_CRC = (() => {
  const t = new Uint32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xEDB88320 ^ (c >>> 1) : c >>> 1;
    t[n] = c >>> 0;
  }
  return t;
})();
function crc32(datos) {
  let c = 0xFFFFFFFF;
  for (let i = 0; i < datos.length; i++) c = TABLA_CRC[(c ^ datos[i]) & 0xFF] ^ (c >>> 8);
  return (c ^ 0xFFFFFFFF) >>> 0;
}

/** Crea un .zip a partir de [{ nombre, datos: Blob | string }]. */
export async function crearZip(archivos) {
  const enc = new TextEncoder();
  const d = new Date();
  const hora = (d.getHours() << 11) | (d.getMinutes() << 5) | (d.getSeconds() >> 1);
  const fecha = ((d.getFullYear() - 1980) << 9) | ((d.getMonth() + 1) << 5) | d.getDate();
  const partes = [];
  const central = [];
  let offset = 0;
  for (const a of archivos) {
    const datos = typeof a.datos === "string" ? enc.encode(a.datos) : new Uint8Array(await a.datos.arrayBuffer());
    const nombre = enc.encode(a.nombre);
    const crc = crc32(datos);
    const local = new DataView(new ArrayBuffer(30));
    local.setUint32(0, 0x04034b50, true);
    local.setUint16(4, 20, true);
    local.setUint16(6, 0x0800, true); // nombres en UTF-8
    local.setUint16(10, hora, true);
    local.setUint16(12, fecha, true);
    local.setUint32(14, crc, true);
    local.setUint32(18, datos.length, true);
    local.setUint32(22, datos.length, true);
    local.setUint16(26, nombre.length, true);
    partes.push(local, nombre, datos);

    const cab = new DataView(new ArrayBuffer(46));
    cab.setUint32(0, 0x02014b50, true);
    cab.setUint16(4, 20, true);
    cab.setUint16(6, 20, true);
    cab.setUint16(8, 0x0800, true);
    cab.setUint16(12, hora, true);
    cab.setUint16(14, fecha, true);
    cab.setUint32(16, crc, true);
    cab.setUint32(20, datos.length, true);
    cab.setUint32(24, datos.length, true);
    cab.setUint16(28, nombre.length, true);
    cab.setUint32(42, offset, true);
    central.push(cab, nombre);
    offset += 30 + nombre.length + datos.length;
  }
  const tamCentral = central.reduce((s, p) => s + p.byteLength, 0);
  const fin = new DataView(new ArrayBuffer(22));
  fin.setUint32(0, 0x06054b50, true);
  fin.setUint16(8, archivos.length, true);
  fin.setUint16(10, archivos.length, true);
  fin.setUint32(12, tamCentral, true);
  fin.setUint32(16, offset, true);
  return new Blob([...partes, ...central, fin], { type: "application/zip" });
}

/** Etiqueta HTML de estado de verificación. */
export function etiquetaEstado(estado, ESTADOS) {
  const e = ESTADOS[estado];
  return `<span class="estado estado--${esc(estado)}"><i aria-hidden="true"></i>${esc(e ? e.label : estado)}</span>`;
}
