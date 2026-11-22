/** Utilidades compartidas por todos los módulos. */
import { REGISTROS } from "./data/registros.js?v=20261122c";

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

/** Etiqueta HTML de estado de verificación. */
export function etiquetaEstado(estado, ESTADOS) {
  const e = ESTADOS[estado];
  return `<span class="estado estado--${esc(estado)}"><i aria-hidden="true"></i>${esc(e ? e.label : estado)}</span>`;
}
