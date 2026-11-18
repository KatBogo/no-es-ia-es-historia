/**
 * Formulario «Preserva la memoria».
 * Valida en el navegador y muestra una vista previa local del archivo.
 * No hay servidor: ningún dato se transmite, y el texto de la página lo dice.
 */
import { $, esc } from "../utils.js";

const MAX_MB = 10;
const TIPOS = ["image/jpeg", "image/png", "image/webp", "application/pdf"];

export function iniciarParticipa() {
  const form = $("#formulario");
  const estado = $("#estado-envio");
  const archivo = $("#f-archivo");
  const previa = $("#vista-previa");
  let urlPrevia = null;

  const reglas = {
    nombre: (v) => (v.trim().length >= 2 ? "" : "Escribe tu nombre (al menos 2 letras)."),
    correo: (v) => (/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) ? "" : "Escribe un correo válido, por ejemplo nombre@dominio.com."),
    titulo: (v) => (v.trim().length >= 3 ? "" : "Pon un título breve al registro."),
    anio: (v) => {
      const t = v.trim();
      if (!t) return "Indica un año, aunque sea aproximado.";
      const n = t.match(/\d{4}/);
      if (n && (Number(n[0]) < 1800 || Number(n[0]) > new Date().getFullYear())) return `El año debe estar entre 1800 y ${new Date().getFullYear()}.`;
      return "";
    },
    lugar: (v) => (v.trim().length >= 2 ? "" : "Indica dónde se tomó o se creó el material."),
    descripcion: (v) => (v.trim().length >= 20 ? "" : "Describe el material con al menos 20 caracteres."),
    fuente: (v) => (v.trim().length >= 10 ? "" : "Cuéntanos de dónde procede: quién lo creó y cómo llegó a ti."),
    archivo: () => {
      const f = archivo.files[0];
      if (!f) return "Adjunta una imagen o un documento.";
      if (!TIPOS.includes(f.type)) return "Formato no admitido. Usa JPG, PNG, WEBP o PDF.";
      if (f.size > MAX_MB * 1024 * 1024) return `El archivo pesa más de ${MAX_MB} MB.`;
      return "";
    },
    autorizo: () => ($("#f-autorizo").checked ? "" : "Necesitamos tu autorización para revisar y usar el material.")
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
    const tam = f.size < 1024 * 1024 ? `${Math.round(f.size / 1024)} KB` : `${(f.size / 1048576).toFixed(1)} MB`;
    if (valido && f.type.startsWith("image/")) {
      urlPrevia = URL.createObjectURL(f);
      previa.innerHTML = `<img src="${urlPrevia}" alt="Vista previa de ${esc(f.name)}"><p><strong>${esc(f.name)}</strong><br>${tam} · Vista previa local, no se ha subido.</p>`;
    } else {
      previa.innerHTML = `<span class="doc" aria-hidden="true">${f.type === "application/pdf" ? "PDF" : "?"}</span><p><strong>${esc(f.name)}</strong><br>${tam}${valido ? " · Vista previa local, no se ha subido." : ""}</p>`;
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
    const nombres = Object.keys(reglas);
    const fallos = nombres.filter((n) => !validar(n));
    estado.hidden = false;
    if (fallos.length) {
      estado.className = "estado-envio error-estado";
      estado.innerHTML = `<strong>Revisa ${fallos.length === 1 ? "1 campo" : fallos.length + " campos"}</strong><span>Los mensajes junto a cada campo explican qué falta.</span>`;
      form.elements[fallos[0]].focus();
      return;
    }
    estado.className = "estado-envio";
    estado.innerHTML = `<strong>Ficha completa</strong>
      <span>Tu aporte cumple todos los requisitos de procedencia. Por privacidad, este formulario no transmite datos ni archivos: tu material sigue solo en tu dispositivo.</span>
      <span>Ningún aporte se publica en el archivo hasta que una persona comprueba su origen.</span>`;
    estado.focus();
  });
}
