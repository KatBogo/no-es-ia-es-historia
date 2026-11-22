/**
 * Contenido editorial (ruso / español): riesgos, ejercicio, comparaciones,
 * historias, recorrido de la memoria y piezas de campaña.
 * Las imágenes se referencian por el campo "img" de registros.js.
 */
import { localizar } from "../i18n.js?v=20261122c";

export const RIESGOS = localizar([
  {
    id: "manipulacion", icono: "scissors",
    titulo: { ru: "Подделка исторических фотографий", es: "Manipulación de fotografías históricas" },
    texto: { ru: "Человека можно стереть со снимка.", es: "Una persona puede desaparecer de una foto." },
    ejemplo: { ru: "В 1930-е годы Николая Ежова убрали со снимка рядом со Сталиным; ретушь ходила как оригинал.", es: "En los años treinta, Nikolái Yezhov fue borrado de una foto junto a Stalin; el retoque circuló como original." },
    registro: "MSK-1937-29"
  },
  {
    id: "procedencia", icono: "chain",
    titulo: { ru: "Потеря происхождения", es: "Pérdida de procedencia" },
    texto: { ru: "Копия теряет автора, дату и архив.", es: "Una copia pierde su autor, su fecha y su archivo." },
    ejemplo: { ru: "Тот же снимок с Ежовым хранится на Викискладе с названием, относящим его к каналу, открытому через 12 лет после смерти Ежова.", es: "La misma foto de Yezhov está en Commons con un título que la sitúa en un canal inaugurado doce años después de su muerte." },
    registro: "MSK-1937-29"
  },
  {
    id: "desinformacion", icono: "eye",
    titulo: { ru: "Ложная подпись", es: "Un pie de foto falso" },
    texto: { ru: "Подлинный снимок с ложной датой тоже искажает прошлое.", es: "Una imagen auténtica con una fecha falsa también distorsiona el pasado." },
    ejemplo: { ru: "Негатив «смотр Красной армии» в каталоге датирован 1900 годом, хотя армия создана в 1918-м.", es: "Un negativo de una «revista del Ejército Rojo» aparece fechado en 1900, aunque ese ejército se creó en 1918." },
    registro: "MSK-19XX-28"
  },
  {
    id: "memoria", icono: "fragment",
    titulo: { ru: "Память без оригинала", es: "Memoria sin original" },
    texto: { ru: "Когда остаётся только реконструкция, оригинал можно забыть.", es: "Cuando solo queda la reconstrucción, el original puede olvidarse." },
    ejemplo: { ru: "Храм Христа Спасителя взорвали в 1931 году и воссоздали в 1995–2000 годах. Снимки до 1931 года — единственный образ исходного здания.", es: "La catedral de Cristo Salvador fue demolida en 1931 y reconstruida entre 1995 y 2000. Las fotos anteriores a 1931 son la única imagen del edificio original." },
    registro: "MSK-1890-03"
  }
]);

/** Ejercicio «¿Real o generado?». clase: "registro" o "alterada"; "parcial": respuesta con parte de razón. */
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
    id: "retoque", original: "yezhov-original-1937", intervenida: "yezhov-retocada", filtro: null, capa: false, registro: "MSK-1937-29", tipoIntervencion: "historica",
    titulo: { ru: "Подлинный снимок и историческая подделка", es: "Fotografía auténtica y manipulación histórica" },
    origenOriginal: { ru: "Версия без ретуши, апрель 1937 (по данным Викисклада). Копия из World War II Database; учреждение не известно.", es: "Versión sin retoque, abril de 1937 (según Commons). Copia de World War II Database; sin institución identificada." },
    origenIntervenida: { ru: "Историческая ретушь, сделанная после падения Ежова (1938–1940). Вмешательство той эпохи.", es: "Retoque histórico hecho tras la caída de Yezhov (1938–1940). Intervención de la época." },
    lecturaOriginal: { ru: "Ежов, глава НКВД, идёт рядом со Сталиным: он часть власти.", es: "Yezhov, jefe de la policía política, camina junto a Stalin: forma parte del poder." },
    lecturaIntervenida: { ru: "Ежова будто никогда не было: исчезает и его роль в репрессиях.", es: "Yezhov parece no haber existido nunca: desaparece también su papel en la represión." },
    pregunta: { ru: "Если бы вы видели только изменённый снимок, поняли бы вы событие так же?", es: "Si solo hubieras visto la imagen modificada, ¿habrías comprendido el acontecimiento de la misma manera?" }
  },
  {
    id: "restauracion", original: "metro-komsomolskaya-1935", intervenida: "metro-komsomolskaya-1935", filtro: "grayscale(1) contrast(1.45) brightness(1.08)", capa: false, registro: "MSK-1935-08", tipoIntervencion: "demostrativa",
    titulo: { ru: "Исходный снимок и «отреставрированная» версия", es: "Fotografía original y versión «restaurada»" },
    origenOriginal: { ru: "Рейксмузеум, RP-F-F00935-F (CC0), 1930–1935.", es: "Rijksmuseum, RP-F-F00935-F (CC0), 1930–1935." },
    origenIntervenida: { ru: "Демонстрация архива: убрана сепия, усилен контраст. Ничего не добавлено и не удалено.", es: "Demostración del archivo: se quitó el sepia y se subió el contraste. No se añadió ni borró nada." },
    lecturaOriginal: { ru: "Тёплый тон и мягкие тени — так снимок выглядел в альбоме 1930-х.", es: "Tono cálido y sombras suaves: así se veía la foto en el álbum de los años treinta." },
    lecturaIntervenida: { ru: "Резкий контраст делает станцию холоднее и «современнее» — меняется ощущение эпохи.", es: "El contraste duro vuelve la estación más fría y «moderna»: cambia la sensación de época." },
    pregunta: { ru: "Если бы вы видели только «улучшенную» версию, узнали бы вы, как снимок выглядел в 1935 году?", es: "Si solo hubieras visto la versión «mejorada», ¿sabrías cómo se veía la foto en 1935?" }
  },
  {
    id: "especulativa", original: "gorki-1950s", intervenida: "gorki-1950s", filtro: "grayscale(1) contrast(1.2) brightness(0.75)", capa: true, registro: "MSK-1955-15", tipoIntervencion: "demostrativa",
    titulo: { ru: "Историческое фото и слой реконструкции", es: "Fotografía histórica y capa de reconstrucción" },
    origenOriginal: { ru: "М. Трахман, улица Горького, 1950–1960-е. Главархив Москвы (CC BY 4.0).", es: "M. Trajman, calle Gorki, décadas de 1950–1960. Archivo Principal de Moscú (CC BY 4.0)." },
    origenIntervenida: { ru: "Демонстрация архива: поверх снимка наложен слой распознавания, как у глобуса истории.", es: "Demostración del archivo: sobre la foto se superpone una capa de reconocimiento como las del globo de la historia." },
    lecturaOriginal: { ru: "Обычный день на главной улице города в середине XX века.", es: "Un día cualquiera en la avenida principal de la ciudad a mediados del siglo XX." },
    lecturaIntervenida: { ru: "Та же улица выглядит как место наблюдения и распознавания — смысл снимка меняется.", es: "La misma calle parece un lugar de vigilancia y reconocimiento: cambia el sentido de la imagen." },
    pregunta: { ru: "Если бы вы видели только версию со слоем, поверили бы вы, что улица была такой?", es: "Si solo hubieras visto la versión con la capa, ¿habrías creído que la calle era así?" }
  }
]);

/** Historias. "fragmento" solo cuando existe un documento o un pie de foto de archivo. */
export const HISTORIAS = localizar([
  {
    id: "h1935", anio: "1935", img: "metro-constructores-1935", registro: "MSK-1935-10",
    titulo: { ru: "Город под городом", es: "Una ciudad bajo la ciudad" },
    contexto: [
      { ru: "15 мая 1935 года открылась первая линия Московского метрополитена. Его станции задумывались как подземные дворцы.", es: "El 15 de mayo de 1935 se inauguró la primera línea del metro de Moscú. Sus estaciones se concibieron como palacios subterráneos." },
      { ru: "За парадным образом стояли тысячи рабочих. Альбом Рейксмузеума сохранил их групповой портрет, но не их имена.", es: "Detrás de esa imagen oficial hubo miles de trabajadores. El álbum del Rijksmuseum conserva su retrato de grupo, pero no sus nombres." }
    ],
    fragmento: { tipo: { ru: "Архивный документ", es: "Documento de archivo" }, img: "metro-bovard-1935", texto: { ru: "«Отзыв главного редактора американской газеты St. Louis Post-Dispatch Боварда о московском метрополитене. Перевод с английского языка. 1935 год». Главархив Москвы.", es: "Traducción al ruso de la opinión de Bovard, redactor jefe del St. Louis Post-Dispatch, sobre el metro de Moscú (1935). Archivo Principal de Moscú." } },
    enlace: { texto: { ru: "Московский метрополитен (Википедия)", es: "Metro de Moscú (Wikipedia)" }, url: { ru: "https://ru.wikipedia.org/wiki/Московский_метрополитен", es: "https://es.wikipedia.org/wiki/Metro_de_Mosc%C3%BA" } }
  },
  {
    id: "h1941", anio: "1941", img: "desfile-1941", registro: "MSK-1941-22",
    titulo: { ru: "С парада — на фронт", es: "Del desfile al frente" },
    contexto: [
      { ru: "В ноябре 1941 года немецкая армия стояла у ворот Москвы. И всё же 7 ноября на Красной площади прошёл ежегодный парад.", es: "En noviembre de 1941 el ejército alemán estaba a las puertas de Moscú. Aun así, el 7 de noviembre se celebró el desfile anual en la Plaza Roja." },
      { ru: "Многие части прямо с парада ушли на фронт.", es: "Muchas de las tropas que desfilaron se dirigieron directamente al frente." }
    ],
    fragmento: { tipo: { ru: "Оригинальная подпись архива (перевод)", es: "Pie de foto original del archivo (traducido)" }, img: null, texto: { ru: "«Советские войска направляются прямо на фронт после парада на Красной площади в Москве 7 ноября 1941 года». Архив РИА Новости, № 669663.", es: "«Tropas soviéticas que se dirigen directamente al frente tras el desfile celebrado en la Plaza Roja de Moscú el 7 de noviembre de 1941». Archivo de RIA Novosti, n.º 669663." } },
    enlace: { texto: { ru: "Битва за Москву (Википедия)", es: "Batalla de Moscú (Wikipedia)" }, url: { ru: "https://ru.wikipedia.org/wiki/Битва_за_Москву", es: "https://es.wikipedia.org/wiki/Batalla_de_Mosc%C3%BA" } }
  },
  {
    id: "h1961", anio: "1961", img: "gagarin-1961", registro: "MSK-1961-26",
    titulo: { ru: "Возвращение Гагарина", es: "El regreso de Gagarin" },
    contexto: [
      { ru: "12 апреля 1961 года Юрий Гагарин стал первым человеком в космосе. Через два дня его встречали на Красной площади.", es: "El 12 de abril de 1961 Yuri Gagarin se convirtió en la primera persona en viajar al espacio. Dos días después fue recibido en la Plaza Roja." }
    ],
    fragmento: null,
    enlace: { texto: { ru: "Юрий Гагарин (Википедия)", es: "Yuri Gagarin (Wikipedia)" }, url: { ru: "https://ru.wikipedia.org/wiki/Гагарин,_Юрий_Алексеевич", es: "https://es.wikipedia.org/wiki/Yuri_Gagarin" } }
  }
]);

/** El recorrido de la memoria: del post en redes al registro compartido con su contexto. */
export const RECORRIDO = localizar([
  { num: "01", destino: "#carrusel",
    etapa: { ru: "Обнаружить", es: "Descubrir" },
    texto: { ru: "Человек видит пост «Это не ИИ. Это история.» в соцсетях.", es: "Una persona encuentra un post de «No es IA. Es historia.» en redes sociales." },
    accion: { ru: "Посмотреть посты", es: "Ver los posts" } },
  { num: "02", destino: "#problema",
    etapa: { ru: "Усомниться", es: "Cuestionar" },
    texto: { ru: "Пост заставляет задуматься о подделке визуального прошлого.", es: "El mensaje genera una reflexión sobre la manipulación visual del pasado." },
    accion: { ru: "Риски", es: "Ver los riesgos" } },
  { num: "03", destino: "#archivo",
    etapa: { ru: "Исследовать", es: "Explorar" },
    texto: { ru: "Человек заходит в веб-архив, чтобы увидеть исторические записи.", es: "La persona ingresa al archivo web para conocer registros históricos." },
    accion: { ru: "Открыть архив", es: "Abrir el archivo" } },
  { num: "04", destino: "#como-verificamos",
    etapa: { ru: "Понять", es: "Comprender" },
    texto: { ru: "Смотрит проверенные фотографии и документы вместе с их источниками.", es: "Consulta fotografías y documentos verificados con sus fuentes originales." },
    accion: { ru: "Как проверяем", es: "Cómo verificamos" } },
  { num: "05", destino: "#compartir",
    etapa: { ru: "Поделиться", es: "Compartir" },
    texto: { ru: "Делится записью вместе с контекстом и происхождением.", es: "Difunde el registro acompañado de su contexto y procedencia." },
    accion: { ru: "Поделиться", es: "Compartir" } }
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
