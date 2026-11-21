/**
 * АРХИВ ПАМЯТИ / MEMORY ARCHIVE — registros estructurados (ruso / inglés)
 * -----------------------------------------------------------------------
 * Todas las imágenes proceden de Wikimedia Commons con licencia abierta
 * (dominio público, CC0, CC BY o CC BY-SA). Autoría, fecha y procedencia se
 * tomaron de los metadatos de cada archivo y de la institución citada.
 * Para los fondos del Archivo Principal de Moscú se usa su pie de foto
 * original en ruso. Cada texto se escribe como { ru, en } y se convierte
 * al idioma activo con localizar() (ver js/i18n.js).
 *
 * Estados: documentada · parcial · conflicto · reconstruccion
 */
import { localizar } from "../i18n.js";

export const CATEGORIAS = localizar([
  { id: "arquitectura", label: { ru: "Архитектура и облик города", en: "Architecture and urban change" } },
  { id: "cotidiana", label: { ru: "Повседневная жизнь", en: "Everyday life" } },
  { id: "cultura", label: { ru: "Культура и идентичность", en: "Culture and identity" } },
  { id: "acontecimientos", label: { ru: "Исторические события", en: "Historical events" } },
  { id: "memoria", label: { ru: "Гражданская память", en: "Civic memory" } }
]);

export const ESTADOS = localizar({
  documentada: { label: { ru: "Происхождение задокументировано", en: "Documented provenance" } },
  parcial: { label: { ru: "Происхождение установлено частично", en: "Partial provenance" } },
  conflicto: { label: { ru: "Противоречивые сведения", en: "Conflicting information" } },
  reconstruccion: { label: { ru: "Реконструкция · не документ эпохи", en: "Reconstruction · not a record" } }
});

const L = {
  pd: { nombre: { ru: "Общественное достояние", en: "Public domain" }, url: null },
  cc0: { nombre: "CC0 1.0", url: "https://creativecommons.org/publicdomain/zero/1.0/deed.ru" },
  by4: { nombre: "CC BY 4.0", url: "https://creativecommons.org/licenses/by/4.0/deed.ru" },
  bysa3: { nombre: "CC BY-SA 3.0", url: "https://creativecommons.org/licenses/by-sa/3.0/deed.ru" },
  bysa4: { nombre: "CC BY-SA 4.0", url: "https://creativecommons.org/licenses/by-sa/4.0/deed.ru" }
};

const RIJKS = { ru: "Рейксмузеум (Амстердам), фотоальбом Московского метрополитена", en: "Rijksmuseum (Amsterdam), Moscow Metro photo album" };
const GLAV = { ru: "Главархив Москвы", en: "Moscow Main Archive (Glavarkhiv)" };
const conRef = (base, ref) => ({ ru: `${base.ru}, ${ref}`, en: `${base.en}, ${ref}` });
const MINIATURA = { ru: "Уменьшенная копия для веба.", en: "Thumbnail resized for the web." };
const AUTOR_NO_IDENT = { ru: "Не указан в изученной карточке", en: "Not identified in the record consulted" };

const RAW = [
  {
    id: "MSK-1867-01", img: "panorama-1867", anio: 1867, categoria: "arquitectura",
    titulo: { ru: "Панорама Москвы с недостроенного храма", en: "Panorama of Moscow from the unfinished cathedral" },
    fecha: { ru: "1867", en: "1867" },
    ubicacion: { ru: "Вид с храма Христа Спасителя", en: "View from the Cathedral of Christ the Saviour" },
    tipo: { ru: "Панорамная фотография", en: "Panoramic photograph" },
    descripcion: { ru: "Фотопанорама Москвы 1867 года, снятая с храма Христа Спасителя, который тогда ещё строился. На ней Кремль и город до больших перемен XX века.", en: "An 1867 photographic panorama of Moscow taken from the Cathedral of Christ the Saviour, then still under construction. It shows the Kremlin and the city before the great changes of the 20th century." },
    autor: { ru: "Приписывается «Шерер, Набгольц и К°» (по другой копии панорамы на Викискладе)", en: "Attributed to Scherer, Nabholz & Co. (according to another copy on Commons)" },
    institucion: { ru: "Цифровая копия из блога; атрибуция взята из другой копии на Викискладе", en: "Digital copy from a blog; attribution taken from another copy on Commons" },
    commons: "File:1867 Moscow panorama 1.jpg", original: null, licencia: L.pd, estado: "parcial",
    verificado: [{ ru: "Файл есть на Викискладе в общественном достоянии.", en: "The file is on Wikimedia Commons in the public domain." }, { ru: "Другая копия той же панорамы приписывает её «Шерер, Набгольц и К°» и датирует 1867 годом (опубликована в 1886).", en: "Another copy of the same panorama credits Scherer, Nabholz & Co. and dates it 1867 (published 1886)." }],
    pendiente: [{ ru: "Использованная копия взята из блога, а не из учреждения.", en: "The copy used comes from a blog, not an institution." }, { ru: "Сверить атрибуцию с оригинальным альбомом 1886 года.", en: "Check the attribution against the original 1886 album." }],
    intervenciones: { ru: "Уменьшено до 1920 px для веба. Других известных вмешательств в этом прототипе нет.", en: "Resized to 1920 px for the web. No other known interventions in this prototype." }
  },
  {
    id: "MSK-1890-02", img: "vista-general-1890", anio: 1895, categoria: "arquitectura",
    titulo: { ru: "Общий вид Москвы", en: "General view of Moscow" },
    fecha: { ru: "Между 1890 и 1900", en: "Between 1890 and 1900" },
    ubicacion: { ru: "Москва (точка съёмки не установлена)", en: "Moscow (viewpoint not identified)" },
    tipo: { ru: "Фотохром (цветная печать)", en: "Photochrom (colour print)" },
    descripcion: { ru: "Общий вид города, напечатанный в технике фотохрома, которая добавляла цвет к чёрно-белому негативу.", en: "A general view of the city printed with the photochrom technique, which added colour to a black-and-white negative." },
    autor: "Photochrom Print Collection",
    institucion: { ru: "Библиотека Конгресса США, LCCN 2001697450", en: "Library of Congress, LCCN 2001697450" },
    commons: "File:General view, Moscow, Russia-LCCN2001697450.jpg", original: "https://lccn.loc.gov/2001697450", licencia: L.pd, estado: "documentada",
    verificado: [{ ru: "Каталожный номер Библиотеки Конгресса указан на Викискладе.", en: "Library of Congress catalogue number listed on Commons." }, { ru: "Примерная дата (1890–1900) по каталогу.", en: "Approximate date (1890–1900) from the catalogue." }],
    pendiente: [{ ru: "Точное место съёмки.", en: "Exact viewpoint." }],
    intervenciones: { ru: "Цвета не фотографические: их добавили при печати фотохрома. На главном экране сайта поверх снимка лежит спекулятивный графический слой, отмеченный как таковой.", en: "The colours are not photographic: they were added when the photochrom was printed. On the site's opening screen a speculative graphic layer, labelled as such, sits on top." }
  },
  {
    id: "MSK-1890-03", img: "catedral-1890", anio: 1890, categoria: "arquitectura",
    titulo: { ru: "Храм Христа Спасителя до сноса", en: "Cathedral of Christ the Saviour before demolition" },
    fecha: { ru: "Ок. 1890 (по каталогу)", en: "c. 1890 (per catalogue)" },
    ubicacion: { ru: "Берег Москвы-реки у Кремля", en: "Moskva River bank near the Kremlin" },
    tipo: { ru: "Фотохром (цветная печать)", en: "Photochrom (colour print)" },
    descripcion: { ru: "Храм Христа Спасителя на фотохроме конца XIX века. Здание взорвали в 1931 году и воссоздали в 1995–2000 годах.", en: "The Cathedral of Christ the Saviour in a late-19th-century photochrom. It was blown up in 1931 and rebuilt in 1995–2000." },
    autor: "Photochrom Print Collection",
    institucion: { ru: "Библиотека Конгресса США, LCCN 90713113", en: "Library of Congress, LCCN 90713113" },
    commons: "File:Moscow Cathedral du St. Sauveur LCCN90713113.jpg", original: "https://lccn.loc.gov/90713113", licencia: L.pd, estado: "documentada",
    verificado: [{ ru: "Каталожный номер Библиотеки Конгресса.", en: "Library of Congress catalogue number." }, { ru: "Оригинальное название: «Moscow Cathedral du St. Sauveur».", en: "Original title: “Moscow Cathedral du St. Sauveur”." }],
    pendiente: [{ ru: "1890 год приблизителен: другие карточки той же коллекции дают диапазон 1890–1900.", en: "The year 1890 is approximate: other records in the same collection give 1890–1900." }],
    intervenciones: { ru: "Цвет добавлен при печати фотохрома.", en: "Colour added when the photochrom was printed." }
  },
  {
    id: "MSK-1931-04", img: "catedral-1931", anio: 1931, categoria: "arquitectura",
    titulo: { ru: "Взрыв храма Христа Спасителя", en: "Demolition of the Cathedral of Christ the Saviour" },
    fecha: { ru: "5 декабря 1931", en: "5 December 1931" },
    ubicacion: { ru: "Берег Москвы-реки у Кремля", en: "Moskva River bank near the Kremlin" },
    tipo: { ru: "Фотография", en: "Photograph" },
    descripcion: { ru: "Момент взрыва храма, снесённого ради строительства Дворца Советов — здания, которое так и не было построено.", en: "The moment the cathedral was blown up to make way for the Palace of the Soviets — a building that was never built." },
    autor: { ru: "Неизвестен", en: "Unknown" },
    institucion: { ru: "Копия из образовательного проекта Seventeen Moments in Soviet History (soviethistory.org)", en: "Copy published by the educational project Seventeen Moments in Soviet History (soviethistory.org)" },
    commons: "File:Christ saviour explosion.jpg", original: null, licencia: L.pd, estado: "parcial",
    verificado: [{ ru: "Дата сноса (5 декабря 1931) совпадает с общей литературой.", en: "The demolition date (5 December 1931) matches general sources." }, { ru: "Файл на Викискладе в общественном достоянии.", en: "File on Commons in the public domain." }],
    pendiente: [{ ru: "Автор и исходный архив снимка.", en: "Photographer and original archive." }, { ru: "Доступная копия низкого разрешения (800 px).", en: "The available copy is low resolution (800 px)." }],
    intervenciones: { ru: "В этом прототипе нет. Неизвестно, ретушировалась ли исходная копия.", en: "None in this prototype. It is unknown whether the source copy was retouched." }
  },
  {
    id: "MSK-1890-05", img: "san-basilio-1890", anio: 1890, categoria: "cultura",
    titulo: { ru: "Храм Василия Блаженного, Красная площадь", en: "St Basil's Cathedral, Red Square" },
    fecha: { ru: "Ок. 1890 (по каталогу)", en: "c. 1890 (per catalogue)" },
    ubicacion: { ru: "Красная площадь", en: "Red Square" },
    tipo: { ru: "Фотохром (цветная печать)", en: "Photochrom (colour print)" },
    descripcion: { ru: "Храм Василия Блаженного на Красной площади, фотохром из собрания Библиотеки Конгресса.", en: "St Basil's Cathedral on Red Square, a photochrom from the Library of Congress collection." },
    autor: "Photochrom Print Collection",
    institucion: { ru: "Библиотека Конгресса США, LCCN 2017660946", en: "Library of Congress, LCCN 2017660946" },
    commons: "File:Church of St. Basil, Red Square Moscow LCCN2017660946.jpg", original: "https://www.loc.gov/pictures/item/2017660946/", licencia: L.pd, estado: "documentada",
    verificado: [{ ru: "Каталожный номер и ссылка на карточку Библиотеки Конгресса.", en: "Catalogue number and link to the Library of Congress record." }, { ru: "Техника: фотохром, лист 17 × 23 см.", en: "Technique: photochrom, 17 × 23 cm sheet." }],
    pendiente: [{ ru: "Точная дата исходной съёмки.", en: "Exact date of the original photograph." }],
    intervenciones: { ru: "Цвет добавлен при печати фотохрома.", en: "Colour added when the photochrom was printed." }
  },
  {
    id: "MSK-1972-06", img: "casas-ostozhenka-1972", anio: 1972, categoria: "arquitectura",
    titulo: { ru: "Старые дома в районе Кропоткинской улицы", en: "Old houses near Kropotkinskaya Street" },
    fecha: { ru: "Март 1972", en: "March 1972" },
    ubicacion: { ru: "Район Кропоткинской улицы (ныне Пречистенка)", en: "Kropotkinskaya Street area (now Prechistenka)" },
    tipo: { ru: "Фотография", en: "Photograph" },
    descripcion: { ru: "«Старые дома в районе Кропоткинской улицы». Снимок из серии Главархива об утраченном культурном наследии Москвы.", en: "“Old houses near Kropotkinskaya Street”. Part of a Moscow Main Archive series on the city's lost cultural heritage." },
    autor: { ru: "С. И. Васин", en: "S. I. Vasin" },
    institucion: GLAV,
    commons: "File:History of lost cultural heritage in Moscow 01.jpg", original: "https://www.mos.ru/news/item/89493073/", licencia: L.by4, estado: "documentada",
    verificado: [{ ru: "Автор, дата и архив указаны Главархивом Москвы.", en: "Author, date and archive given by the Moscow Main Archive." }],
    pendiente: [{ ru: "Точное место (стык Зачатьевских переулков) — примечание пользователей Викисклада, а не архива.", en: "The exact spot (junction of the Zachatievsky lanes) is a note by Commons users, not the archive." }],
    intervenciones: MINIATURA
  },
  {
    id: "MSK-1935-07", img: "metro-arbatskaya-1935", anio: 1935, categoria: "arquitectura",
    titulo: { ru: "Наземный вестибюль станции «Арбатская»", en: "Surface entrance of Arbatskaya station" },
    fecha: { ru: "Между 1930 и 1935", en: "Between 1930 and 1935" },
    ubicacion: { ru: "Арбатская площадь", en: "Arbatskaya Square" },
    tipo: { ru: "Фотография (альбом)", en: "Photograph (album)" },
    descripcion: { ru: "Наземный вестибюль станции «Арбатская» из фотоальбома, посвящённого первой очереди Московского метрополитена.", en: "The surface entrance of Arbatskaya station, from a photo album about the first line of the Moscow Metro." },
    autor: AUTOR_NO_IDENT, institucion: conRef(RIJKS, "RP-F-F00935-D"),
    commons: "File:Exterieur van metrostation Arbatplein Station Arbatplein (titel op object), RP-F-F00935-D.jpg", original: "http://hdl.handle.net/10934/RM0001.COLLECT.271293", licencia: L.cc0, estado: "documentada",
    verificado: [{ ru: "Инвентарный номер Рейксмузеума.", en: "Rijksmuseum inventory number." }, { ru: "Датировка 1930–1935 по данным музея.", en: "Dated 1930–1935 by the museum." }],
    pendiente: [{ ru: "Автор снимка.", en: "Photographer." }], intervenciones: MINIATURA
  },
  {
    id: "MSK-1935-08", img: "metro-komsomolskaya-1935", anio: 1935, categoria: "cultura",
    titulo: { ru: "Платформа станции «Комсомольская»", en: "Komsomolskaya station platform" },
    fecha: { ru: "Между 1930 и 1935", en: "Between 1930 and 1935" },
    ubicacion: { ru: "Станция «Комсомольская» Сокольнической линии", en: "Komsomolskaya station, Sokolnicheskaya line" },
    tipo: { ru: "Фотография (альбом)", en: "Photograph (album)" },
    descripcion: { ru: "Интерьер станции «Комсомольская» первой линии метро, открытой в 1935 году.", en: "Interior of Komsomolskaya station on the first metro line, opened in 1935." },
    autor: AUTOR_NO_IDENT, institucion: conRef(RIJKS, "RP-F-F00935-F"),
    commons: "File:Interieur van metrostation Komsomolplein Perron van het station Komsomolplein (titel op object), RP-F-F00935-F.jpg", original: "http://hdl.handle.net/10934/RM0001.COLLECT.271295", licencia: L.cc0, estado: "documentada",
    verificado: [{ ru: "Инвентарный номер Рейксмузеума.", en: "Rijksmuseum inventory number." }, { ru: "Станция определена в описании на Викискладе.", en: "Station identified in the Commons description." }],
    pendiente: [{ ru: "Автор снимка.", en: "Photographer." }],
    intervenciones: { ru: "Уменьшенная копия для веба. В разделе «До и после» показана версия с изменённым контрастом, отмеченная как вмешательство.", en: "Resized for the web. The “Before and after” section shows a version with altered contrast, declared as an intervention." }
  },
  {
    id: "MSK-1935-09", img: "metro-escalera-1935", anio: 1935, categoria: "cotidiana",
    titulo: { ru: "Пассажиры на эскалаторе станции «Площадь Дзержинского»", en: "Passengers on the escalator at Dzerzhinsky Square station" },
    fecha: { ru: "Между 1930 и 1935", en: "Between 1930 and 1935" },
    ubicacion: { ru: "Станция «Площадь Дзержинского» (ныне «Лубянка»)", en: "Dzerzhinsky Square station (now Lubyanka)" },
    tipo: { ru: "Фотография (альбом)", en: "Photograph (album)" },
    descripcion: { ru: "Пассажиры на одном из первых эскалаторов Московского метрополитена.", en: "Passengers on one of the first escalators of the Moscow Metro." },
    autor: { ru: "В карточке музея: «Mospo Sostawitol»", en: "The museum record says “Mospo Sostawitol”" },
    institucion: conRef(RIJKS, "RP-F-F00935-K"),
    commons: "File:Mannen op een roltrap van metrostation Derzjinskiplein Roltrap van het station Derzjinskiplein (titel op object), RP-F-F00935-K.jpg", original: "http://hdl.handle.net/10934/RM0001.COLLECT.271300", licencia: L.cc0, estado: "documentada",
    verificado: [{ ru: "Инвентарный номер и датировка Рейксмузеума.", en: "Rijksmuseum inventory number and date." }],
    pendiente: [{ ru: "«Mospo Sostawitol» может быть искажённой транслитерацией с русского, а не именем; это нужно проверить.", en: "“Mospo Sostawitol” may be a garbled transliteration from Russian rather than a name; this needs checking." }],
    intervenciones: MINIATURA
  },
  {
    id: "MSK-1935-10", img: "metro-constructores-1935", anio: 1935, categoria: "memoria",
    titulo: { ru: "Строители первой очереди метро", en: "Builders of the first metro line" },
    fecha: { ru: "Между 1930 и 1935", en: "Between 1930 and 1935" },
    ubicacion: { ru: "Москва", en: "Moscow" },
    tipo: { ru: "Фотография (альбом)", en: "Photograph (album)" },
    descripcion: { ru: "Групповой портрет рабочих, строивших первую линию Московского метрополитена.", en: "Group portrait of the workers who built the first line of the Moscow Metro." },
    autor: AUTOR_NO_IDENT, institucion: conRef(RIJKS, "RP-F-F00935-C"),
    commons: "File:Groepsportret van de bouwers van de Moskouse metro Bouwers van de metro (titel op object), RP-F-F00935-C.jpg", original: "http://hdl.handle.net/10934/RM0001.COLLECT.271292", licencia: L.cc0, estado: "documentada",
    verificado: [{ ru: "Инвентарный номер Рейксмузеума.", en: "Rijksmuseum inventory number." }],
    pendiente: [{ ru: "Имена людей на снимке.", en: "Names of the people portrayed." }], intervenciones: MINIATURA
  },
  {
    id: "MSK-1937-11", img: "metro-obras-1937", anio: 1937, categoria: "arquitectura",
    titulo: { ru: "Котлован рампы метро у выхода в парк", en: "Excavating the metro ramp towards the park" },
    fecha: { ru: "1937", en: "1937" },
    ubicacion: { ru: "Горьковский радиус Московского метро", en: "Gorkovsky radius of the Moscow Metro" },
    tipo: { ru: "Фотография", en: "Photograph" },
    descripcion: { ru: "«Выход в парк Горьковского радиуса московского метро. Котлован рампы. Разработка ведётся с помощью 10-метровых транспортёров типа „Миаг“».", en: "“Exit to the park of the Gorkovsky radius of the Moscow Metro. The ramp pit. Work is carried out with 10-metre ‘Miag’ conveyors.”" },
    autor: { ru: "Не указан", en: "Not given" }, institucion: GLAV,
    commons: "File:First years of Moscow Metro 01.jpg", original: "https://www.mos.ru/news/item/153833073/", licencia: L.by4, estado: "documentada",
    verificado: [{ ru: "Подпись и архив указаны Главархивом Москвы.", en: "Caption and archive given by the Moscow Main Archive." }],
    pendiente: [{ ru: "Автор снимка.", en: "Photographer." }], intervenciones: MINIATURA
  },
  {
    id: "MSK-1935-12", img: "metro-postales-1935", anio: 1935, categoria: "cultura",
    titulo: { ru: "Набор открыток «Московский метрополитен»", en: "“Moscow Metro” postcard set" },
    fecha: { ru: "1935 по подписи; 1934 по дате файла на Викискладе", en: "1935 per the caption; 1934 per the file date on Commons" },
    ubicacion: { ru: "Москва", en: "Moscow" },
    tipo: { ru: "Печатный документ (открытки)", en: "Printed document (postcards)" },
    descripcion: { ru: "Серия открыток, посвящённых только что открытому Московскому метрополитену.", en: "A series of postcards celebrating the newly opened Moscow Metro." },
    autor: { ru: "Не указан", en: "Not given" }, institucion: GLAV,
    commons: "File:First years of Moscow Metro 09.jpg", original: "https://www.mos.ru/news/item/153833073/", licencia: L.by4, estado: "conflicto",
    verificado: [{ ru: "Источник — Главархив Москвы.", en: "Source: Moscow Main Archive." }],
    pendiente: [{ ru: "В подписи указан 1935 год, а в поле даты на Викискладе — 15 октября 1934. Нужно свериться с оригиналом.", en: "The caption says 1935, while the Commons date field says 15 October 1934. The original must be checked." }],
    intervenciones: MINIATURA
  },
  {
    id: "MSK-1935-13", img: "metro-bovard-1935", anio: 1935, categoria: "cultura",
    titulo: { ru: "Отзыв американского журналиста о метро", en: "An American journalist's view of the metro" },
    fecha: { ru: "1935", en: "1935" },
    ubicacion: { ru: "Москва", en: "Moscow" },
    tipo: { ru: "Документ", en: "Document" },
    descripcion: { ru: "«Отзыв главного редактора американской газеты St. Louis Post-Dispatch Боварда о московском метрополитене. Перевод с английского языка».", en: "“The opinion of Bovard, editor-in-chief of the American newspaper St. Louis Post-Dispatch, on the Moscow Metro. Translated from English.”" },
    autor: { ru: "Бовард (St. Louis Post-Dispatch); перевод анонимный", en: "Bovard (St. Louis Post-Dispatch); anonymous translation" }, institucion: GLAV,
    commons: "File:First years of Moscow Metro 12.jpg", original: "https://www.mos.ru/news/item/153833073/", licencia: L.by4, estado: "documentada",
    verificado: [{ ru: "Описание и дата указаны Главархивом Москвы.", en: "Description and date given by the Moscow Main Archive." }],
    pendiente: [{ ru: "Полная расшифровка текста и поиск английского оригинала.", en: "Full transcription and the original English text." }], intervenciones: MINIATURA
  },
  {
    id: "MSK-1955-14", img: "taxis-1955", anio: 1955, categoria: "cotidiana",
    titulo: { ru: "Стоянка маршрутных такси для экскурсий", en: "Shared-taxi rank for city tours" },
    fecha: { ru: "Июль 1955", en: "July 1955" },
    ubicacion: { ru: "Центр Москвы (вероятно, площадь Революции)", en: "Central Moscow (probably Revolution Square)" },
    tipo: { ru: "Фотография", en: "Photograph" },
    descripcion: { ru: "«Стоянка маршрутных такси для экскурсий по городу».", en: "“A rank of fixed-route taxis for sightseeing tours of the city.”" },
    autor: { ru: "Я. Берлинер", en: "Ya. Berliner" }, institucion: GLAV,
    commons: "File:Taxis in Moscow July 1955.jpg", original: "https://www.mos.ru/news/item/102326073/", licencia: L.by4, estado: "documentada",
    verificado: [{ ru: "Автор, месяц и год указаны Главархивом Москвы.", en: "Author, month and year given by the Moscow Main Archive." }],
    pendiente: [{ ru: "Место (площадь Революции у стены Китай-города) — примечание пользователей Викисклада, а не архива.", en: "The location (Revolution Square by the Kitay-gorod wall) is a Commons users' note, not the archive's." }],
    intervenciones: MINIATURA
  },
  {
    id: "MSK-1955-15", img: "gorki-1950s", anio: 1955, categoria: "cotidiana",
    titulo: { ru: "Улица Горького", en: "Gorky Street" },
    fecha: { ru: "1950–1960-е годы", en: "1950s–1960s" },
    ubicacion: { ru: "Улица Горького (ныне Тверская)", en: "Gorky Street (now Tverskaya)" },
    tipo: { ru: "Фотография", en: "Photograph" },
    descripcion: { ru: "Улица Горького — главная улица центра Москвы, которой в 1990 году вернули историческое название Тверская.", en: "Gorky Street, central Moscow's main avenue, which got back its historic name, Tverskaya, in 1990." },
    autor: { ru: "М. Трахман", en: "M. Trakhman" }, institucion: GLAV,
    commons: "File:Gorkogo street 1950-60s.jpg", original: "https://www.mos.ru/news/item/95942073/", licencia: L.by4, estado: "documentada",
    verificado: [{ ru: "Автор и период указаны Главархивом Москвы.", en: "Author and period given by the Moscow Main Archive." }],
    pendiente: [{ ru: "Точный год съёмки.", en: "Exact year." }],
    intervenciones: { ru: "Уменьшенная копия для веба. В разделе «До и после» используется как основа спекулятивной визуализации, отмеченной как таковая.", en: "Resized for the web. In “Before and after” it is the base of a speculative visualisation, labelled as such." }
  },
  {
    id: "MSK-1960-16", img: "luzhniki-1960", anio: 1960, categoria: "cotidiana",
    titulo: { ru: "Новогодние ёлки у стадиона имени Ленина", en: "New Year festivities by the Lenin Stadium" },
    fecha: { ru: "Январь 1960", en: "January 1960" },
    ubicacion: { ru: "Центральный стадион имени В. И. Ленина (ныне «Лужники»)", en: "Central Lenin Stadium (now Luzhniki)" },
    tipo: { ru: "Фотография", en: "Photograph" },
    descripcion: { ru: "«У Центрального стадиона имени В. И. Ленина в дни новогодней ёлки».", en: "“By the Central V. I. Lenin Stadium during the New Year tree festivities.”" },
    autor: { ru: "М. Озерский", en: "M. Ozersky" }, institucion: GLAV,
    commons: "File:Luzhniki on 1960 New Year 01.jpg", original: "https://www.mos.ru/news/item/84775073/", licencia: L.by4, estado: "documentada",
    verificado: [{ ru: "Автор, месяц и год указаны Главархивом Москвы.", en: "Author, month and year given by the Moscow Main Archive." }],
    pendiente: [], intervenciones: MINIATURA
  },
  {
    id: "MSK-1967-17", img: "guarderia-1967", anio: 1967, categoria: "cotidiana",
    titulo: { ru: "Обед в детском саду фабрики", en: "Lunch at a factory kindergarten" },
    fecha: { ru: "1967", en: "1967" },
    ubicacion: { ru: "Детский сад 1-й ситценабивной фабрики", en: "Kindergarten of the 1st Calico-Printing Factory" },
    tipo: { ru: "Фотография", en: "Photograph" },
    descripcion: { ru: "«Дети за обедом в столовой детского сада 1-й ситценабивной фабрики».", en: "“Children at lunch in the canteen of the 1st Calico-Printing Factory kindergarten.”" },
    autor: { ru: "Неизвестен", en: "Unknown" }, institucion: GLAV,
    commons: "File:Eating on Moscow kindergardens 05.jpg", original: "https://www.mos.ru/news/item/127853073/", licencia: L.by4, estado: "documentada",
    verificado: [{ ru: "Подпись и год указаны Главархивом Москвы.", en: "Caption and year given by the Moscow Main Archive." }],
    pendiente: [{ ru: "Автор снимка.", en: "Photographer." }, { ru: "Адрес здания (Дербеневская улица) — примечание пользователей Викисклада.", en: "The building's address (Derbenevskaya Street) is a Commons users' note." }],
    intervenciones: MINIATURA
  },
  {
    id: "MSK-1970-18", img: "fabrica-1970", anio: 1970, categoria: "memoria",
    titulo: { ru: "Цех Первой ситценабивной фабрики", en: "Workshop of the First Calico-Printing Factory" },
    fecha: { ru: "1970", en: "1970" },
    ubicacion: { ru: "Фабрика на Дербенёвке", en: "Factory at Derbenyovka" },
    tipo: { ru: "Фотография", en: "Photograph" },
    descripcion: { ru: "«В цехе ширпотреба Первой ситценабивной фабрики».", en: "“In the consumer-goods workshop of the First Calico-Printing Factory.”" },
    autor: { ru: "Л. Павлов", en: "L. Pavlov" }, institucion: GLAV,
    commons: "File:Womens working on Derbenevka.jpg", original: "https://www.mos.ru/news/item/122599073/", licencia: L.by4, estado: "documentada",
    verificado: [{ ru: "Автор и год указаны Главархивом Москвы.", en: "Author and year given by the Moscow Main Archive." }],
    pendiente: [{ ru: "Имена работниц.", en: "Names of the workers." }], intervenciones: MINIATURA
  },
  {
    id: "MSK-1960-19", img: "tunel-metro-1960", anio: 1960, categoria: "memoria",
    titulo: { ru: "Проходка тоннеля метро", en: "Digging a metro tunnel" },
    fecha: { ru: "Июль 1960", en: "July 1960" },
    ubicacion: { ru: "Участок «Новые Черёмушки» — «Ломоносовская» (ныне «Профсоюзная»)", en: "Novye Cheryomushki – Lomonosovskaya section (now Profsoyuznaya)" },
    tipo: { ru: "Фотография", en: "Photograph" },
    descripcion: { ru: "«Машинист механизированного щита Ю. Зыкин ведёт проходку тоннеля на участке метро „Новые Черёмушки“ — „Ломоносовская“».", en: "“Shield operator Yu. Zykin tunnels the Novye Cheryomushki – Lomonosovskaya metro section.”" },
    autor: { ru: "Ю. Абрамочкин", en: "Yu. Abramochkin" }, institucion: GLAV,
    commons: "File:Construction of tunnels of KRL 1960.jpg", original: "https://www.mos.ru/news/item/92900073/", licencia: L.by4, estado: "documentada",
    verificado: [{ ru: "Автор, человек на снимке, участок и дата указаны Главархивом Москвы.", en: "Author, person shown, section and date given by the Moscow Main Archive." }],
    pendiente: [], intervenciones: MINIATURA
  },
  {
    id: "MSK-1980-20", img: "olimpiada-1980", anio: 1980, categoria: "acontecimientos",
    titulo: { ru: "Церемония открытия Олимпийских игр", en: "Opening ceremony of the Olympic Games" },
    fecha: { ru: "19 июля 1980", en: "19 July 1980" },
    ubicacion: { ru: "Центральный стадион имени Ленина (ныне «Лужники»)", en: "Central Lenin Stadium (now Luzhniki)" },
    tipo: { ru: "Фотография (слайд 35 мм)", en: "Photograph (35 mm slide)" },
    descripcion: { ru: "Церемония открытия XXII летних Олимпийских игр, проходивших в Москве с 19 июля по 3 августа 1980 года.", en: "Opening ceremony of the 22nd Summer Olympic Games, held in Moscow from 19 July to 3 August 1980." },
    autor: { ru: "Сергей Гунеев", en: "Sergey Guneev" }, institucion: { ru: "Архив РИА Новости, снимок № 487025", en: "RIA Novosti archive, image no. 487025" },
    commons: "File:RIAN archive 487025 Opening ceremony of the 1980 Olympic Games.jpg", original: null, licencia: L.bysa3, estado: "documentada",
    verificado: [{ ru: "Номер снимка в архиве РИА Новости, автор и дата.", en: "RIA Novosti archive number, author and date." }],
    pendiente: [], intervenciones: MINIATURA
  },
  {
    id: "MSK-1980-21", img: "antorcha-1980", anio: 1980, categoria: "cultura",
    titulo: { ru: "Эстафета олимпийского огня на улице Горького", en: "Olympic torch relay on Gorky Street" },
    fecha: { ru: "18 июля 1980", en: "18 July 1980" },
    ubicacion: { ru: "Улица Горького (ныне Тверская)", en: "Gorky Street (now Tverskaya)" },
    tipo: { ru: "Фотография (негатив 35 мм)", en: "Photograph (35 mm negative)" },
    descripcion: { ru: "Эстафета олимпийского огня в центре Москвы за день до открытия Игр.", en: "The Olympic torch relay through central Moscow, the day before the Games opened." },
    autor: { ru: "Виталий Арутюнов", en: "Vitaly Arutyunov" }, institucion: { ru: "Архив РИА Новости, снимок № 555932", en: "RIA Novosti archive, image no. 555932" },
    commons: "File:RIAN archive 555932 Olympic flame relay in Gorky street.jpg", original: null, licencia: L.bysa3, estado: "documentada",
    verificado: [{ ru: "Номер снимка в архиве РИА Новости, автор и дата.", en: "RIA Novosti archive number, author and date." }],
    pendiente: [], intervenciones: MINIATURA
  },
  {
    id: "MSK-1941-22", img: "desfile-1941", anio: 1941, categoria: "acontecimientos",
    titulo: { ru: "С парада 7 ноября — на фронт", en: "From the 7 November parade to the front" },
    fecha: { ru: "7 ноября 1941", en: "7 November 1941" },
    ubicacion: { ru: "Красная площадь", en: "Red Square" },
    tipo: { ru: "Фотография (негатив 35 мм)", en: "Photograph (35 mm negative)" },
    descripcion: { ru: "Войска, которые после парада на Красной площади отправились прямо на фронт во время битвы за Москву.", en: "Troops who, after the parade on Red Square, went straight to the front during the Battle of Moscow." },
    autor: { ru: "Анатолий Гаранин", en: "Anatoly Garanin" }, institucion: { ru: "Архив РИА Новости, снимок № 669663", en: "RIA Novosti archive, image no. 669663" },
    commons: "File:RIAN archive 669663 Soviet troops head to front lines after 1941 Red Square parade.jpg", original: null, licencia: L.bysa3, estado: "documentada",
    verificado: [{ ru: "Номер снимка в архиве РИА Новости, автор и дата.", en: "RIA Novosti archive number, author and date." }, { ru: "Парад 7 ноября 1941 года широко задокументирован.", en: "The 7 November 1941 parade is widely documented." }],
    pendiente: [], intervenciones: MINIATURA
  },
  {
    id: "MSK-1941-23", img: "globo-pushkin-1941", anio: 1941, categoria: "acontecimientos",
    titulo: { ru: "Аэростат заграждения над памятником Пушкину", en: "Barrage balloon above the Pushkin monument" },
    fecha: { ru: "10 декабря 1941", en: "10 December 1941" },
    ubicacion: { ru: "Памятник А. С. Пушкину", en: "Alexander Pushkin monument" },
    tipo: { ru: "Фотография (негатив 6 × 6)", en: "Photograph (6 × 6 negative)" },
    descripcion: { ru: "Аэростат противовоздушной обороны над памятником Пушкину во время обороны Москвы.", en: "An air-defence barrage balloon above the Pushkin monument during the defence of Moscow." },
    autor: { ru: "Наум Грановский", en: "Naum Granovsky" }, institucion: { ru: "Архив РИА Новости, снимок № 43140", en: "RIA Novosti archive, image no. 43140" },
    commons: "File:RIAN archive 43140 Barrage balloon above the Pushkin monument.jpg", original: null, licencia: L.bysa3, estado: "documentada",
    verificado: [{ ru: "Номер снимка в архиве РИА Новости, автор и дата.", en: "RIA Novosti archive number, author and date." }],
    pendiente: [], intervenciones: MINIATURA
  },
  {
    id: "MSK-1941-24", img: "tanque-gorki-1941", anio: 1941, categoria: "acontecimientos",
    titulo: { ru: "Танк КВ-1 на улице Горького", en: "KV-1 tank on Gorky Street" },
    fecha: { ru: "7 ноября 1941", en: "7 November 1941" },
    ubicacion: { ru: "Улица Горького (ныне Тверская)", en: "Gorky Street (now Tverskaya)" },
    tipo: { ru: "Фотография", en: "Photograph" },
    descripcion: { ru: "Тяжёлый танк КВ-1 движется по улице Горького в день парада 1941 года.", en: "A KV-1 heavy tank on Gorky Street on the day of the 1941 parade." },
    autor: { ru: "Леонид Доренский (ТАСС)", en: "Leonid Dorensky (TASS)" }, institucion: { ru: "Фонды РИА Новости, идентификатор 5815234", en: "RIA Novosti holdings, identifier 5815234" },
    commons: "File:Танк КВ-1 на улице Горького в Москве, 7 ноября 1941 года.jpg", original: null, licencia: L.pd, estado: "documentada",
    verificado: [{ ru: "Автор, агентство, дата и идентификатор РИА Новости указаны на Викискладе.", en: "Author, agency, date and RIA Novosti identifier listed on Commons." }],
    pendiente: [], intervenciones: MINIATURA
  },
  {
    id: "MSK-1945-25", img: "victoria-1945", anio: 1945, categoria: "acontecimientos",
    titulo: { ru: "Парад Победы на Красной площади", en: "Victory Parade on Red Square" },
    fecha: { ru: "24 июня 1945", en: "24 June 1945" },
    ubicacion: { ru: "Красная площадь", en: "Red Square" },
    tipo: { ru: "Фотография", en: "Photograph" },
    descripcion: { ru: "Парад Победы на Красной площади после окончания Второй мировой войны в Европе.", en: "The Victory Parade on Red Square after the end of the Second World War in Europe." },
    autor: { ru: "Не указан", en: "Not given" }, institucion: { ru: "Министерство обороны России (официальная фотогалерея)", en: "Russian Ministry of Defence (official photo gallery)" },
    commons: "File:Парад Победы на Красной площади 24 июня 1945 г. (23).jpg", original: null, licencia: L.by4, estado: "documentada",
    verificado: [{ ru: "Дата и ведомственный источник указаны на Викискладе.", en: "Date and institutional source listed on Commons." }],
    pendiente: [{ ru: "Автор снимка.", en: "Photographer." }], intervenciones: MINIATURA
  },
  {
    id: "MSK-1961-26", img: "gagarin-1961", anio: 1961, categoria: "acontecimientos",
    titulo: { ru: "Юрий Гагарин приветствует москвичей с трибуны Мавзолея", en: "Yuri Gagarin greets the crowd from the Mausoleum" },
    fecha: { ru: "14 апреля 1961", en: "14 April 1961" },
    ubicacion: { ru: "Красная площадь", en: "Red Square" },
    tipo: { ru: "Фотография", en: "Photograph" },
    descripcion: { ru: "«Первый в мире космонавт Ю. А. Гагарин приветствует собравшихся на Красной площади в день его встречи по возвращении из космического полёта» (полёт состоялся 12 апреля 1961 года).", en: "“The world's first cosmonaut, Yu. A. Gagarin, greets the crowd on Red Square on the day of his welcome after his space flight” (the flight took place on 12 April 1961)." },
    autor: { ru: "Ю. Д. Королёв", en: "Yu. D. Korolyov" }, institucion: GLAV,
    commons: "File:Greeting of Yuri Gagarin 02.jpg", original: "https://www.mos.ru/news/item/122374073/", licencia: L.by4, estado: "documentada",
    verificado: [{ ru: "Автор, дата и архив указаны Главархивом Москвы.", en: "Author, date and archive given by the Moscow Main Archive." }],
    pendiente: [], intervenciones: MINIATURA
  },
  {
    id: "MSK-1954-27", img: "restauracion-1954", anio: 1954, categoria: "memoria",
    titulo: { ru: "Редкие документы перед реставрацией", en: "Rare documents awaiting restoration" },
    fecha: { ru: "Июнь 1954", en: "June 1954" },
    ubicacion: { ru: "Центральная реставрационная мастерская Главного архивного управления", en: "Central Restoration Workshop of the Main Archival Directorate" },
    tipo: { ru: "Фотография", en: "Photograph" },
    descripcion: { ru: "«Редкие исторические материалы, подготовленные к реставрации». Снимок о часто незаметной работе по сохранению памяти.", en: "“Rare historical materials prepared for restoration.” An image of the often invisible work of keeping memory." },
    autor: { ru: "А. Чепрунов", en: "A. Cheprunov" }, institucion: GLAV,
    commons: "File:History of Moscow Main Archive 01.jpg", original: "https://www.mos.ru/news/item/75322073/", licencia: L.by4, estado: "documentada",
    verificado: [{ ru: "Автор, дата и архив указаны Главархивом Москвы.", en: "Author, date and archive given by the Moscow Main Archive." }],
    pendiente: [{ ru: "Какие именно документы на снимке.", en: "Which documents appear in the photo." }], intervenciones: MINIATURA
  },
  {
    id: "MSK-19XX-28", img: "revista-ejercito-lcc", anio: null, categoria: "acontecimientos",
    titulo: { ru: "Смотр войск Красной армии в Москве", en: "Review of Red Army troops in Moscow" },
    fecha: { ru: "Надёжной даты нет (в каталоге указан 1900 год — невозможная дата)", en: "No reliable date (the catalogue says 1900, an impossible date)" },
    ubicacion: { ru: "Москва (точное место не установлено)", en: "Moscow (exact place not identified)" },
    tipo: { ru: "Стеклянный негатив", en: "Glass negative" },
    descripcion: { ru: "Негатив агентства Bain News Service под названием «Moscow — review of Red Army». Красная армия создана в 1918 году, поэтому указанная в метаданных дата 1900 год не может быть верной.", en: "A Bain News Service negative titled “Moscow — review of Red Army”. The Red Army was created in 1918, so the 1900 date in the metadata cannot be right." },
    autor: { ru: "Bain News Service (издатель)", en: "Bain News Service (publisher)" }, institucion: { ru: "Библиотека Конгресса США, LCCN 2014713395", en: "Library of Congress, LCCN 2014713395" },
    commons: "File:Moscow - review of Red Army LCCN2014713395.tif", original: "https://lccn.loc.gov/2014713395", licencia: L.pd, estado: "conflicto",
    verificado: [{ ru: "Каталожный номер Библиотеки Конгресса.", en: "Library of Congress catalogue number." }, { ru: "Оригинальное название негатива.", en: "Original title of the negative." }],
    pendiente: [{ ru: "Настоящая дата снимка (после 1918 года).", en: "Real date of the photograph (after 1918)." }, { ru: "Точное место смотра.", en: "Exact location of the review." }],
    intervenciones: { ru: "Преобразовано из TIFF в JPG для веба.", en: "Converted from TIFF to JPG for the web." }
  },
  {
    id: "MSK-1937-29", img: "yezhov-original-1937", anio: 1937, categoria: "acontecimientos",
    titulo: { ru: "Сталин, Молотов и Ежов у канала (исходная версия)", en: "Stalin, Molotov and Yezhov by a canal (original version)" },
    fecha: { ru: "Апрель 1937 (по данным Викисклада)", en: "April 1937 (according to Commons)" },
    ubicacion: { ru: "Канал Москва — Волга (по литературе)", en: "Moscow–Volga Canal (according to the literature)" },
    tipo: { ru: "Фотография", en: "Photograph" },
    descripcion: { ru: "Исходная версия снимка, на котором нарком внутренних дел Николай Ежов идёт рядом со Сталиным. После падения Ежова его убрали с фотографии — это один из самых известных примеров фотомонтажа.", en: "The original version of a photo showing Nikolai Yezhov, head of the secret police, beside Stalin. After his fall he was removed from the image — one of the best-known examples of photo manipulation." },
    autor: { ru: "Неизвестен", en: "Unknown" }, institucion: { ru: "Копия опубликована World War II Database (ww2db.com)", en: "Copy published by World War II Database (ww2db.com)" },
    commons: "File:Nikolai Yezhov with Stalin and Molotov along the Volga–Don Canal, original.jpg", original: null, licencia: L.pd, estado: "conflicto",
    verificado: [{ ru: "На Викискладе есть исходная и отретушированная версии с одинаковым кадром.", en: "Commons holds both the original and the retouched version with the same framing." }, { ru: "Википедия («Censorship of images in the Soviet Union») относит сцену к каналу Москва — Волга.", en: "Wikipedia (“Censorship of images in the Soviet Union”) places the scene at the Moscow–Volga Canal." }],
    pendiente: [{ ru: "Название файла на Викискладе упоминает канал Волга — Дон, открытый в 1952 году, — через годы после смерти Ежова. Сведения противоречат друг другу.", en: "The Commons file title mentions the Volga–Don Canal, opened in 1952 — years after Yezhov's death. The data contradict each other." }, { ru: "Исходный архив обеих версий.", en: "Original archive of both versions." }],
    intervenciones: { ru: "Это версия без ретуши. Отретушированная версия без Ежова показана в разделе «До и после».", en: "This is the unretouched version. The retouched version, without Yezhov, is shown in “Before and after”." }
  },
  {
    id: "REC-1921-30", img: "vasnetsov-kremlin-1921", anio: 1921, categoria: "arquitectura",
    titulo: { ru: "«Московский Кремль при Иване Калите»", en: "“The Moscow Kremlin under Ivan Kalita”" },
    fecha: { ru: "Написано в 1921 году (воссоздаёт XIV век)", en: "Painted in 1921 (recreates the 14th century)" },
    ubicacion: { ru: "Московский Кремль (воображаемая реконструкция)", en: "Moscow Kremlin (imagined reconstruction)" },
    tipo: { ru: "Художественная реконструкция (акварель)", en: "Artistic reconstruction (watercolour)" },
    descripcion: { ru: "Акварель Аполлинария Васнецова, воссоздающая Кремль XIV века. Это реконструкция на основе исторических исследований, а не документ эпохи.", en: "A watercolour by Apollinary Vasnetsov imagining the 14th-century Kremlin. It is a reconstruction based on historical research, not a record from the time." },
    autor: { ru: "Аполлинарий Васнецов", en: "Apollinary Vasnetsov" }, institucion: { ru: "Музей Москвы", en: "Museum of Moscow" },
    commons: "File:Vasnetsov Kreml pri Ivane kalite.jpg", original: null, licencia: L.pd, estado: "reconstruccion",
    verificado: [{ ru: "Автор, год и музей указаны на Викискладе.", en: "Author, year and museum listed on Commons." }],
    pendiente: [{ ru: "На какие исторические источники опирался художник.", en: "Which historical sources the painter relied on." }],
    intervenciones: { ru: "Это само по себе реконструкция: она показывает прошлое, которое никто не мог сфотографировать.", en: "It is itself a reconstruction: it shows a past nobody could photograph." }
  },
  {
    id: "REC-2021-31", img: "palacio-soviets-3d", anio: 2021, categoria: "arquitectura",
    titulo: { ru: "Дворец Советов (3D-модель)", en: "Palace of the Soviets (3D model)" },
    fecha: { ru: "Создано 23 декабря 2021", en: "Created on 23 December 2021" },
    ubicacion: { ru: "Место снесённого храма Христа Спасителя (здание не построено)", en: "Site of the demolished Cathedral of Christ the Saviour (never built)" },
    tipo: { ru: "Цифровая реконструкция (3D)", en: "Digital reconstruction (3D)" },
    descripcion: { ru: "3D-модель Дворца Советов — небоскрёба, который должен был заменить взорванный в 1931 году храм и так и не был достроен. По словам автора, модель объединяет несколько реальных проектов.", en: "A 3D model of the Palace of the Soviets, the skyscraper meant to replace the cathedral blown up in 1931, which was never completed. According to its author, it combines several real plans." },
    autor: { ru: "Участник Викисклада «Віщун»", en: "Wikimedia Commons user “Віщун”" }, institucion: { ru: "Собственная работа, опубликованная на Викискладе", en: "Own work published on Wikimedia Commons" },
    commons: "File:Palace of the Soviets - Blender 3D.jpg", original: null, licencia: L.bysa4, estado: "reconstruccion",
    verificado: [{ ru: "Автор сообщает, что модель сделана в Blender по нескольким проектам.", en: "The author states it was made in Blender from several plans." }],
    pendiente: [{ ru: "Какие именно проекты объединены.", en: "Which plans were combined." }],
    intervenciones: { ru: "Синтетическое изображение: здание, которого никогда не существовало.", en: "Synthetic image: a building that never existed." }
  }
];

export const REGISTROS = localizar(RAW);

/** URL de la página del archivo en Wikimedia Commons. */
export function urlCommons(titulo) {
  return "https://commons.wikimedia.org/wiki/" + encodeURI(titulo.replace(/ /g, "_"));
}
