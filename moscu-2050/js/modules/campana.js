/** Campaña digital: carrusel de piezas, vista ampliada y botones para compartir la URL. */
import { $, $$, esc, img, registroPorId, abrirDialogo, cerrarDialogo, copiar, toast } from "../utils.js";
import { PIEZAS } from "../data/contenido.js";

const URL_CAMPANA = () => location.origin + location.pathname;

/**
 * Pieza en estilo collage: fotografía tramada, bloques rojos, rejilla,
 * banda diagonal con la frase y microtextos técnicos.
 */
function piezaHTML(p, i, etiqueta = "button") {
  const attrs = etiqueta === "button" ? `type="button" data-pieza="${i}" aria-label="Ampliar pieza ${i + 1}: ${esc(p.frase)}"` : `role="img" aria-label="Pieza ${i + 1}: ${esc(p.frase)}"`;
  const reg = registroPorId(p.registro);
  const num = String(i + 1).padStart(2, "0");
  return `<${etiqueta} class="pieza pieza--${p.estilo}" ${attrs}>
      <span class="pieza__bloque pieza__bloque--1"></span>
      <img class="pieza__foto" src="${img(p.img, "sm")}" alt="" loading="lazy">
      <span class="pieza__trama"></span>
      <span class="pieza__rejilla"></span>
      <span class="pieza__bloque pieza__bloque--2"></span>
      <span class="pieza__bloque pieza__bloque--3"></span>
      <span class="pieza__diagonal">
        <span class="pieza__micro">MEMORIA / FUENTE / PROCEDENCIA // ${num}</span>
        <span class="pieza__banda"><span class="pieza__frase">${esc(p.frase)}</span></span>
        <span class="pieza__micro">REGISTRO ${esc(reg ? reg.anio ?? "S. F." : "")} // MSK 2050 // NO ES IA</span>
      </span>
      <span class="pieza__flecha">↗</span>
      <span class="pieza__hash">#NoEsIAEsHistoria</span>
      <span class="pieza__num">${num} / ${String(PIEZAS.length).padStart(2, "0")}</span>
      <span class="pieza__grano"></span>
    </${etiqueta}>`;
}

async function copiarEnlace(boton) {
  const ok = await copiar(URL_CAMPANA());
  toast(ok ? "Enlace de la campaña copiado" : "No se pudo copiar. Copia la dirección desde el navegador.");
  if (ok && boton) {
    boton.classList.add("ok");
    const txt = boton.textContent;
    boton.textContent = "✓ Enlace copiado";
    setTimeout(() => { boton.classList.remove("ok"); boton.textContent = txt; }, 2200);
  }
}

function botonesCompartir(texto) {
  const u = encodeURIComponent(URL_CAMPANA());
  const t = encodeURIComponent(texto);
  return `
    <button type="button" class="copiar" data-compartir="copiar">Copiar enlace</button>
    ${navigator.share ? '<button type="button" data-compartir="nativo">Compartir…</button>' : ""}
    <a href="https://wa.me/?text=${t}%20${u}" target="_blank" rel="noopener">WhatsApp</a>
    <a href="https://t.me/share/url?url=${u}&amp;text=${t}" target="_blank" rel="noopener">Telegram</a>
    <a href="https://twitter.com/intent/tweet?url=${u}&amp;text=${t}" target="_blank" rel="noopener">X</a>
    <a href="https://www.facebook.com/sharer/sharer.php?u=${u}" target="_blank" rel="noopener">Facebook</a>`;
}

export function iniciarCampana(abrirRegistro) {
  const pista = $("#carrusel");
  const puntos = $("#carrusel-puntos");
  const dialogo = $("#modal-pieza");
  const cuerpo = $("#mp-cuerpo");

  pista.innerHTML = PIEZAS.map((p, i) => `<li>${piezaHTML(p, i)}</li>`).join("");
  puntos.innerHTML = PIEZAS.map((_, i) => `<span class="${i === 0 ? "activo" : ""}"></span>`).join("");
  const items = $$("li", pista);

  const actual = () => {
    let mejor = 0, dist = Infinity;
    items.forEach((it, i) => { const d = Math.abs(it.offsetLeft - pista.offsetLeft - pista.scrollLeft); if (d < dist) { dist = d; mejor = i; } });
    return mejor;
  };
  const ir = (i) => {
    const it = items[Math.max(0, Math.min(items.length - 1, i))];
    pista.scrollTo({ left: it.offsetLeft - pista.offsetLeft, behavior: "smooth" });
  };
  $("#carrusel-prev").addEventListener("click", () => ir(actual() - 1));
  $("#carrusel-sig").addEventListener("click", () => ir(actual() + 1));
  pista.addEventListener("scroll", () => {
    const a = actual();
    $$("span", puntos).forEach((s, i) => s.classList.toggle("activo", i === a));
  }, { passive: true });

  const manejarCompartir = async (e, texto) => {
    const b = e.target.closest("[data-compartir]"); if (!b) return false;
    if (b.dataset.compartir === "copiar") await copiarEnlace(b);
    if (b.dataset.compartir === "nativo") {
      try { await navigator.share({ title: "NO ES IA. ES HISTORIA.", text: texto, url: URL_CAMPANA() }); } catch { /* cancelado */ }
    }
    return true;
  };

  pista.addEventListener("click", (e) => {
    const b = e.target.closest("[data-pieza]"); if (!b) return;
    const i = Number(b.dataset.pieza);
    const p = PIEZAS[i];
    const reg = registroPorId(p.registro);
    cuerpo.innerHTML = `
      <div class="pieza-ampliada">
        ${piezaHTML(p, i, "div")}
        <div class="pieza-ampliada__info">
          <p class="mono" id="mp-titulo">Pieza ${i + 1} de ${PIEZAS.length} · #NoEsIAEsHistoria</p>
          <p class="frase">${esc(p.frase)}</p>
          <p>Imagen de base: «${esc(reg.titulo)}» (${esc(reg.fecha)}). ${esc(reg.autor)} · ${esc(reg.institucion)} · ${esc(reg.licencia.nombre)}. El tratamiento gráfico de la pieza es parte de la campaña.</p>
          <button class="btn btn--linea" type="button" data-ir-registro="${esc(reg.id)}">Ver el registro en el archivo</button>
          <div class="compartir__botones">${botonesCompartir(p.frase)}</div>
        </div>
      </div>`;
    abrirDialogo(dialogo, b);
  });
  cuerpo.addEventListener("click", async (e) => {
    if (await manejarCompartir(e, cuerpo.querySelector(".frase")?.textContent || "")) return;
    const r = e.target.closest("[data-ir-registro]");
    if (r) { cerrarDialogo(dialogo); abrirRegistro(r.dataset.irRegistro); }
  });

  const zona = $("#compartir");
  zona.innerHTML = botonesCompartir("NO ES IA. ES HISTORIA. Antes de compartir, verifica.");
  zona.addEventListener("click", (e) => manejarCompartir(e, "NO ES IA. ES HISTORIA. Antes de compartir, verifica."));
}
