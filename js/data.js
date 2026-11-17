/*
  Registros del archivo — CONTENIDO DE DEMOSTRACIÓN
  ---------------------------------------------------
  Ningún registro de este archivo corresponde a una fotografía, un documento
  o un testimonio histórico real. Títulos, fechas, personas y estados son
  ejemplos para mostrar cómo funcionaría la ficha. Las imágenes son espacios
  reservados (SVG) y las fuentes no existen todavía (fuente: null).
  Para publicar contenido real, sustituye cada entrada por datos verificados
  y añade la URL de la fuente en "fuente".
*/
window.ARCHIVO_PERIODOS = [
  { id: "antes-1950", label: "Antes de 1950" },
  { id: "1950-1979", label: "1950 – 1979" },
  { id: "1980-1999", label: "1980 – 1999" },
  { id: "2000-2029", label: "2000 – 2029" },
  { id: "2030-2050", label: "2030 – 2050" }
];

window.ARCHIVO_ESTADOS = {
  pendiente: { label: "Pendiente de revisión", clase: "badge-pending" },
  contrastada: { label: "Con información contrastada", clase: "badge-checked" },
  insuficiente: { label: "Información insuficiente", clase: "badge-insufficient" }
};

window.ARCHIVO_TIPOS = {
  fotografia: "Fotografía",
  documento: "Documento",
  testimonio: "Testimonio"
};

window.ARCHIVO_REGISTROS = [
  {
    id: "MSK-F-001",
    tipo: "fotografia",
    imagen: "img/demo-foto-1.svg",
    titulo: "Patio interior de un edificio de viviendas",
    periodo: "1950-1979",
    fechaEvento: "Década de 1950 (aproximada)",
    fechaDigitalizacion: "Marzo de 2049",
    fechaPublicacion: "Abril de 2050",
    lugar: "Zamoskvorechie",
    tema: "Vida cotidiana",
    autor: "Desconocido",
    conserva: "Archivo familiar (ejemplo de demostración)",
    fuente: null,
    descripcion: "Espacio reservado para una fotografía de un patio compartido por varias familias. En la ficha real se describiría lo que se ve, sin interpretar más allá de la imagen.",
    contexto: "Texto de demostración. Aquí se explicaría, con referencias citadas, cómo era la vida en los patios de los edificios residenciales del barrio en esa época y por qué este tipo de imagen es valiosa para la memoria vecinal.",
    verificado: [
      "La persona que aporta el registro declara su procedencia familiar (ejemplo).",
      "El tipo de papel y el formato son coherentes con la época indicada (ejemplo)."
    ],
    pendiente: [
      "Autoría de la fotografía.",
      "Dirección exacta del edificio."
    ],
    intervenciones: "Ejemplo de declaración: escaneado a 600 ppp y recorte de bordes. Sin restauración generativa, coloreado ni eliminación de elementos.",
    estado: "contrastada"
  },
  {
    id: "MSK-D-002",
    tipo: "documento",
    imagen: "img/demo-documento-1.svg",
    titulo: "Cuaderno de notas escolares",
    periodo: "1950-1979",
    fechaEvento: "Curso escolar de la década de 1960 (aproximada)",
    fechaDigitalizacion: "Enero de 2050",
    fechaPublicacion: "Pendiente",
    lugar: "Jamóvniki",
    tema: "Educación",
    autor: "Estudiante sin identificar",
    conserva: "Donación particular (ejemplo de demostración)",
    fuente: null,
    descripcion: "Espacio reservado para un documento escolar manuscrito. La ficha real transcribiría fragmentos relevantes y describiría su estado de conservación.",
    contexto: "Texto de demostración. Aquí se situaría el documento en el sistema educativo de la época, citando fuentes sobre los programas escolares y la vida estudiantil en Moscú.",
    verificado: [
      "Ninguno todavía: el registro acaba de ingresar."
    ],
    pendiente: [
      "Identidad de quien escribió el cuaderno.",
      "Escuela a la que pertenece.",
      "Año exacto del curso."
    ],
    intervenciones: "Ejemplo de declaración: fotografiado página a página con luz difusa. Sin intervenciones digitales sobre el contenido.",
    estado: "pendiente"
  },
  {
    id: "MSK-T-003",
    tipo: "testimonio",
    imagen: "img/demo-testimonio.svg",
    titulo: "Recuerdo de un trayecto diario en metro",
    periodo: "1980-1999",
    fechaEvento: "Años ochenta, según el testimonio",
    fechaDigitalizacion: "Grabado en 2048",
    fechaPublicacion: "Febrero de 2050",
    lugar: "Metro de Moscú",
    tema: "Transporte",
    autor: "Testimonio de demostración (no corresponde a una persona real)",
    conserva: "Grabación aportada al archivo (ejemplo de demostración)",
    fuente: null,
    descripcion: "Espacio reservado para un testimonio oral sobre los desplazamientos diarios al trabajo. En la ficha real se incluiría la grabación y su transcripción.",
    contexto: "Texto de demostración. Aquí se explicaría el papel del metro en la vida diaria de la ciudad durante ese periodo, con fuentes documentales que permitan contrastar el relato.",
    verificado: [
      "La grabación no presenta indicios de edición (ejemplo)."
    ],
    pendiente: [
      "Fechas concretas mencionadas en el relato.",
      "Estaciones y líneas citadas.",
      "Otras fuentes que confirmen los hechos narrados."
    ],
    intervenciones: "Ejemplo de declaración: reducción de ruido de fondo. La voz no ha sido sintetizada ni modificada.",
    estado: "insuficiente"
  },
  {
    id: "MSK-F-004",
    tipo: "fotografia",
    imagen: "img/demo-foto-2.svg",
    titulo: "Puestos de un mercado de barrio",
    periodo: "1980-1999",
    fechaEvento: "Década de 1990 (aproximada)",
    fechaDigitalizacion: "Noviembre de 2049",
    fechaPublicacion: "Pendiente",
    lugar: "Taganka",
    tema: "Oficios y comercio",
    autor: "Desconocido",
    conserva: "Colección vecinal (ejemplo de demostración)",
    fuente: null,
    descripcion: "Espacio reservado para una fotografía de comerciantes y clientes en un mercado al aire libre.",
    contexto: "Texto de demostración. Aquí se describiría el contexto económico y social de la década y cómo cambiaron los espacios de comercio en los barrios.",
    verificado: [
      "Ninguno todavía: pendiente de asignar a una persona revisora."
    ],
    pendiente: [
      "Fecha de la toma.",
      "Ubicación exacta del mercado.",
      "Consentimiento de las personas reconocibles."
    ],
    intervenciones: "Ejemplo de declaración: copia digital recibida de quien aporta. Se desconoce si hubo intervenciones previas.",
    estado: "pendiente"
  },
  {
    id: "MSK-D-005",
    tipo: "documento",
    imagen: "img/demo-documento-2.svg",
    titulo: "Plano de distribución de un edificio residencial",
    periodo: "1950-1979",
    fechaEvento: "Década de 1970 (aproximada)",
    fechaDigitalizacion: "Junio de 2049",
    fechaPublicacion: "Septiembre de 2049",
    lugar: "Sokólniki",
    tema: "Arquitectura y ciudad",
    autor: "Oficina técnica sin identificar",
    conserva: "Institución depositaria por definir (ejemplo de demostración)",
    fuente: null,
    descripcion: "Espacio reservado para un plano técnico con la distribución de viviendas por planta.",
    contexto: "Texto de demostración. Aquí se explicaría el programa de vivienda de la época y cómo influyó en la forma de los barrios, con referencias a documentación técnica.",
    verificado: [
      "El sello y el formato coinciden con otros planos del mismo fondo (ejemplo).",
      "La calle indicada existe y conserva su trazado (ejemplo)."
    ],
    pendiente: [
      "Fecha exacta de aprobación del plano."
    ],
    intervenciones: "Ejemplo de declaración: escaneado en varias partes y unido digitalmente. Las uniones se indican en la versión de alta resolución.",
    estado: "contrastada"
  },
  {
    id: "MSK-T-006",
    tipo: "testimonio",
    imagen: "img/demo-testimonio.svg",
    titulo: "Recuerdos de un invierno junto al río",
    periodo: "antes-1950",
    fechaEvento: "Década de 1940, según el testimonio",
    fechaDigitalizacion: "Transcripción de 2047",
    fechaPublicacion: "Pendiente",
    lugar: "Río Moscova",
    tema: "Vida cotidiana",
    autor: "Testimonio de demostración (no corresponde a una persona real)",
    conserva: "Archivo familiar (ejemplo de demostración)",
    fuente: null,
    descripcion: "Espacio reservado para la transcripción de un relato familiar transmitido entre generaciones.",
    contexto: "Texto de demostración. Aquí se distinguiría lo que la persona vivió directamente de lo que escuchó de otros, y se citarían fuentes para contrastar el periodo.",
    verificado: [
      "Ninguno todavía."
    ],
    pendiente: [
      "Quién relató originalmente los hechos.",
      "Correspondencia de los hechos con otras fuentes."
    ],
    intervenciones: "Ejemplo de declaración: transcripción manual de una grabación. Sin herramientas de generación de texto.",
    estado: "pendiente"
  },
  {
    id: "MSK-F-007",
    tipo: "fotografia",
    imagen: "img/demo-foto-3.svg",
    titulo: "Celebración vecinal en un parque",
    periodo: "2000-2029",
    fechaEvento: "Década de 2000 (aproximada)",
    fechaDigitalizacion: "Archivo nacido digital (cámara compacta)",
    fechaPublicacion: "Mayo de 2049",
    lugar: "Parque Gorki",
    tema: "Celebraciones",
    autor: "Fotógrafa aficionada (nombre reservado, ejemplo)",
    conserva: "Persona autora (ejemplo de demostración)",
    fuente: null,
    descripcion: "Espacio reservado para una fotografía digital de una celebración al aire libre.",
    contexto: "Texto de demostración. Aquí se explicaría el uso de los parques como espacio de encuentro y cómo las primeras cámaras digitales cambiaron la memoria familiar.",
    verificado: [
      "Los metadatos del archivo original coinciden con la fecha declarada (ejemplo).",
      "La autora confirma la autoría y autoriza la publicación (ejemplo)."
    ],
    pendiente: [
      "Motivo concreto de la celebración."
    ],
    intervenciones: "Ejemplo de declaración: ninguna. Se publica el archivo original sin recortes ni ajustes.",
    estado: "contrastada"
  },
  {
    id: "MSK-D-008",
    tipo: "documento",
    imagen: "img/demo-documento-1.svg",
    titulo: "Carta familiar sin fechar",
    periodo: "antes-1950",
    fechaEvento: "Desconocida (posiblemente anterior a 1950)",
    fechaDigitalizacion: "Agosto de 2049",
    fechaPublicacion: "Octubre de 2049",
    lugar: "Arbat",
    tema: "Familias",
    autor: "Desconocido",
    conserva: "Archivo familiar (ejemplo de demostración)",
    fuente: null,
    descripcion: "Espacio reservado para una carta manuscrita entre familiares. La ficha real mostraría el anverso y el reverso.",
    contexto: "Texto de demostración. Sin fecha ni firma legible, el contexto no puede establecerse con seguridad; la ficha explicaría qué indicios existen y cuáles faltan.",
    verificado: [
      "El remite menciona una calle del barrio (ejemplo)."
    ],
    pendiente: [
      "Fecha de la carta.",
      "Identidad de quien la escribe y de quien la recibe.",
      "Procedencia anterior a la familia que la conserva."
    ],
    intervenciones: "Ejemplo de declaración: ajuste de contraste para mejorar la lectura. Se conserva también la versión sin ajustar.",
    estado: "insuficiente"
  },
  {
    id: "MSK-F-009",
    tipo: "fotografia",
    imagen: "img/demo-foto-2.svg",
    titulo: "Obras en una estación de metro",
    periodo: "antes-1950",
    fechaEvento: "Década de 1930 (aproximada)",
    fechaDigitalizacion: "Diciembre de 2049",
    fechaPublicacion: "Pendiente",
    lugar: "Metro de Moscú",
    tema: "Arquitectura y ciudad",
    autor: "Desconocido",
    conserva: "Institución depositaria por definir (ejemplo de demostración)",
    fuente: null,
    descripcion: "Espacio reservado para una fotografía de trabajadores durante la construcción de una estación.",
    contexto: "Texto de demostración. Aquí se explicaría el contexto de la construcción del metro y se advertiría si existen reconstrucciones digitales de la misma escena que no deben confundirse con este registro.",
    verificado: [
      "Ninguno todavía."
    ],
    pendiente: [
      "Estación concreta.",
      "Fecha de la toma.",
      "Si se trata de un original o de una reproducción posterior."
    ],
    intervenciones: "Ejemplo de declaración: se desconoce. La copia recibida podría haber sido retocada antes de llegar al archivo.",
    estado: "pendiente"
  },
  {
    id: "MSK-T-010",
    tipo: "testimonio",
    imagen: "img/demo-testimonio.svg",
    titulo: "Primer día en un barrio nuevo",
    periodo: "2030-2050",
    fechaEvento: "2034, según el testimonio",
    fechaDigitalizacion: "Archivo nacido digital (grabación de 2049)",
    fechaPublicacion: "Enero de 2050",
    lugar: "Izmáilovo",
    tema: "Familias",
    autor: "Testimonio de demostración (no corresponde a una persona real)",
    conserva: "Persona que da el testimonio (ejemplo de demostración)",
    fuente: null,
    descripcion: "Espacio reservado para un testimonio en vídeo sobre la llegada de una familia a un nuevo barrio.",
    contexto: "Texto de demostración. Aquí se explicaría que la memoria reciente también es historia y por qué conviene registrarla antes de que se pierda o se reconstruya sin fuentes.",
    verificado: [
      "Identidad de la persona confirmada por el equipo (ejemplo).",
      "Fechas coherentes con documentos aportados (ejemplo)."
    ],
    pendiente: [
      "Ninguna información esencial pendiente (ejemplo)."
    ],
    intervenciones: "Ejemplo de declaración: subtítulos añadidos manualmente. Imagen y voz sin modificar.",
    estado: "contrastada"
  },
  {
    id: "MSK-F-011",
    tipo: "fotografia",
    imagen: "img/demo-foto-3.svg",
    titulo: "Fachada antes de su restauración",
    periodo: "2000-2029",
    fechaEvento: "Década de 2020 (aproximada)",
    fechaDigitalizacion: "Archivo nacido digital (teléfono móvil)",
    fechaPublicacion: "Marzo de 2050",
    lugar: "Kitái-gorod",
    tema: "Arquitectura y ciudad",
    autor: "Vecino del barrio (nombre reservado, ejemplo)",
    conserva: "Persona autora (ejemplo de demostración)",
    fuente: null,
    descripcion: "Espacio reservado para una fotografía de una fachada antes de una intervención arquitectónica.",
    contexto: "Texto de demostración. Aquí se compararía el registro con la documentación de la obra y con reconstrucciones 3D del edificio, señalando cuál es cuál.",
    verificado: [
      "Los metadatos de ubicación coinciden con el lugar declarado (ejemplo).",
      "Existen otras fotografías independientes del mismo edificio (ejemplo)."
    ],
    pendiente: [
      "Fecha exacta del inicio de la restauración."
    ],
    intervenciones: "Ejemplo de declaración: el teléfono aplicó su procesamiento automático habitual. No se usaron herramientas de edición generativa.",
    estado: "contrastada"
  },
  {
    id: "MSK-D-012",
    tipo: "documento",
    imagen: "img/demo-documento-2.svg",
    titulo: "Programa impreso de un concierto de barrio",
    periodo: "1980-1999",
    fechaEvento: "Década de 1980 (aproximada)",
    fechaDigitalizacion: "Febrero de 2050",
    fechaPublicacion: "Pendiente",
    lugar: "VDNJ",
    tema: "Celebraciones",
    autor: "Organización sin identificar",
    conserva: "Colección vecinal (ejemplo de demostración)",
    fuente: null,
    descripcion: "Espacio reservado para un programa de mano impreso de un evento cultural.",
    contexto: "Texto de demostración. Aquí se situaría el evento en la vida cultural de la ciudad, si las fuentes lo permiten.",
    verificado: [
      "Ninguno: el impreso no indica fecha ni organizador legible."
    ],
    pendiente: [
      "Fecha del evento.",
      "Entidad organizadora.",
      "Si el evento llegó a celebrarse."
    ],
    intervenciones: "Ejemplo de declaración: escaneado sin ajustes.",
    estado: "insuficiente"
  }
];
