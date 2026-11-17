# No es IA, es historia

Campaña digital y archivo web para preservar la memoria histórica, situada en **Moscú, 2050**.

Proyecto académico de diseño especulativo inspirado en la predicción de Earth 2050 sobre la reconstrucción de acontecimientos históricos en 3D mediante inteligencia artificial. La campaña y el archivo son una propuesta propia dentro de ese escenario; Earth 2050 no afirma que este servicio exista. **No es un sitio oficial de Kaspersky.**

> ¿Cómo distinguir los registros históricos de las reconstrucciones digitales cuando todo parece real?

## Contenido de demostración

Todos los registros del archivo son **espacios reservados**. No contienen fotografías, documentos, testimonios ni fuentes históricas reales, y las imágenes son ilustraciones SVG marcadas como «Contenido de demostración». El formulario de aportes **no envía ni guarda datos**: solo comprueba los campos en el navegador.

## Estructura

```
index.html        Página completa (todas las secciones)
css/styles.css    Estilos, retícula y diseño adaptable
js/data.js        Registros de demostración del archivo
js/app.js         Menú, buscador, filtros, fichas y formulario de demostración
img/              Imágenes de marcador de posición (SVG) y favicon
.nojekyll         Publica los archivos tal cual en GitHub Pages
```

## Funciones

- Buscador sin distinción de acentos y filtros por fecha, lugar, tema, estado de revisión y tipo de material.
- Fichas en ventana modal con fecha del acontecimiento separada de las fechas de digitalización y publicación, «Qué se pudo verificar», «Información pendiente» y declaración de intervenciones digitales.
- Cada ficha tiene su propio enlace (por ejemplo `#ficha/MSK-F-001`) y se cierra con el botón Atrás del navegador.

## Añadir registros reales

Edita `js/data.js`: sustituye cada entrada por datos verificados, añade la imagen en `img/` y la URL de la fuente en el campo `fuente`.

## Ver en local

Abre `index.html` en el navegador o sirve la carpeta con cualquier servidor estático.
