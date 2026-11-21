/**
 * Idioma de la interfaz.
 * - index.html está en ruso (idioma por defecto del escenario Moscú 2050).
 * - en.html es la versión en inglés.
 * El idioma se lee de <html lang="…">. Los datos se escriben como { ru, en }
 * y se convierten al idioma activo con localizar().
 */
export const LANG = (document.documentElement.lang || "ru").toLowerCase().startsWith("en") ? "en" : "ru";

/** Convierte recursivamente los objetos { ru, en } al idioma activo. */
export function localizar(valor) {
  if (Array.isArray(valor)) return valor.map(localizar);
  if (valor && typeof valor === "object") {
    const claves = Object.keys(valor);
    if (claves.length && claves.every((k) => k === "ru" || k === "en")) return valor[LANG] ?? valor.ru;
    const out = {};
    for (const k of claves) out[k] = localizar(valor[k]);
    return out;
  }
  return valor;
}

const UI = {
  ru: {
    menuAbrir: "Открыть меню", menuCerrar: "Закрыть меню",
    heroEspeculativa: "Сейчас вы видите: спекулятивная визуализация 2050 года",
    heroHistorica: "Сейчас вы видите: историческая фотография (фотохром, ок. 1890–1900)",
    ejemplo: "Пример", verRegistro: "Открыть запись в архиве",
    recomponer: "Собрать изображение", fragmentar: "Снова раздробить",
    todas: "Все", sinFecha: "Без даты", sf: "б. д.",
    nRegistros: (n) => `${n} ${plural(n, "запись", "записи", "записей")} в архиве`,
    nDeTotal: (n, t) => `${n} из ${t} ${plural(t, "записи", "записей", "записей")}`,
    decadaAria: (d, n) => `${d}: ${n} ${plural(n, "запись", "записи", "записей")}`,
    errorArchivo: "Ошибка загрузки архива",
    ampliarDe: "Увеличить: ", ampliar: "Увеличить", verProcedencia: "Происхождение",
    guardar: "Сохранить", guardado: "Сохранено",
    fueraFiltro: "вне текущего фильтра",
    fecha: "Дата", ubicacion: "Место", autor: "Автор", institucion: "Учреждение или происхождение", licencia: "Лицензия",
    procedenciaTitulo: "Происхождение и доступные источники",
    fichaCommons: "Карточка на Викискладе ↗", catalogo: "Исходный каталог ↗",
    pendiente: "Невыясненные сведения", intervenciones: "Известные вмешательства",
    nadaPendiente: "В изученных данных невыясненных сведений нет.",
    quitarColeccion: "Убрать из подборки", guardarColeccion: "Сохранить в подборку",
    copiarEnlace: "Скопировать ссылку", enlaceFicha: "Ссылка на карточку скопирована", noCopiado: "Не удалось скопировать ссылку",
    toastQuitado: "Удалено из подборки", toastGuardado: (t) => `Сохранено в подборку: ${t}`, toastVaciada: "Подборка очищена",
    verFicha: "Открыть карточку", quitar: "Убрать",
    opRegistro: "Исторический документ", opAlterada: "Сгенерированное или изменённое изображение", opDuda: "Не уверен(а)",
    resDuda: "Без ответа: сомневаться — нормально",
    resOk: "Ваш ответ совпадает с документированной классификацией",
    resParcial: "Ваш ответ отчасти верен",
    resNo: "Ваш ответ не совпадает с документированной классификацией",
    pasoN: (i, n) => `Изображение ${i} из ${n}`,
    altQuiz: (i) => `Изображение ${i} упражнения. Его описание появится после ответа.`,
    pregunta: "Как вы думаете, что это за изображение?",
    clasificacion: "Документированная классификация", explicacion: "Объяснение", pistas: "Что может ввести в заблуждение",
    fuenteDisponible: "Доступный источник", porQue: "Зачем проверять",
    porQueTexto: "Смотреть недостаточно: классифицировать изображение позволяет только его происхождение — кто его создал, когда и кто его хранит.",
    verResumen: "Итоги", siguiente: "Следующее изображение", resumen: "Итоги",
    fraseA: "Смотреть недостаточно.", fraseB: "Нужно исследовать.",
    conteo: (ok, p, no, d) => `Совпадения: <strong>${ok}</strong> · Частично верные: <strong>${p}</strong> · Несовпадения: <strong>${no}</strong> · Сомнения: <strong>${d}</strong>. Результат не измеряет вашу способность распознавать подделки: он показывает, как трудно классифицировать изображение, не зная его происхождения.`,
    tuRespuesta: "Ваш ответ:", repetir: "Пройти ещё раз", investigar: "Исследовать архив",
    especulativa: " (спекулятивная)", escenarioEsp: " · СПЕКУЛЯТИВНЫЙ СЦЕНАРИЙ",
    leer: "Читать историю", cerrarHistoria: "Свернуть историю",
    sello: "Вымысел · Москва 2050 — гипотетический сценарий",
    valorRango: (v) => `Видно ${v} % изменённой версии`,
    docOriginal: "Исходный документ: ", versionInt: "Изменённая версия: ",
    queCambio: "Что изменилось", porQueImporta: "Почему важно распознать вмешательство", fuentes: "Источники",
    verOriginal: "Открыть карточку исходного документа",
    ampliarPieza: (i, f) => `Увеличить работу ${i}: ${f}`, pieza: (i, f) => `Работа ${i}: ${f}`,
    microPieza: "ПАМЯТЬ / ИСТОЧНИК / ПРОИСХОЖДЕНИЕ", hashtag: "#ЭтоНеИИЭтоИстория",
    copiadoCampana: "Ссылка на кампанию скопирована", noCopiadoCampana: "Не удалось скопировать. Скопируйте адрес из браузера.",
    copiadoBoton: "✓ Ссылка скопирована", compartir: "Поделиться…",
    textoCompartir: "ЭТО НЕ ИИ. ЭТО ИСТОРИЯ. Прежде чем поделиться, проверь.", tituloCompartir: "ЭТО НЕ ИИ. ЭТО ИСТОРИЯ.",
    piezaDe: (i, n) => `Работа ${i} из ${n}`,
    imagenBase: (t, f, a, inst, l) => `Исходное изображение: «${t}» (${f}). ${a} · ${inst} · ${l}. Графическая обработка — часть кампании.`,
    errNombre: "Укажите имя (не менее 2 букв).", errCorreo: "Укажите корректный адрес, например name@domain.ru.",
    errTitulo: "Дайте записи короткое название.", errAnio: "Укажите год, хотя бы примерно.",
    errAnioRango: (max) => `Год должен быть в пределах от 1800 до ${max}.`,
    errLugar: "Укажите, где был сделан или создан материал.", errDescripcion: "Опишите материал (не менее 20 символов).",
    errFuente: "Расскажите о происхождении: кто его создал и как он попал к вам.",
    errArchivo: "Прикрепите изображение или документ.", errFormato: "Формат не поддерживается. Используйте JPG, PNG, WEBP или PDF.",
    errTamano: (mb) => `Файл больше ${mb} МБ.`, errAutorizo: "Нам нужно ваше разрешение на проверку и использование материала.",
    previaLocal: " · Локальный предпросмотр, файл никуда не загружен.", previaAlt: (n) => `Предпросмотр ${n}`,
    revisa: (n) => `Проверьте ${n} ${plural(n, "поле", "поля", "полей")}`, revisaDet: "Сообщения рядом с полями объясняют, чего не хватает.",
    noEnviado: "Материал не отправлен: это демонстрация",
    noEnviado1: "Все поля заполнены верно, но у этого прототипа нет системы для приёма и хранения материалов. Ваш файл не покинул браузер.",
    noEnviado2: "В реальной версии материал ожидал бы проверки и публиковался бы только после подтверждения его происхождения.",
    kb: "КБ", mb: "МБ"
  },
  en: {
    menuAbrir: "Open menu", menuCerrar: "Close menu",
    heroEspeculativa: "You are seeing: speculative visualisation of 2050",
    heroHistorica: "You are seeing: historical photograph (photochrom, c. 1890–1900)",
    ejemplo: "Example", verRegistro: "See the record in the archive",
    recomponer: "Rebuild the image", fragmentar: "Fragment again",
    todas: "All", sinFecha: "Undated", sf: "n.d.",
    nRegistros: (n) => `${n} records in the archive`,
    nDeTotal: (n, t) => `${n} of ${t} records`,
    decadaAria: (d, n) => `${d}: ${n} records`,
    errorArchivo: "Error loading the archive",
    ampliarDe: "Enlarge: ", ampliar: "Enlarge", verProcedencia: "View provenance",
    guardar: "Save", guardado: "Saved",
    fueraFiltro: "outside the current filter",
    fecha: "Date", ubicacion: "Location", autor: "Author", institucion: "Institution or provenance", licencia: "Licence",
    procedenciaTitulo: "Provenance and sources you can check",
    fichaCommons: "Wikimedia Commons page ↗", catalogo: "Original catalogue ↗",
    pendiente: "Open questions", intervenciones: "Known interventions",
    nadaPendiente: "Nothing pending in the data consulted.",
    quitarColeccion: "Remove from my collection", guardarColeccion: "Save to my collection",
    copiarEnlace: "Copy link", enlaceFicha: "Record link copied", noCopiado: "Could not copy the link",
    toastQuitado: "Removed from your collection", toastGuardado: (t) => `Saved to your collection: ${t}`, toastVaciada: "Collection cleared",
    verFicha: "Open record", quitar: "Remove",
    opRegistro: "Historical record", opAlterada: "Generated or altered image", opDuda: "I'm not sure",
    resDuda: "No answer: doubting is fine",
    resOk: "Your answer matches the documented classification",
    resParcial: "Your answer is partly right",
    resNo: "Your answer does not match the documented classification",
    pasoN: (i, n) => `Image ${i} of ${n}`,
    altQuiz: (i) => `Exercise image ${i}. Its description appears after you answer.`,
    pregunta: "What do you think this image is?",
    clasificacion: "Documented classification", explicacion: "Explanation", pistas: "Clues that can mislead",
    fuenteDisponible: "Available source", porQue: "Why verify",
    porQueTexto: "Looking is not enough: provenance — who made it, when, and who keeps it — is what lets us classify an image.",
    verResumen: "See summary", siguiente: "Next image", resumen: "Summary",
    fraseA: "Looking is not enough.", fraseB: "You have to investigate.",
    conteo: (ok, p, no, d) => `Matches: <strong>${ok}</strong> · Partly right: <strong>${p}</strong> · No match: <strong>${no}</strong> · Unsure: <strong>${d}</strong>. The result does not measure your ability to spot fakes: it shows how hard it is to classify an image without knowing where it comes from.`,
    tuRespuesta: "Your answer:", repetir: "Try again", investigar: "Investigate the archive",
    especulativa: " (speculative)", escenarioEsp: " · SPECULATIVE SCENARIO",
    leer: "Read the story", cerrarHistoria: "Close the story",
    sello: "Fiction · Moscow 2050 is a hypothetical scenario",
    valorRango: (v) => `${v}% of the altered version visible`,
    docOriginal: "Original document: ", versionInt: "Altered version: ",
    queCambio: "What changed", porQueImporta: "Why it matters to identify the intervention", fuentes: "Sources",
    verOriginal: "Open the original document's record",
    ampliarPieza: (i, f) => `Enlarge piece ${i}: ${f}`, pieza: (i, f) => `Piece ${i}: ${f}`,
    microPieza: "MEMORY / SOURCE / PROVENANCE", hashtag: "#ItsNotAIItsHistory",
    copiadoCampana: "Campaign link copied", noCopiadoCampana: "Could not copy. Copy the address from your browser.",
    copiadoBoton: "✓ Link copied", compartir: "Share…",
    textoCompartir: "IT'S NOT AI. IT'S HISTORY. Verify before you share.", tituloCompartir: "IT'S NOT AI. IT'S HISTORY.",
    piezaDe: (i, n) => `Piece ${i} of ${n}`,
    imagenBase: (t, f, a, inst, l) => `Base image: “${t}” (${f}). ${a} · ${inst} · ${l}. The graphic treatment is part of the campaign.`,
    errNombre: "Enter your name (at least 2 letters).", errCorreo: "Enter a valid email, e.g. name@domain.com.",
    errTitulo: "Give the record a short title.", errAnio: "Enter a year, even an approximate one.",
    errAnioRango: (max) => `The year must be between 1800 and ${max}.`,
    errLugar: "Say where the material was taken or made.", errDescripcion: "Describe the material in at least 20 characters.",
    errFuente: "Tell us where it comes from: who made it and how it reached you.",
    errArchivo: "Attach an image or a document.", errFormato: "Unsupported format. Use JPG, PNG, WEBP or PDF.",
    errTamano: (mb) => `The file is larger than ${mb} MB.`, errAutorizo: "We need your permission to review and use the material.",
    previaLocal: " · Local preview, not uploaded anywhere.", previaAlt: (n) => `Preview of ${n}`,
    revisa: (n) => `Check ${n} ${n === 1 ? "field" : "fields"}`, revisaDet: "The messages next to each field explain what is missing.",
    noEnviado: "Submission not sent: this is a demo",
    noEnviado1: "All fields are valid, but this prototype has no system to receive or store submissions. Your material never left your browser.",
    noEnviado2: "In a real version, the submission would wait for review and would only be published after its provenance was checked.",
    kb: "KB", mb: "MB"
  }
};

/** Plural ruso: 1 запись, 2 записи, 5 записей. */
function plural(n, uno, pocos, muchos) {
  const d = n % 10, c = n % 100;
  if (d === 1 && c !== 11) return uno;
  if (d >= 2 && d <= 4 && (c < 12 || c > 14)) return pocos;
  return muchos;
}

/** Texto de interfaz. Si el valor es una función, se le pasan los argumentos. */
export function t(clave, ...args) {
  const v = UI[LANG][clave] ?? UI.ru[clave] ?? clave;
  return typeof v === "function" ? v(...args) : v;
}

/** El selector RU / EN conserva la sección (#ancla) en la que está la persona. */
export function iniciarIdioma() {
  document.querySelectorAll("[data-idioma]").forEach((a) => {
    a.addEventListener("click", () => {
      const ancla = location.hash && !location.hash.startsWith("#registro/") ? location.hash : "";
      a.href = a.getAttribute("href").split("#")[0] + ancla;
    });
  });
}
