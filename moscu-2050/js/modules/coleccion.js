/**
 * «Mi colección»: selección temporal de registros.
 * Se guarda en sessionStorage (solo esta pestaña); si no está disponible, solo en memoria.
 */
import { $, $$, esc, img, registroPorId, abrirDialogo, toast } from "../utils.js";
import { t } from "../i18n.js";

const CLAVE = "msk2050-coleccion";
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
    if (ids.includes(id)) { ids = ids.filter((x) => x !== id); toast(t("toastQuitado")); }
    else { ids = [...ids, id]; toast(t("toastGuardado", r ? r.titulo : id)); }
    guardar();
  },
  quitar(id) { ids = ids.filter((x) => x !== id); guardar(); },
  vaciar() { ids = []; guardar(); },
  alCambiar(fn) { oyentes.add(fn); }
};

export function iniciarColeccion(abrirRegistro) {
  const dialogo = $("#modal-coleccion");
  const lista = $("#coleccion-lista");
  const vacia = $("#coleccion-vacia");
  const vaciar = $("#coleccion-vaciar");

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
        <div><strong>${esc(r.titulo)}</strong><span class="mono">${esc(r.fecha)}</span>
          <div class="botones">
            <button class="btn-texto" type="button" data-ver="${esc(id)}">${t("verFicha")}</button>
            <button class="btn-texto" type="button" data-quitar="${esc(id)}">${t("quitar")}</button>
          </div>
        </div></li>`;
    }).join("");
    vacia.hidden = ids.length > 0;
    vaciar.hidden = ids.length === 0;
  };
  coleccion.alCambiar(pintar);
  pintar();

  $$("[data-abrir-coleccion]").forEach((b) => b.addEventListener("click", () => abrirDialogo(dialogo, b)));
  lista.addEventListener("click", (e) => {
    const ver = e.target.closest("[data-ver]");
    const quitar = e.target.closest("[data-quitar]");
    if (quitar) coleccion.quitar(quitar.dataset.quitar);
    if (ver) { dialogo.close(); abrirRegistro(ver.dataset.ver); }
  });
  vaciar.addEventListener("click", () => { coleccion.vaciar(); toast(t("toastVaciada")); });
}
