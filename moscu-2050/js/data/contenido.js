/**
 * Contenido editorial (ruso / español): escenario, riesgos, ejercicio,
 * comparaciones, historias y piezas de campaña.
 * Las imágenes se referencian por el campo "img" de registros.js.
 * Todo lo que pertenece al escenario de 2050 está marcado como especulativo.
 * El escenario se basa en la investigación del equipo sobre las 16 predicciones
 * para Moscú 2050 de la plataforma Earth 2050 (Kaspersky).
 */
import { localizar } from "../i18n.js";

/** Predicciones de Earth 2050 usadas en el escenario (selección). "original": título en la plataforma. */
export const ESCENARIO = localizar([
  {
    prediccion: { ru: "3D-реконструкция истории человечества", es: "Reconstrucción 3D de la historia humana" }, original: "3D reconstruction of the human history", autor: "Andrey Chemezov", clave: true,
    texto: { ru: "Виртуальный глобус воссоздаёт в 3D любые события прошлого. Добавить событие может кто угодно, как в Википедии, а ИИ генерирует изображения по описаниям, хроникам и документальным фильмам — не только «то, что было», но и «то, что могло быть».", es: "Un globo virtual reconstruye en 3D cualquier suceso del pasado. Cualquiera puede agregar eventos, como en Wikipedia, y una IA genera las imágenes a partir de descripciones, crónicas y documentales: no solo «lo que fue», sino también «lo que pudo haber sido»." }
  },
  {
    prediccion: { ru: "Москва 2050", es: "Moscú 2050" }, original: "Moscow 2050", autor: "Earthman / Vodogreev",
    texto: { ru: "Москва растёт вверх: воздушный и канатный транспорт, зелёные крыши, подвесные парки. Город разделён по уровням — и по доступу.", es: "Moscú crece en vertical: transporte aéreo y por cable, techos verdes y parques suspendidos. La ciudad se divide por niveles… y por acceso." }
  },
  {
    prediccion: { ru: "Мир в 2050 году", es: "El mundo en 2050" }, original: "The world in 2050", autor: "Earthman",
    texto: { ru: "Перемены постепенны, а социальное и экономическое неравенство растёт. Те, у кого есть доступ к технологиям, наполняют историю; память остальных остаётся за бортом.", es: "El cambio es gradual y crece la desigualdad social y económica. Quienes tienen acceso a la tecnología alimentan la historia; la memoria de los demás queda por fuera." }
  },
  {
    prediccion: { ru: "Нейроморфный чиновник", es: "Funcionario neuromórfico" }, original: "Neuromorphic official", autor: "Andrey Lavrentyev",
    texto: { ru: "Машины, имитирующие работу мозга, занимают должности в госуправлении. Решения принимает «чёрный ящик», логику которого никто не понимает.", es: "Máquinas que imitan el funcionamiento del cerebro asumen cargos de la administración pública. Las decisiones salen de una «caja negra» que nadie entiende." }
  },
  {
    prediccion: { ru: "Умные машины сделают человечество глупее", es: "Las máquinas inteligentes nos harán más tontos" }, original: "Smart machines will make humankind more stupid", autor: "Oleg Gorobets",
    texto: { ru: "Зависимость от машин лишает людей базовых навыков. Реальность становится хрупкой: жизнь держится на системах, которые мы не контролируем.", es: "Depender de las máquinas nos hace perder habilidades básicas. La realidad se vuelve frágil: la vida diaria cuelga de sistemas que no controlamos." }
  },
  {
    prediccion: { ru: "Первый музей «человеческих» отношений", es: "El primer museo de las relaciones «humanas»" }, original: "The first ever museum of “human” relations", autor: "Julia Nikishkina",
    texto: { ru: "Роботы решают все бюрократические вопросы, и город открывает музей очередей и грубых чиновников 2010–2020-х: люди скучают по живому общению.", es: "Los robots resuelven todos los trámites y la ciudad abre un museo de las filas y los funcionarios groseros de los años 2010 y 2020: la gente extraña el roce con otras personas." }
  }
]);

export const RIESGOS = localizar([
  {
    id: "manipulacion", icono: "scissors",
    titulo: { ru: "Подделка исторических фотографий", es: "Manipulación de fotografías históricas" },
    texto: { ru: "Подлинный снимок можно обрезать, отретушировать или стереть с него человека — и этого никто не заметит.", es: "Una imagen auténtica puede recortarse, retocarse o borrar a una persona sin que se note." },
    ejemplo: { ru: "Реальный пример: в 1930-е годы Николая Ежова убрали со снимка, где он шёл рядом со Сталиным. Отретушированная версия распространялась как оригинал.", es: "Ejemplo real: en la década de 1930, Nikolái Yezhov fue eliminado de una fotografía en la que caminaba junto a Stalin. La versión retocada circuló como si fuera la original." },
    registro: "MSK-1937-29"
  },
  {
    id: "ficticios", icono: "spark",
    titulo: { ru: "Вымышленные события, созданные ИИ", es: "Acontecimientos ficticios creados con IA" },
    texto: { ru: "Система может создать правдоподобные сцены того, чего никогда не было.", es: "Un sistema puede producir escenas verosímiles de hechos que nunca ocurrieron." },
    ejemplo: { ru: "Гипотеза сценария 2050 (прогноз Earth 2050 «3D-реконструкция истории человечества»): виртуальный глобус генерирует по описаниям не только «то, что было», но и «то, что могло быть». Само изображение не докажет подделку — нужно искать его происхождение.", es: "Hipótesis del escenario 2050 (predicción de Earth 2050 «Reconstrucción 3D de la historia humana»): un globo virtual genera a partir de descripciones no solo «lo que fue», sino «lo que pudo haber sido». La imagen sola no prueba que sea falsa: hay que buscar su origen." },
    registro: null
  },
  {
    id: "procedencia", icono: "chain",
    titulo: { ru: "Потеря цифрового происхождения", es: "Pérdida de procedencia digital" },
    texto: { ru: "При каждом копировании изображение может потерять автора, дату и архив, который его хранит.", es: "Cada vez que una imagen se copia, puede perder su autor, su fecha y el archivo que la conserva." },
    ejemplo: { ru: "Реальный пример: снимок с Ежовым хранится на Викискладе под названием, относящим его к каналу Волга — Дон, открытому в 1952 году. Ежов умер в 1940-м. Ошибка в данных может жить годами.", es: "Ejemplo real: la foto de Yezhov circula en Commons con un título que la sitúa en el canal Volga–Don, inaugurado en 1952. Yezhov murió en 1940. Un dato mal copiado puede viajar durante años." },
    registro: "MSK-1937-29"
  },
  {
    id: "desinformacion", icono: "eye",
    titulo: { ru: "Визуальная дезинформация", es: "Desinformación visual" },
    texto: { ru: "Настоящая фотография с ложной подписью тоже дезинформирует.", es: "Una fotografía real con un pie de foto falso también desinforma." },
    ejemplo: { ru: "Реальный пример: негатив из Библиотеки Конгресса США под названием «смотр Красной армии» датирован 1900 годом, хотя Красная армия создана в 1918-м. Снимок подлинный, дата — нет.", es: "Ejemplo real: un negativo de la Biblioteca del Congreso de EE. UU. titulado «revista del Ejército Rojo» aparece fechado en 1900, aunque el Ejército Rojo se creó en 1918. La imagen es auténtica; la fecha, no." },
    registro: "MSK-19XX-28"
  },
  {
    id: "memoria", icono: "fragment",
    titulo: { ru: "Ослабление коллективной памяти", es: "Debilitamiento de la memoria colectiva" },
    texto: { ru: "Если остаются только копии и реконструкции — и только память тех, у кого есть доступ к технологиям, — трудно понять, что было на самом деле.", es: "Si solo quedan copias y recreaciones —y solo la memoria de quienes tienen acceso a la tecnología—, se vuelve difícil saber qué ocurrió realmente." },
    ejemplo: { ru: "Реальный пример: храм Христа Спасителя взорвали в 1931 году и воссоздали в 1995–2000 годах. Снимки до 1931 года — сегодня единственное визуальное свидетельство исходного здания.", es: "Ejemplo real: la catedral de Cristo Salvador fue demolida en 1931 y reconstruida entre 1995 y 2000. Las fotografías anteriores a 1931 son hoy el único testimonio visual del edificio original." },
    registro: "MSK-1890-03"
  }
]);

/** Ejercicio educativo. clase: "registro" o "alterada"; "parcial": respuesta con parte de razón. */
export const QUIZ = localizar([
  {
    registro: "MSK-1941-22", clase: "registro",
    clasificacion: { ru: "Исторический документ", es: "Registro histórico" },
    explicacion: { ru: "Снимок Анатолия Гаранина от 7 ноября 1941 года хранится в архиве РИА Новости под номером 669663.", es: "Fotografía de Anatoli Garanin del 7 de noviembre de 1941, conservada en el archivo de RIA Novosti con el número 669663." },
    pistas: { ru: "Зерно, размытость и чёрно-белое изображение кажутся признаками старины, но их можно имитировать. Снимок подтверждают номер в архиве, автор и дата.", es: "El grano, el desenfoque y el blanco y negro parecen pruebas de antigüedad, pero se pueden imitar. Lo que respalda esta imagen es su número de archivo, su autor y su fecha." },
    fuente: { ru: "Архив РИА Новости № 669663 (через Викисклад)", es: "Archivo de RIA Novosti n.º 669663 (vía Wikimedia Commons)" }
  },
  {
    registro: "REC-2021-31", clase: "alterada",
    clasificacion: { ru: "Цифровая реконструкция (2021)", es: "Reconstrucción digital (2021)" },
    explicacion: { ru: "Это 3D-модель Дворца Советов — здания, спроектированного в 1930-е и так и не построенного. Её создал в 2021 году участник Викисклада, объединив несколько проектов.", es: "Es un modelo 3D del Palacio de los Sóviets, un edificio que se proyectó en los años treinta y nunca se construyó. Lo creó en 2021 un usuario de Wikimedia Commons combinando varios planos." },
    pistas: { ru: "Монументальная архитектура и композиция напоминают снимки эпохи. Без источника изображение можно принять за фотографию существовавшего здания.", es: "La arquitectura monumental y la composición recuerdan a imágenes de época. Sin una fuente, podría pasar por una fotografía de un edificio que existió." },
    fuente: { ru: "Викисклад, «Palace of the Soviets - Blender 3D» (CC BY-SA 4.0)", es: "Wikimedia Commons, «Palace of the Soviets - Blender 3D» (CC BY-SA 4.0)" }
  },
  {
    registro: "MSK-1961-26", clase: "registro",
    clasificacion: { ru: "Исторический документ", es: "Registro histórico" },
    explicacion: { ru: "Снимок Ю. Д. Королёва: встреча Юрия Гагарина на Красной площади 14 апреля 1961 года. Хранится в Главархиве Москвы.", es: "Fotografía de Yu. D. Koroliov del recibimiento a Yuri Gagarin en la Plaza Roja el 14 de abril de 1961. La conserva el Archivo Principal de Moscú." },
    pistas: { ru: "Сцена настолько знаменита, что может показаться постановкой. Её подтверждают архив и карточка хранения.", es: "La escena es tan icónica que podría parecer una recreación. Lo que la sostiene es el archivo que la conserva y su ficha." },
    fuente: { ru: "Главархив Москвы (через Викисклад, CC BY 4.0)", es: "Archivo Principal de Moscú (vía Wikimedia Commons, CC BY 4.0)" }
  },
  {
    registro: "REC-1921-30", clase: "alterada",
    clasificacion: { ru: "Художественная реконструкция (1921)", es: "Reconstrucción artística (1921)" },
    explicacion: { ru: "Акварель Аполлинария Васнецова, воссоздающая Кремль XIV века. Это историческая интерпретация, а не документ той эпохи.", es: "Acuarela de Apollinari Vasnetsov que imagina el Kremlin del siglo XIV. Es una interpretación histórica, no un documento de la época." },
    pistas: { ru: "Старое изображение не обязательно прямое свидетельство. Работе сто лет, но она изображает события на шестьсот лет раньше.", es: "Que una imagen sea antigua no la convierte en testimonio directo. Esta obra tiene cien años, pero recrea una escena seiscientos años anterior." },
    fuente: { ru: "Музей Москвы (через Викисклад, общественное достояние)", es: "Museo de Moscú (vía Wikimedia Commons, dominio público)" }
  },
  {
    registro: "MSK-1890-05", clase: "alterada", parcial: "registro",
    clasificacion: { ru: "Исторический документ с добавленным цветом", es: "Registro histórico con color añadido" },
    explicacion: { ru: "Это фотохром: в основе настоящий чёрно-белый негатив, но цвет добавлен при печати. Это одновременно документ эпохи и изменённое изображение.", es: "Es un fotocromo: parte de un negativo real en blanco y negro, pero el color se añadió durante la impresión. Es un documento de época y, a la vez, una imagen intervenida." },
    pistas: { ru: "Мягкие «естественные» цвета заставляют думать о цветной фотографии. Если вы ответили «исторический документ», вы отчасти правы.", es: "Los colores suaves y «naturales» hacen pensar en una foto en color. Si respondiste «registro histórico», tienes parte de razón." },
    fuente: { ru: "Библиотека Конгресса США, LCCN 2017660946 (общественное достояние)", es: "Biblioteca del Congreso de EE. UU., LCCN 2017660946 (dominio público)" }
  },
  {
    registro: "MSK-19XX-28", clase: "registro",
    clasificacion: { ru: "Исторический документ с противоречивой датой", es: "Registro histórico con fecha incoherente" },
    explicacion: { ru: "Это настоящий стеклянный негатив агентства Bain News Service. Но каталог датирует его 1900 годом, а Красная армия появилась только в 1918-м.", es: "Es un negativo de vidrio real de la agencia Bain News Service. Pero el catálogo lo fecha en 1900, y el Ejército Rojo no existió hasta 1918." },
    pistas: { ru: "Изображение подлинное, сведения о нём — нет. Настоящий снимок с ложными данными тоже вводит в заблуждение.", es: "La imagen es auténtica; su información no. Una foto verdadera con datos falsos también puede engañar." },
    fuente: { ru: "Библиотека Конгресса США, LCCN 2014713395 (общественное достояние)", es: "Biblioteca del Congreso de EE. UU., LCCN 2014713395 (dominio público)" }
  }
]);

/** Pares para el comparador «Antes y después». Las versiones deben compartir encuadre. */
export const COMPARACIONES = localizar([
  {
    id: "retoque", original: "yezhov-original-1937", intervenida: "yezhov-retocada", filtro: null, capa: false, registro: "MSK-1937-29",
    titulo: { ru: "Подлинный снимок и историческая подделка", es: "Fotografía auténtica y manipulación histórica" },
    explicacion: { ru: "В отретушированной версии исчез Николай Ежов, стоявший справа от Сталина. Кроме того, по описанию на Викискладе, лица и фон осветлены. Подделку сделали вручную — за десятилетия до ИИ.", es: "En la versión retocada desaparece Nikolái Yezhov, que estaba a la derecha de Stalin. Además, según la descripción de Commons, se aclararon los rostros y el fondo. La manipulación se hizo a mano, décadas antes de la IA." },
    importancia: { ru: "Если бы сохранилась только отретушированная версия, никто бы не узнал, что Ежов там был. Именно сохранённый оригинал позволяет доказать подделку.", es: "Si solo hubiera sobrevivido la versión retocada, nadie sabría que Yezhov estuvo allí. Conservar el original es lo que permite demostrar la manipulación." },
    fuente: { ru: "Обе версии: Викисклад, общественное достояние.", es: "Ambas versiones: Wikimedia Commons, dominio público." }
  },
  {
    id: "restauracion", original: "metro-komsomolskaya-1935", intervenida: "metro-komsomolskaya-1935", filtro: "grayscale(1) contrast(1.45) brightness(1.08)", capa: false, registro: "MSK-1935-08",
    titulo: { ru: "Исходный снимок и «отреставрированная» версия", es: "Fotografía original y versión «restaurada»" },
    explicacion: { ru: "Для этого прототипа сепия убрана, а контраст усилен цифровым фильтром. Ни один элемент не добавлен и не удалён.", es: "Para este prototipo se eliminó el tono sepia y se aumentó el contraste con un filtro digital. No se añadió ni se borró ningún elemento." },
    importancia: { ru: "Реставрация может казаться «более настоящей», но она меняет изображение. Любое вмешательство, даже улучшение, нужно указывать.", es: "Una restauración puede parecer «más real», pero cambia la imagen. Toda intervención, incluso las mejoras, debe declararse." },
    fuente: { ru: "Оригинал: Рейксмузеум, RP-F-F00935-F (CC0). Вмешательство: фильтр, применённый в этом прототипе.", es: "Original: Rijksmuseum, RP-F-F00935-F (CC0). Intervención: filtro aplicado en este prototipo." }
  },
  {
    id: "especulativa", original: "gorki-1950s", intervenida: "gorki-1950s", filtro: "grayscale(1) contrast(1.2) brightness(0.75)", capa: true, registro: "MSK-1955-15",
    titulo: { ru: "Историческое фото и спекулятивная визуализация", es: "Fotografía histórica y visualización especulativa" },
    explicacion: { ru: "Поверх снимка улицы Горького наложен графический слой, изображающий Москву 2050 года. Это иллюстрация, созданная для кампании.", es: "Sobre la fotografía de la calle Gorki se añadió una capa gráfica que imagina Moscú en 2050. Es una ilustración creada para esta campaña." },
    importancia: { ru: "Одного слоя достаточно, чтобы изменить смысл подлинного изображения. Поэтому у этой версии есть метка, которую нельзя убрать.", es: "Basta una capa para cambiar el significado de una imagen auténtica. Por eso esta versión lleva una etiqueta que no se puede quitar." },
    fuente: { ru: "Оригинал: М. Трахман, Главархив Москвы (CC BY 4.0). Слой: спекулятивная визуализация этого проекта.", es: "Original: M. Trajman, Archivo Principal de Moscú (CC BY 4.0). Capa: visualización especulativa de este proyecto." }
  }
]);

/** Historias. "fragmento" solo cuando existe un documento o un pie de foto de archivo. */
export const HISTORIAS = localizar([
  {
    id: "h1867", anio: "1867", img: "panorama-1867", registro: "MSK-1867-01",
    titulo: { ru: "Город с высоты", es: "La ciudad vista desde lo alto" },
    contexto: [
      { ru: "В 1867 году храм Христа Спасителя ещё строился. С его лесов сняли фотопанораму города с Кремлём и Москвой-рекой.", es: "En 1867, el templo de Cristo Salvador aún estaba en obras. Desde sus andamios se tomó un panorama fotográfico de la ciudad, con el Kremlin y el río Moscova." },
      { ru: "Этот вид позволяет сравнить Москву XIX века с сегодняшней. Многих зданий на снимке уже нет.", es: "Esa vista permite comparar la ciudad del siglo XIX con la actual. Muchos de los edificios que aparecen ya no existen." }
    ],
    fragmento: null,
    enlace: { texto: { ru: "Храм Христа Спасителя (Википедия)", es: "Catedral de Cristo Salvador (Wikipedia)" }, url: { ru: "https://ru.wikipedia.org/wiki/Храм_Христа_Спасителя", es: "https://es.wikipedia.org/wiki/Catedral_de_Cristo_Salvador" } }
  },
  {
    id: "h1931", anio: "1931", img: "catedral-1931", registro: "MSK-1931-04",
    titulo: { ru: "Храм, который исчез", es: "El templo que desapareció" },
    contexto: [
      { ru: "5 декабря 1931 года храм Христа Спасителя взорвали. На его месте собирались построить Дворец Советов — небоскрёб, который так и не был закончен.", es: "El 5 de diciembre de 1931 la catedral de Cristo Salvador fue dinamitada. En su lugar se proyectó el Palacio de los Sóviets, un rascacielos que nunca se terminó." },
      { ru: "Позже на этом месте появился открытый бассейн «Москва». Храм воссоздали в 1995–2000 годах. То, что мы видим сегодня, — реконструкция; снимки до 1931 года — документ исходного здания.", es: "Años después, el solar acogió la piscina al aire libre Moskva. La catedral se reconstruyó entre 1995 y 2000. Lo que hoy se ve es una reconstrucción; las fotografías anteriores a 1931 son el registro del edificio original." }
    ],
    fragmento: null,
    enlace: { texto: { ru: "Дворец Советов (Википедия)", es: "Palacio de los Sóviets (Wikipedia)" }, url: { ru: "https://ru.wikipedia.org/wiki/Дворец_Советов", es: "https://es.wikipedia.org/wiki/Palacio_de_los_S%C3%B3viets" } }
  },
  {
    id: "h1935", anio: "1935", img: "metro-constructores-1935", registro: "MSK-1935-10",
    titulo: { ru: "Город под городом", es: "Una ciudad bajo la ciudad" },
    contexto: [
      { ru: "15 мая 1935 года открылась первая линия Московского метрополитена. Его станции задумывались как подземные дворцы.", es: "El 15 de mayo de 1935 se inauguró la primera línea del metro de Moscú. Sus estaciones se concibieron como palacios subterráneos." },
      { ru: "За этим парадным образом стояли тысячи рабочих. Альбом Рейксмузеума сохранил их групповой портрет, хотя имён в карточке нет.", es: "Detrás de esa imagen oficial hubo miles de trabajadores. El álbum del Rijksmuseum conserva un retrato de grupo de los constructores, aunque sus nombres no figuran en la ficha." }
    ],
    fragmento: { tipo: { ru: "Архивный документ", es: "Documento de archivo" }, img: "metro-bovard-1935", texto: { ru: "«Отзыв главного редактора американской газеты St. Louis Post-Dispatch Боварда о московском метрополитене. Перевод с английского языка. 1935 год». Главархив Москвы.", es: "Traducción al ruso de la opinión de Bovard, redactor jefe del St. Louis Post-Dispatch, sobre el metro de Moscú (1935). Archivo Principal de Moscú." } },
    enlace: { texto: { ru: "Московский метрополитен (Википедия)", es: "Metro de Moscú (Wikipedia)" }, url: { ru: "https://ru.wikipedia.org/wiki/Московский_метрополитен", es: "https://es.wikipedia.org/wiki/Metro_de_Mosc%C3%BA" } }
  },
  {
    id: "h1937", anio: "1937", img: "yezhov-original-1937", registro: "MSK-1937-29",
    titulo: { ru: "Человек, которого стёрли", es: "El hombre que fue borrado" },
    contexto: [
      { ru: "Николай Ежов возглавлял НКВД в 1936–1938 годах. После падения его арестовали и в 1940 году расстреляли, а его фигура начала исчезать с фотографий.", es: "Nikolái Yezhov dirigió la policía política soviética entre 1936 y 1938. Tras su caída fue detenido y ejecutado en 1940, y su figura empezó a desaparecer de las fotografías." },
      { ru: "Снимок рядом со Сталиным стал знаменитым, потому что сохранились обе версии. Это доказательство того, что подделка визуального прошлого началась задолго до ИИ.", es: "La imagen junto a Stalin se volvió famosa porque existen las dos versiones. Es una prueba de que manipular el pasado visual no empezó con la IA." }
    ],
    fragmento: null,
    enlace: { texto: { ru: "Censorship of images in the Soviet Union (Википедия, на английском)", es: "Censorship of images in the Soviet Union (Wikipedia, en inglés)" }, url: "https://en.wikipedia.org/wiki/Censorship_of_images_in_the_Soviet_Union" }
  },
  {
    id: "h1941", anio: "1941", img: "desfile-1941", registro: "MSK-1941-22",
    titulo: { ru: "С парада — на фронт", es: "Del desfile al frente" },
    contexto: [
      { ru: "В ноябре 1941 года немецкая армия стояла у ворот Москвы. И всё же 7 ноября на Красной площади прошёл ежегодный парад.", es: "En noviembre de 1941 el ejército alemán estaba a las puertas de Moscú. Aun así, el 7 de noviembre se celebró el desfile anual en la Plaza Roja." },
      { ru: "Многие части прямо с парада ушли на фронт. Той зимой над памятниками, как над памятником Пушкину, висели аэростаты заграждения.", es: "Muchas de las tropas que desfilaron se dirigieron directamente al frente. Ese invierno, globos de barrera flotaban sobre monumentos como el de Pushkin." }
    ],
    fragmento: { tipo: { ru: "Оригинальная подпись архива (перевод)", es: "Pie de foto original del archivo (traducido)" }, img: null, texto: { ru: "«Советские войска направляются прямо на фронт после парада на Красной площади в Москве 7 ноября 1941 года». Архив РИА Новости, № 669663.", es: "«Tropas soviéticas que se dirigen directamente al frente tras el desfile celebrado en la Plaza Roja de Moscú el 7 de noviembre de 1941». Archivo de RIA Novosti, n.º 669663." } },
    enlace: { texto: { ru: "Битва за Москву (Википедия)", es: "Batalla de Moscú (Wikipedia)" }, url: { ru: "https://ru.wikipedia.org/wiki/Битва_за_Москву", es: "https://es.wikipedia.org/wiki/Batalla_de_Mosc%C3%BA" } }
  },
  {
    id: "h1961", anio: "1961", img: "gagarin-1961", registro: "MSK-1961-26",
    titulo: { ru: "Возвращение Гагарина", es: "El regreso de Gagarin" },
    contexto: [
      { ru: "12 апреля 1961 года Юрий Гагарин стал первым человеком в космосе. Через два дня его встречали на Красной площади.", es: "El 12 de abril de 1961 Yuri Gagarin se convirtió en la primera persona en viajar al espacio. Dos días después fue recibido en la Plaza Roja." },
      { ru: "Снимки того дня в Главархиве Москвы указывают автора, дату и место.", es: "Las fotografías de ese día, conservadas por el Archivo Principal de Moscú, identifican autor, fecha y lugar." }
    ],
    fragmento: null,
    enlace: { texto: { ru: "Юрий Гагарин (Википедия)", es: "Yuri Gagarin (Wikipedia)" }, url: { ru: "https://ru.wikipedia.org/wiki/Гагарин,_Юрий_Алексеевич", es: "https://es.wikipedia.org/wiki/Yuri_Gagarin" } }
  },
  {
    id: "h2050", anio: "2050", especulativa: true, img: "vista-general-1890", registro: null,
    titulo: { ru: "Последняя копия", es: "La última copia" },
    contexto: [
      { ru: "Москва, 2050. Город поднялся вверх: на верхних уровнях — подвесные парки и аэротакси, внизу — подвижные тротуары. Виртуальный глобус истории показывает то, что о прошлом рассказали те, у кого есть доступ к нему.", es: "Moscú, 2050. La ciudad creció hacia arriba: en los niveles altos hay parques suspendidos y taxis-dron; abajo, andenes móviles. El globo virtual de la historia muestra lo que contaron sobre el pasado quienes tienen acceso a él." },
      { ru: "Библиотекарь нижнего уровня получает коробку с негативами своей бабушки. Её улицы, вывески и соседи не совпадают с версиями глобуса. Она оцифровывает их, описывает происхождение и сдаёт в гражданский архив, прежде чем показать хоть один снимок.", es: "Una bibliotecaria del nivel inferior recibe una caja con los negativos de su abuela. Sus calles, letreros y vecinos no coinciden con las versiones del globo. Los digitaliza, describe de dónde vienen y los deposita en un archivo ciudadano antes de compartir una sola imagen." }
    ],
    fragmento: { tipo: { ru: "Спекулятивный сюжет · вымышленный персонаж", es: "Narrativa especulativa · personaje ficticio" }, img: null, texto: { ru: "«Я не прошу верить мне. Я хочу, чтобы это можно было проверить». Свидетельство придумано для сценария 2050 года и не принадлежит реальному человеку.", es: "«No quiero que me crean a mí. Quiero que puedan comprobarlo». Testimonio imaginado para el escenario de 2050; no corresponde a ninguna persona real." } },
    enlace: null
  }
]);

export const PIEZAS = localizar([
  { id: "p1", img: "restauracion-1954", registro: "MSK-1954-27", estilo: "a",
    frase: { ru: "Историю не генерируют. Её хранят.", es: "La historia no se genera. Se conserva." },
    dato: { ru: "ДОКУМЕНТ // ИЮНЬ 1954", es: "REGISTRO // JUNIO 1954" } },
  { id: "p2", img: "yezhov-retocada", registro: "MSK-1937-29", estilo: "b",
    frase: { ru: "Прежде чем поделиться, проверь.", es: "Antes de compartir, verifica." },
    dato: { ru: "ОТРЕТУШИРОВАННЫЙ СНИМОК // 1937", es: "FOTO RETOCADA // 1937" } },
  { id: "p3", img: "palacio-soviets-3d", registro: "REC-2021-31", estilo: "c",
    frase: { ru: "Не всё, что выглядит старым, подлинно.", es: "No todo lo que parece antiguo es auténtico." },
    dato: { ru: "3D-РЕКОНСТРУКЦИЯ // 2021", es: "RECONSTRUCCIÓN 3D // 2021" } },
  { id: "p4", img: "revista-ejercito-lcc", registro: "MSK-19XX-28", estilo: "a",
    frase: { ru: "Памяти нужны источники, а не догадки.", es: "La memoria necesita fuentes, no suposiciones." },
    dato: { ru: "ДОКУМЕНТ // ДАТА ПОД СОМНЕНИЕМ", es: "REGISTRO // FECHA EN CONFLICTO" } },
  { id: "p5", img: "vista-general-1890", registro: "MSK-1890-02", estilo: "d",
    frase: { ru: "Москва 2050: кто управляет тем, что мы помним?", es: "Moscú 2050: ¿quién controla lo que recordamos?" },
    dato: { ru: "ФОТОХРОМ // ОК. 1890–1900", es: "FOTOCROMO // C. 1890–1900" } }
]);
