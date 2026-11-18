# NO ES IA. ES HISTORIA. · Moscú 2050

> «El futuro puede reescribirlo todo. Menos lo que realmente vivimos».

Archivo ciudadano de la memoria, narrado desde Moscú en 2050. Las fotografías y documentos del archivo son **registros históricos reales** con su procedencia indicada; las capas sintéticas de 2050 se declaran como intervenciones del propio archivo.

Publicada en: https://katbogo.github.io/no-es-ia-es-historia/moscu-2050/

## Identidad (según el logo)

- **Logotipo**: «NO ES IA. / ES HISTORIA.» en Archivo 900 al 100 % de ancho (equivale a Archivo Black), interlineado 0,89.
- **Corte de color**: cada letra se parte al 57 % de su altura. Primera línea: arriba rojo, abajo negro. Segunda línea: al revés.
- **Barra gris** detrás, inclinada −9,4°.
- **Colores**: rojo `#C52B32`, negro `#0A0A0A`, gris del logo `#D3D2CC`, hueso `#F2F0E9`, carbón `#111111`.
- En fondos oscuros se usa la versión negativa (rojo + hueso, barra gris media `#6E6D68`).
- En CSS: componente `.logo` (con `.logo__barra`, `.logo__l1`, `.logo__l2`) y la clase `.bicolor`, que aplica el corte rojo/negro a cualquier texto, también de varias líneas.

## Tipografía

Las tres familias se cargan desde Google Fonts (licencia SIL Open Font License):

| Uso | Familia | Ajustes |
| --- | --- | --- |
| Logo, titulares, botones, frases de las piezas | **Archivo** (variable) | peso 800–900, ancho 100 % (como el logo) |
| Texto de lectura | **Newsreader** (variable) | peso 400–600, tamaño óptico 6–72 |
| Etiquetas, datos técnicos, fichas | **IBM Plex Mono** | peso 400–500, mayúsculas con espaciado |

## Secciones

1. **Portada**: fotocromo de Moscú (c. 1890–1900) con una capa sintética de 2050 que desaparece al hacer scroll.
2. **El problema**: cinco riesgos con casos documentados (y uno de 2050) y una animación de fragmentación con botón para recomponer la imagen.
3. **Archivo**: 31 registros con buscador, categorías, estado de verificación, línea de tiempo por décadas, ficha ampliada, «Ver procedencia» y «Guardar en mi colección».
4. **¿Real o generado?**: ejercicio de 6 imágenes con revelación y resumen.
5. **Historias**: siete relatos con línea de tiempo; el de 2050 se identifica como relato del presente.
6. **Antes y después**: comparador con ratón, pantalla táctil y teclado.
7. **Campaña**: carrusel de piezas, vista ampliada, descarga de cada pieza en PNG (2160 × 2700 px) o de las cinco en .zip, y botones para compartir.
8. **Participa**: formulario con validación y vista previa local. No envía ni guarda datos (no hay servidor), y la página lo indica.

**Mi colección** guarda la selección en `sessionStorage` y permite descargar cada imagen o toda la colección en .zip (con un `CREDITOS.txt`). Las imágenes se piden a Wikimedia Commons en la mayor resolución disponible, hasta 3840 px; si Commons no responde, se usa la copia local.

## Fuentes de las imágenes

Todas proceden de Wikimedia Commons, con licencias de dominio público, CC0, CC BY 4.0, CC BY-SA 3.0 o CC BY-SA 4.0. Cada ficha indica autor, institución, licencia y enlaces a Commons y al catálogo de origen. Instituciones citadas: Library of Congress, Rijksmuseum, Archivo Principal de Moscú (Главархив Москвы), archivo de RIA Novosti, Ministerio de Defensa de Rusia y Museo de Moscú.

## Estructura

```
index.html
exportar-pieza.html      Muestra una pieza a pantalla completa para exportarla (?i=0 a 4)
css/styles.css           Estilos por secciones (tokens, componentes, responsive)
js/main.js               Punto de entrada
js/utils.js              Utilidades compartidas (incluye descargas y creación de .zip)
js/data/registros.js     Registros del archivo (datos estructurados)
js/data/contenido.js     Riesgos, ejercicio, historias, comparaciones y piezas
js/modules/*.js          Un módulo por sección
img/archivo/             Imágenes optimizadas (1280 px y miniaturas de 500 px)
img/campana/             Piezas de campaña exportadas en PNG (2160 × 2700 px)
```

Para añadir un registro: descarga la imagen a `img/archivo/` (nombre.jpg y nombre-sm.jpg) y añade una entrada en `js/data/registros.js`.

Si cambias una pieza de campaña, vuelve a exportar su PNG abriendo `exportar-pieza.html?i=N` a 1080 × 1350 con escala 2.

Se necesita un servidor (GitHub Pages o cualquier servidor estático) porque el código usa módulos de JavaScript.
