'use strict';

// ---- Configuración ----
const PHONE = "56981729703";          // +56 9 8172 9703 (formato wa.me: sin "+" ni espacios)
const MAX_QTY = 99;                   // tope por producto
const FALLBACK_IMG = "assets/logo.png";
const cartStorageKey = 'reposteriaIsabelCart';

function waLink(msg){
  return `https://wa.me/${PHONE}?text=${encodeURIComponent(msg)}`;
}

function openWhatsApp(msg){
  window.open(waLink(msg), '_blank', 'noopener,noreferrer');
}

// Escapa texto antes de insertarlo en plantillas HTML (defensa en profundidad contra XSS)
function escapeHTML(value){
  return String(value).replace(/[&<>"']/g, ch => ({
    '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;'
  }[ch]));
}

// ---- Toast ----
let toastTimer;
function showToast(text){
  const t = document.getElementById('toast');
  t.textContent = text;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 2600);
}

// ---- Product data ----
const productImageFolder = "assets/";
const products = [
  {id:"torta_comunion", cat:"Tortas", tag:"Torta", title:"Torta Primera Comunión", desc:"Bizcocho relleno a elección, decorada con guirnalda dorada y el nombre de quien celebra.", img:"torta_comunion.png"},
  {id:"torta_tiramisu", cat:"Tortas", tag:"Torta", title:"Torta Tiramisú", desc:"Capas de bizcocho embebido en café, crema mascarpone y cacao espolvoreado.", img:"torta_tiramisu.png"},
  {id:"torta_figura", cat:"Tortas", tag:"Torta", title:"Torta con Topper 3D", desc:"Base clásica decorada con una figura modelada a mano, ideal para bautizos y cumpleaños.", img:"torta_figura.png"},
  {id:"torta_cumple_rosas", cat:"Tortas", tag:"Torta", title:"Torta Cumpleaños Clásica", desc:"Buttercream blanco con rosas rojas hechas a mano, perfecta para cualquier celebración.", img:"torta_cumple_rosas.png"},
  {id:"torta_fresas", cat:"Tortas", tag:"Torta", title:"Torta Mousse de Frutilla", desc:"Bizcocho suave, mousse cremoso y cobertura de frutillas frescas en almíbar.", img:"torta_fresas.png"},
  {id:"torta_dospisos", cat:"Tortas", tag:"Torta especial", title:"Torta Dos Pisos Floral", desc:"Diseño en dos pisos con flores de buttercream, ideal para eventos grandes.", img:"torta_dospisos.png"},
  {id:"torta_personalizada", cat:"Tortas", tag:"A tu gusto", title:"Torta Personalizada", desc:"Creamos una torta especial con el tema, colores, sabor y decoración que imaginas.", img:"torta_personalizada.png"},
  {id:"alfajores_oreo", cat:"Alfajores", tag:"Alfajor", title:"Alfajores Rellenos de Oreo", desc:"Bizcocho suave cubierto en chocolate premium, relleno con crema de galletas Oreo.", img:"alfajores_oreo.png"},
  {id:"alfajores_surtidos", cat:"Alfajores", tag:"Alfajor", title:"Caja de Alfajores Surtidos", desc:"Variedad de sabores para compartir en celebraciones o disfrutar en casa.", img:"alfajores_surtidos.png"},
  {id:"alfajor_orly", cat:"Alfajores", tag:"Alfajor", title:"Alfajor Orly", desc:"Alfajor artesanal Orly, preparado con una combinación de sabores para disfrutar.", img:"alfajor_orly.png"},
  {id:"alfajor_bonobon", cat:"Alfajores", tag:"Alfajor", title:"Alfajor Bon o Bon", desc:"Alfajor relleno inspirado en el sabor de Bon o Bon, ideal para los amantes del chocolate.", img:"alfajor_bonobon.png"},
  {id:"alfajor_triton", cat:"Alfajores", tag:"Alfajor", title:"Alfajor Tritón", desc:"Una versión artesanal con el clásico sabor de galleta Tritón.", img:"alfajor_triton.png"},
  {id:"berlines", cat:"Individuales", tag:"Postre", title:"Berlinés", desc:"Masa frita esponjosa espolvoreada con azúcar flor, rellena con manjar o crema pastelera.", img:"berlines.png"},
  {id:"pie_limon", cat:"Individuales", tag:"Postre", title:"Pie de Limón", desc:"Base crocante, relleno ácido de limón y un merengue suave tostado a la vista.", img:"pie_limon.png"},
  {id:"postres_yogurt", cat:"Individuales", tag:"Postre", title:"Mini Postres de Torta de Yogurt", desc:"Vasitos individuales frescos y livianos, ideales para eventos y compartir.", img:"postres_yogurt.png"},
  {id:"calzones_rotos", cat:"Pasteleria", tag:"Clásico chileno", title:"Calzones Rotos", desc:"La receta chilena de siempre, crocantes por fuera y espolvoreados con azúcar flor.", img:"calzones_rotos.png"},
  {id:"conos_chocolate", cat:"Pasteleria", tag:"Dulce", title:"Conos Bañados en Chocolate", desc:"Barquillos crocantes bañados en chocolate y coco rallado.", img:"conos_chocolate.png"},
  {id:"pan_casero", cat:"Pasteleria", tag:"Pan", title:"Pan Casero / Pebetes", desc:"Pan amasado tibio y esponjoso, perfecto para el desayuno o once.", img:"pan_casero.png"},
  {id:"cuchufli", cat:"Pasteleria", tag:"Dulce chileno", title:"Cuchuflí", desc:"Barquillo crujiente, perfecto para disfrutar solo o con tu relleno favorito.", img:"cuchufli.png"},
  {id:"conitos_rellenos", cat:"Pasteleria", tag:"Dulce", title:"Conitos Rellenos", desc:"Conitos dulces rellenos y preparados artesanalmente para compartir.", img:"conitos_rellenos.png"},
  {id:"rollitos_canela", cat:"Pasteleria", tag:"Repostería", title:"Rollitos de Canela", desc:"Masa suave enrollada con canela, recién preparada para acompañar tu once.", img:"rollitos_canela.png"},
];


const productsById = new Map(products.map(p => [p.id, p]));
const productImage = product => `${productImageFolder}${product.img}`;

const grid = document.getElementById('productGrid');
const cartToggle = document.getElementById('cartToggle');
const cartPanel = document.getElementById('cartPanel');
const cartBackdrop = document.getElementById('cartBackdrop');
const cartItems = document.getElementById('cartItems');
const cartCount = document.getElementById('cartCount');
const cartBuy = document.getElementById('cartBuy');

// ---- Carrito (solo en el navegador de la persona; no se envía a ningún servidor) ----
let cart = {};

try {
  const savedCart = JSON.parse(localStorage.getItem(cartStorageKey) || '{}');
  if (savedCart && typeof savedCart === 'object' && !Array.isArray(savedCart)) {
    products.forEach(product => {
      const quantity = Number(savedCart[product.id]);
      if (Number.isInteger(quantity) && quantity > 0) cart[product.id] = Math.min(quantity, MAX_QTY);
    });
  }
} catch {
  cart = {};
}

function saveCart(){
  try {
    localStorage.setItem(cartStorageKey, JSON.stringify(cart));
  } catch {
    showToast('No se pudo guardar el carrito en este navegador.');
  }
}

function renderCart(){
  const entries = products.filter(product => cart[product.id]);
  const totalQuantity = entries.reduce((total, product) => total + cart[product.id], 0);
  cartCount.textContent = totalQuantity;
  cartToggle.setAttribute('aria-label', `Abrir carrito, ${totalQuantity} ${totalQuantity === 1 ? 'producto' : 'productos'}`);
  cartBuy.disabled = entries.length === 0;

  if (!entries.length) {
    cartItems.innerHTML = '<p class="cart-empty">Tu carrito está vacío. Agrega algo rico desde el menú.</p>';
    return;
  }

  cartItems.innerHTML = entries.map(product => {
    const id = escapeHTML(product.id);
    const title = escapeHTML(product.title);
    return `
    <article class="cart-item">
      <img src="${escapeHTML(productImage(product))}" alt="" loading="lazy">
      <div class="cart-item-info">
        <h3>${title}</h3>
        <span class="quote-price">Consulte precio por WhatsApp</span>
        <div class="quantity-control" role="group" aria-label="Cantidad de ${title}">
          <button type="button" data-cart-action="decrease" data-product-id="${id}" aria-label="Quitar una unidad de ${title}">−</button>
          <span aria-live="polite">${cart[product.id]}</span>
          <button type="button" data-cart-action="increase" data-product-id="${id}" aria-label="Agregar una unidad de ${title}">+</button>
        </div>
      </div>
      <button class="cart-remove" type="button" data-cart-action="remove" data-product-id="${id}" aria-label="Eliminar ${title} del carrito">×</button>
    </article>`;
  }).join('');
}

// Mientras el carrito está abierto, el resto de la página queda inerte (teclado y lectores de pantalla)
const backgroundSelectors = ['header.site', 'main', 'footer', '#floatWaBtn'];

function setCartOpen(open){
  backgroundSelectors.forEach(selector => {
    const el = document.querySelector(selector);
    if (el) el.inert = open;
  });
  cartPanel.classList.toggle('open', open);
  cartPanel.setAttribute('aria-hidden', String(!open));
  cartPanel.inert = !open;
  cartToggle.setAttribute('aria-expanded', String(open));
  cartBackdrop.hidden = !open;
  document.body.classList.toggle('cart-open', open);
  if (open) document.getElementById('cartClose').focus();
  else cartToggle.focus();
}

// Devuelve false si ya se alcanzó el tope de unidades
function changeCart(productId, action){
  if (!productsById.has(productId)) return true;   // ignora ids que no existen en el catálogo
  const current = cart[productId] || 0;
  let next = current;

  if (action === 'remove') next = 0;
  else if (action === 'increase') next = Math.min(current + 1, MAX_QTY);
  else if (action === 'decrease') next = Math.max(current - 1, 0);
  else return true;

  if (next > 0) cart[productId] = next;
  else delete cart[productId];

  saveCart();
  renderCart();
  return !(action === 'increase' && current >= MAX_QTY);
}

renderCart();

// ---- Catálogo ----
function renderProducts(filter){
  grid.innerHTML = "";
  const list = filter === "all" ? products : products.filter(p => p.cat === filter);
  list.forEach((p, i) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.style.animation = `fadeUp .5s ease both`;
    card.style.animationDelay = (i * 0.04) + 's';
    const title = escapeHTML(p.title);
    card.innerHTML = `
      <div class="card-media">
        <span class="card-tag">${escapeHTML(p.tag)}</span>
        <img src="${escapeHTML(productImage(p))}" alt="${title}" loading="lazy" decoding="async">
      </div>
      <div class="card-body">
        <h3>${title}</h3>
        <p>${escapeHTML(p.desc)}</p>
        <div class="card-footer">
          <div class="price quote-price">Consulte precio<br>por WhatsApp</div>
          <button type="button" class="card-cta" data-product-id="${escapeHTML(p.id)}" aria-label="Agregar ${title} al carrito">
            <span aria-hidden="true">＋</span> Agregar al carrito
          </button>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}
renderProducts('all');

// Las tarjetas agregan al carrito; el checkout envía el pedido combinado por WhatsApp.
grid.addEventListener('click', (e) => {
  const btn = e.target.closest('.card-cta');
  if (!btn) return;
  const product = productsById.get(btn.dataset.productId);
  if (!product) return;
  if (changeCart(product.id, 'increase')) showToast(`Agregamos ${product.title} al carrito`);
  else showToast(`Máximo ${MAX_QTY} unidades por producto. Para pedidos mayores escríbenos por WhatsApp.`);
});

cartToggle.addEventListener('click', () => setCartOpen(true));
document.getElementById('cartClose').addEventListener('click', () => setCartOpen(false));
cartBackdrop.addEventListener('click', () => setCartOpen(false));

cartItems.addEventListener('click', (event) => {
  const button = event.target.closest('[data-cart-action]');
  if (button) changeCart(button.dataset.productId, button.dataset.cartAction);
});

cartBuy.addEventListener('click', () => {
  const orderLines = products
    .filter(product => cart[product.id])
    .map(product => `• ${product.title} — cantidad: ${cart[product.id]}`);
  if (!orderLines.length) return;
  const message = `¡Hola Repostería Isabel! 👋 Quiero cotizar este pedido:\n\n${orderLines.join('\n')}\n\n¿Me pueden confirmar el precio final, disponibilidad y fecha de entrega?`;
  openWhatsApp(message);
});

// ---- Filtros ----
const filterButtons = document.querySelectorAll('.filter-btn');
filterButtons.forEach(b => b.setAttribute('aria-pressed', String(b.classList.contains('active'))));

document.getElementById('filters').addEventListener('click', (e) => {
  const btn = e.target.closest('.filter-btn');
  if (!btn) return;
  filterButtons.forEach(b => {
    b.classList.remove('active');
    b.setAttribute('aria-pressed', 'false');
  });
  btn.classList.add('active');
  btn.setAttribute('aria-pressed', 'true');
  renderProducts(btn.dataset.filter);
});

// ---- Botones genéricos de WhatsApp (nav, footer, flotante) ----
const genericMsg = "¡Hola Repostería Isabel! 👋 Vi su página web y me gustaría hacer una consulta sobre sus productos.";
['navWaBtn', 'footerWaBtn', 'footerWaText', 'floatWaBtn'].forEach(id => {
  const el = document.getElementById(id);
  if (el) el.href = waLink(genericMsg);
});

// ---- CTA de diseño personalizado ----
const customMsg = "¡Hola Repostería Isabel! 👋 Quiero pedir un diseño personalizado (torta o dulce) ✨. Les cuento la idea: tema, colores y fecha:";
document.getElementById('customWaBtn').href = waLink(customMsg);

// ---- Collage de polaroids (decorativo; la 2ª copia se oculta a lectores de pantalla) ----
const marqueeImgs = [
  {id:"torta_dospisos", cap:"tortas de ensueño"},
  {id:"berlines", cap:"rellenos a elección"},
  {id:"pie_limon", cap:"pie de limón"},
  {id:"alfajores_oreo", cap:"alfajores rellenos"},
  {id:"calzones_rotos", cap:"calzones rotos"},
  {id:"torta_personalizada", cap:"temáticas favoritas"},
  {id:"conos_chocolate", cap:"bañados en chocolate"},
  {id:"torta_figura", cap:"toppers a medida"},
  {id:"torta_fresas", cap:"mousse de frutilla"},
  {id:"cuchufli", cap:"cuchuflí artesanal"},
  {id:"rollitos_canela", cap:"rollitos de canela"},
  {id:"alfajor_bonobon", cap:"@reposteria_isabel"},
];

function buildRow(elId){
  const el = document.getElementById(elId);
  [0, 1].forEach(copy => {
    marqueeImgs.forEach(item => {
      const product = productsById.get(item.id);
      if (!product) return;
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'polaroid';
      btn.setAttribute('aria-label', `Cotizar un diseño: ${item.cap}`);
      if (copy === 1) {
        btn.setAttribute('aria-hidden', 'true');
        btn.tabIndex = -1;
      }
      btn.innerHTML = `<img src="${escapeHTML(productImage(product))}" alt="" loading="lazy" decoding="async"><span>${escapeHTML(item.cap)}</span>`;
      btn.addEventListener('click', () => {
        showToast('Abriendo WhatsApp para cotizar tu diseño ✨');
        openWhatsApp(customMsg);
      });
      el.appendChild(btn);
    });
  });
}
buildRow('rowLeft');
buildRow('rowRight');

// ---- Menú móvil ----
const burger = document.getElementById('burgerBtn');
const navLinks = document.getElementById('mainNav');

function setNavOpen(open){
  navLinks.classList.toggle('open', open);
  burger.setAttribute('aria-expanded', String(open));
  burger.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
}
burger.addEventListener('click', () => setNavOpen(!navLinks.classList.contains('open')));
navLinks.addEventListener('click', (e) => { if (e.target.closest('a')) setNavOpen(false); });

// ---- Escape cierra carrito o menú ----
document.addEventListener('keydown', (event) => {
  if (event.key !== 'Escape') return;
  if (cartPanel.classList.contains('open')) setCartOpen(false);
  else if (navLinks.classList.contains('open')) setNavOpen(false);
});

// ---- Si una imagen no carga, se muestra el logo (una sola vez por imagen) ----
document.addEventListener('error', (e) => {
  const img = e.target;
  if (img instanceof HTMLImageElement && !img.dataset.fallback) {
    img.dataset.fallback = '1';
    img.src = FALLBACK_IMG;
  }
}, true);
