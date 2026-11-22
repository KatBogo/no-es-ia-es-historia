/**
 * Contenido editorial (ruso / español): escenario, riesgos, ejercicio,
 * comparaciones, historias, recorrido de la memoria y piezas de campaña.
 * Las imágenes se referencian por el campo "img" de registros.js.
 * Todo lo que pertenece al escenario de 2050 está marcado como especulativo.
 * El escenario se basa en la investigación del equipo sobre las 16 predicciones
 * para Moscú 2050 de la plataforma Earth 2050 (Kaspersky).
 */
import { localizar } from "../i18n.js";

/** Predicciones de Earth 2050 usadas en el escenario (selección). "original": título en la plataforma. */
export const ESCENARIO = localizar([
  {
    prediccion: { ru: "Москва 2050", es: "Moscú 2050" }, original: "Moscow 2050", autor: "Earthman / Vodogreev",
    texto: { ru: "Город растёт вверх и делится на уровни — и по доступу.", es: "La ciudad crece en vertical y se divide por niveles… y por acceso." }
  },
  {
    prediccion: { ru: "Мир в 2050 году", es: "El mundo en 2050" }, original: "The world in 2050", autor: "Earthman",
    texto: { ru: "Растёт неравенство: историю наполняют те, у кого есть доступ к технологиям.", es: "Crece la desigualdad: alimentan la historia quienes tienen acceso a la tecnología." }
  },
  {
    prediccion: { ru: "Нейроморфный чиновник", es: "Funcionario neuromórfico" }, original: "Neuromorphic official", autor: "Andrey Lavrentyev",
    texto: { ru: "Решения принимает «чёрный ящик», логику которого никто не понимает.", es: "Las decisiones públicas salen de una «caja negra» que nadie entiende." }
  },
  {
    prediccion: { ru: "Умные машины сделают человечество глупее", es: "Las máquinas inteligentes nos harán más tontos" }, original: "Smart machines will make humankind more stupid", autor: "Oleg Gorobets",
    texto: { ru: "Жизнь держится на системах, которые мы не контролируем.", es: "La vida diaria cuelga de sistemas que no controlamos." }
  }
]);

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

/**
 * Ejercicio de alfabetización visual crítica.
 * clase: "registro" o "alterada"; "parcial": respuesta con parte de razón.
 * tipo · procedencia · evidencias · riesgo se muestran tras cada respuesta.
 */
export const QUIZ = localizar([
  {
    registro: "MSK-1941-22", clase: "registro",
    tipo: { ru: "Исторический документ · фотография 1941 года", es: "Registro histórico · fotografía de 1941" },
    procedencia: { ru: "Снимок Анатолия Гаранина, сделанный 7 ноября 1941 года, хранится в архиве РИА Новости.", es: "Fotografía de Anatoli Garanin tomada el 7 de noviembre de 1941 y conservada en el archivo de RIA Novosti." },
    evidencias: [{ ru: "Номер в архиве: 669663.", es: "Número de archivo: 669663." }, { ru: "Известны автор и дата.", es: "Autor y fecha identificados." }, { ru: "Событие задокументировано независимыми источниками.", es: "El acontecimiento está documentado en fuentes independientes." }],
    riesgo: { ru: "Зерно и чёрно-белое изображение можно сымитировать. Если такие признаки принимать за доказательство, сгенерированная «хроника» пройдёт так же легко.", es: "El grano y el blanco y negro se pueden imitar. Si se aceptan como prueba, una «crónica» generada pasaría igual de fácil." }
  },
  {
    registro: "REC-2021-31", clase: "alterada",
    tipo: { ru: "Цифровая реконструкция · 3D-модель 2021 года", es: "Reconstrucción digital · modelo 3D de 2021" },
    procedencia: { ru: "Модель Дворца Советов — здания, которое так и не построили. Её сделал в 2021 году участник Викисклада по нескольким проектам.", es: "Modelo del Palacio de los Sóviets, un edificio que nunca se construyó. Lo hizo en 2021 un usuario de Wikimedia Commons a partir de varios planos." },
    evidencias: [{ ru: "Автор сам называет её 3D-моделью в Blender.", es: "Su autor la declara como modelo 3D hecho en Blender." }, { ru: "Здание не существовало: стройку остановили.", es: "El edificio nunca existió: la obra se detuvo." }],
    riesgo: { ru: "Без подписи она выглядит как архивное фото. Так реконструкция может стать «воспоминанием» о том, чего не было.", es: "Sin su ficha parece una foto de archivo. Así una reconstrucción puede convertirse en «recuerdo» de algo que no existió." }
  },
  {
    registro: "MSK-1961-26", clase: "registro",
    tipo: { ru: "Исторический документ · фотография 1961 года", es: "Registro histórico · fotografía de 1961" },
    procedencia: { ru: "Снимок Ю. Д. Королёва: встреча Гагарина на Красной площади 14 апреля 1961 года. Хранится в Главархиве Москвы.", es: "Fotografía de Yu. D. Koroliov del recibimiento a Gagarin en la Plaza Roja el 14 de abril de 1961. La conserva el Archivo Principal de Moscú." },
    evidencias: [{ ru: "Подпись архива с автором и датой.", es: "Pie de foto del archivo con autor y fecha." }, { ru: "Дата согласуется с полётом 12 апреля.", es: "La fecha es coherente con el vuelo del 12 de abril." }],
    riesgo: { ru: "Знаменитые сцены легко «воссоздать». Именно поэтому их подлинники нужно хранить вместе с карточкой.", es: "Las escenas icónicas son fáciles de «recrear». Por eso sus originales deben conservarse junto a su ficha." }
  },
  {
    registro: "REC-1921-30", clase: "alterada",
    tipo: { ru: "Художественная реконструкция · акварель 1921 года", es: "Reconstrucción artística · acuarela de 1921" },
    procedencia: { ru: "Аполлинарий Васнецов изобразил Кремль XIV века, опираясь на исторические исследования. Хранится в Музее Москвы.", es: "Apollinari Vasnetsov imaginó el Kremlin del siglo XIV a partir de estudios históricos. La conserva el Museo de Moscú." },
    evidencias: [{ ru: "Это акварель, а не фотография.", es: "Es una acuarela, no una fotografía." }, { ru: "Между созданием и изображённой эпохой — шесть веков.", es: "Entre su creación y la época representada hay seis siglos." }],
    riesgo: { ru: "Старое изображение не равно свидетельству. Реконструкция 1921 года — это интерпретация, как и реконструкция ИИ в 2050-м.", es: "Que una imagen sea antigua no la vuelve testimonio. Una reconstrucción de 1921 es una interpretación, igual que una reconstrucción hecha con IA en 2050." }
  },
  {
    registro: "MSK-1890-05", clase: "alterada", parcial: "registro",
    tipo: { ru: "Исторический документ с добавленным цветом · фотохром", es: "Registro histórico con color añadido · fotocromo" },
    procedencia: { ru: "Фотохром из Библиотеки Конгресса: в основе — настоящий чёрно-белый негатив, цвет добавлен при печати.", es: "Fotocromo de la Biblioteca del Congreso: parte de un negativo real en blanco y negro, y el color se añadió al imprimir." },
    evidencias: [{ ru: "Каталог LCCN 2017660946 описывает технику.", es: "El catálogo LCCN 2017660946 describe la técnica." }, { ru: "В 1890-х цветной фотографии в таком виде не было.", es: "En la década de 1890 no existía la fotografía a color de este tipo." }],
    riesgo: { ru: "Документ может быть подлинным и изменённым одновременно. Если вы ответили «исторический документ», вы отчасти правы — важно знать, что именно изменено.", es: "Un documento puede ser auténtico e intervenido a la vez. Si respondiste «registro histórico», tienes parte de razón: lo importante es saber qué se modificó." }
  },
  {
    registro: "MSK-19XX-28", clase: "registro",
    tipo: { ru: "Подлинный снимок с ложной датой · стеклянный негатив", es: "Imagen auténtica con fecha falsa · negativo de vidrio" },
    procedencia: { ru: "Негатив агентства Bain News Service из Библиотеки Конгресса. Каталог датирует его 1900 годом.", es: "Negativo de la agencia Bain News Service, en la Biblioteca del Congreso. El catálogo lo fecha en 1900." },
    evidencias: [{ ru: "Красная армия создана в 1918 году — дата 1900 невозможна.", es: "El Ejército Rojo se creó en 1918: la fecha de 1900 es imposible." }, { ru: "Поэтому снимок не входит в проверенный архив.", es: "Por eso la imagen no forma parte del archivo verificado." }],
    riesgo: { ru: "Подделкой может быть не изображение, а его данные. Глазами это не увидеть — нужен контекст.", es: "Lo falso puede no ser la imagen, sino sus datos. Eso no se ve a simple vista: hace falta contexto." }
  }
]);

/** Pares para el comparador «Antes y después». Las versiones deben compartir encuadre. */
export const COMPARACIONES = localizar([
  {
    id: "retoque", original: "yezhov-original-1937", intervenida: "yezhov-retocada", filtro: null, capa: false, registro: "MSK-1937-29", tipoIntervencion: "historica",
    titulo: { ru: "Подлинный снимок и историческая подделка", es: "Fotografía auténtica y manipulación histórica" },
    origenOriginal: { ru: "Версия без ретуши, апрель 1937 (по данным Викисклада). Копия из World War II Database; учреждение не известно — поэтому это кейс, а не запись архива.", es: "Versión sin retoque, abril de 1937 (según Commons). Copia de World War II Database; sin institución identificada: por eso es caso de estudio y no registro del archivo." },
    origenIntervenida: { ru: "Историческая ретушь, сделанная после падения Ежова (1938–1940). Вмешательство той эпохи, не этого проекта.", es: "Retoque histórico hecho tras la caída de Yezhov (1938–1940). Intervención de la época, no de este proyecto." },
    lecturaOriginal: { ru: "Ежов, глава НКВД, идёт рядом со Сталиным: он часть власти.", es: "Yezhov, jefe de la policía política, camina junto a Stalin: forma parte del poder." },
    lecturaIntervenida: { ru: "Ежова будто никогда не было: исчезает и его роль в репрессиях.", es: "Yezhov parece no haber existido nunca: desaparece también su papel en la represión." },
    pregunta: { ru: "Если бы вы видели только изменённый снимок, поняли бы вы событие так же?", es: "Si solo hubieras visto la imagen modificada, ¿habrías comprendido el acontecimiento de la misma manera?" }
  },
  {
    id: "restauracion", original: "metro-komsomolskaya-1935", intervenida: "metro-komsomolskaya-1935", filtro: "grayscale(1) contrast(1.45) brightness(1.08)", capa: false, registro: "MSK-1935-08", tipoIntervencion: "demostrativa",
    titulo: { ru: "Исходный снимок и «отреставрированная» версия", es: "Fotografía original y versión «restaurada»" },
    origenOriginal: { ru: "Рейксмузеум, RP-F-F00935-F (CC0), 1930–1935. Запись проверенного архива.", es: "Rijksmuseum, RP-F-F00935-F (CC0), 1930–1935. Registro del archivo verificado." },
    origenIntervenida: { ru: "Демонстрационное вмешательство этого прототипа: убрана сепия, усилен контраст. Ничего не добавлено и не удалено.", es: "Intervención demostrativa de este prototipo: se quitó el sepia y se subió el contraste. No se añadió ni borró nada." },
    lecturaOriginal: { ru: "Тёплый тон и мягкие тени — так снимок выглядел в альбоме 1930-х.", es: "Tono cálido y sombras suaves: así se veía la foto en el álbum de los años treinta." },
    lecturaIntervenida: { ru: "Резкий контраст делает станцию холоднее и «современнее» — меняется ощущение эпохи.", es: "El contraste duro vuelve la estación más fría y «moderna»: cambia la sensación de época." },
    pregunta: { ru: "Если бы вы видели только «улучшенную» версию, узнали бы вы, как снимок выглядел в 1935 году?", es: "Si solo hubieras visto la versión «mejorada», ¿sabrías cómo se veía la foto en 1935?" }
  },
  {
    id: "especulativa", original: "gorki-1950s", intervenida: "gorki-1950s", filtro: "grayscale(1) contrast(1.2) brightness(0.75)", capa: true, registro: "MSK-1955-15", tipoIntervencion: "demostrativa",
    titulo: { ru: "Историческое фото и спекулятивная визуализация", es: "Fotografía histórica y visualización especulativa" },
    origenOriginal: { ru: "М. Трахман, улица Горького, 1950–1960-е. Главархив Москвы (CC BY 4.0). Запись проверенного архива.", es: "M. Trajman, calle Gorki, décadas de 1950–1960. Archivo Principal de Moscú (CC BY 4.0). Registro del archivo verificado." },
    origenIntervenida: { ru: "Демонстрационный графический слой этого проекта: воображаемая Москва 2050 года.", es: "Capa gráfica demostrativa de este proyecto: una Moscú 2050 imaginada." },
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
  },
  {
    id: "h2050", anio: "2050", especulativa: true, img: "vista-general-1890", registro: null,
    titulo: { ru: "Последняя копия", es: "La última copia" },
    contexto: [
      { ru: "Москва, 2050. На верхних уровнях — подвесные парки и аэротакси, внизу — подвижные тротуары. Глобус истории показывает то, что рассказали те, у кого есть доступ.", es: "Moscú, 2050. Arriba, parques suspendidos y taxis-dron; abajo, andenes móviles. El globo de la historia muestra lo que contaron quienes tienen acceso." },
      { ru: "Библиотекарь нижнего уровня находит негативы своей бабушки, которые не совпадают с версиями глобуса, и сдаёт их в гражданский архив с описанием происхождения.", es: "Una bibliotecaria del nivel inferior encuentra los negativos de su abuela, que no coinciden con las versiones del globo, y los entrega a un archivo ciudadano con su procedencia." }
    ],
    fragmento: { tipo: { ru: "Спекулятивный сюжет · вымышленный персонаж", es: "Narrativa especulativa · personaje ficticio" }, img: null, texto: { ru: "Сюжет придуман для сценария 2050 года и не описывает реальных людей или событий.", es: "Relato imaginado para el escenario de 2050; no describe personas ni hechos reales." } },
    enlace: null
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
