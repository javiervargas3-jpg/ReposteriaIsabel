# Checklist de entrega — Repostería Isabel (para quien vende el sitio)

## 1. Antes de publicar (bloqueantes)
- [ ] Copiar la carpeta `assets/` junto a `index.html` con estos archivos: `logo.png`, `hero_brand.jpg` y las 21 imágenes de productos (los nombres están en `js/script.js`, campo `img`).
- [ ] Completar los datos legales marcados en amarillo. Buscarlos con: `grep -rn "COMPLETAR" .`
      Datos: nombre/razón social, RUT, domicilio, correo, medios de pago, zonas de entrega/retiro, plazo mínimo de pedido, plazo de cancelación.
- [ ] Confirmar con la dueña que **los testimonios y las cifras (352+ pedidos, 337 clientes) son reales y verificables**. Si no, eliminarlos (publicidad engañosa, Ley 19.496).
- [ ] Confirmar que está de acuerdo con el uso de nombres de marcas (Oreo, Orly, Bon o Bon, Tritón) en los productos; el sitio incluye aviso de no afiliación.
- [ ] Probar en celular real: agregar al carrito, abrir WhatsApp, menú móvil.

## 2. Publicación en Vercel
- [ ] Subir la carpeta completa (con `vercel.json`) a un repositorio de GitHub y conectarlo a Vercel, o usar `vercel --prod`.
- [ ] Verificar cabeceras en https://securityheaders.com (objetivo: A o A+).
- [ ] Si usa dominio propio: apuntarlo en Vercel y confirmar que HTTPS funciona.
- [ ] Opcional recomendado: alojar las tipografías en el propio sitio (evita enviar la IP a Google) y quitar `fonts.googleapis.com` / `fonts.gstatic.com` del CSP en `vercel.json`.

## 3. Qué entregarle a la cliente
- [ ] Código fuente completo (ZIP o repositorio a su nombre) y archivos originales de imágenes/logo.
- [ ] **Titularidad de las cuentas**: proyecto de Vercel y GitHub a su nombre (o transferidos), y dominio registrado a su nombre con las claves de acceso.
- [ ] `GUIA-CLIENTA.md`: cómo cambiar productos, fotos y teléfono.
- [ ] Documento de entrega firmado: qué incluye, qué no (cambios futuros, hosting, dominio), plazo de soporte/garantía y cesión de derechos del diseño y código.
- [ ] Boleta o factura por el servicio (con inicio de actividades en el SII) y condiciones de cobros recurrentes si los hay (dominio, mantención).
- [ ] Autorización por escrito para usar fotos, logo y textos (derechos de imágenes).

## 4. Requisitos del negocio (de la dueña, no del sitio) — recomendar que los revise
- Inicio de actividades en el SII y emisión de boleta.
- Autorización sanitaria de la SEREMI de Salud para elaborar y vender alimentos (Reglamento Sanitario de los Alimentos) y, si vende envasado, rotulado conforme a la Ley 20.606 y su reglamento.
- Ley 21.719 de datos personales: vigencia programada para el 1 de diciembre de 2026; hay un proyecto en trámite para aplazarla. La política de privacidad incluida ya la considera.
- Esto es una guía técnica, no asesoría legal: conviene que un abogado revise los textos legales antes de publicar.
