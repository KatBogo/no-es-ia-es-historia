/**
 * Idioma de la interfaz.
 * - index.html está en ruso (idioma por defecto del escenario Moscú 2050).
 * - es.html es la versión en español.
 * El idioma se lee de <html lang="…">. Los datos se escriben como { ru, es }
 * y se convierten al idioma activo con localizar().
 */
export const LANG = (document.documentElement.lang || "ru").toLowerCase().startsWith("es") ? "es" : "ru";

/** Convierte recursivamente los objetos { ru, es } al idioma activo. */
export function localizar(valor) {
  if (Array.isArray(valor)) return valor.map(localizar);
  if (valor && typeof valor === "object") {
    const claves = Object.keys(valor);
    if (claves.length && claves.every((k) => k === "ru" || k === "es")) return valor[LANG] ?? valor.ru;
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
    ejemplo: "Пример", verRegistro: "Открыть запись в архиве", original: "оригинал:",
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
    toastQuitado: "Удалено из подборки", toastGuardado: (x) => `Сохранено в подборку: ${x}`, toastVaciada: "Подборка очищена",
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
    fraseA: "Недостаточно посмотреть на изображение, чтобы узнать его историю.", fraseB: "Нужно понять, откуда оно.",
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
    kb: "КБ", mb: "МБ",
    // Verificación
    verificado: "Проверено", verificadoMayus: "ПРОВЕРЕНО", noVerificado: "НЕ ПРОВЕРЕНО",
    comoVerifico: "Как проверяли это изображение?", porQueNo: "Почему этого нет в проверенном архиве?",
    casoBanner: "Учебный кейс · не входит в проверенный архив", casoCodigo: "УЧЕБНЫЙ КЕЙС",
    v1: "Исходный источник", v2: "Исторический контекст", v3: "Сверка документов", v4: "Проверка человеком", v5: "Результат",
    discrepancias: "Расхождения и невыясненное", comprobaciones: "Зафиксированные проверки",
    alcance: "Объём проверки: изучены открытые метаданные и онлайн-каталог учреждения. Оригинал в учреждении не изучался.",
    revisadoEl: (f) => `Проверка зафиксирована: ${f}`,
    verificadoDoc: "Документальная проверка · учебный прототип",
    motivo: "Причина", usoCaso: "Используется на сайте только как учебный пример: в упражнении, сравнении или кампании.",
    fuentesOriginales: "Исходные источники", panelTitulo: "Процесс проверки",
    // Ejercicio
    tipoImagen: "Тип изображения", procedencia: "Происхождение", evidencias: "Что позволяет определить происхождение",
    riesgoConfundir: "Чем опасно перепутать", porQueTexto2: "Подлинность не всегда видна глазами.",
    // Comparador
    origenCada: "Происхождение каждого изображения", evidenciaDoc: "Документальное свидетельство",
    intHistorica: "Историческое вмешательство", intDemostrativa: "Демонстрационное вмешательство прототипа",
    comoCambia: "Как меняется прочтение", leeOriginal: "Что показывает оригинал", leeIntervenida: "Что внушает изменённая версия",
    pistaComparar: "Сдвиньте ползунок, чтобы сравнить.", preguntaLbl: "Вопрос",
    // Campaña y recorrido
    verCaso: "Открыть учебный кейс", etapa: "Этап"
  },
  es: {
    menuAbrir: "Abrir menú", menuCerrar: "Cerrar menú",
    heroEspeculativa: "Ahora ves: visualización especulativa de 2050",
    heroHistorica: "Ahora ves: fotografía histórica (fotocromo, c. 1890–1900)",
    ejemplo: "Ejemplo", verRegistro: "Ver el registro en el archivo", original: "original:",
    recomponer: "Recomponer la imagen", fragmentar: "Fragmentar de nuevo",
    todas: "Todas", sinFecha: "Sin fecha", sf: "s. f.",
    nRegistros: (n) => `${n} registros en el archivo`,
    nDeTotal: (n, t) => `${n} de ${t} registros`,
    decadaAria: (d, n) => `${d}: ${n} registros`,
    errorArchivo: "Error al cargar el archivo",
    ampliarDe: "Ampliar: ", ampliar: "Ampliar", verProcedencia: "Ver procedencia",
    guardar: "Guardar", guardado: "Guardado",
    fueraFiltro: "fuera del filtro actual",
    fecha: "Fecha", ubicacion: "Ubicación", autor: "Autor o autora", institucion: "Institución o procedencia", licencia: "Licencia",
    procedenciaTitulo: "Procedencia y fuentes consultables",
    fichaCommons: "Ficha en Wikimedia Commons ↗", catalogo: "Catálogo de origen ↗",
    pendiente: "Información pendiente", intervenciones: "Intervenciones conocidas",
    nadaPendiente: "Nada pendiente en los datos consultados.",
    quitarColeccion: "Quitar de mi colección", guardarColeccion: "Guardar en mi colección",
    copiarEnlace: "Copiar enlace", enlaceFicha: "Enlace de la ficha copiado", noCopiado: "No se pudo copiar el enlace",
    toastQuitado: "Quitado de tu colección", toastGuardado: (x) => `Guardado en tu colección: ${x}`, toastVaciada: "Colección vaciada",
    verFicha: "Ver ficha", quitar: "Quitar",
    opRegistro: "Registro histórico", opAlterada: "Imagen generada o alterada", opDuda: "No estoy seguro",
    resDuda: "Sin respuesta: está bien dudar",
    resOk: "Tu respuesta coincide con la clasificación documentada",
    resParcial: "Tu respuesta tiene parte de razón",
    resNo: "Tu respuesta no coincide con la clasificación documentada",
    pasoN: (i, n) => `Imagen ${i} de ${n}`,
    altQuiz: (i) => `Imagen ${i} del ejercicio. Su descripción aparece después de responder.`,
    pregunta: "¿Qué crees que es esta imagen?",
    clasificacion: "Clasificación documentada", explicacion: "Explicación", pistas: "Pistas que pueden engañar",
    fuenteDisponible: "Fuente disponible", porQue: "Por qué verificar",
    porQueTexto: "Mirar no basta: la procedencia —quién la hizo, cuándo y quién la conserva— es lo que permite clasificar una imagen.",
    verResumen: "Ver resumen", siguiente: "Siguiente imagen", resumen: "Resumen",
    fraseA: "No basta con mirar una imagen para conocer su historia.", fraseB: "Necesitamos comprender de dónde viene.",
    conteo: (ok, p, no, d) => `Coincidencias: <strong>${ok}</strong> · Parcialmente correctas: <strong>${p}</strong> · No coincidentes: <strong>${no}</strong> · Dudas: <strong>${d}</strong>. El resultado no mide tu capacidad para detectar falsificaciones: muestra lo difícil que es clasificar una imagen sin conocer su origen.`,
    tuRespuesta: "Tu respuesta:", repetir: "Repetir el ejercicio", investigar: "Investigar en el archivo",
    especulativa: " (especulativa)", escenarioEsp: " · ESCENARIO ESPECULATIVO",
    leer: "Leer la historia", cerrarHistoria: "Cerrar la historia",
    sello: "Ficción · Moscú 2050 es un escenario hipotético",
    valorRango: (v) => `${v} % de la versión intervenida visible`,
    docOriginal: "Documento original: ", versionInt: "Versión intervenida: ",
    queCambio: "Qué cambió", porQueImporta: "Por qué importa identificar la intervención", fuentes: "Fuentes",
    verOriginal: "Ver la ficha del documento original",
    ampliarPieza: (i, f) => `Ampliar pieza ${i}: ${f}`, pieza: (i, f) => `Pieza ${i}: ${f}`,
    microPieza: "MEMORIA / FUENTE / PROCEDENCIA", hashtag: "#NoEsIAEsHistoria",
    copiadoCampana: "Enlace de la campaña copiado", noCopiadoCampana: "No se pudo copiar. Copia la dirección desde el navegador.",
    copiadoBoton: "✓ Enlace copiado", compartir: "Compartir…",
    textoCompartir: "NO ES IA. ES HISTORIA. Antes de compartir, verifica.", tituloCompartir: "NO ES IA. ES HISTORIA.",
    piezaDe: (i, n) => `Pieza ${i} de ${n}`,
    imagenBase: (t, f, a, inst, l) => `Imagen de base: «${t}» (${f}). ${a} · ${inst} · ${l}. El tratamiento gráfico es parte de la campaña.`,
    errNombre: "Escribe tu nombre (al menos 2 letras).", errCorreo: "Escribe un correo válido, por ejemplo nombre@dominio.com.",
    errTitulo: "Pon un título breve al registro.", errAnio: "Indica un año, aunque sea aproximado.",
    errAnioRango: (max) => `El año debe estar entre 1800 y ${max}.`,
    errLugar: "Indica dónde se tomó o se creó el material.", errDescripcion: "Describe el material con al menos 20 caracteres.",
    errFuente: "Cuéntanos de dónde procede: quién lo creó y cómo llegó a ti.",
    errArchivo: "Adjunta una imagen o un documento.", errFormato: "Formato no admitido. Usa JPG, PNG, WEBP o PDF.",
    errTamano: (mb) => `El archivo pesa más de ${mb} MB.`, errAutorizo: "Necesitamos tu autorización para revisar y usar el material.",
    previaLocal: " · Vista previa local, no se ha subido.", previaAlt: (n) => `Vista previa de ${n}`,
    revisa: (n) => `Revisa ${n === 1 ? "1 campo" : n + " campos"}`, revisaDet: "Los mensajes junto a cada campo explican qué falta.",
    noEnviado: "Aporte no enviado: esto es una demostración",
    noEnviado1: "Todos los campos son válidos, pero este prototipo no tiene un sistema para recibir ni guardar envíos. Tu material no ha salido de tu navegador.",
    noEnviado2: "En una versión real, el aporte quedaría pendiente de revisión y solo se publicaría después de comprobar su procedencia.",
    kb: "KB", mb: "MB",
    // Verificación
    verificado: "Verificado", verificadoMayus: "VERIFICADO", noVerificado: "NO VERIFICADO",
    comoVerifico: "¿Cómo se verificó esta imagen?", porQueNo: "¿Por qué no está en el archivo verificado?",
    casoBanner: "Caso de estudio · no forma parte del archivo verificado", casoCodigo: "CASO DE ESTUDIO",
    v1: "Fuente original", v2: "Contexto histórico", v3: "Contraste documental", v4: "Revisión humana", v5: "Resultado",
    discrepancias: "Discrepancias y datos pendientes", comprobaciones: "Comprobaciones registradas",
    alcance: "Alcance: se revisaron los metadatos públicos y el catálogo en línea de la institución. El original no se consultó en la institución.",
    revisadoEl: (f) => `Revisión documentada el ${f}`,
    verificadoDoc: "Verificación documental · prototipo académico",
    motivo: "Motivo", usoCaso: "En esta web solo se usa como caso de estudio: en el ejercicio, el comparador o la campaña.",
    fuentesOriginales: "Fuentes originales", panelTitulo: "Proceso de verificación",
    // Ejercicio
    tipoImagen: "Tipo de imagen", procedencia: "Procedencia", evidencias: "Evidencias que permiten determinar su origen",
    riesgoConfundir: "El riesgo de confundirla", porQueTexto2: "La autenticidad no siempre se ve a simple vista.",
    // Comparador
    origenCada: "Origen de cada imagen", evidenciaDoc: "Evidencia documental",
    intHistorica: "Intervención histórica", intDemostrativa: "Intervención demostrativa del prototipo",
    comoCambia: "Cómo cambia la lectura", leeOriginal: "Lo que muestra el original", leeIntervenida: "Lo que sugiere la versión intervenida",
    pistaComparar: "Mueve el control para comparar.", preguntaLbl: "Pregunta",
    // Campaña y recorrido
    verCaso: "Ver el caso de estudio", etapa: "Etapa"
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

/** El selector RU / ES conserva la sección (#ancla) en la que está la persona. */
export function iniciarIdioma() {
  document.querySelectorAll("[data-idioma]").forEach((a) => {
    a.addEventListener("click", () => {
      const ancla = location.hash && !location.hash.startsWith("#registro/") ? location.hash : "";
      a.href = a.getAttribute("href").split("#")[0] + ancla;
    });
  });
}
