/**
 * АРХИВ ПАМЯТИ / ARCHIVO DE LA MEMORIA — registros estructurados (ruso / español)
 * ------------------------------------------------------------------------------
 * Todas las imágenes proceden de Wikimedia Commons con licencia abierta
 * (dominio público, CC0, CC BY o CC BY-SA). Autoría, fecha y procedencia se
 * tomaron de los metadatos de cada archivo y de la institución citada.
 * Para los fondos del Archivo Principal de Moscú se usa su pie de foto
 * original en ruso. Cada texto se escribe como { ru, es } y se convierte
 * al idioma activo con localizar() (ver js/i18n.js).
 *
 * Estados: documentada · parcial · conflicto · reconstruccion
 */
import { localizar } from "../i18n.js";

export const CATEGORIAS = localizar([
  { id: "arquitectura", label: { ru: "Архитектура и облик города", es: "Arquitectura y transformación urbana" } },
  { id: "cotidiana", label: { ru: "Повседневная жизнь", es: "Vida cotidiana" } },
  { id: "cultura", label: { ru: "Культура и идентичность", es: "Cultura e identidad" } },
  { id: "acontecimientos", label: { ru: "Исторические события", es: "Acontecimientos históricos" } },
  { id: "memoria", label: { ru: "Гражданская память", es: "Memoria ciudadana" } }
]);

export const ESTADOS = localizar({
  documentada: { label: { ru: "Происхождение задокументировано", es: "Procedencia documentada" } },
  parcial: { label: { ru: "Происхождение установлено частично", es: "Procedencia parcial" } },
  conflicto: { label: { ru: "Противоречивые сведения", es: "Información en conflicto" } },
  reconstruccion: { label: { ru: "Реконструкция · не документ эпохи", es: "Reconstrucción · no es un registro" } }
});

const L = {
  pd: { nombre: { ru: "Общественное достояние", es: "Dominio público" }, url: null },
  cc0: { nombre: "CC0 1.0", url: "https://creativecommons.org/publicdomain/zero/1.0/deed.ru" },
  by4: { nombre: "CC BY 4.0", url: "https://creativecommons.org/licenses/by/4.0/deed.ru" },
  bysa3: { nombre: "CC BY-SA 3.0", url: "https://creativecommons.org/licenses/by-sa/3.0/deed.ru" },
  bysa4: { nombre: "CC BY-SA 4.0", url: "https://creativecommons.org/licenses/by-sa/4.0/deed.ru" }
};

const RIJKS = { ru: "Рейксмузеум (Амстердам), фотоальбом Московского метрополитена", es: "Rijksmuseum (Ámsterdam), álbum fotográfico del metro de Moscú" };
const GLAV = { ru: "Главархив Москвы", es: "Archivo Principal de Moscú (Главархив Москвы)" };
const conRef = (base, ref) => ({ ru: `${base.ru}, ${ref}`, es: `${base.es}, ${ref}` });
const MINIATURA = { ru: "Уменьшенная копия для веба.", es: "Miniatura reducida para la web." };
const AUTOR_NO_IDENT = { ru: "Не указан в изученной карточке", es: "No identificado en la ficha consultada" };
const NO_INDICADO = { ru: "Не указан", es: "No indicado" };
const DESCONOCIDO = { ru: "Неизвестен", es: "Desconocido" };
const FOTO = { ru: "Фотография", es: "Fotografía" };
const ALBUM = { ru: "Фотография (альбом)", es: "Fotografía (álbum)" };
const AUTOR_SNIMKA = { ru: "Автор снимка.", es: "Autor o autora de la fotografía." };
const GLAV_OK = (que) => ({ ru: `${que.ru} указаны Главархивом Москвы.`, es: `${que.es} indicados por el Archivo Principal de Moscú.` });
const RIA_OK = { ru: "Номер снимка в архиве РИА Новости, автор и дата.", es: "Número de imagen del archivo RIA Novosti, autor y fecha." };
const PLAZA_ROJA = { ru: "Красная площадь", es: "Plaza Roja" };
const GORKI = { ru: "Улица Горького (ныне Тверская)", es: "Calle Gorki (hoy Tverskaya)" };
const MOSCU = { ru: "Москва", es: "Moscú" };

const RAW = [
  {
    id: "MSK-1867-01", img: "panorama-1867", anio: 1867, categoria: "arquitectura",
    titulo: { ru: "Панорама Москвы с недостроенного храма", es: "Panorama de Moscú desde el templo en construcción" },
    fecha: "1867",
    ubicacion: { ru: "Вид с храма Христа Спасителя", es: "Vista desde el templo de Cristo Salvador" },
    tipo: { ru: "Панорамная фотография", es: "Fotografía panorámica" },
    descripcion: { ru: "Фотопанорама Москвы 1867 года, снятая с храма Христа Спасителя, который тогда ещё строился. На ней Кремль и город до больших перемен XX века.", es: "Panorama fotográfico de Moscú tomado en 1867 desde el templo de Cristo Salvador, que entonces seguía en construcción. Muestra el Kremlin y la ciudad antes de las grandes transformaciones del siglo XX." },
    autor: { ru: "Приписывается «Шерер, Набгольц и К°» (по другой копии панорамы на Викискладе)", es: "Atribuido a Scherer, Nabholz y Cía. (según otra copia del panorama en Commons)" },
    institucion: { ru: "Цифровая копия из блога; атрибуция взята из другой копии на Викискладе", es: "Copia digital publicada en un blog; atribución tomada de otra copia en Commons" },
    commons: "File:1867 Moscow panorama 1.jpg", original: null, licencia: L.pd, estado: "parcial",
    verificado: [{ ru: "Файл есть на Викискладе в общественном достоянии.", es: "El archivo existe en Wikimedia Commons con licencia de dominio público." }, { ru: "Другая копия той же панорамы приписывает её «Шерер, Набгольц и К°» и датирует 1867 годом (опубликована в 1886).", es: "Otra copia del mismo panorama lo atribuye a Scherer, Nabholz y Cía. y lo fecha en 1867 (publicado en 1886)." }],
    pendiente: [{ ru: "Использованная копия взята из блога, а не из учреждения.", es: "La copia usada procede de un blog, no de una institución." }, { ru: "Сверить атрибуцию с оригинальным альбомом 1886 года.", es: "Confirmar la atribución con el álbum original de 1886." }],
    intervenciones: { ru: "Уменьшено до 1920 px для веба. Других известных вмешательств в этом прототипе нет.", es: "Miniatura reducida a 1920 px para la web. Sin otras intervenciones conocidas en este prototipo." }
  },
  {
    id: "MSK-1890-02", img: "vista-general-1890", anio: 1895, categoria: "arquitectura",
    titulo: { ru: "Общий вид Москвы", es: "Vista general de Moscú" },
    fecha: { ru: "Между 1890 и 1900", es: "Entre 1890 y 1900" },
    ubicacion: { ru: "Москва (точка съёмки не установлена)", es: "Moscú (punto de vista no identificado)" },
    tipo: { ru: "Фотохром (цветная печать)", es: "Fotocromo (impresión a color)" },
    descripcion: { ru: "Общий вид города, напечатанный в технике фотохрома, которая добавляла цвет к чёрно-белому негативу.", es: "Vista general de la ciudad impresa con la técnica del fotocromo, que añadía color a partir de un negativo en blanco y negro." },
    autor: "Photochrom Print Collection",
    institucion: { ru: "Библиотека Конгресса США, LCCN 2001697450", es: "Biblioteca del Congreso de EE. UU., LCCN 2001697450" },
    commons: "File:General view, Moscow, Russia-LCCN2001697450.jpg", original: "https://lccn.loc.gov/2001697450", licencia: L.pd, estado: "documentada",
    verificado: [{ ru: "Каталожный номер Библиотеки Конгресса указан на Викискладе.", es: "Número de catálogo de la Biblioteca del Congreso indicado en Commons." }, { ru: "Примерная дата (1890–1900) по каталогу.", es: "Fecha aproximada (1890–1900) según el catálogo." }],
    pendiente: [{ ru: "Точное место съёмки.", es: "Punto exacto desde el que se tomó la vista." }],
    intervenciones: { ru: "Цвета не фотографические: их добавили при печати фотохрома. На главном экране сайта поверх снимка лежит спекулятивный графический слой, отмеченный как таковой.", es: "Los colores no son fotográficos: se añadieron al imprimir el fotocromo. En la portada de esta web se superpone además una capa gráfica especulativa, identificada como tal." }
  },
  {
    id: "MSK-1890-03", img: "catedral-1890", anio: 1890, categoria: "arquitectura",
    titulo: { ru: "Храм Христа Спасителя до сноса", es: "Catedral de Cristo Salvador antes de su demolición" },
    fecha: { ru: "Ок. 1890 (по каталогу)", es: "c. 1890 (según el catálogo)" },
    ubicacion: { ru: "Берег Москвы-реки у Кремля", es: "Orilla del río Moscova, cerca del Kremlin" },
    tipo: { ru: "Фотохром (цветная печать)", es: "Fotocromo (impresión a color)" },
    descripcion: { ru: "Храм Христа Спасителя на фотохроме конца XIX века. Здание взорвали в 1931 году и воссоздали в 1995–2000 годах.", es: "La catedral de Cristo Salvador en un fotocromo de finales del siglo XIX. El edificio fue demolido en 1931 y reconstruido entre 1995 y 2000." },
    autor: "Photochrom Print Collection",
    institucion: { ru: "Библиотека Конгресса США, LCCN 90713113", es: "Biblioteca del Congreso de EE. UU., LCCN 90713113" },
    commons: "File:Moscow Cathedral du St. Sauveur LCCN90713113.jpg", original: "https://lccn.loc.gov/90713113", licencia: L.pd, estado: "documentada",
    verificado: [{ ru: "Каталожный номер Библиотеки Конгресса.", es: "Número de catálogo de la Biblioteca del Congreso." }, { ru: "Оригинальное название: «Moscow Cathedral du St. Sauveur».", es: "Título original: «Moscow Cathedral du St. Sauveur»." }],
    pendiente: [{ ru: "1890 год приблизителен: другие карточки той же коллекции дают диапазон 1890–1900.", es: "El año 1890 es aproximado: otras fichas de la misma colección dan rangos de 1890–1900." }],
    intervenciones: { ru: "Цвет добавлен при печати фотохрома.", es: "Color añadido en el proceso de impresión del fotocromo." }
  },
  {
    id: "MSK-1931-04", img: "catedral-1931", anio: 1931, categoria: "arquitectura",
    titulo: { ru: "Взрыв храма Христа Спасителя", es: "Voladura de la catedral de Cristo Salvador" },
    fecha: { ru: "5 декабря 1931", es: "5 de diciembre de 1931" },
    ubicacion: { ru: "Берег Москвы-реки у Кремля", es: "Orilla del río Moscova, cerca del Kremlin" },
    tipo: FOTO,
    descripcion: { ru: "Момент взрыва храма, снесённого ради строительства Дворца Советов — здания, которое так и не было построено.", es: "Momento de la voladura de la catedral, demolida para levantar en su lugar el Palacio de los Sóviets, un edificio que nunca llegó a construirse." },
    autor: DESCONOCIDO,
    institucion: { ru: "Копия из образовательного проекта Seventeen Moments in Soviet History (soviethistory.org)", es: "Copia publicada por el proyecto educativo Seventeen Moments in Soviet History (soviethistory.org)" },
    commons: "File:Christ saviour explosion.jpg", original: null, licencia: L.pd, estado: "parcial",
    verificado: [{ ru: "Дата сноса (5 декабря 1931) совпадает с общей литературой.", es: "La fecha de la demolición (5 de diciembre de 1931) coincide con la bibliografía general." }, { ru: "Файл на Викискладе в общественном достоянии.", es: "Archivo en Commons con licencia de dominio público." }],
    pendiente: [{ ru: "Автор и исходный архив снимка.", es: "Autor y archivo de origen de la fotografía." }, { ru: "Доступная копия низкого разрешения (800 px).", es: "La copia disponible es de baja resolución (800 px)." }],
    intervenciones: { ru: "В этом прототипе нет. Неизвестно, ретушировалась ли исходная копия.", es: "Ninguna en este prototipo. Se desconoce si la copia de origen fue retocada." }
  },
  {
    id: "MSK-1890-05", img: "san-basilio-1890", anio: 1890, categoria: "cultura",
    titulo: { ru: "Храм Василия Блаженного, Красная площадь", es: "Catedral de San Basilio, Plaza Roja" },
    fecha: { ru: "Ок. 1890 (по каталогу)", es: "c. 1890 (según el catálogo)" },
    ubicacion: PLAZA_ROJA,
    tipo: { ru: "Фотохром (цветная печать)", es: "Fotocromo (impresión a color)" },
    descripcion: { ru: "Храм Василия Блаженного на Красной площади, фотохром из собрания Библиотеки Конгресса.", es: "La catedral de San Basilio en la Plaza Roja, en un fotocromo de la colección de la Biblioteca del Congreso." },
    autor: "Photochrom Print Collection",
    institucion: { ru: "Библиотека Конгресса США, LCCN 2017660946", es: "Biblioteca del Congreso de EE. UU., LCCN 2017660946" },
    commons: "File:Church of St. Basil, Red Square Moscow LCCN2017660946.jpg", original: "https://www.loc.gov/pictures/item/2017660946/", licencia: L.pd, estado: "documentada",
    verificado: [{ ru: "Каталожный номер и ссылка на карточку Библиотеки Конгресса.", es: "Número de catálogo y enlace a la ficha de la Biblioteca del Congreso." }, { ru: "Техника: фотохром, лист 17 × 23 см.", es: "Técnica: fotocromo, hoja de 17 × 23 cm." }],
    pendiente: [{ ru: "Точная дата исходной съёмки.", es: "Fecha exacta de la toma original." }],
    intervenciones: { ru: "Цвет добавлен при печати фотохрома.", es: "Color añadido en el proceso de impresión del fotocromo." }
  },
  {
    id: "MSK-1972-06", img: "casas-ostozhenka-1972", anio: 1972, categoria: "arquitectura",
    titulo: { ru: "Старые дома в районе Кропоткинской улицы", es: "Casas antiguas cerca de la calle Kropótkinskaya" },
    fecha: { ru: "Март 1972", es: "Marzo de 1972" },
    ubicacion: { ru: "Район Кропоткинской улицы (ныне Пречистенка)", es: "Zona de la calle Kropótkinskaya (hoy Prechístenka)" },
    tipo: FOTO,
    descripcion: { ru: "«Старые дома в районе Кропоткинской улицы». Снимок из серии Главархива об утраченном культурном наследии Москвы.", es: "«Casas antiguas en la zona de la calle Kropótkinskaya». Forma parte de una serie del Archivo Principal de Moscú sobre el patrimonio urbano desaparecido." },
    autor: { ru: "С. И. Васин", es: "S. I. Vasin" },
    institucion: GLAV,
    commons: "File:History of lost cultural heritage in Moscow 01.jpg", original: "https://www.mos.ru/news/item/89493073/", licencia: L.by4, estado: "documentada",
    verificado: [GLAV_OK({ ru: "Автор, дата и архив", es: "Autor, fecha y archivo" })],
    pendiente: [{ ru: "Точное место (стык Зачатьевских переулков) — примечание пользователей Викисклада, а не архива.", es: "La ubicación exacta (cruce de los callejones Zachatievski) es una nota de usuarios de Commons, no del archivo." }],
    intervenciones: MINIATURA
  },
  {
    id: "MSK-1935-07", img: "metro-arbatskaya-1935", anio: 1935, categoria: "arquitectura",
    titulo: { ru: "Наземный вестибюль станции «Арбатская»", es: "Vestíbulo exterior de la estación Arbátskaya" },
    fecha: { ru: "Между 1930 и 1935", es: "Entre 1930 y 1935" },
    ubicacion: { ru: "Арбатская площадь", es: "Plaza Arbátskaya" },
    tipo: ALBUM,
    descripcion: { ru: "Наземный вестибюль станции «Арбатская» из фотоальбома, посвящённого первой очереди Московского метрополитена.", es: "Vestíbulo de superficie de la estación Arbátskaya, del álbum fotográfico dedicado al primer tramo del metro de Moscú." },
    autor: AUTOR_NO_IDENT, institucion: conRef(RIJKS, "RP-F-F00935-D"),
    commons: "File:Exterieur van metrostation Arbatplein Station Arbatplein (titel op object), RP-F-F00935-D.jpg", original: "http://hdl.handle.net/10934/RM0001.COLLECT.271293", licencia: L.cc0, estado: "documentada",
    verificado: [{ ru: "Инвентарный номер Рейксмузеума.", es: "Número de inventario del Rijksmuseum." }, { ru: "Датировка 1930–1935 по данным музея.", es: "Datación 1930–1935 según el museo." }],
    pendiente: [AUTOR_SNIMKA], intervenciones: MINIATURA
  },
  {
    id: "MSK-1935-08", img: "metro-komsomolskaya-1935", anio: 1935, categoria: "cultura",
    titulo: { ru: "Платформа станции «Комсомольская»", es: "Andén de la estación Komsomólskaya" },
    fecha: { ru: "Между 1930 и 1935", es: "Entre 1930 y 1935" },
    ubicacion: { ru: "Станция «Комсомольская» Сокольнической линии", es: "Estación Komsomólskaya (línea Sokólnicheskaya)" },
    tipo: ALBUM,
    descripcion: { ru: "Интерьер станции «Комсомольская» первой линии метро, открытой в 1935 году.", es: "Interior de la estación Komsomólskaya de la primera línea del metro, inaugurada en 1935." },
    autor: AUTOR_NO_IDENT, institucion: conRef(RIJKS, "RP-F-F00935-F"),
    commons: "File:Interieur van metrostation Komsomolplein Perron van het station Komsomolplein (titel op object), RP-F-F00935-F.jpg", original: "http://hdl.handle.net/10934/RM0001.COLLECT.271295", licencia: L.cc0, estado: "documentada",
    verificado: [{ ru: "Инвентарный номер Рейксмузеума.", es: "Número de inventario del Rijksmuseum." }, { ru: "Станция определена в описании на Викискладе.", es: "Identificación de la estación en la descripción de Commons." }],
    pendiente: [AUTOR_SNIMKA],
    intervenciones: { ru: "Уменьшенная копия для веба. В разделе «До и после» показана версия с изменённым контрастом, отмеченная как вмешательство.", es: "Miniatura reducida para la web. En «Antes y después» se muestra una versión con contraste modificado, declarada como intervención." }
  },
  {
    id: "MSK-1935-09", img: "metro-escalera-1935", anio: 1935, categoria: "cotidiana",
    titulo: { ru: "Пассажиры на эскалаторе станции «Площадь Дзержинского»", es: "Pasajeros en la escalera mecánica de la estación Plaza Dzerzhinski" },
    fecha: { ru: "Между 1930 и 1935", es: "Entre 1930 y 1935" },
    ubicacion: { ru: "Станция «Площадь Дзержинского» (ныне «Лубянка»)", es: "Estación Plaza Dzerzhinski (hoy Lubianka)" },
    tipo: ALBUM,
    descripcion: { ru: "Пассажиры на одном из первых эскалаторов Московского метрополитена.", es: "Pasajeros en una de las primeras escaleras mecánicas del metro de Moscú." },
    autor: { ru: "В карточке музея: «Mospo Sostawitol»", es: "La ficha del museo indica «Mospo Sostawitol»" },
    institucion: conRef(RIJKS, "RP-F-F00935-K"),
    commons: "File:Mannen op een roltrap van metrostation Derzjinskiplein Roltrap van het station Derzjinskiplein (titel op object), RP-F-F00935-K.jpg", original: "http://hdl.handle.net/10934/RM0001.COLLECT.271300", licencia: L.cc0, estado: "documentada",
    verificado: [{ ru: "Инвентарный номер и датировка Рейксмузеума.", es: "Número de inventario y datación del Rijksmuseum." }],
    pendiente: [{ ru: "«Mospo Sostawitol» может быть искажённой транслитерацией с русского, а не именем; это нужно проверить.", es: "«Mospo Sostawitol» podría ser una transcripción del ruso y no un nombre propio; falta confirmarlo." }],
    intervenciones: MINIATURA
  },
  {
    id: "MSK-1935-10", img: "metro-constructores-1935", anio: 1935, categoria: "memoria",
    titulo: { ru: "Строители первой очереди метро", es: "Constructores del primer tramo del metro" },
    fecha: { ru: "Между 1930 и 1935", es: "Entre 1930 y 1935" },
    ubicacion: MOSCU, tipo: ALBUM,
    descripcion: { ru: "Групповой портрет рабочих, строивших первую линию Московского метрополитена.", es: "Retrato de grupo de los trabajadores que construyeron la primera línea del metro de Moscú." },
    autor: AUTOR_NO_IDENT, institucion: conRef(RIJKS, "RP-F-F00935-C"),
    commons: "File:Groepsportret van de bouwers van de Moskouse metro Bouwers van de metro (titel op object), RP-F-F00935-C.jpg", original: "http://hdl.handle.net/10934/RM0001.COLLECT.271292", licencia: L.cc0, estado: "documentada",
    verificado: [{ ru: "Инвентарный номер Рейксмузеума.", es: "Número de inventario del Rijksmuseum." }],
    pendiente: [{ ru: "Имена людей на снимке.", es: "Nombres de las personas retratadas." }], intervenciones: MINIATURA
  },
  {
    id: "MSK-1937-11", img: "metro-obras-1937", anio: 1937, categoria: "arquitectura",
    titulo: { ru: "Котлован рампы метро у выхода в парк", es: "Obras de la rampa del metro hacia el parque" },
    fecha: "1937",
    ubicacion: { ru: "Горьковский радиус Московского метро", es: "Radio Gorkovski del metro de Moscú" },
    tipo: FOTO,
    descripcion: { ru: "«Выход в парк Горьковского радиуса московского метро. Котлован рампы. Разработка ведётся с помощью 10-метровых транспортёров типа „Миаг“».", es: "«Salida al parque del radio Gorkovski del metro de Moscú. Excavación de la rampa. Se trabaja con transportadores de diez metros tipo Miag»." },
    autor: NO_INDICADO, institucion: GLAV,
    commons: "File:First years of Moscow Metro 01.jpg", original: "https://www.mos.ru/news/item/153833073/", licencia: L.by4, estado: "documentada",
    verificado: [GLAV_OK({ ru: "Подпись и архив", es: "Pie de foto y archivo" })],
    pendiente: [AUTOR_SNIMKA], intervenciones: MINIATURA
  },
  {
    id: "MSK-1935-12", img: "metro-postales-1935", anio: 1935, categoria: "cultura",
    titulo: { ru: "Набор открыток «Московский метрополитен»", es: "Juego de postales «Metro de Moscú»" },
    fecha: { ru: "1935 по подписи; 1934 по дате файла на Викискладе", es: "1935 según el pie de foto; 1934 según la fecha del archivo en Commons" },
    ubicacion: MOSCU,
    tipo: { ru: "Печатный документ (открытки)", es: "Documento impreso (postales)" },
    descripcion: { ru: "Серия открыток, посвящённых только что открытому Московскому метрополитену.", es: "Serie de postales dedicada al recién inaugurado metro de Moscú." },
    autor: NO_INDICADO, institucion: GLAV,
    commons: "File:First years of Moscow Metro 09.jpg", original: "https://www.mos.ru/news/item/153833073/", licencia: L.by4, estado: "conflicto",
    verificado: [{ ru: "Источник — Главархив Москвы.", es: "El archivo de origen es el Archivo Principal de Moscú." }],
    pendiente: [{ ru: "В подписи указан 1935 год, а в поле даты на Викискладе — 15 октября 1934. Нужно свериться с оригиналом.", es: "El pie de foto dice 1935 y el campo de fecha en Commons dice 15 de octubre de 1934. Hay que consultar el original." }],
    intervenciones: MINIATURA
  },
  {
    id: "MSK-1935-13", img: "metro-bovard-1935", anio: 1935, categoria: "cultura",
    titulo: { ru: "Отзыв американского журналиста о метро", es: "Opinión de un periodista estadounidense sobre el metro" },
    fecha: "1935", ubicacion: MOSCU,
    tipo: { ru: "Документ", es: "Documento" },
    descripcion: { ru: "«Отзыв главного редактора американской газеты St. Louis Post-Dispatch Боварда о московском метрополитене. Перевод с английского языка».", es: "Traducción al ruso de la opinión de Bovard, redactor jefe del diario estadounidense St. Louis Post-Dispatch, sobre el metro de Moscú." },
    autor: { ru: "Бовард (St. Louis Post-Dispatch); перевод анонимный", es: "Bovard (St. Louis Post-Dispatch); traducción anónima" }, institucion: GLAV,
    commons: "File:First years of Moscow Metro 12.jpg", original: "https://www.mos.ru/news/item/153833073/", licencia: L.by4, estado: "documentada",
    verificado: [GLAV_OK({ ru: "Описание и дата", es: "Descripción y fecha" })],
    pendiente: [{ ru: "Полная расшифровка текста и поиск английского оригинала.", es: "Transcripción completa del texto y localización del original en inglés." }], intervenciones: MINIATURA
  },
  {
    id: "MSK-1955-14", img: "taxis-1955", anio: 1955, categoria: "cotidiana",
    titulo: { ru: "Стоянка маршрутных такси для экскурсий", es: "Parada de taxis para excursiones por la ciudad" },
    fecha: { ru: "Июль 1955", es: "Julio de 1955" },
    ubicacion: { ru: "Центр Москвы (вероятно, площадь Революции)", es: "Centro de Moscú (posiblemente plaza de la Revolución)" },
    tipo: FOTO,
    descripcion: { ru: "«Стоянка маршрутных такси для экскурсий по городу».", es: "«Parada de taxis de ruta fija para excursiones por la ciudad»." },
    autor: { ru: "Я. Берлинер", es: "Ya. Berliner" }, institucion: GLAV,
    commons: "File:Taxis in Moscow July 1955.jpg", original: "https://www.mos.ru/news/item/102326073/", licencia: L.by4, estado: "documentada",
    verificado: [GLAV_OK({ ru: "Автор, месяц и год", es: "Autor, mes y año" })],
    pendiente: [{ ru: "Место (площадь Революции у стены Китай-города) — примечание пользователей Викисклада, а не архива.", es: "La ubicación (plaza de la Revolución, junto a la muralla de Kitái-gorod) es una nota de usuarios de Commons, no del archivo." }],
    intervenciones: MINIATURA
  },
  {
    id: "MSK-1955-15", img: "gorki-1950s", anio: 1955, categoria: "cotidiana",
    titulo: { ru: "Улица Горького", es: "Calle Gorki" },
    fecha: { ru: "1950–1960-е годы", es: "Décadas de 1950–1960" },
    ubicacion: GORKI, tipo: FOTO,
    descripcion: { ru: "Улица Горького — главная улица центра Москвы, которой в 1990 году вернули историческое название Тверская.", es: "La calle Gorki, principal avenida del centro de Moscú, que recuperó su nombre histórico de Tverskaya en 1990." },
    autor: { ru: "М. Трахман", es: "M. Trajman" }, institucion: GLAV,
    commons: "File:Gorkogo street 1950-60s.jpg", original: "https://www.mos.ru/news/item/95942073/", licencia: L.by4, estado: "documentada",
    verificado: [GLAV_OK({ ru: "Автор и период", es: "Autor y periodo" })],
    pendiente: [{ ru: "Точный год съёмки.", es: "Año exacto de la toma." }],
    intervenciones: { ru: "Уменьшенная копия для веба. В разделе «До и после» используется как основа спекулятивной визуализации, отмеченной как таковая.", es: "Miniatura reducida para la web. En «Antes y después» se usa como base de una visualización especulativa declarada." }
  },
  {
    id: "MSK-1960-16", img: "luzhniki-1960", anio: 1960, categoria: "cotidiana",
    titulo: { ru: "Новогодние ёлки у стадиона имени Ленина", es: "Fiestas de Año Nuevo junto al estadio Lenin" },
    fecha: { ru: "Январь 1960", es: "Enero de 1960" },
    ubicacion: { ru: "Центральный стадион имени В. И. Ленина (ныне «Лужники»)", es: "Estadio Central Lenin (hoy Luzhnikí)" },
    tipo: FOTO,
    descripcion: { ru: "«У Центрального стадиона имени В. И. Ленина в дни новогодней ёлки».", es: "«Junto al Estadio Central V. I. Lenin en los días de las fiestas del árbol de Año Nuevo»." },
    autor: { ru: "М. Озерский", es: "M. Ozerski" }, institucion: GLAV,
    commons: "File:Luzhniki on 1960 New Year 01.jpg", original: "https://www.mos.ru/news/item/84775073/", licencia: L.by4, estado: "documentada",
    verificado: [GLAV_OK({ ru: "Автор, месяц и год", es: "Autor, mes y año" })],
    pendiente: [], intervenciones: MINIATURA
  },
  {
    id: "MSK-1967-17", img: "guarderia-1967", anio: 1967, categoria: "cotidiana",
    titulo: { ru: "Обед в детском саду фабрики", es: "Comida en un jardín infantil de fábrica" },
    fecha: "1967",
    ubicacion: { ru: "Детский сад 1-й ситценабивной фабрики", es: "Jardín infantil de la 1.ª fábrica de estampado de algodón" },
    tipo: FOTO,
    descripcion: { ru: "«Дети за обедом в столовой детского сада 1-й ситценабивной фабрики».", es: "«Niños y niñas almorzando en el comedor del jardín infantil de la 1.ª fábrica de estampado de algodón»." },
    autor: DESCONOCIDO, institucion: GLAV,
    commons: "File:Eating on Moscow kindergardens 05.jpg", original: "https://www.mos.ru/news/item/127853073/", licencia: L.by4, estado: "documentada",
    verificado: [GLAV_OK({ ru: "Подпись и год", es: "Pie de foto y año" })],
    pendiente: [AUTOR_SNIMKA, { ru: "Адрес здания (Дербеневская улица) — примечание пользователей Викисклада.", es: "La dirección del edificio (calle Derbenióvskaya) es una nota de usuarios de Commons." }],
    intervenciones: MINIATURA
  },
  {
    id: "MSK-1970-18", img: "fabrica-1970", anio: 1970, categoria: "memoria",
    titulo: { ru: "Цех Первой ситценабивной фабрики", es: "Taller de la Primera fábrica de estampado de algodón" },
    fecha: "1970",
    ubicacion: { ru: "Фабрика на Дербенёвке", es: "Fábrica en la zona de Derbenióvka" },
    tipo: FOTO,
    descripcion: { ru: "«В цехе ширпотреба Первой ситценабивной фабрики».", es: "«En el taller de artículos de consumo de la Primera fábrica de estampado de algodón»." },
    autor: { ru: "Л. Павлов", es: "L. Pávlov" }, institucion: GLAV,
    commons: "File:Womens working on Derbenevka.jpg", original: "https://www.mos.ru/news/item/122599073/", licencia: L.by4, estado: "documentada",
    verificado: [GLAV_OK({ ru: "Автор и год", es: "Autor y año" })],
    pendiente: [{ ru: "Имена работниц.", es: "Nombres de las trabajadoras." }], intervenciones: MINIATURA
  },
  {
    id: "MSK-1960-19", img: "tunel-metro-1960", anio: 1960, categoria: "memoria",
    titulo: { ru: "Проходка тоннеля метро", es: "Excavación de un túnel del metro" },
    fecha: { ru: "Июль 1960", es: "Julio de 1960" },
    ubicacion: { ru: "Участок «Новые Черёмушки» — «Ломоносовская» (ныне «Профсоюзная»)", es: "Tramo Nóvye Cheriómushki – Lomonósovskaya (hoy Profsoyúznaya)" },
    tipo: FOTO,
    descripcion: { ru: "«Машинист механизированного щита Ю. Зыкин ведёт проходку тоннеля на участке метро „Новые Черёмушки“ — „Ломоносовская“».", es: "«El maquinista del escudo mecanizado Yu. Zykin excava el túnel del tramo de metro Nóvye Cheriómushki – Lomonósovskaya»." },
    autor: { ru: "Ю. Абрамочкин", es: "Yu. Abramochkin" }, institucion: GLAV,
    commons: "File:Construction of tunnels of KRL 1960.jpg", original: "https://www.mos.ru/news/item/92900073/", licencia: L.by4, estado: "documentada",
    verificado: [GLAV_OK({ ru: "Автор, человек на снимке, участок и дата", es: "Autor, persona retratada, tramo y fecha" })],
    pendiente: [], intervenciones: MINIATURA
  },
  {
    id: "MSK-1980-20", img: "olimpiada-1980", anio: 1980, categoria: "acontecimientos",
    titulo: { ru: "Церемония открытия Олимпийских игр", es: "Ceremonia de apertura de los Juegos Olímpicos" },
    fecha: { ru: "19 июля 1980", es: "19 de julio de 1980" },
    ubicacion: { ru: "Центральный стадион имени Ленина (ныне «Лужники»)", es: "Estadio Central Lenin (hoy Luzhnikí)" },
    tipo: { ru: "Фотография (слайд 35 мм)", es: "Fotografía (diapositiva 35 mm)" },
    descripcion: { ru: "Церемония открытия XXII летних Олимпийских игр, проходивших в Москве с 19 июля по 3 августа 1980 года.", es: "Ceremonia de apertura de los XXII Juegos Olímpicos de verano, celebrados en Moscú del 19 de julio al 3 de agosto de 1980." },
    autor: { ru: "Сергей Гунеев", es: "Serguéi Guneev" }, institucion: { ru: "Архив РИА Новости, снимок № 487025", es: "Archivo de RIA Novosti, imagen n.º 487025" },
    commons: "File:RIAN archive 487025 Opening ceremony of the 1980 Olympic Games.jpg", original: null, licencia: L.bysa3, estado: "documentada",
    verificado: [RIA_OK], pendiente: [], intervenciones: MINIATURA
  },
  {
    id: "MSK-1980-21", img: "antorcha-1980", anio: 1980, categoria: "cultura",
    titulo: { ru: "Эстафета олимпийского огня на улице Горького", es: "Relevo de la llama olímpica en la calle Gorki" },
    fecha: { ru: "18 июля 1980", es: "18 de julio de 1980" },
    ubicacion: GORKI,
    tipo: { ru: "Фотография (негатив 35 мм)", es: "Fotografía (negativo 35 mm)" },
    descripcion: { ru: "Эстафета олимпийского огня в центре Москвы за день до открытия Игр.", es: "Relevo de la antorcha olímpica por el centro de Moscú, un día antes de la inauguración de los Juegos." },
    autor: { ru: "Виталий Арутюнов", es: "Vitali Arutiunov" }, institucion: { ru: "Архив РИА Новости, снимок № 555932", es: "Archivo de RIA Novosti, imagen n.º 555932" },
    commons: "File:RIAN archive 555932 Olympic flame relay in Gorky street.jpg", original: null, licencia: L.bysa3, estado: "documentada",
    verificado: [RIA_OK], pendiente: [], intervenciones: MINIATURA
  },
  {
    id: "MSK-1941-22", img: "desfile-1941", anio: 1941, categoria: "acontecimientos",
    titulo: { ru: "С парада 7 ноября — на фронт", es: "Del desfile del 7 de noviembre al frente" },
    fecha: { ru: "7 ноября 1941", es: "7 de noviembre de 1941" },
    ubicacion: PLAZA_ROJA,
    tipo: { ru: "Фотография (негатив 35 мм)", es: "Fotografía (negativo 35 mm)" },
    descripcion: { ru: "Войска, которые после парада на Красной площади отправились прямо на фронт во время битвы за Москву.", es: "Soldados que, después del desfile en la Plaza Roja, se dirigieron directamente al frente durante la batalla de Moscú." },
    autor: { ru: "Анатолий Гаранин", es: "Anatoli Garanin" }, institucion: { ru: "Архив РИА Новости, снимок № 669663", es: "Archivo de RIA Novosti, imagen n.º 669663" },
    commons: "File:RIAN archive 669663 Soviet troops head to front lines after 1941 Red Square parade.jpg", original: null, licencia: L.bysa3, estado: "documentada",
    verificado: [RIA_OK, { ru: "Парад 7 ноября 1941 года широко задокументирован.", es: "El desfile del 7 de noviembre de 1941 está ampliamente documentado." }],
    pendiente: [], intervenciones: MINIATURA
  },
  {
    id: "MSK-1941-23", img: "globo-pushkin-1941", anio: 1941, categoria: "acontecimientos",
    titulo: { ru: "Аэростат заграждения над памятником Пушкину", es: "Globo de barrera sobre el monumento a Pushkin" },
    fecha: { ru: "10 декабря 1941", es: "10 de diciembre de 1941" },
    ubicacion: { ru: "Памятник А. С. Пушкину", es: "Monumento a Alexandr Pushkin" },
    tipo: { ru: "Фотография (негатив 6 × 6)", es: "Fotografía (negativo 6 × 6)" },
    descripcion: { ru: "Аэростат противовоздушной обороны над памятником Пушкину во время обороны Москвы.", es: "Un globo de barrera antiaérea suspendido sobre el monumento a Pushkin durante la defensa de Moscú." },
    autor: { ru: "Наум Грановский", es: "Naum Granovski" }, institucion: { ru: "Архив РИА Новости, снимок № 43140", es: "Archivo de RIA Novosti, imagen n.º 43140" },
    commons: "File:RIAN archive 43140 Barrage balloon above the Pushkin monument.jpg", original: null, licencia: L.bysa3, estado: "documentada",
    verificado: [RIA_OK], pendiente: [], intervenciones: MINIATURA
  },
  {
    id: "MSK-1941-24", img: "tanque-gorki-1941", anio: 1941, categoria: "acontecimientos",
    titulo: { ru: "Танк КВ-1 на улице Горького", es: "Tanque KV-1 en la calle Gorki" },
    fecha: { ru: "7 ноября 1941", es: "7 de noviembre de 1941" },
    ubicacion: GORKI, tipo: FOTO,
    descripcion: { ru: "Тяжёлый танк КВ-1 движется по улице Горького в день парада 1941 года.", es: "Un tanque pesado KV-1 avanza por la calle Gorki el día del desfile de 1941." },
    autor: { ru: "Леонид Доренский (ТАСС)", es: "Leonid Dorenski (TASS)" }, institucion: { ru: "Фонды РИА Новости, идентификатор 5815234", es: "Fondos de RIA Novosti, identificador 5815234" },
    commons: "File:Танк КВ-1 на улице Горького в Москве, 7 ноября 1941 года.jpg", original: null, licencia: L.pd, estado: "documentada",
    verificado: [{ ru: "Автор, агентство, дата и идентификатор РИА Новости указаны на Викискладе.", es: "Autor, agencia, fecha e identificador de RIA Novosti indicados en Commons." }],
    pendiente: [], intervenciones: MINIATURA
  },
  {
    id: "MSK-1945-25", img: "victoria-1945", anio: 1945, categoria: "acontecimientos",
    titulo: { ru: "Парад Победы на Красной площади", es: "Desfile de la Victoria en la Plaza Roja" },
    fecha: { ru: "24 июня 1945", es: "24 de junio de 1945" },
    ubicacion: PLAZA_ROJA, tipo: FOTO,
    descripcion: { ru: "Парад Победы на Красной площади после окончания Второй мировой войны в Европе.", es: "Desfile de la Victoria celebrado en la Plaza Roja tras el fin de la Segunda Guerra Mundial en Europa." },
    autor: NO_INDICADO, institucion: { ru: "Министерство обороны России (официальная фотогалерея)", es: "Ministerio de Defensa de Rusia (galería fotográfica oficial)" },
    commons: "File:Парад Победы на Красной площади 24 июня 1945 г. (23).jpg", original: null, licencia: L.by4, estado: "documentada",
    verificado: [{ ru: "Дата и ведомственный источник указаны на Викискладе.", es: "Fecha y fuente institucional indicadas en Commons." }],
    pendiente: [AUTOR_SNIMKA], intervenciones: MINIATURA
  },
  {
    id: "MSK-1961-26", img: "gagarin-1961", anio: 1961, categoria: "acontecimientos",
    titulo: { ru: "Юрий Гагарин приветствует москвичей с трибуны Мавзолея", es: "Yuri Gagarin saluda desde el Mausoleo" },
    fecha: { ru: "14 апреля 1961", es: "14 de abril de 1961" },
    ubicacion: PLAZA_ROJA, tipo: FOTO,
    descripcion: { ru: "«Первый в мире космонавт Ю. А. Гагарин приветствует собравшихся на Красной площади в день его встречи по возвращении из космического полёта» (полёт состоялся 12 апреля 1961 года).", es: "«El primer cosmonauta del mundo, Yu. A. Gagarin, saluda a la multitud reunida en la Plaza Roja el día de su recibimiento tras el vuelo espacial» (el vuelo fue el 12 de abril de 1961)." },
    autor: { ru: "Ю. Д. Королёв", es: "Yu. D. Koroliov" }, institucion: GLAV,
    commons: "File:Greeting of Yuri Gagarin 02.jpg", original: "https://www.mos.ru/news/item/122374073/", licencia: L.by4, estado: "documentada",
    verificado: [GLAV_OK({ ru: "Автор, дата и архив", es: "Autor, fecha y archivo" })],
    pendiente: [], intervenciones: MINIATURA
  },
  {
    id: "MSK-1954-27", img: "restauracion-1954", anio: 1954, categoria: "memoria",
    titulo: { ru: "Редкие документы перед реставрацией", es: "Documentos raros preparados para su restauración" },
    fecha: { ru: "Июнь 1954", es: "Junio de 1954" },
    ubicacion: { ru: "Центральная реставрационная мастерская Главного архивного управления", es: "Taller Central de Restauración de la Dirección General de Archivos" },
    tipo: FOTO,
    descripcion: { ru: "«Редкие исторические материалы, подготовленные к реставрации». Снимок о часто незаметной работе по сохранению памяти.", es: "«Materiales históricos raros preparados para su restauración». Una imagen sobre el trabajo, a menudo invisible, de conservar la memoria." },
    autor: { ru: "А. Чепрунов", es: "A. Cheprunov" }, institucion: GLAV,
    commons: "File:History of Moscow Main Archive 01.jpg", original: "https://www.mos.ru/news/item/75322073/", licencia: L.by4, estado: "documentada",
    verificado: [GLAV_OK({ ru: "Автор, дата и архив", es: "Autor, fecha y archivo" })],
    pendiente: [{ ru: "Какие именно документы на снимке.", es: "Qué documentos aparecen en la imagen." }], intervenciones: MINIATURA
  },
  {
    id: "MSK-19XX-28", img: "revista-ejercito-lcc", anio: null, categoria: "acontecimientos",
    titulo: { ru: "Смотр войск Красной армии в Москве", es: "Revista de tropas del Ejército Rojo en Moscú" },
    fecha: { ru: "Надёжной даты нет (в каталоге указан 1900 год — невозможная дата)", es: "Sin fecha fiable (el catálogo indica 1900, una fecha imposible)" },
    ubicacion: { ru: "Москва (точное место не установлено)", es: "Moscú (lugar exacto no identificado)" },
    tipo: { ru: "Стеклянный негатив", es: "Negativo de vidrio" },
    descripcion: { ru: "Негатив агентства Bain News Service под названием «Moscow — review of Red Army». Красная армия создана в 1918 году, поэтому указанная в метаданных дата 1900 год не может быть верной.", es: "Negativo de la agencia Bain News Service titulado «Moscow — review of Red Army». El Ejército Rojo se creó en 1918, así que la fecha de 1900 que aparece en los metadatos no puede ser correcta." },
    autor: { ru: "Bain News Service (издатель)", es: "Bain News Service (editor)" }, institucion: { ru: "Библиотека Конгресса США, LCCN 2014713395", es: "Biblioteca del Congreso de EE. UU., LCCN 2014713395" },
    commons: "File:Moscow - review of Red Army LCCN2014713395.tif", original: "https://lccn.loc.gov/2014713395", licencia: L.pd, estado: "conflicto",
    verificado: [{ ru: "Каталожный номер Библиотеки Конгресса.", es: "Número de catálogo de la Biblioteca del Congreso." }, { ru: "Оригинальное название негатива.", es: "Título original del negativo." }],
    pendiente: [{ ru: "Настоящая дата снимка (после 1918 года).", es: "Fecha real de la fotografía (posterior a 1918)." }, { ru: "Точное место смотра.", es: "Lugar exacto de la revista militar." }],
    intervenciones: { ru: "Преобразовано из TIFF в JPG для веба.", es: "Conversión de TIFF a JPG para la web." }
  },
  {
    id: "MSK-1937-29", img: "yezhov-original-1937", anio: 1937, categoria: "acontecimientos",
    titulo: { ru: "Сталин, Молотов и Ежов у канала (исходная версия)", es: "Stalin, Mólotov y Yezhov junto a un canal (versión original)" },
    fecha: { ru: "Апрель 1937 (по данным Викисклада)", es: "Abril de 1937 (según Commons)" },
    ubicacion: { ru: "Канал Москва — Волга (по литературе)", es: "Canal Moscú–Volga, según la bibliografía" },
    tipo: FOTO,
    descripcion: { ru: "Исходная версия снимка, на котором нарком внутренних дел Николай Ежов идёт рядом со Сталиным. После падения Ежова его убрали с фотографии — это один из самых известных примеров фотомонтажа.", es: "Versión original de una fotografía en la que aparece Nikolái Yezhov, jefe de la policía política, junto a Stalin. Tras su caída fue eliminado de la imagen: es uno de los ejemplos más conocidos de manipulación fotográfica." },
    autor: DESCONOCIDO, institucion: { ru: "Копия опубликована World War II Database (ww2db.com)", es: "Copia publicada por World War II Database (ww2db.com)" },
    commons: "File:Nikolai Yezhov with Stalin and Molotov along the Volga–Don Canal, original.jpg", original: null, licencia: L.pd, estado: "conflicto",
    verificado: [{ ru: "На Викискладе есть исходная и отретушированная версии с одинаковым кадром.", es: "Existen en Commons la versión original y la retocada con el mismo encuadre." }, { ru: "Википедия («Censorship of images in the Soviet Union») относит сцену к каналу Москва — Волга.", es: "Wikipedia («Censorship of images in the Soviet Union») sitúa la escena en el canal Moscú–Volga." }],
    pendiente: [{ ru: "Название файла на Викискладе упоминает канал Волга — Дон, открытый в 1952 году, — через годы после смерти Ежова. Сведения противоречат друг другу.", es: "El título del archivo en Commons dice «canal Volga–Don», que se inauguró en 1952, años después de la muerte de Yezhov. El dato es incoherente." }, { ru: "Исходный архив обеих версий.", es: "Archivo de origen de ambas versiones." }],
    intervenciones: { ru: "Это версия без ретуши. Отретушированная версия без Ежова показана в разделе «До и после».", es: "Esta es la versión sin retoque. La versión retocada, sin Yezhov, se muestra en «Antes y después»." }
  },
  {
    id: "REC-1921-30", img: "vasnetsov-kremlin-1921", anio: 1921, categoria: "arquitectura",
    titulo: { ru: "«Московский Кремль при Иване Калите»", es: "«El Kremlin de Moscú en tiempos de Iván Kalitá»" },
    fecha: { ru: "Написано в 1921 году (воссоздаёт XIV век)", es: "Pintado en 1921 (recrea el siglo XIV)" },
    ubicacion: { ru: "Московский Кремль (воображаемая реконструкция)", es: "Kremlin de Moscú (reconstrucción imaginada)" },
    tipo: { ru: "Художественная реконструкция (акварель)", es: "Reconstrucción artística (acuarela)" },
    descripcion: { ru: "Акварель Аполлинария Васнецова, воссоздающая Кремль XIV века. Это реконструкция на основе исторических исследований, а не документ эпохи.", es: "Acuarela de Apollinari Vasnetsov que imagina el Kremlin del siglo XIV. Es una reconstrucción basada en estudios históricos, no un registro de la época." },
    autor: { ru: "Аполлинарий Васнецов", es: "Apollinari Vasnetsov" }, institucion: { ru: "Музей Москвы", es: "Museo de Moscú" },
    commons: "File:Vasnetsov Kreml pri Ivane kalite.jpg", original: null, licencia: L.pd, estado: "reconstruccion",
    verificado: [{ ru: "Автор, год и музей указаны на Викискладе.", es: "Autor, año y museo indicados en Commons." }],
    pendiente: [{ ru: "На какие исторические источники опирался художник.", es: "Fuentes históricas en las que se basó el pintor." }],
    intervenciones: { ru: "Это само по себе реконструкция: она показывает прошлое, которое никто не мог сфотографировать.", es: "Es en sí misma una reconstrucción: muestra un pasado que nadie pudo fotografiar." }
  },
  {
    id: "REC-2021-31", img: "palacio-soviets-3d", anio: 2021, categoria: "arquitectura",
    titulo: { ru: "Дворец Советов (3D-модель)", es: "Palacio de los Sóviets (modelo 3D)" },
    fecha: { ru: "Создано 23 декабря 2021", es: "Creado el 23 de diciembre de 2021" },
    ubicacion: { ru: "Место снесённого храма Христа Спасителя (здание не построено)", es: "Solar de la catedral de Cristo Salvador (edificio nunca construido)" },
    tipo: { ru: "Цифровая реконструкция (3D)", es: "Reconstrucción digital (3D)" },
    descripcion: { ru: "3D-модель Дворца Советов — небоскрёба, который должен был заменить взорванный в 1931 году храм и так и не был достроен. По словам автора, модель объединяет несколько реальных проектов.", es: "Modelo 3D del Palacio de los Sóviets, el rascacielos que iba a sustituir a la catedral demolida en 1931 y que nunca se terminó. Según su autor, combina varios planos reales." },
    autor: { ru: "Участник Викисклада «Віщун»", es: "Usuario de Wikimedia Commons «Віщун»" }, institucion: { ru: "Собственная работа, опубликованная на Викискладе", es: "Obra propia publicada en Wikimedia Commons" },
    commons: "File:Palace of the Soviets - Blender 3D.jpg", original: null, licencia: L.bysa4, estado: "reconstruccion",
    verificado: [{ ru: "Автор сообщает, что модель сделана в Blender по нескольким проектам.", es: "El autor declara que es un modelo hecho con Blender a partir de varios planos." }],
    pendiente: [{ ru: "Какие именно проекты объединены.", es: "Qué planos concretos se combinaron." }],
    intervenciones: { ru: "Синтетическое изображение: здание, которого никогда не существовало.", es: "Imagen sintética: representa un edificio que nunca existió." }
  }
];

export const REGISTROS = localizar(RAW);

/** URL de la página del archivo en Wikimedia Commons. */
export function urlCommons(titulo) {
  return "https://commons.wikimedia.org/wiki/" + encodeURI(titulo.replace(/ /g, "_"));
}
