/** Hero: parallax suave y transición de la capa especulativa a la fotografía histórica al hacer scroll. */
import { $, reducirMovimiento } from "../utils.js";

export function iniciarHero() {
  const hero = $("#inicio");
  const estado = $("#hero-estado");
  let ultimo = null;
  let pendiente = false;

  const actualizar = () => {
    pendiente = false;
    const alto = hero.offsetHeight;
    // Progreso de 0 (arriba) a 1 (cuando se ha recorrido el 60 % del hero)
    const p = Math.max(0, Math.min(1, window.scrollY / (alto * 0.6)));
    hero.style.setProperty("--p", p.toFixed(3));
    const fase = p > 0.55 ? "historica" : "especulativa";
    if (fase !== ultimo) {
      ultimo = fase;
      estado.textContent = fase === "historica"
        ? "Ahora ves: fotografía histórica (fotocromo, c. 1890–1900)"
        : "Ahora ves: capa sintética de 2050";
    }
  };

  window.addEventListener("scroll", () => {
    if (!pendiente && window.scrollY < hero.offsetHeight * 1.2) { pendiente = true; requestAnimationFrame(actualizar); }
  }, { passive: true });
  actualizar();

  // Con movimiento reducido, el parallax se desactiva en CSS; el cambio de capa se mantiene.
  if (reducirMovimiento()) hero.classList.add("sin-movimiento");
}
