/**
 * Contenido editorial: riesgos, ejercicio «¿Real o generado?», historias,
 * pares del comparador y piezas de campaña.
 * Las imágenes se referencian por el campo "img" de registros.js.
 * Todo lo que pertenece al escenario de 2050 está marcado como especulativo.
 */

export const RIESGOS = [
  {
    id: "manipulacion",
    icono: "scissors",
    titulo: "Manipulación de fotografías históricas",
    texto: "Una imagen auténtica puede recortarse, retocarse o borrar a una persona sin que se note.",
    ejemplo: "Ejemplo real: en la década de 1930, Nikolái Yezhov fue eliminado de una fotografía en la que caminaba junto a Stalin. La versión retocada circuló como si fuera la original.",
    registro: "MSK-1937-29"
  },
  {
    id: "ficticios",
    icono: "spark",
    titulo: "Acontecimientos ficticios creados con IA",
    texto: "Un sistema puede producir escenas verosímiles de hechos que nunca ocurrieron.",
    ejemplo: "Ejemplo hipotético del escenario 2050: aparece una «foto» de una multitud en la Plaza Roja durante un acto que no existió, con grano de película y fecha antigua. Nada en la imagen basta para demostrar que es falsa: hace falta buscar su origen.",
    registro: null
  },
  {
    id: "procedencia",
    icono: "chain",
    titulo: "Pérdida de procedencia digital",
    texto: "Cada vez que una imagen se copia, puede perder su autor, su fecha y el archivo que la conserva.",
    ejemplo: "Ejemplo real: la foto de Yezhov circula en Commons con un título que la sitúa en el canal Volga–Don, inaugurado en 1952. Yezhov murió en 1940. Un dato mal copiado puede viajar durante años.",
    registro: "MSK-1937-29"
  },
  {
    id: "desinformacion",
    icono: "eye",
    titulo: "Desinformación visual",
    texto: "Una fotografía real con un pie de foto falso también desinforma.",
    ejemplo: "Ejemplo real: un negativo de la Biblioteca del Congreso de EE. UU. titulado «revista del Ejército Rojo» aparece fechado en 1900, aunque el Ejército Rojo se creó en 1918. La imagen es auténtica; la fecha, no.",
    registro: "MSK-19XX-28"
  },
  {
    id: "memoria",
    icono: "fragment",
    titulo: "Debilitamiento de la memoria colectiva",
    texto: "Si solo quedan copias y recreaciones, se vuelve difícil saber qué ocurrió realmente.",
    ejemplo: "Ejemplo real: la catedral de Cristo Salvador fue demolida en 1931 y reconstruida entre 1995 y 2000. Las fotografías anteriores a 1931 son hoy el único testimonio visual del edificio original.",
    registro: "MSK-1890-03"
  }
];

/**
 * Ejercicio educativo. "clase" es la clasificación documentada:
 *  - "registro": registro histórico
 *  - "alterada": imagen generada, reconstruida o alterada
 * "parcial" indica una respuesta que tiene parte de razón.
 */
export const QUIZ = [
  {
    registro: "MSK-1941-22",
    clase: "registro",
    clasificacion: "Registro histórico",
    explicacion: "Fotografía de Anatoli Garanin del 7 de noviembre de 1941, conservada en el archivo de RIA Novosti con el número 669663.",
    pistas: "El grano, el desenfoque y el blanco y negro parecen pruebas de antigüedad, pero se pueden imitar. Lo que respalda esta imagen es su número de archivo, su autor y su fecha.",
    fuente: "Archivo de RIA Novosti n.º 669663 (vía Wikimedia Commons)"
  },
  {
    registro: "REC-2021-31",
    clase: "alterada",
    clasificacion: "Reconstrucción digital (2021)",
    explicacion: "Es un modelo 3D del Palacio de los Sóviets, un edificio que se proyectó en los años treinta y nunca se construyó. Lo creó en 2021 un usuario de Wikimedia Commons combinando varios planos.",
    pistas: "La arquitectura monumental y la composición recuerdan a imágenes de época. Sin una fuente, podría pasar por una fotografía de un edificio que existió.",
    fuente: "Wikimedia Commons, «Palace of the Soviets - Blender 3D» (CC BY-SA 4.0)"
  },
  {
    registro: "MSK-1961-26",
    clase: "registro",
    clasificacion: "Registro histórico",
    explicacion: "Fotografía de Yu. D. Koroliov del recibimiento a Yuri Gagarin en la Plaza Roja el 14 de abril de 1961. La conserva el Archivo Principal de Moscú.",
    pistas: "La escena es tan icónica que podría parecer una recreación. Lo que la sostiene es el archivo que la conserva y su ficha.",
    fuente: "Archivo Principal de Moscú (vía Wikimedia Commons, CC BY 4.0)"
  },
  {
    registro: "REC-1921-30",
    clase: "alterada",
    clasificacion: "Reconstrucción artística (1921)",
    explicacion: "Acuarela de Apollinari Vasnetsov que imagina el Kremlin del siglo XIV. Es una interpretación histórica, no un documento de la época.",
    pistas: "Que una imagen sea antigua no la convierte en testimonio directo. Esta obra tiene cien años, pero recrea una escena seiscientos años anterior.",
    fuente: "Museo de Moscú (vía Wikimedia Commons, dominio público)"
  },
  {
    registro: "MSK-1890-05",
    clase: "alterada",
    parcial: "registro",
    clasificacion: "Registro histórico con color añadido",
    explicacion: "Es un fotocromo: parte de un negativo real en blanco y negro, pero el color se añadió durante la impresión. Es un documento de época y, a la vez, una imagen intervenida.",
    pistas: "Los colores suaves y «naturales» hacen pensar en una foto en color. Si respondiste «registro histórico», tienes parte de razón.",
    fuente: "Library of Congress, LCCN 2017660946 (dominio público)"
  },
  {
    registro: "MSK-19XX-28",
    clase: "registro",
    clasificacion: "Registro histórico con fecha incoherente",
    explicacion: "Es un negativo de vidrio real de la agencia Bain News Service. Pero el catálogo lo fecha en 1900, y el Ejército Rojo no existió hasta 1918.",
    pistas: "La imagen es auténtica; su información no. Una foto verdadera con datos falsos también puede engañar.",
    fuente: "Library of Congress, LCCN 2014713395 (dominio público)"
  }
];

/** Pares para el comparador «Antes y después». Las versiones deben compartir encuadre. */
export const COMPARACIONES = [
  {
    id: "retoque",
    titulo: "Fotografía auténtica y manipulación histórica",
    original: "yezhov-original-1937",
    intervenida: "yezhov-retocada",
    filtro: null,
    capa: false,
    explicacion: "En la versión retocada desaparece Nikolái Yezhov, que estaba a la derecha de Stalin. Además, según la descripción de Commons, se aclararon los rostros y el fondo. La manipulación se hizo a mano, décadas antes de la IA.",
    importancia: "Si solo hubiera sobrevivido la versión retocada, nadie sabría que Yezhov estuvo allí. Conservar el original es lo que permite demostrar la manipulación.",
    fuente: "Ambas versiones: Wikimedia Commons, dominio público.",
    registro: "MSK-1937-29"
  },
  {
    id: "restauracion",
    titulo: "Fotografía original y versión «restaurada»",
    original: "metro-komsomolskaya-1935",
    intervenida: "metro-komsomolskaya-1935",
    filtro: "grayscale(1) contrast(1.45) brightness(1.08)",
    capa: false,
    explicacion: "Para este prototipo se eliminó el tono sepia y se aumentó el contraste con un filtro digital. No se añadió ni se borró ningún elemento.",
    importancia: "Una restauración puede parecer «más real», pero cambia la imagen. Toda intervención, incluso las mejoras, debe declararse.",
    fuente: "Original: Rijksmuseum, RP-F-F00935-F (CC0). Intervención: filtro aplicado en este prototipo.",
    registro: "MSK-1935-08"
  },
  {
    id: "especulativa",
    titulo: "Fotografía histórica y visualización especulativa",
    original: "gorki-1950s",
    intervenida: "gorki-1950s",
    filtro: "grayscale(1) contrast(1.2) brightness(0.75)",
    capa: true,
    explicacion: "Sobre la fotografía de la calle Gorki se añadió una capa gráfica que imagina Moscú en 2050. Es una ilustración creada para esta campaña.",
    importancia: "Basta una capa para cambiar el significado de una imagen auténtica. Por eso esta versión lleva una etiqueta que no se puede quitar.",
    fuente: "Original: M. Trajtman, Archivo Principal de Moscú (CC BY 4.0). Capa: visualización especulativa de este proyecto.",
    registro: "MSK-1955-15"
  }
];

/** Historias. "fragmento" solo se incluye cuando existe un documento o pie de foto de archivo. */
export const HISTORIAS = [
  {
    id: "h1867",
    anio: "1867",
    titulo: "La ciudad vista desde lo alto",
    img: "panorama-1867",
    contexto: [
      "En 1867, el templo de Cristo Salvador aún estaba en obras. Desde sus andamios se tomó un panorama fotográfico de la ciudad, con el Kremlin y el río Moscova.",
      "Esa vista permite comparar la ciudad del siglo XIX con la actual. Muchos de los edificios que aparecen ya no existen."
    ],
    fragmento: null,
    enlace: { texto: "Catedral de Cristo Salvador (Wikipedia)", url: "https://es.wikipedia.org/wiki/Catedral_de_Cristo_Salvador" },
    registro: "MSK-1867-01"
  },
  {
    id: "h1931",
    anio: "1931",
    titulo: "El templo que desapareció",
    img: "catedral-1931",
    contexto: [
      "El 5 de diciembre de 1931 la catedral de Cristo Salvador fue dinamitada. En su lugar se proyectó el Palacio de los Sóviets, un rascacielos que nunca se terminó.",
      "Años después, el solar acogió la piscina al aire libre Moskva. La catedral se reconstruyó entre 1995 y 2000. Lo que hoy se ve es una reconstrucción; las fotografías anteriores a 1931 son el registro del edificio original."
    ],
    fragmento: null,
    enlace: { texto: "Palacio de los Sóviets (Wikipedia)", url: "https://es.wikipedia.org/wiki/Palacio_de_los_S%C3%B3viets" },
    registro: "MSK-1931-04"
  },
  {
    id: "h1935",
    anio: "1935",
    titulo: "Una ciudad bajo la ciudad",
    img: "metro-constructores-1935",
    contexto: [
      "El 15 de mayo de 1935 se inauguró la primera línea del metro de Moscú. Sus estaciones se concibieron como palacios subterráneos.",
      "Detrás de esa imagen oficial hubo miles de trabajadores. El álbum del Rijksmuseum conserva un retrato de grupo de los constructores, aunque sus nombres no figuran en la ficha."
    ],
    fragmento: { tipo: "Documento de archivo", img: "metro-bovard-1935", texto: "Traducción al ruso de la opinión de Bovard, redactor jefe del St. Louis Post-Dispatch, sobre el metro de Moscú (1935). Archivo Principal de Moscú." },
    enlace: { texto: "Metro de Moscú (Wikipedia)", url: "https://es.wikipedia.org/wiki/Metro_de_Mosc%C3%BA" },
    registro: "MSK-1935-10"
  },
  {
    id: "h1937",
    anio: "1937",
    titulo: "El hombre que fue borrado",
    img: "yezhov-original-1937",
    contexto: [
      "Nikolái Yezhov dirigió la policía política soviética entre 1936 y 1938. Tras su caída fue detenido y ejecutado en 1940, y su figura empezó a desaparecer de las fotografías.",
      "La imagen junto a Stalin se volvió famosa porque existen las dos versiones. Es una prueba de que manipular el pasado visual no empezó con la IA."
    ],
    fragmento: null,
    enlace: { texto: "Censorship of images in the Soviet Union (Wikipedia, en inglés)", url: "https://en.wikipedia.org/wiki/Censorship_of_images_in_the_Soviet_Union" },
    registro: "MSK-1937-29"
  },
  {
    id: "h1941",
    anio: "1941",
    titulo: "Del desfile al frente",
    img: "desfile-1941",
    contexto: [
      "En noviembre de 1941 el ejército alemán estaba a las puertas de Moscú. Aun así, el 7 de noviembre se celebró el desfile anual en la Plaza Roja.",
      "Muchas de las tropas que desfilaron se dirigieron directamente al frente. Ese invierno, globos de barrera flotaban sobre monumentos como el de Pushkin."
    ],
    fragmento: { tipo: "Pie de foto original del archivo (traducido)", img: null, texto: "«Tropas soviéticas que se dirigen directamente al frente tras el desfile celebrado en la Plaza Roja de Moscú el 7 de noviembre de 1941». Archivo de RIA Novosti, n.º 669663." },
    enlace: { texto: "Batalla de Moscú (Wikipedia)", url: "https://es.wikipedia.org/wiki/Batalla_de_Mosc%C3%BA" },
    registro: "MSK-1941-22"
  },
  {
    id: "h1961",
    anio: "1961",
    titulo: "El regreso de Gagarin",
    img: "gagarin-1961",
    contexto: [
      "El 12 de abril de 1961 Yuri Gagarin se convirtió en la primera persona en viajar al espacio. Dos días después fue recibido en la Plaza Roja.",
      "Las fotografías de ese día, conservadas por el Archivo Principal de Moscú, identifican autor, fecha y lugar."
    ],
    fragmento: null,
    enlace: { texto: "Yuri Gagarin (Wikipedia)", url: "https://es.wikipedia.org/wiki/Yuri_Gagarin" },
    registro: "MSK-1961-26"
  },
  {
    id: "h2050",
    anio: "2050",
    especulativa: true,
    titulo: "La última copia",
    img: "vista-general-1890",
    contexto: [
      "Moscú, 2050. Una bibliotecaria de barrio recibe una caja con negativos de su abuela. Las imágenes no coinciden con las versiones que circulan en las redes de la ciudad: en ellas aparecen calles, carteles y personas que las copias digitales ya no muestran.",
      "Decide digitalizarlas, describir de dónde vienen y depositarlas en un archivo ciudadano antes de compartir una sola."
    ],
    fragmento: { tipo: "Narrativa especulativa · personaje ficticio", img: null, texto: "«No quiero que me crean a mí. Quiero que puedan comprobarlo». Testimonio imaginado para el escenario de 2050; no corresponde a ninguna persona real." },
    enlace: null,
    registro: null
  }
];

export const PIEZAS = [
  // "dato": texto técnico de la pieza; debe describir con exactitud la imagen usada.
  { id: "p1", frase: "La historia no se genera. Se conserva.", img: "restauracion-1954", registro: "MSK-1954-27", estilo: "a", dato: "REGISTRO // JUNIO 1954" },
  { id: "p2", frase: "Antes de compartir, verifica.", img: "yezhov-retocada", registro: "MSK-1937-29", estilo: "b", dato: "FOTO RETOCADA // 1937" },
  { id: "p3", frase: "No todo lo que parece antiguo es auténtico.", img: "palacio-soviets-3d", registro: "REC-2021-31", estilo: "c", dato: "RECONSTRUCCIÓN 3D // 2021" },
  { id: "p4", frase: "La memoria necesita fuentes, no suposiciones.", img: "revista-ejercito-lcc", registro: "MSK-19XX-28", estilo: "a", dato: "REGISTRO // FECHA EN CONFLICTO" },
  { id: "p5", frase: "Moscú 2050: ¿quién controla lo que recordamos?", img: "vista-general-1890", registro: "MSK-1890-02", estilo: "d", dato: "FOTOCROMO // C. 1890–1900" }
];
