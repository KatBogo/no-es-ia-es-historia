/**
 * Punto de entrada. Cada sección es un módulo independiente en js/modules/.
 * Los datos viven en js/data/ y se pueden editar sin tocar la lógica.
 */
import { prepararDialogos } from "./utils.js?v=20261122b";
import { iniciarIdioma } from "./i18n.js?v=20261122b";
import { iniciarNav, iniciarReveal } from "./modules/nav.js?v=20261122b";
import { iniciarHero } from "./modules/hero.js?v=20261122b";
import { iniciarProblema } from "./modules/problema.js?v=20261122b";
import { iniciarArchivo, abrirRegistro } from "./modules/archivo.js?v=20261122b";
import { iniciarColeccion } from "./modules/coleccion.js?v=20261122b";
import { iniciarQuiz } from "./modules/quiz.js?v=20261122b";
import { iniciarHistorias } from "./modules/historias.js?v=20261122b";
import { iniciarComparador } from "./modules/comparador.js?v=20261122b";
import { iniciarCampana } from "./modules/campana.js?v=20261122b";
import { iniciarParticipa } from "./modules/participa.js?v=20261122b";
import { iniciarRecorrido } from "./modules/recorrido.js?v=20261122b";

const pasos = [
  ["idioma", () => iniciarIdioma()],
  ["diálogos", () => prepararDialogos()],
  ["navegación", () => iniciarNav()],
  ["portada", () => iniciarHero()],
  ["colección", () => iniciarColeccion(abrirRegistro)],
  ["archivo", () => iniciarArchivo()],
  ["problema", () => iniciarProblema(abrirRegistro)],
  ["ejercicio", () => iniciarQuiz(abrirRegistro)],
  ["historias", () => iniciarHistorias(abrirRegistro)],
  ["comparador", () => iniciarComparador(abrirRegistro)],
  ["campaña", () => iniciarCampana(abrirRegistro)],
  ["recorrido", () => iniciarRecorrido()],
  ["formulario", () => iniciarParticipa()],
  ["animaciones", () => iniciarReveal()]
];

// Un error en una sección no debe dejar sin funcionar las demás.
for (const [nombre, fn] of pasos) {
  try { fn(); } catch (err) { console.error(`Error al iniciar ${nombre}:`, err); }
}
