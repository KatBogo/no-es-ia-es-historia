/* No es IA, es historia — interacción de la página */
(function () {
  "use strict";

  var REGISTROS = window.ARCHIVO_REGISTROS || [];
  var PERIODOS = window.ARCHIVO_PERIODOS || [];
  var ESTADOS = window.ARCHIVO_ESTADOS || {};
  var TIPOS = window.ARCHIVO_TIPOS || {};

  function $(sel, ctx) { return (ctx || document).querySelector(sel); }
  function $all(sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); }

  function escapeHTML(str) {
    return String(str == null ? "" : str)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }

  function normalizar(str) {
    return String(str || "")
      .toLowerCase()
      .normalize("NFD")
      .replace(/[̀-ͯ]/g, "");
  }

  function periodoLabel(id) {
    for (var i = 0; i < PERIODOS.length; i++) if (PERIODOS[i].id === id) return PERIODOS[i].label;
    return "";
  }

  function badgeHTML(estado) {
    var e = ESTADOS[estado] || { label: estado, clase: "" };
    return '<span class="badge ' + e.clase + '"><span class="badge-icon" aria-hidden="true"></span>' + escapeHTML(e.label) + "</span>";
  }

  /* ---------------- Navegación ---------------- */
  var navToggle = $(".nav-toggle");
  var nav = $("#menu-principal");

  function setMenu(open) {
    navToggle.setAttribute("aria-expanded", open ? "true" : "false");
    nav.classList.toggle("is-open", open);
  }

  if (navToggle && nav) {
    navToggle.addEventListener("click", function () {
      setMenu(navToggle.getAttribute("aria-expanded") !== "true");
    });
    $all("a", nav).forEach(function (a) {
      a.addEventListener("click", function () { setMenu(false); });
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && nav.classList.contains("is-open")) {
        setMenu(false);
        navToggle.focus();
      }
    });
    document.addEventListener("click", function (e) {
      if (nav.classList.contains("is-open") && !nav.contains(e.target) && !navToggle.contains(e.target)) setMenu(false);
    });
  }

  // Resalta el enlace de la sección visible
  var navLinks = $all("[data-nav]");
  if ("IntersectionObserver" in window && navLinks.length) {
    var seguimiento = ["inicio", "contexto", "archivo", "verificacion", "aporta", "cierre"];
    var mapa = { inicio: "inicio", contexto: "inicio", archivo: "archivo", verificacion: "verificacion", aporta: "aporta" };
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var activo = mapa[entry.target.id] || null;
        navLinks.forEach(function (link) {
          if (link.getAttribute("data-nav") === activo) link.setAttribute("aria-current", "true");
          else link.removeAttribute("aria-current");
        });
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    seguimiento.forEach(function (id) {
      var el = document.getElementById(id);
      if (el) io.observe(el);
    });
  }

  /* ---------------- Archivo: filtros y búsqueda ---------------- */
  var form = $("#filtros");
  var galeria = $("#galeria");
  var contador = $("#resultados");
  var vacio = $("#sin-resultados");
  var fBuscar = $("#f-buscar");
  var fFecha = $("#f-fecha");
  var fLugar = $("#f-lugar");
  var fTema = $("#f-tema");
  var fEstado = $("#f-estado");
  var chips = $all("#f-tipos .chip");

  var filtro = { q: "", periodo: "", lugar: "", tema: "", estado: "", tipo: "" };

  function unicos(campo) {
    var vistos = {};
    REGISTROS.forEach(function (r) { vistos[r[campo]] = true; });
    return Object.keys(vistos).sort(function (a, b) { return a.localeCompare(b, "es"); });
  }

  function addOptions(select, items) {
    items.forEach(function (it) {
      var opt = document.createElement("option");
      opt.value = it.value;
      opt.textContent = it.label;
      select.appendChild(opt);
    });
  }

  addOptions(fFecha, PERIODOS.map(function (p) { return { value: p.id, label: p.label }; }));
  addOptions(fLugar, unicos("lugar").map(function (l) { return { value: l, label: l }; }));
  addOptions(fTema, unicos("tema").map(function (t) { return { value: t, label: t }; }));
  addOptions(fEstado, Object.keys(ESTADOS).map(function (k) { return { value: k, label: ESTADOS[k].label }; }));

  function coincide(r) {
    if (filtro.periodo && r.periodo !== filtro.periodo) return false;
    if (filtro.lugar && r.lugar !== filtro.lugar) return false;
    if (filtro.tema && r.tema !== filtro.tema) return false;
    if (filtro.estado && r.estado !== filtro.estado) return false;
    if (filtro.tipo && r.tipo !== filtro.tipo) return false;
    if (filtro.q) {
      var texto = normalizar([r.id, r.titulo, r.descripcion, r.lugar, r.tema, r.autor, TIPOS[r.tipo], r.fechaEvento, periodoLabel(r.periodo)].join(" "));
      var terminos = normalizar(filtro.q).split(/\s+/).filter(Boolean);
      for (var i = 0; i < terminos.length; i++) if (texto.indexOf(terminos[i]) === -1) return false;
    }
    return true;
  }

  function tarjetaHTML(r) {
    return (
      '<li><article class="card">' +
        '<div class="card-media">' +
          '<img src="' + escapeHTML(r.imagen) + '" alt="" width="800" height="600" loading="lazy">' +
          '<span class="card-type mono">' + escapeHTML(TIPOS[r.tipo]) + "</span>" +
          '<span class="card-demo mono">Demostración</span>' +
        "</div>" +
        '<div class="card-body">' +
          '<p class="card-code mono">' + escapeHTML(r.id) + "</p>" +
          '<h3 class="card-title"><button type="button" data-id="' + escapeHTML(r.id) + '" aria-haspopup="dialog">' +
            '<span class="visually-hidden">Abrir ficha: </span>' + escapeHTML(r.titulo) +
          "</button></h3>" +
          '<dl class="card-meta">' +
            "<div><dt>Fecha</dt><dd>" + escapeHTML(r.fechaEvento) + "</dd></div>" +
            "<div><dt>Lugar</dt><dd>" + escapeHTML(r.lugar) + "</dd></div>" +
          "</dl>" +
          '<div class="card-foot">' + badgeHTML(r.estado) +
            '<span class="card-open mono" aria-hidden="true">Ver ficha →</span>' +
          "</div>" +
        "</div>" +
      "</article></li>"
    );
  }

  function render() {
    var lista = REGISTROS.filter(coincide);
    galeria.innerHTML = lista.map(tarjetaHTML).join("");
    var n = lista.length;
    contador.textContent = n === REGISTROS.length
      ? "Mostrando los " + n + " registros del archivo"
      : "Mostrando " + n + " de " + REGISTROS.length + " registros";
    vacio.hidden = n !== 0;
    galeria.hidden = n === 0;
  }

  function leerFiltros() {
    filtro.q = fBuscar.value.trim();
    filtro.periodo = fFecha.value;
    filtro.lugar = fLugar.value;
    filtro.tema = fTema.value;
    filtro.estado = fEstado.value;
    render();
  }

  function setTipo(tipo) {
    filtro.tipo = tipo;
    chips.forEach(function (c) {
      c.setAttribute("aria-pressed", c.getAttribute("data-tipo") === tipo ? "true" : "false");
    });
  }

  fBuscar.addEventListener("input", leerFiltros);
  [fFecha, fLugar, fTema, fEstado].forEach(function (s) { s.addEventListener("change", leerFiltros); });
  chips.forEach(function (c) {
    c.addEventListener("click", function () {
      setTipo(c.getAttribute("data-tipo"));
      render();
    });
  });
  form.addEventListener("submit", function (e) { e.preventDefault(); leerFiltros(); });
  form.addEventListener("reset", function () {
    setTimeout(function () { setTipo(""); leerFiltros(); }, 0);
  });
  $("#vaciar-filtros").addEventListener("click", function () {
    form.reset();
    fBuscar.focus();
  });

  galeria.addEventListener("click", function (e) {
    var btn = e.target.closest("button[data-id]");
    if (btn) abrirDesdeTarjeta(btn.getAttribute("data-id"), btn);
  });

  render();

  /* ---------------- Ficha de archivo ---------------- */
  var dialog = $("#ficha");
  var ultimoFoco = null;
  var fichaEnHistorial = false;
  var cerrada = true;
  var HASH = "#ficha/";

  function buscar(id) {
    for (var i = 0; i < REGISTROS.length; i++) if (REGISTROS[i].id === id) return REGISTROS[i];
    return null;
  }

  function idDesdeHash() {
    var h = decodeURIComponent(window.location.hash || "");
    return h.indexOf(HASH) === 0 ? h.slice(HASH.length) : null;
  }

  function lista(el, items) {
    el.innerHTML = (items || []).map(function (t) { return "<li>" + escapeHTML(t) + "</li>"; }).join("");
  }

  function dato(dt, dd, clase, html) {
    return '<div class="' + (clase || "") + '"><dt>' + escapeHTML(dt) + "</dt><dd>" + (html ? dd : escapeHTML(dd)) + "</dd></div>";
  }

  function rellenar(r) {
    var tipo = TIPOS[r.tipo] || "";
    $("#ficha-codigo").textContent = r.id + " · " + tipo;
    $("#ficha-tags").innerHTML =
      '<span class="tag">' + escapeHTML(tipo) + "</span>" +
      badgeHTML(r.estado) +
      '<span class="tag tag-demo">Contenido de demostración</span>';
    $("#ficha-titulo").textContent = r.titulo;
    $("#ficha-descripcion").textContent = r.descripcion;

    var img = $("#ficha-imagen");
    img.src = r.imagen;
    img.alt = "Espacio reservado para " + tipo.toLowerCase() + ". Contenido de demostración, no es un registro histórico.";

    var fuente = r.fuente
      ? '<a href="' + escapeHTML(r.fuente) + '" target="_blank" rel="noopener">Consultar la fuente original <span aria-hidden="true">↗</span></a>'
      : '<span class="source-pending">Sin enlace: contenido de demostración. La fuente se añadirá cuando exista un registro real.</span>';

    $("#ficha-datos").innerHTML =
      dato("Fecha del acontecimiento", r.fechaEvento, "is-date is-wide") +
      dato("Fecha de digitalización", r.fechaDigitalizacion) +
      dato("Fecha de publicación en el archivo", r.fechaPublicacion) +
      dato("Lugar", r.lugar) +
      dato("Tema", r.tema) +
      dato("Autor o autora", r.autor || "Desconocido", "is-wide") +
      dato("Conserva el registro", r.conserva, "is-wide") +
      dato("Fuente", fuente, "is-wide", true);

    $("#ficha-contexto").textContent = r.contexto;
    lista($("#ficha-verificado"), r.verificado);
    lista($("#ficha-pendiente"), r.pendiente);
    $("#ficha-intervenciones").textContent = r.intervenciones;
  }

  function mostrar(id) {
    var r = buscar(id);
    if (!r) return false;
    rellenar(r);
    cerrada = false;
    if (!dialog.open) {
      if (typeof dialog.showModal === "function") dialog.showModal();
      else dialog.setAttribute("open", "");
    }
    dialog.scrollTop = 0;
    var inner = $(".record-inner", dialog);
    if (inner) inner.scrollTop = 0;
    $("#ficha-cerrar").focus();
    return true;
  }

  function abrirDesdeTarjeta(id, origen) {
    ultimoFoco = origen || document.activeElement;
    if (history.pushState) {
      history.pushState({ ficha: id }, "", HASH + encodeURIComponent(id));
      fichaEnHistorial = true;
    }
    mostrar(id);
  }

  function cerrar() {
    if (dialog.open) {
      if (typeof dialog.close === "function") dialog.close();
      else dialog.removeAttribute("open");
    }
    alCerrar();
  }

  // Se ejecuta una sola vez por apertura, tanto si se cierra con el botón
  // como con Esc (evento "close" del diálogo).
  function alCerrar() {
    if (cerrada) return;
    cerrada = true;
    if (idDesdeHash()) {
      if (fichaEnHistorial) {
        fichaEnHistorial = false;
        history.back();
      } else if (history.replaceState) {
        history.replaceState(null, "", window.location.pathname + window.location.search + "#archivo");
      }
    }
    var destino = ultimoFoco;
    if (!destino || !document.body.contains(destino)) {
      var id = $("#ficha-codigo").textContent.split(" ")[0];
      destino = galeria.querySelector('button[data-id="' + id + '"]') || fBuscar;
    }
    if (destino && destino.focus) destino.focus({ preventScroll: false });
    ultimoFoco = null;
  }

  dialog.addEventListener("close", alCerrar);
  $("#ficha-cerrar").addEventListener("click", cerrar);
  dialog.addEventListener("click", function (e) {
    if (e.target === dialog) cerrar(); // clic en el fondo
  });

  window.addEventListener("popstate", function () {
    var id = idDesdeHash();
    if (id && buscar(id)) {
      fichaEnHistorial = false;
      mostrar(id);
    } else if (dialog.open) {
      fichaEnHistorial = false;
      cerrar();
    }
  });

  // Copiar el enlace de la ficha
  var copiar = $("#ficha-copiar");
  copiar.addEventListener("click", function () {
    var url = window.location.href;
    function aviso(txt) {
      copiar.textContent = txt;
      setTimeout(function () { copiar.textContent = "Copiar enlace"; }, 2200);
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(url).then(function () { aviso("Enlace copiado"); }, function () { aviso("No se pudo copiar"); });
    } else {
      aviso("No se pudo copiar");
    }
  });

  // Abrir una ficha si la URL la incluye (p. ej. …/#ficha/MSK-F-001)
  var inicial = idDesdeHash();
  if (inicial) {
    if (buscar(inicial)) {
      var archivo = document.getElementById("archivo");
      if (archivo) archivo.scrollIntoView();
      mostrar(inicial);
    } else if (history.replaceState) {
      history.replaceState(null, "", window.location.pathname + window.location.search + "#archivo");
      document.getElementById("archivo").scrollIntoView();
    }
  }

  /* ---------------- Formulario de aportes (demostración) ---------------- */
  var aporte = $("#form-aporte");
  var estadoForm = $("#estado-formulario");

  function marcar(campos, error, invalido) {
    campos.forEach(function (c) {
      if (invalido) c.setAttribute("aria-invalid", "true");
      else c.removeAttribute("aria-invalid");
    });
    if (error) error.hidden = !invalido;
  }

  function validar() {
    var primero = null;
    function check(campos, errorId, ok) {
      marcar(campos, document.getElementById(errorId), !ok);
      if (!ok && !primero) primero = campos[0];
    }
    var radios = $all('input[name="tipo"]', aporte);
    check(radios, "err-tipo", radios.some(function (r) { return r.checked; }));
    ["descripcion", "fecha", "lugar", "procedencia"].forEach(function (n) {
      var el = aporte.elements[n];
      check([el], "err-" + n, el.value.trim().length > 0);
    });
    var checks = ["derechos", "publicacion", "revision"].map(function (n) { return aporte.elements[n]; });
    var sinMarcar = checks.filter(function (c) { return !c.checked; });
    marcar(checks, null, false);
    marcar(sinMarcar, $("#err-autorizacion"), sinMarcar.length > 0);
    if (sinMarcar.length && !primero) primero = sinMarcar[0];
    return primero;
  }

  aporte.addEventListener("submit", function (e) {
    e.preventDefault();
    var primero = validar();
    estadoForm.hidden = false;
    if (primero) {
      estadoForm.className = "form-status is-error";
      estadoForm.innerHTML = "<strong>Faltan datos</strong>Revisa los campos marcados antes de continuar.";
      primero.focus();
      return;
    }
    estadoForm.className = "form-status";
    estadoForm.innerHTML =
      "<strong>Propuesta no enviada: esto es una demostración</strong>" +
      "Los campos están completos, pero esta maqueta no tiene un sistema de recepción activo. " +
      "Tu propuesta y tu archivo no se han enviado ni guardado en ningún lugar. " +
      "En una versión real, el aporte quedaría como «Pendiente de revisión» hasta que una persona del equipo lo revisara.";
    estadoForm.focus();
  });

  aporte.addEventListener("input", function (e) {
    var t = e.target;
    if (t.getAttribute("aria-invalid") === "true") {
      if (t.type === "radio") validar();
      else if (t.type === "checkbox") validar();
      else if (t.value.trim()) marcar([t], document.getElementById("err-" + t.name), false);
    }
  });
})();
