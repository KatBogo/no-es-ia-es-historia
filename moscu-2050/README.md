# NO ES IA. ES HISTORIA. · Moscú 2050

> «El futuro puede reescribirlo todo. Menos lo que realmente vivimos».

Experiencia web de diseño gráfico especulativo. Moscú 2050 es un **escenario hipotético**; las fotografías y documentos del archivo son **registros históricos reales** con su procedencia indicada.

Publicada en:
- Ruso (idioma por defecto): https://katbogo.github.io/no-es-ia-es-historia/moscu-2050/
- Español: https://katbogo.github.io/no-es-ia-es-historia/moscu-2050/es.html

## Idiomas

El escenario está en Moscú, así que la página está en **ruso** por defecto, con un botón **RU / ES** para pasarla a español. `index.html` es la versión rusa y `es.html` la española; los textos de los datos están en `{ ru, es }` (ver `js/i18n.js`). Tipografías con cirílico: Fira Sans Extra Condensed (títulos y logo), Literata (textos) e IBM Plex Mono (etiquetas). Para los títulos se usa una fuente estática porque las variables pueden dibujar trazos internos en letras cirílicas como la «Ы».

## Escenario

Basado en la investigación del equipo sobre las 16 predicciones para Moscú 2050 de Earth 2050 (Kaspersky), en especial «3D reconstruction of the human history», «The world in 2050», «Neuromorphic official» y «Moscow 2050». La pregunta del proyecto aparece en la sección «Участвуй / Take part».

## Secciones

1. **Portada**: fotocromo de Moscú (c. 1890–1900) con una capa gráfica especulativa que desaparece al hacer scroll.
2. **El problema**: cinco riesgos con ejemplos reales (y uno hipotético, marcado) y una animación de fragmentación.
3. **Archivo**: 31 registros con buscador, categorías, estado de verificación, línea de tiempo por décadas, ficha ampliada, «Ver procedencia» y «Guardar en mi colección» (selección temporal en `sessionStorage`).
4. **¿Real o generado?**: ejercicio educativo de 6 imágenes con revelación y resumen.
5. **Historias**: siete relatos con línea de tiempo; el de 2050 está marcado como ficción.
6. **Antes y después**: comparador con ratón, pantalla táctil y teclado.
7. **Campaña**: carrusel de piezas, vista ampliada y botones para compartir o copiar el enlace.
8. **Participa**: formulario con validación y vista previa local. **No envía ni guarda datos** (no hay backend).

## Fuentes de las imágenes

Todas proceden de Wikimedia Commons, con licencias de dominio público, CC0, CC BY 4.0, CC BY-SA 3.0 o CC BY-SA 4.0. Cada ficha indica autor, institución, licencia y enlaces a Commons y al catálogo de origen. Instituciones citadas: Library of Congress, Rijksmuseum, Archivo Principal de Moscú (Главархив Москвы), archivo de RIA Novosti, Ministerio de Defensa de Rusia y Museo de Moscú.

La «verificación» de este prototipo consistió en revisar los metadatos públicos de cada archivo. No se consultaron los originales en las instituciones.

## Estructura

```
index.html
css/styles.css           Estilos por secciones (tokens, componentes, responsive)
js/main.js               Punto de entrada
js/utils.js              Utilidades compartidas
js/data/registros.js     Registros del archivo (datos estructurados)
js/data/contenido.js     Riesgos, ejercicio, historias, comparaciones y piezas
js/modules/*.js          Un módulo por sección
img/archivo/             Imágenes optimizadas (1280 px y miniaturas de 500 px)
```

Para añadir un registro: descarga la imagen a `img/archivo/` (nombre.jpg y nombre-sm.jpg) y añade una entrada en `js/data/registros.js`.

Se necesita un servidor (GitHub Pages o cualquier servidor estático) porque el código usa módulos de JavaScript.
