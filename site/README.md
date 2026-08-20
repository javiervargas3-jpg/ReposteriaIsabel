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
- **Productos**: edita el arreglo `products` en `js/script.js` (título, descripción, precio, imagen, categoría y mensaje de WhatsApp).
- **Colores y tipografía**: variables `:root` al inicio de `css/style.css`.
- **Fotos**: reemplaza los archivos dentro de `assets/` manteniendo el mismo nombre, o cambia las rutas `img:"assets/..."` en `script.js`.
- **Textos del hero, testimonios, footer**: directo en `index.html`.

## Notas técnicas

- Sin dependencias ni build tools: HTML + CSS + JS puro.
- Tipografías vía Google Fonts (Fraunces, Mulish, Caveat) — requiere conexión a internet para cargarlas.
- Los botones "Contactar" y el collage generan automáticamente un link `https://wa.me/...` con el mensaje ya redactado según el producto.
