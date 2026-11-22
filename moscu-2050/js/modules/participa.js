/**
 * Formulario «Сохрани память» / “Preserve memory”.
 * No hay backend: valida en el navegador, muestra una vista previa local del archivo
 * y deja claro que el envío NO se recibe ni se guarda.
 */
import { $, esc } from "../utils.js?v=20261122b";
import { t } from "../i18n.js?v=20261122b";

const MAX_MB = 10;
const TIPOS = ["image/jpeg", "image/png", "image/webp", "application/pdf"];

export function iniciarParticipa() {
  const form = $("#formulario");
  const estado = $("#estado-envio");
  const archivo = $("#f-archivo");
  const previa = $("#vista-previa");
  const anioMax = new Date().getFullYear();
  let urlPrevia = null;

  const reglas = {
    nombre: (v) => (v.trim().length >= 2 ? "" : t("errNombre")),
    correo: (v) => (/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) ? "" : t("errCorreo")),
    titulo: (v) => (v.trim().length >= 3 ? "" : t("errTitulo")),
    anio: (v) => {
      const s = v.trim();
      if (!s) return t("errAnio");
      const n = s.match(/\d{4}/);
      if (n && (Number(n[0]) < 1800 || Number(n[0]) > anioMax)) return t("errAnioRango", anioMax);
      return "";
    },
    lugar: (v) => (v.trim().length >= 2 ? "" : t("errLugar")),
    descripcion: (v) => (v.trim().length >= 20 ? "" : t("errDescripcion")),
    fuente: (v) => (v.trim().length >= 10 ? "" : t("errFuente")),
    archivo: () => {
      const f = archivo.files[0];
      if (!f) return t("errArchivo");
      if (!TIPOS.includes(f.type)) return t("errFormato");
      if (f.size > MAX_MB * 1024 * 1024) return t("errTamano", MAX_MB);
      return "";
    },
    autorizo: () => ($("#f-autorizo").checked ? "" : t("errAutorizo"))
  };

  const validar = (nombre) => {
    const campo = form.elements[nombre];
    const msg = reglas[nombre](campo.value ?? "");
    const err = $(`#e-${nombre}`);
    err.textContent = msg;
    err.hidden = !msg;
    if (msg) campo.setAttribute("aria-invalid", "true"); else campo.removeAttribute("aria-invalid");
    return !msg;
  };

  // Vista previa local (no se sube a ningún sitio)
  archivo.addEventListener("change", () => {
    if (urlPrevia) URL.revokeObjectURL(urlPrevia);
    urlPrevia = null;
    const f = archivo.files[0];
    const valido = validar("archivo");
    if (!f) { previa.hidden = true; previa.innerHTML = ""; return; }
    const tam = f.size < 1024 * 1024 ? `${Math.round(f.size / 1024)} ${t("kb")}` : `${(f.size / 1048576).toFixed(1)} ${t("mb")}`;
    if (valido && f.type.startsWith("image/")) {
      urlPrevia = URL.createObjectURL(f);
      previa.innerHTML = `<img src="${urlPrevia}" alt="${esc(t("previaAlt", f.name))}"><p><strong>${esc(f.name)}</strong><br>${tam}${t("previaLocal")}</p>`;
    } else {
      previa.innerHTML = `<span class="doc" aria-hidden="true">${f.type === "application/pdf" ? "PDF" : "?"}</span><p><strong>${esc(f.name)}</strong><br>${tam}${valido ? t("previaLocal") : ""}</p>`;
    }
    previa.hidden = false;
  });

  form.addEventListener("input", (e) => {
    const n = e.target.name;
    if (reglas[n] && e.target.getAttribute("aria-invalid") === "true") validar(n);
  });
  form.addEventListener("focusout", (e) => {
    const n = e.target.name;
    if (reglas[n] && n !== "archivo" && n !== "autorizo" && e.target.value) validar(n);
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const fallos = Object.keys(reglas).filter((n) => !validar(n));
    estado.hidden = false;
    if (fallos.length) {
      estado.className = "estado-envio error-estado";
      estado.innerHTML = `<strong>${esc(t("revisa", fallos.length))}</strong><span>${t("revisaDet")}</span>`;
      form.elements[fallos[0]].focus();
      return;
    }
    estado.className = "estado-envio";
    estado.innerHTML = `<strong>${t("noEnviado")}</strong><span>${t("noEnviado1")}</span><span>${t("noEnviado2")}</span>`;
    estado.focus();
  });
}
