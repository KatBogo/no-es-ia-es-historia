/**
 * Contenido editorial (ruso / inglés): escenario, riesgos, ejercicio,
 * comparaciones, historias y piezas de campaña.
 * Las imágenes se referencian por el campo "img" de registros.js.
 * Todo lo que pertenece al escenario de 2050 está marcado como especulativo.
 * El escenario se basa en la investigación del equipo sobre las 16 predicciones
 * para Moscú 2050 de la plataforma Earth 2050 (Kaspersky).
 */
import { localizar } from "../i18n.js";

/** Predicciones de Earth 2050 usadas en el escenario (selección). */
export const ESCENARIO = localizar([
  {
    prediccion: "3D reconstruction of the human history", autor: "Andrey Chemezov", clave: true,
    texto: { ru: "Виртуальный глобус воссоздаёт в 3D любые события прошлого. Добавить событие может кто угодно, как в Википедии, а ИИ генерирует изображения по описаниям, хроникам и документальным фильмам — не только «то, что было», но и «то, что могло быть».", en: "A virtual globe recreates any past event in 3D. Anyone can add events, as on Wikipedia, and an AI generates images from descriptions, chronicles and documentaries — not only “what was” but also “what could have been”." }
  },
  {
    prediccion: "Moscow 2050", autor: "Earthman / Vodogreev",
    texto: { ru: "Москва растёт вверх: воздушный и канатный транспорт, зелёные крыши, подвесные парки. Город разделён по уровням — и по доступу.", en: "Moscow grows upwards: air and cable transport, green roofs, suspended parks. The city is divided into levels — and by access." }
  },
  {
    prediccion: "The world in 2050", autor: "Earthman",
    texto: { ru: "Перемены постепенны, а социальное и экономическое неравенство растёт. Те, у кого есть доступ к технологиям, наполняют историю; память остальных остаётся за бортом.", en: "Change is gradual while social and economic inequality grows. Those with access to technology feed history; everyone else's memory is left out." }
  },
  {
    prediccion: "Neuromorphic official", autor: "Andrey Lavrentyev",
    texto: { ru: "Машины, имитирующие работу мозга, занимают должности в госуправлении. Решения принимает «чёрный ящик», логику которого никто не понимает.", en: "Machines that imitate the brain take over public-administration posts. Decisions come from a “black box” nobody understands." }
  },
  {
    prediccion: "Smart machines will make humankind more stupid", autor: "Oleg Gorobets",
    texto: { ru: "Зависимость от машин лишает людей базовых навыков. Реальность становится хрупкой: жизнь держится на системах, которые мы не контролируем.", en: "Dependence on machines erodes basic skills. Reality becomes fragile: daily life hangs on systems we do not control." }
  },
  {
    prediccion: "The first ever museum of “human” relations", autor: "Julia Nikishkina",
    texto: { ru: "Роботы решают все бюрократические вопросы, и город открывает музей очередей и грубых чиновников 2010–2020-х: люди скучают по живому общению.", en: "Robots handle all paperwork, so the city opens a museum of 2010s–2020s queues and rude clerks: people miss human friction." }
  }
]);

export const RIESGOS = localizar([
  {
    id: "manipulacion", icono: "scissors",
    titulo: { ru: "Подделка исторических фотографий", en: "Manipulation of historical photographs" },
    texto: { ru: "Подлинный снимок можно обрезать, отретушировать или стереть с него человека — и этого никто не заметит.", en: "A genuine photo can be cropped, retouched or have a person erased without anyone noticing." },
    ejemplo: { ru: "Реальный пример: в 1930-е годы Николая Ежова убрали со снимка, где он шёл рядом со Сталиным. Отретушированная версия распространялась как оригинал.", en: "Real example: in the 1930s Nikolai Yezhov was removed from a photo in which he walked beside Stalin. The retouched version circulated as the original." },
    registro: "MSK-1937-29"
  },
  {
    id: "ficticios", icono: "spark",
    titulo: { ru: "Вымышленные события, созданные ИИ", en: "Fictional events created by AI" },
    texto: { ru: "Система может создать правдоподобные сцены того, чего никогда не было.", en: "A system can produce convincing scenes of things that never happened." },
    ejemplo: { ru: "Гипотеза сценария 2050 (прогноз Earth 2050 «3D reconstruction of the human history»): виртуальный глобус генерирует по описаниям не только «то, что было», но и «то, что могло быть». Само изображение не докажет подделку — нужно искать его происхождение.", en: "Scenario hypothesis for 2050 (Earth 2050 prediction “3D reconstruction of the human history”): a virtual globe generates from descriptions not only “what was” but “what could have been”. The image alone cannot prove it is fake — you have to trace where it comes from." },
    registro: null
  },
  {
    id: "procedencia", icono: "chain",
    titulo: { ru: "Потеря цифрового происхождения", en: "Loss of digital provenance" },
    texto: { ru: "При каждом копировании изображение может потерять автора, дату и архив, который его хранит.", en: "Every time an image is copied it can lose its author, date and the archive that keeps it." },
    ejemplo: { ru: "Реальный пример: снимок с Ежовым хранится на Викискладе под названием, относящим его к каналу Волга — Дон, открытому в 1952 году. Ежов умер в 1940-м. Ошибка в данных может жить годами.", en: "Real example: the Yezhov photo is stored on Commons under a title placing it at the Volga–Don Canal, opened in 1952. Yezhov died in 1940. A copying error can travel for years." },
    registro: "MSK-1937-29"
  },
  {
    id: "desinformacion", icono: "eye",
    titulo: { ru: "Визуальная дезинформация", en: "Visual disinformation" },
    texto: { ru: "Настоящая фотография с ложной подписью тоже дезинформирует.", en: "A real photo with a false caption also misinforms." },
    ejemplo: { ru: "Реальный пример: негатив из Библиотеки Конгресса США под названием «смотр Красной армии» датирован 1900 годом, хотя Красная армия создана в 1918-м. Снимок подлинный, дата — нет.", en: "Real example: a Library of Congress negative titled “review of Red Army” is dated 1900, although the Red Army was founded in 1918. The image is genuine; the date is not." },
    registro: "MSK-19XX-28"
  },
  {
    id: "memoria", icono: "fragment",
    titulo: { ru: "Ослабление коллективной памяти", en: "Weakening of collective memory" },
    texto: { ru: "Если остаются только копии и реконструкции — и только память тех, у кого есть доступ к технологиям, — трудно понять, что было на самом деле.", en: "If only copies and reconstructions remain — and only the memory of those with access to technology — it becomes hard to know what really happened." },
    ejemplo: { ru: "Реальный пример: храм Христа Спасителя взорвали в 1931 году и воссоздали в 1995–2000 годах. Снимки до 1931 года — сегодня единственное визуальное свидетельство исходного здания.", en: "Real example: the Cathedral of Christ the Saviour was blown up in 1931 and rebuilt in 1995–2000. Photos from before 1931 are now the only visual evidence of the original building." },
    registro: "MSK-1890-03"
  }
]);

/** Ejercicio educativo. clase: "registro" o "alterada"; "parcial": respuesta con parte de razón. */
export const QUIZ = localizar([
  {
    registro: "MSK-1941-22", clase: "registro",
    clasificacion: { ru: "Исторический документ", en: "Historical record" },
    explicacion: { ru: "Снимок Анатолия Гаранина от 7 ноября 1941 года хранится в архиве РИА Новости под номером 669663.", en: "Anatoly Garanin's photo of 7 November 1941, kept in the RIA Novosti archive as no. 669663." },
    pistas: { ru: "Зерно, размытость и чёрно-белое изображение кажутся признаками старины, но их можно имитировать. Снимок подтверждают номер в архиве, автор и дата.", en: "Grain, blur and black and white look like signs of age, but they can be imitated. What backs this image is its archive number, author and date." },
    fuente: { ru: "Архив РИА Новости № 669663 (через Викисклад)", en: "RIA Novosti archive no. 669663 (via Wikimedia Commons)" }
  },
  {
    registro: "REC-2021-31", clase: "alterada",
    clasificacion: { ru: "Цифровая реконструкция (2021)", en: "Digital reconstruction (2021)" },
    explicacion: { ru: "Это 3D-модель Дворца Советов — здания, спроектированного в 1930-е и так и не построенного. Её создал в 2021 году участник Викисклада, объединив несколько проектов.", en: "It is a 3D model of the Palace of the Soviets, a building designed in the 1930s and never built. A Wikimedia Commons user made it in 2021 by combining several plans." },
    pistas: { ru: "Монументальная архитектура и композиция напоминают снимки эпохи. Без источника изображение можно принять за фотографию существовавшего здания.", en: "The monumental architecture and composition recall period images. Without a source it could pass for a photo of a building that existed." },
    fuente: { ru: "Викисклад, «Palace of the Soviets - Blender 3D» (CC BY-SA 4.0)", en: "Wikimedia Commons, “Palace of the Soviets - Blender 3D” (CC BY-SA 4.0)" }
  },
  {
    registro: "MSK-1961-26", clase: "registro",
    clasificacion: { ru: "Исторический документ", en: "Historical record" },
    explicacion: { ru: "Снимок Ю. Д. Королёва: встреча Юрия Гагарина на Красной площади 14 апреля 1961 года. Хранится в Главархиве Москвы.", en: "Yu. D. Korolyov's photo of Yuri Gagarin's welcome on Red Square on 14 April 1961, kept by the Moscow Main Archive." },
    pistas: { ru: "Сцена настолько знаменита, что может показаться постановкой. Её подтверждают архив и карточка хранения.", en: "The scene is so iconic it could seem staged. What supports it is the archive that keeps it and its record." },
    fuente: { ru: "Главархив Москвы (через Викисклад, CC BY 4.0)", en: "Moscow Main Archive (via Wikimedia Commons, CC BY 4.0)" }
  },
  {
    registro: "REC-1921-30", clase: "alterada",
    clasificacion: { ru: "Художественная реконструкция (1921)", en: "Artistic reconstruction (1921)" },
    explicacion: { ru: "Акварель Аполлинария Васнецова, воссоздающая Кремль XIV века. Это историческая интерпретация, а не документ той эпохи.", en: "A watercolour by Apollinary Vasnetsov imagining the 14th-century Kremlin. It is a historical interpretation, not a record from the time." },
    pistas: { ru: "Старое изображение не обязательно прямое свидетельство. Работе сто лет, но она изображает события на шестьсот лет раньше.", en: "Being old does not make an image a direct witness. This work is a century old but depicts a scene six hundred years earlier." },
    fuente: { ru: "Музей Москвы (через Викисклад, общественное достояние)", en: "Museum of Moscow (via Wikimedia Commons, public domain)" }
  },
  {
    registro: "MSK-1890-05", clase: "alterada", parcial: "registro",
    clasificacion: { ru: "Исторический документ с добавленным цветом", en: "Historical record with added colour" },
    explicacion: { ru: "Это фотохром: в основе настоящий чёрно-белый негатив, но цвет добавлен при печати. Это одновременно документ эпохи и изменённое изображение.", en: "It is a photochrom: it starts from a real black-and-white negative, but the colour was added in printing. It is a period record and an altered image at the same time." },
    pistas: { ru: "Мягкие «естественные» цвета заставляют думать о цветной фотографии. Если вы ответили «исторический документ», вы отчасти правы.", en: "The soft, “natural” colours suggest a colour photograph. If you answered “historical record”, you are partly right." },
    fuente: { ru: "Библиотека Конгресса США, LCCN 2017660946 (общественное достояние)", en: "Library of Congress, LCCN 2017660946 (public domain)" }
  },
  {
    registro: "MSK-19XX-28", clase: "registro",
    clasificacion: { ru: "Исторический документ с противоречивой датой", en: "Historical record with an inconsistent date" },
    explicacion: { ru: "Это настоящий стеклянный негатив агентства Bain News Service. Но каталог датирует его 1900 годом, а Красная армия появилась только в 1918-м.", en: "It is a real Bain News Service glass negative. But the catalogue dates it to 1900, and the Red Army only came into being in 1918." },
    pistas: { ru: "Изображение подлинное, сведения о нём — нет. Настоящий снимок с ложными данными тоже вводит в заблуждение.", en: "The image is genuine; its information is not. A real photo with false data can also mislead." },
    fuente: { ru: "Библиотека Конгресса США, LCCN 2014713395 (общественное достояние)", en: "Library of Congress, LCCN 2014713395 (public domain)" }
  }
]);

/** Pares para el comparador «До и после». Las versiones deben compartir encuadre. */
export const COMPARACIONES = localizar([
  {
    id: "retoque", original: "yezhov-original-1937", intervenida: "yezhov-retocada", filtro: null, capa: false, registro: "MSK-1937-29",
    titulo: { ru: "Подлинный снимок и историческая подделка", en: "Authentic photo and historical manipulation" },
    explicacion: { ru: "В отретушированной версии исчез Николай Ежов, стоявший справа от Сталина. Кроме того, по описанию на Викискладе, лица и фон осветлены. Подделку сделали вручную — за десятилетия до ИИ.", en: "In the retouched version Nikolai Yezhov, who stood to Stalin's right, disappears. According to the Commons description, faces and background were also lightened. It was done by hand, decades before AI." },
    importancia: { ru: "Если бы сохранилась только отретушированная версия, никто бы не узнал, что Ежов там был. Именно сохранённый оригинал позволяет доказать подделку.", en: "Had only the retouched version survived, nobody would know Yezhov was there. Keeping the original is what makes it possible to prove the manipulation." },
    fuente: { ru: "Обе версии: Викисклад, общественное достояние.", en: "Both versions: Wikimedia Commons, public domain." }
  },
  {
    id: "restauracion", original: "metro-komsomolskaya-1935", intervenida: "metro-komsomolskaya-1935", filtro: "grayscale(1) contrast(1.45) brightness(1.08)", capa: false, registro: "MSK-1935-08",
    titulo: { ru: "Исходный снимок и «отреставрированная» версия", en: "Original photo and “restored” version" },
    explicacion: { ru: "Для этого прототипа сепия убрана, а контраст усилен цифровым фильтром. Ни один элемент не добавлен и не удалён.", en: "For this prototype the sepia tone was removed and the contrast raised with a digital filter. Nothing was added or removed." },
    importancia: { ru: "Реставрация может казаться «более настоящей», но она меняет изображение. Любое вмешательство, даже улучшение, нужно указывать.", en: "A restoration can look “more real”, but it changes the image. Every intervention, even an improvement, must be declared." },
    fuente: { ru: "Оригинал: Рейксмузеум, RP-F-F00935-F (CC0). Вмешательство: фильтр, применённый в этом прототипе.", en: "Original: Rijksmuseum, RP-F-F00935-F (CC0). Intervention: filter applied in this prototype." }
  },
  {
    id: "especulativa", original: "gorki-1950s", intervenida: "gorki-1950s", filtro: "grayscale(1) contrast(1.2) brightness(0.75)", capa: true, registro: "MSK-1955-15",
    titulo: { ru: "Историческое фото и спекулятивная визуализация", en: "Historical photo and speculative visualisation" },
    explicacion: { ru: "Поверх снимка улицы Горького наложен графический слой, изображающий Москву 2050 года. Это иллюстрация, созданная для кампании.", en: "A graphic layer imagining Moscow in 2050 was placed over the photo of Gorky Street. It is an illustration made for this campaign." },
    importancia: { ru: "Одного слоя достаточно, чтобы изменить смысл подлинного изображения. Поэтому у этой версии есть метка, которую нельзя убрать.", en: "One layer is enough to change the meaning of an authentic image. That is why this version carries a label that cannot be removed." },
    fuente: { ru: "Оригинал: М. Трахман, Главархив Москвы (CC BY 4.0). Слой: спекулятивная визуализация этого проекта.", en: "Original: M. Trakhman, Moscow Main Archive (CC BY 4.0). Layer: speculative visualisation by this project." }
  }
]);

/** Historias. "fragmento" solo cuando existe un documento o un pie de foto de archivo. */
export const HISTORIAS = localizar([
  {
    id: "h1867", anio: "1867", img: "panorama-1867", registro: "MSK-1867-01",
    titulo: { ru: "Город с высоты", en: "The city from above" },
    contexto: [
      { ru: "В 1867 году храм Христа Спасителя ещё строился. С его лесов сняли фотопанораму города с Кремлём и Москвой-рекой.", en: "In 1867 the Cathedral of Christ the Saviour was still under construction. From its scaffolding a photographic panorama of the city, the Kremlin and the Moskva River was taken." },
      { ru: "Этот вид позволяет сравнить Москву XIX века с сегодняшней. Многих зданий на снимке уже нет.", en: "It lets us compare 19th-century Moscow with today's city. Many of the buildings shown no longer exist." }
    ],
    fragmento: null,
    enlace: { texto: { ru: "Храм Христа Спасителя (Википедия)", en: "Cathedral of Christ the Saviour (Wikipedia)" }, url: { ru: "https://ru.wikipedia.org/wiki/Храм_Христа_Спасителя", en: "https://en.wikipedia.org/wiki/Cathedral_of_Christ_the_Saviour" } }
  },
  {
    id: "h1931", anio: "1931", img: "catedral-1931", registro: "MSK-1931-04",
    titulo: { ru: "Храм, который исчез", en: "The cathedral that vanished" },
    contexto: [
      { ru: "5 декабря 1931 года храм Христа Спасителя взорвали. На его месте собирались построить Дворец Советов — небоскрёб, который так и не был закончен.", en: "On 5 December 1931 the Cathedral of Christ the Saviour was dynamited. The Palace of the Soviets, a skyscraper that was never finished, was to rise in its place." },
      { ru: "Позже на этом месте появился открытый бассейн «Москва». Храм воссоздали в 1995–2000 годах. То, что мы видим сегодня, — реконструкция; снимки до 1931 года — документ исходного здания.", en: "Later the site became the open-air Moskva Pool. The cathedral was rebuilt in 1995–2000. What stands today is a reconstruction; photos from before 1931 are the record of the original." }
    ],
    fragmento: null,
    enlace: { texto: { ru: "Дворец Советов (Википедия)", en: "Palace of the Soviets (Wikipedia)" }, url: { ru: "https://ru.wikipedia.org/wiki/Дворец_Советов", en: "https://en.wikipedia.org/wiki/Palace_of_the_Soviets" } }
  },
  {
    id: "h1935", anio: "1935", img: "metro-constructores-1935", registro: "MSK-1935-10",
    titulo: { ru: "Город под городом", en: "A city beneath the city" },
    contexto: [
      { ru: "15 мая 1935 года открылась первая линия Московского метрополитена. Его станции задумывались как подземные дворцы.", en: "On 15 May 1935 the first line of the Moscow Metro opened. Its stations were conceived as underground palaces." },
      { ru: "За этим парадным образом стояли тысячи рабочих. Альбом Рейксмузеума сохранил их групповой портрет, хотя имён в карточке нет.", en: "Behind that official image stood thousands of workers. The Rijksmuseum album keeps a group portrait of them, though their names are not recorded." }
    ],
    fragmento: { tipo: { ru: "Архивный документ", en: "Archive document" }, img: "metro-bovard-1935", texto: { ru: "«Отзыв главного редактора американской газеты St. Louis Post-Dispatch Боварда о московском метрополитене. Перевод с английского языка. 1935 год». Главархив Москвы.", en: "“The opinion of Bovard, editor-in-chief of the St. Louis Post-Dispatch, on the Moscow Metro. Translated from English. 1935.” Moscow Main Archive." } },
    enlace: { texto: { ru: "Московский метрополитен (Википедия)", en: "Moscow Metro (Wikipedia)" }, url: { ru: "https://ru.wikipedia.org/wiki/Московский_метрополитен", en: "https://en.wikipedia.org/wiki/Moscow_Metro" } }
  },
  {
    id: "h1937", anio: "1937", img: "yezhov-original-1937", registro: "MSK-1937-29",
    titulo: { ru: "Человек, которого стёрли", en: "The man who was erased" },
    contexto: [
      { ru: "Николай Ежов возглавлял НКВД в 1936–1938 годах. После падения его арестовали и в 1940 году расстреляли, а его фигура начала исчезать с фотографий.", en: "Nikolai Yezhov headed the NKVD from 1936 to 1938. After his fall he was arrested and executed in 1940, and he began to disappear from photographs." },
      { ru: "Снимок рядом со Сталиным стал знаменитым, потому что сохранились обе версии. Это доказательство того, что подделка визуального прошлого началась задолго до ИИ.", en: "The photo beside Stalin became famous because both versions survive. It proves that manipulating the visual past began long before AI." }
    ],
    fragmento: null,
    enlace: { texto: { ru: "Censorship of images in the Soviet Union (Википедия, на английском)", en: "Censorship of images in the Soviet Union (Wikipedia)" }, url: "https://en.wikipedia.org/wiki/Censorship_of_images_in_the_Soviet_Union" }
  },
  {
    id: "h1941", anio: "1941", img: "desfile-1941", registro: "MSK-1941-22",
    titulo: { ru: "С парада — на фронт", en: "From the parade to the front" },
    contexto: [
      { ru: "В ноябре 1941 года немецкая армия стояла у ворот Москвы. И всё же 7 ноября на Красной площади прошёл ежегодный парад.", en: "In November 1941 the German army was at the gates of Moscow. Even so, the annual parade took place on Red Square on 7 November." },
      { ru: "Многие части прямо с парада ушли на фронт. Той зимой над памятниками, как над памятником Пушкину, висели аэростаты заграждения.", en: "Many units marched straight from the parade to the front. That winter, barrage balloons floated over monuments such as Pushkin's." }
    ],
    fragmento: { tipo: { ru: "Оригинальная подпись архива (перевод)", en: "Original archive caption" }, img: null, texto: { ru: "«Советские войска направляются прямо на фронт после парада на Красной площади в Москве 7 ноября 1941 года». Архив РИА Новости, № 669663.", en: "“Soviet troops heading straight to the front lines after the parade held on Moscow's Red Square on November 7, 1941.” RIA Novosti archive, no. 669663." } },
    enlace: { texto: { ru: "Битва за Москву (Википедия)", en: "Battle of Moscow (Wikipedia)" }, url: { ru: "https://ru.wikipedia.org/wiki/Битва_за_Москву", en: "https://en.wikipedia.org/wiki/Battle_of_Moscow" } }
  },
  {
    id: "h1961", anio: "1961", img: "gagarin-1961", registro: "MSK-1961-26",
    titulo: { ru: "Возвращение Гагарина", en: "Gagarin's return" },
    contexto: [
      { ru: "12 апреля 1961 года Юрий Гагарин стал первым человеком в космосе. Через два дня его встречали на Красной площади.", en: "On 12 April 1961 Yuri Gagarin became the first person in space. Two days later he was welcomed on Red Square." },
      { ru: "Снимки того дня в Главархиве Москвы указывают автора, дату и место.", en: "The photos of that day kept by the Moscow Main Archive record the author, date and place." }
    ],
    fragmento: null,
    enlace: { texto: { ru: "Юрий Гагарин (Википедия)", en: "Yuri Gagarin (Wikipedia)" }, url: { ru: "https://ru.wikipedia.org/wiki/Гагарин,_Юрий_Алексеевич", en: "https://en.wikipedia.org/wiki/Yuri_Gagarin" } }
  },
  {
    id: "h2050", anio: "2050", especulativa: true, img: "vista-general-1890", registro: null,
    titulo: { ru: "Последняя копия", en: "The last copy" },
    contexto: [
      { ru: "Москва, 2050. Город поднялся вверх: на верхних уровнях — подвесные парки и аэротакси, внизу — подвижные тротуары. Виртуальный глобус истории показывает то, что о прошлом рассказали те, у кого есть доступ к нему.", en: "Moscow, 2050. The city has grown upwards: suspended parks and air taxis on the upper levels, moving walkways below. The virtual history globe shows what those with access chose to tell about the past." },
      { ru: "Библиотекарь нижнего уровня получает коробку с негативами своей бабушки. Её улицы, вывески и соседи не совпадают с версиями глобуса. Она оцифровывает их, описывает происхождение и сдаёт в гражданский архив, прежде чем показать хоть один снимок.", en: "A librarian from the lower level receives a box of her grandmother's negatives. Their streets, signs and neighbours do not match the globe's versions. She digitises them, records their provenance and deposits them in a civic archive before sharing a single one." }
    ],
    fragmento: { tipo: { ru: "Спекулятивный сюжет · вымышленный персонаж", en: "Speculative narrative · fictional character" }, img: null, texto: { ru: "«Я не прошу верить мне. Я хочу, чтобы это можно было проверить». Свидетельство придумано для сценария 2050 года и не принадлежит реальному человеку.", en: "“I don't want people to believe me. I want them to be able to check.” A testimony imagined for the 2050 scenario; it belongs to no real person." } },
    enlace: null
  }
]);

export const PIEZAS = localizar([
  { id: "p1", img: "restauracion-1954", registro: "MSK-1954-27", estilo: "a",
    frase: { ru: "Историю не генерируют. Её хранят.", en: "History is not generated. It is preserved." },
    dato: { ru: "ДОКУМЕНТ // ИЮНЬ 1954", en: "RECORD // JUNE 1954" } },
  { id: "p2", img: "yezhov-retocada", registro: "MSK-1937-29", estilo: "b",
    frase: { ru: "Прежде чем поделиться, проверь.", en: "Verify before you share." },
    dato: { ru: "ОТРЕТУШИРОВАННЫЙ СНИМОК // 1937", en: "RETOUCHED PHOTO // 1937" } },
  { id: "p3", img: "palacio-soviets-3d", registro: "REC-2021-31", estilo: "c",
    frase: { ru: "Не всё, что выглядит старым, подлинно.", en: "Not everything that looks old is authentic." },
    dato: { ru: "3D-РЕКОНСТРУКЦИЯ // 2021", en: "3D RECONSTRUCTION // 2021" } },
  { id: "p4", img: "revista-ejercito-lcc", registro: "MSK-19XX-28", estilo: "a",
    frase: { ru: "Памяти нужны источники, а не догадки.", en: "Memory needs sources, not guesses." },
    dato: { ru: "ДОКУМЕНТ // ДАТА ПОД СОМНЕНИЕМ", en: "RECORD // DATE IN DISPUTE" } },
  { id: "p5", img: "vista-general-1890", registro: "MSK-1890-02", estilo: "d",
    frase: { ru: "Москва 2050: кто управляет тем, что мы помним?", en: "Moscow 2050: who controls what we remember?" },
    dato: { ru: "ФОТОХРОМ // ОК. 1890–1900", en: "PHOTOCHROM // C. 1890–1900" } }
]);
