# Repostería Isabel — Sitio Web

Estructura del proyecto:

```
reposteria-isabel/
├── index.html      → estructura de la página
├── css/
│   └── style.css   → todos los estilos
├── js/
│   └── script.js   → catálogo de productos, filtros, WhatsApp, collage animado
└── assets/         → fotos de productos y logo
```

## Cómo verlo

1. Descomprime la carpeta.
2. Ábrela en VSCode.
3. Instala la extensión **Live Server** (o similar) y haz clic derecho sobre `index.html` → "Open with Live Server".
   - También puedes abrir `index.html` directamente con doble clic en cualquier navegador, funciona igual.

## Qué personalizar

- **Número de WhatsApp**: cambia la constante `PHONE` al inicio de `js/script.js`.
- **Productos**: edita el arreglo `products` en `js/script.js` (título, descripción, nombre de imagen y categoría).
- **Colores y tipografía**: variables `:root` al inicio de `css/style.css`.
- **Fotos del catálogo**: guarda cada archivo PNG directamente en `../Pagina Resposteria Isabel/`, la carpeta hermana de `site`, usando exactamente los nombres siguientes. No hace falta modificar HTML ni JavaScript para cambiar las fotos:
   - `torta_comunion.png`
   - `torta_tiramisu.png`
   - `torta_figura.png`
   - `torta_cumple_rosas.png`
   - `torta_fresas.png`
   - `torta_dospisos.png`
   - `torta_personalizada.png`
   - `alfajores_oreo.png`
   - `alfajores_surtidos.png`
   - `alfajor_orly.png`
   - `alfajor_bonobon.png`
   - `alfajor_triton.png`
   - `berlines.png`
   - `pie_limon.png`
   - `postres_yogurt.png`
   - `calzones_rotos.png`
   - `conos_chocolate.png`
   - `pan_casero.png`
   - `cuchufli.png`
   - `conitos_rellenos.png`
   - `rollitos_canela.png`
- **Textos del hero, testimonios, footer**: directo en `index.html`.

## Notas técnicas

- Sin dependencias ni build tools: HTML + CSS + JS puro.
- Tipografías vía Google Fonts (Fraunces, Mulish, Caveat) — requiere conexión a internet para cargarlas.
- El carrito genera un mensaje de cotización por WhatsApp con productos y cantidades. Los precios se confirman por WhatsApp.
