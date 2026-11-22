/**
 * Proceso de verificación de cada registro (ruso / español).
 *
 * CONTRASTE: qué fuentes se cotejaron para ESE registro y qué discrepancias
 * aparecieron. Todo lo escrito aquí corresponde a comprobaciones reales hechas
 * al preparar el prototipo (22 de noviembre de 2026): ficha de Wikimedia Commons,
 * enlace al catálogo o publicación de la institución (comprobado: responde) y,
 * para fechas de acontecimientos, la bibliografía general (Wikipedia).
 * El original físico no se consultó en ninguna institución.
 *
 * CASOS: materiales que NO forman parte del archivo verificado. Se usan solo
 * como casos de estudio (ejercicio, comparador, historias, campaña) y su ficha
 * lo dice de forma visible.
 */
import { localizar } from "../i18n.js?v=20261122b";

export const FECHA_REVISION = localizar({ ru: "22 ноября 2026", es: "22 de noviembre de 2026" });

const MOSRU = {
  ru: (autor, fecha) => `Оригинальная подпись Главархива Москвы, опубликованная на mos.ru (ссылка работает), совпадает с карточкой Викисклада: ${autor}, ${fecha}.`,
  es: (autor, fecha) => `El pie de foto original del Archivo Principal de Moscú, publicado en mos.ru (enlace activo), coincide con la ficha de Commons: ${autor}, ${fecha}.`
};
const glav = (ruA, ruF, esA, esF, ruExtra = "", esExtra = "") => ({ ru: MOSRU.ru(ruA, ruF) + (ruExtra ? " " + ruExtra : ""), es: MOSRU.es(esA, esF) + (esExtra ? " " + esExtra : "") });
const RIA = {
  ru: "Номер архива РИА Новости указан в карточке Викисклада (снимки РИА Новости опубликованы там по лицензии CC BY-SA 3.0). Собственный каталог РИА Новости не изучался.",
  es: "El número del archivo de RIA Novosti figura en la ficha de Commons (las imágenes de RIA Novosti se publicaron allí con licencia CC BY-SA 3.0). No se consultó el catálogo propio de RIA Novosti."
};
const ria = (ru, es) => ({ ru: `${RIA.ru} ${ru}`, es: `${RIA.es} ${es}` });

export const CONTRASTE = localizar({
  "MSK-1890-02": { ru: "Карточка Викисклада сверена с записью LCCN 2001697450 Библиотеки Конгресса США (ссылка работает): совпадают название и коллекция Photochrom. Каталог даёт только диапазон 1890–1900; более точной даты не найдено.", es: "La ficha de Commons se cotejó con el registro LCCN 2001697450 de la Biblioteca del Congreso (enlace activo): coinciden título y colección Photochrom. El catálogo solo da el rango 1890–1900; no se encontró una fecha más precisa." },
  "MSK-1890-03": { ru: "Карточка сверена с записью LCCN 90713113 (ссылка работает). Здание и его снос в 1931 году задокументированы в общей литературе (Википедия: «Храм Христа Спасителя»). Расхождение: каталог указывает 1890 год, а другие записи коллекции — диапазон 1890–1900.", es: "La ficha se cotejó con el registro LCCN 90713113 (enlace activo). El edificio y su demolición en 1931 están documentados en la bibliografía general (Wikipedia: «Catedral de Cristo Salvador»). Discrepancia: el catálogo dice 1890 y otras fichas de la colección usan el rango 1890–1900." },
  "MSK-1890-05": { ru: "Карточка сверена с записью LCCN 2017660946 Библиотеки Конгресса (ссылка работает): совпадают название и техника (фотохром, лист 17 × 23 см). Точная дата съёмки неизвестна.", es: "La ficha se cotejó con el registro LCCN 2017660946 de la Biblioteca del Congreso (enlace activo): coinciden título y técnica (fotocromo, hoja de 17 × 23 cm). La fecha exacta de la toma es desconocida." },
  "MSK-1972-06": glav("С. И. Васин", "март 1972", "S. I. Vasin", "marzo de 1972", "Точное место, добавленное пользователями Викисклада, не использовалось как проверенный факт.", "La ubicación precisa añadida por usuarios de Commons no se usó como dato verificado."),
  "MSK-1935-07": { ru: "Карточка сверена с записью Рейксмузеума RP-F-F00935-D (постоянная ссылка работает). Музей датирует альбом 1930–1935 годами; станция «Арбатская» входила в первую очередь метро 1935 года (Википедия: «Московский метрополитен»). Автор не установлен.", es: "La ficha se cotejó con el registro del Rijksmuseum RP-F-F00935-D (enlace persistente activo). El museo fecha el álbum entre 1930 y 1935; la estación Arbátskaya formó parte del primer tramo de 1935 (Wikipedia: «Metro de Moscú»). Autor no identificado." },
  "MSK-1935-08": { ru: "Карточка сверена с записью Рейксмузеума RP-F-F00935-F (ссылка работает). «Комсомольская» — одна из станций первой линии 1935 года (Википедия: «Московский метрополитен»).", es: "La ficha se cotejó con el registro del Rijksmuseum RP-F-F00935-F (enlace activo). Komsomólskaya fue una de las estaciones de la primera línea de 1935 (Wikipedia: «Metro de Moscú»)." },
  "MSK-1935-09": { ru: "Карточка сверена с записью Рейксмузеума RP-F-F00935-K (ссылка работает). Расхождение: в поле автора указано «Mospo Sostawitol», что не соответствует узнаваемому имени.", es: "La ficha se cotejó con el registro del Rijksmuseum RP-F-F00935-K (enlace activo). Discrepancia: el campo de autor dice «Mospo Sostawitol», que no corresponde a un nombre identificable." },
  "MSK-1935-10": { ru: "Карточка сверена с записью Рейксмузеума RP-F-F00935-C (ссылка работает). Русское описание на Викискладе и название в музее совпадают: строители первой очереди метро.", es: "La ficha se cotejó con el registro del Rijksmuseum RP-F-F00935-C (enlace activo). La descripción en ruso de Commons y el título del museo coinciden: constructores del primer tramo del metro." },
  "MSK-1937-11": glav("автор не указан", "1937", "autor no indicado", "1937"),
  "MSK-1935-12": { ru: "Подпись Главархива на mos.ru (ссылка работает) указывает 1935 год, а поле даты на Викискладе — 15 октября 1934. Принята дата учреждения; расхождение зафиксировано.", es: "El pie de foto del Archivo Principal en mos.ru (enlace activo) indica 1935, y el campo de fecha de Commons indica 15 de octubre de 1934. Se tomó como válida la fecha de la institución y se registra la discrepancia." },
  "MSK-1935-13": glav("перевод отзыва Боварда", "1935", "traducción de la opinión de Bovard", "1935", "Английский оригинал статьи St. Louis Post-Dispatch не найден.", "No se localizó el texto original en inglés del St. Louis Post-Dispatch."),
  "MSK-1955-14": glav("Я. Берлинер", "июль 1955", "Ya. Berliner", "julio de 1955", "Точное место — примечание пользователей, не проверено.", "La ubicación precisa es una nota de usuarios y no se verificó."),
  "MSK-1955-15": glav("М. Трахман", "1950–1960-е", "M. Trajman", "décadas de 1950–1960", "Возвращение названия Тверская в 1990 году подтверждается общей литературой (Википедия: «Тверская улица»).", "La recuperación del nombre Tverskaya en 1990 coincide con la bibliografía general (Wikipedia: «Calle Tverskaya»)."),
  "MSK-1960-16": glav("М. Озерский", "январь 1960", "M. Ozerski", "enero de 1960"),
  "MSK-1967-17": glav("автор неизвестен", "1967", "autor desconocido", "1967", "Адрес здания — примечание пользователей, не проверен.", "La dirección del edificio es una nota de usuarios y no se verificó."),
  "MSK-1970-18": glav("Л. Павлов", "1970", "L. Pávlov", "1970"),
  "MSK-1960-19": glav("Ю. Абрамочкин", "июль 1960", "Yu. Abramochkin", "julio de 1960", "Имя машиниста и участок совпадают в обеих карточках.", "El nombre del maquinista y el tramo coinciden en ambas fichas."),
  "MSK-1980-20": ria("Дата открытия Игр (19 июля 1980) совпадает с общей литературой (Википедия: «Летние Олимпийские игры 1980»).", "La fecha de la inauguración (19 de julio de 1980) coincide con la bibliografía general (Wikipedia: «Juegos Olímpicos de Moscú 1980»)."),
  "MSK-1980-21": ria("Эстафета за день до открытия согласуется с датой церемонии (запись MSK-1980-20).", "El relevo un día antes de la inauguración es coherente con la fecha de la ceremonia (registro MSK-1980-20)."),
  "MSK-1941-22": ria("Парад 7 ноября 1941 года задокументирован в общей литературе (Википедия: «Битва за Москву»).", "El desfile del 7 de noviembre de 1941 está documentado en la bibliografía general (Wikipedia: «Batalla de Moscú»)."),
  "MSK-1941-23": ria("Дата 10 декабря 1941 года приходится на период обороны Москвы.", "La fecha, 10 de diciembre de 1941, corresponde al periodo de la defensa de Moscú."),
  "MSK-1941-24": { ru: "Идентификатор РИА Новости 5815234 и автор (Л. Доренский, ТАСС) указаны на Викискладе. Дата совпадает с парадом 7 ноября 1941 года (запись MSK-1941-22).", es: "El identificador de RIA Novosti 5815234 y el autor (L. Dorenski, TASS) figuran en Commons. La fecha coincide con el desfile del 7 de noviembre de 1941 (registro MSK-1941-22)." },
  "MSK-1945-25": { ru: "Источник по данным Викисклада — фотогалерея Министерства обороны России. Дата Парада Победы (24 июня 1945) совпадает с общей литературой (Википедия). Автор снимка не установлен.", es: "Según Commons, la fuente es la galería del Ministerio de Defensa de Rusia. La fecha del Desfile de la Victoria (24 de junio de 1945) coincide con la bibliografía general (Wikipedia). El autor de la foto no está identificado." },
  "MSK-1961-26": glav("Ю. Д. Королёв", "14 апреля 1961", "Yu. D. Koroliov", "14 de abril de 1961", "Дата встречи согласуется с полётом 12 апреля 1961 года (Википедия: «Гагарин, Юрий Алексеевич»).", "La fecha del recibimiento es coherente con el vuelo del 12 de abril de 1961 (Wikipedia: «Yuri Gagarin»)."),
  "MSK-1954-27": glav("А. Чепрунов", "июнь 1954", "A. Cheprunov", "junio de 1954")
});

/** Materiales fuera del archivo verificado y motivo. */
export const CASOS = localizar({
  "MSK-1867-01": { ru: "Копия из блога; атрибуция взята из другой копии. Нет каталога учреждения, с которым можно было бы её сверить.", es: "Copia publicada en un blog; la atribución procede de otra copia. No hay un catálogo institucional con el cual contrastarla." },
  "MSK-1931-04": { ru: "Копия из образовательного проекта; автор и исходный архив неизвестны.", es: "Copia de un proyecto educativo; se desconocen el autor y el archivo de origen." },
  "MSK-19XX-28": { ru: "Снимок принадлежит Библиотеке Конгресса, но указанная в каталоге дата (1900) невозможна. Пока дата не установлена, запись не считается проверенной.", es: "La imagen pertenece a la Biblioteca del Congreso, pero la fecha del catálogo (1900) es imposible. Mientras no se establezca la fecha real, el registro no se considera verificado." },
  "MSK-1937-29": { ru: "Копия без архива учреждения, а название файла на Викискладе противоречит истории. Используется как исторический пример подделки.", es: "Copia sin archivo institucional y con un título en Commons que contradice la historia. Se usa como ejemplo histórico de manipulación." },
  "REC-1921-30": { ru: "Художественная реконструкция 1921 года: изображает прошлое, которое никто не фотографировал.", es: "Reconstrucción artística de 1921: representa un pasado que nadie fotografió." },
  "REC-2021-31": { ru: "Цифровая 3D-реконструкция 2021 года здания, которое никогда не существовало.", es: "Reconstrucción digital en 3D, hecha en 2021, de un edificio que nunca existió." }
});
