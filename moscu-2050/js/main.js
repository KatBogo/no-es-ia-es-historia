/**
 * Punto de entrada. Cada sección es un módulo independiente en js/modules/.
 * Los datos viven en js/data/ y se pueden editar sin tocar la lógica.
 */
import { prepararDialogos } from "./utils.js";
import { iniciarIdioma } from "./i18n.js";
import { iniciarNav, iniciarReveal } from "./modules/nav.js";
import { iniciarHero } from "./modules/hero.js";
import { iniciarProblema } from "./modules/problema.js";
import { iniciarArchivo, abrirRegistro } from "./modules/archivo.js";
import { iniciarColeccion } from "./modules/coleccion.js";
import { iniciarQuiz } from "./modules/quiz.js";
import { iniciarHistorias } from "./modules/historias.js";
import { iniciarComparador } from "./modules/comparador.js";
import { iniciarCampana } from "./modules/campana.js";
import { iniciarParticipa } from "./modules/participa.js";
import { iniciarRecorrido } from "./modules/recorrido.js";

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
