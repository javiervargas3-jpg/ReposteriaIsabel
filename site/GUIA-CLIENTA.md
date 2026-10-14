# Guía rápida — cómo mantener tu sitio

## Cambiar el número de WhatsApp
Archivo `js/script.js`, primera línea de configuración:
`const PHONE = "56981729703";` (código de país 56, sin "+" ni espacios).
También cambia el texto visible en `index.html` (busca "WhatsApp: +56 9 8172 9703"), en `privacidad.html` y en `terminos.html`, y el enlace de respaldo `https://wa.me/56981729703`.

## Agregar un producto
1. Sube la foto a la carpeta `assets/` (ideal: cuadrada, formato .webp o .jpg, menos de 300 KB).
2. En `js/script.js`, dentro de la lista `products`, copia una línea y cambia:
   `{id:"nombre_unico", cat:"Tortas", tag:"Torta", title:"Nombre", desc:"Descripción", img:"foto.jpg"}`
   - `cat` debe ser: Tortas, Alfajores, Individuales o Pasteleria.
   - `id` no puede repetirse ni llevar espacios.

## Quitar un producto
Borra su línea en la lista `products`.

## Publicar los cambios
Sube los archivos modificados a GitHub; Vercel publica solo en 1–2 minutos.
