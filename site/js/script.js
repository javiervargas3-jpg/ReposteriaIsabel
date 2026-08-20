const PHONE = "56987729703";

  function waLink(msg){
    return `https://wa.me/${PHONE}?text=${encodeURIComponent(msg)}`;
  }

  // ---- Product data ----
  const products = [
    {
      id:"torta_comunion", cat:"Tortas", tag:"Torta",
      title:"Torta Primera Comunión",
      desc:"Bizcocho relleno a elección, decorada con guirnalda dorada y el nombre de quien celebra.",
      price:"Desde $35.000", img:"assets/torta_comunion.jpg",
      msg:"¡Hola Repostería Isabel! 👋 Me encantó la Torta de Primera Comunión que vi en su página. Me gustaría cotizarla, ¿me pueden ayudar con precios, sabores disponibles y fecha de entrega?"
    },
    {
      id:"torta_tiramisu", cat:"Tortas", tag:"Torta",
      title:"Torta Tiramisú",
      desc:"Capas de bizcocho embebido en café, crema mascarpone y cacao espolvoreado.",
      price:"Desde $32.000", img:"assets/torta_tiramisu.jpg",
      msg:"¡Hola Repostería Isabel! 👋 Quiero pedir la Torta Tiramisú. ¿Me cuentan tamaños disponibles y tiempos de entrega?"
    },
    {
      id:"torta_figura", cat:"Tortas", tag:"Torta",
      title:"Torta con Topper 3D",
      desc:"Base clásica decorada con una figura modelada a mano, ideal para bautizos y cumpleaños.",
      price:"Desde $30.000", img:"assets/torta_figura.jpg",
      msg:"¡Hola Repostería Isabel! 👋 Me interesa una Torta con Topper 3D personalizado. ¿Podemos coordinar el diseño y precio?"
    },
    {
      id:"torta_cumple_rosas", cat:"Tortas", tag:"Torta",
      title:"Torta Cumpleaños Clásica",
      desc:"Buttercream blanco con rosas rojas hechas a mano, perfecta para cualquier celebración.",
      price:"Desde $28.000", img:"assets/torta_cumple_rosas.jpg",
      msg:"¡Hola Repostería Isabel! 👋 Quiero pedir la Torta Cumpleaños Clásica con rosas. ¿Me pasan info de precios y colores disponibles?"
    },
    {
      id:"torta_fresas", cat:"Tortas", tag:"Torta",
      title:"Torta Mousse de Frutilla",
      desc:"Bizcocho suave, mousse cremoso y cobertura de frutillas frescas en almíbar.",
      price:"Desde $30.000", img:"assets/torta_fresas.jpg",
      msg:"¡Hola Repostería Isabel! 👋 Me interesa la Torta Mousse de Frutilla. ¿Está disponible para pedir esta semana?"
    },
    {
      id:"torta_dospisos", cat:"Tortas", tag:"Torta especial",
      title:"Torta Dos Pisos Floral",
      desc:"Diseño en dos pisos con flores de buttercream, ideal para eventos grandes.",
      price:"Desde $55.000", img:"assets/torta_dospisos.jpg",
      msg:"¡Hola Repostería Isabel! 👋 Estoy planificando un evento y me interesa una Torta Dos Pisos Floral. ¿Me ayudan a cotizarla?"
    },
    {
      id:"alfajores_oreo", cat:"Alfajores", tag:"Alfajor",
      title:"Alfajores Rellenos de Oreo",
      desc:"Bizcocho suave cubierto en chocolate premium, relleno con crema de galletas Oreo.",
      price:"$1.500 c/u", img:"assets/alfajores_oreo.jpg",
      msg:"¡Hola Repostería Isabel! 👋 Quiero pedir Alfajores Rellenos de Oreo. ¿Cuántas unidades vienen por caja y cómo coordinamos la entrega?"
    },
    {
      id:"alfajores_surtidos", cat:"Alfajores", tag:"Alfajor",
      title:"Caja de Alfajores Surtidos",
      desc:"Elige entre Oreo, Bon o Bon, Tritón, Frambuesa o el clásico tradicional.",
      price:"Desde $9.000 la docena", img:"assets/alfajores_surtidos.jpg",
      msg:"¡Hola Repostería Isabel! 👋 Me interesa una Caja de Alfajores Surtidos. ¿Me cuentan qué sabores tienen disponibles ahora?"
    },
    {
      id:"berlines", cat:"Individuales", tag:"Postre",
      title:"Berlinés Rellenos",
      desc:"Masa frita esponjosa espolvoreada con azúcar flor, rellena con manjar o crema pastelera.",
      price:"$1.200 c/u", img:"assets/berlines.jpg",
      msg:"¡Hola Repostería Isabel! 👋 Quiero pedir Berlinés Rellenos. ¿Qué rellenos tienen disponibles y cuál es el mínimo de pedido?"
    },
    {
      id:"pie_limon", cat:"Individuales", tag:"Postre",
      title:"Pie de Limón",
      desc:"Base crocante, relleno ácido de limón y un merengue suave tostado a la vista.",
      price:"Desde $18.000", img:"assets/pie_limon.jpg",
      msg:"¡Hola Repostería Isabel! 👋 Me interesa pedir un Pie de Limón. ¿Tienen disponible para esta semana?"
    },
    {
      id:"postres_yogurt", cat:"Individuales", tag:"Postre",
      title:"Mini Postres de Torta de Yogurt",
      desc:"Vasitos individuales frescos y livianos, ideales para eventos y compartir.",
      price:"Desde $1.500 c/u", img:"assets/postres_yogurt.jpg",
      msg:"¡Hola Repostería Isabel! 👋 Quiero pedir Mini Postres de Torta de Yogurt para un evento. ¿Me pueden dar precio por cantidad?"
    },
    {
      id:"calzones_rotos", cat:"Pasteleria", tag:"Clásico chileno",
      title:"Calzones Rotos",
      desc:"La receta chilena de siempre, crocantes por fuera y espolvoreados con azúcar flor.",
      price:"Docena a pedido", img:"assets/calzones_rotos.jpg",
      msg:"¡Hola Repostería Isabel! 👋 Quiero pedir una docena de Calzones Rotos. ¿Para cuándo los tendrían listos?"
    },
    {
      id:"conos_chocolate", cat:"Pasteleria", tag:"Dulce",
      title:"Conos Bañados en Chocolate",
      desc:"Barquillos crocantes bañados en chocolate y coco rallado.",
      price:"$1.200 c/u", img:"assets/conos_chocolate.jpg",
      msg:"¡Hola Repostería Isabel! 👋 Me interesan los Conos Bañados en Chocolate. ¿Cuál es el mínimo de pedido?"
    },
    {
      id:"pan_casero", cat:"Pasteleria", tag:"Pan",
      title:"Pan Casero / Pebetes",
      desc:"Pan amasado tibio y esponjoso, perfecto para el desayuno o once.",
      price:"Desde $3.000", img:"assets/pan_casero.jpg",
      msg:"¡Hola Repostería Isabel! 👋 Quiero pedir Pan Casero / Pebetes. ¿Tienen disponible para retiro esta semana?"
    },
  ];

  const grid = document.getElementById('productGrid');

  function renderProducts(filter){
    grid.innerHTML = "";
    const list = filter === "all" ? products : products.filter(p => p.cat === filter);
    list.forEach((p, i) => {
      const card = document.createElement('div');
      card.className = 'card';
      card.style.animation = `fadeUp .5s ease both`;
      card.style.animationDelay = (i*0.04)+'s';
      card.innerHTML = `
        <div class="card-media">
          <span class="card-tag">${p.tag}</span>
          <img src="${p.img}" alt="${p.title}" loading="lazy">
        </div>
        <div class="card-body">
          <h3>${p.title}</h3>
          <p>${p.desc}</p>
          <div class="card-footer">
            <div class="price">${p.price}</div>
            <button class="card-cta" data-msg="${encodeURIComponent(p.msg)}" data-title="${p.title}">
              <svg viewBox="0 0 32 32" fill="currentColor"><path d="M16 3C9 3 3.4 8.6 3.4 15.5c0 2.5.7 4.8 1.9 6.8L3 29l6.9-2.2c1.9 1 4.1 1.6 6.1 1.6 7 0 12.6-5.6 12.6-12.5S23 3 16 3zm0 22.7c-2 0-3.9-.5-5.6-1.5l-.4-.2-4.1 1.3 1.3-4-.3-.4c-1.1-1.7-1.7-3.7-1.7-5.8 0-5.8 4.7-10.5 10.6-10.5S26.6 9.7 26.6 15.5 21.9 25.7 16 25.7zm5.8-7.9c-.3-.2-1.9-.9-2.1-1s-.5-.2-.7.2-.8 1-1 1.2-.4.2-.7.1a8.7 8.7 0 0 1-2.6-1.6 9.7 9.7 0 0 1-1.8-2.2c-.2-.3 0-.5.1-.7l.4-.5.3-.4c.1-.2 0-.4 0-.5s-.7-1.6-.9-2.2-.4-.5-.7-.5h-.6a1.2 1.2 0 0 0-.9.4 3.5 3.5 0 0 0-1.1 2.6c0 1.5 1.1 3 1.3 3.2s2.2 3.4 5.3 4.7a6 6 0 0 0 3.7.7 3.1 3.1 0 0 0 2.1-1.5 2.6 2.6 0 0 0 .2-1.5c-.1-.2-.3-.2-.6-.4z"/></svg>
              Contactar
            </button>
          </div>
        </div>
      `;
      grid.appendChild(card);
    });
  }
  renderProducts('all');

  // Card CTA clicks -> WhatsApp with prefilled message per product
  grid.addEventListener('click', (e) => {
    const btn = e.target.closest('.card-cta');
    if(!btn) return;
    const msg = decodeURIComponent(btn.dataset.msg);
    showToast(`Abriendo WhatsApp para pedir: ${btn.dataset.title} 🍰`);
    window.open(waLink(msg), '_blank');
  });

  // Filters
  document.getElementById('filters').addEventListener('click', (e) => {
    const btn = e.target.closest('.filter-btn');
    if(!btn) return;
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderProducts(btn.dataset.filter);
  });

  // Generic WhatsApp buttons (nav, footer, float)
  const genericMsg = "¡Hola Repostería Isabel! 👋 Vi su página web y me gustaría hacer una consulta sobre sus productos.";
  ['navWaBtn','footerWaBtn','footerWaText','floatWaBtn'].forEach(id=>{
    const el = document.getElementById(id);
    if(el) el.href = waLink(genericMsg);
  });

  // Custom design CTA
  const customMsg = "¡Hola Repostería Isabel! 👋 Quiero pedir un diseño personalizado (torta o dulce) ✨. Les cuento la idea: tema, colores y fecha:";
  document.getElementById('customWaBtn').href = waLink(customMsg);

  // Marquee content (polaroid collage)
  const marqueeImgs = [
    {img:"assets/marq_gustito.jpg", cap:"date un gustito"},
    {img:"assets/torta_dospisos.jpg", cap:"tortas de ensueño"},
    {img:"assets/berlines.jpg", cap:"rellenos a elección"},
    {img:"assets/marq_pielimon.jpg", cap:"pie de limón"},
    {img:"assets/alfajores_oreo.jpg", cap:"alfajores rellenos"},
    {img:"assets/calzones_rotos.jpg", cap:"calzones rotos"},
    {img:"assets/marq_kpop.jpg", cap:"temáticas favoritas"},
    {img:"assets/conos_chocolate.jpg", cap:"bañados en chocolate"},
    {img:"assets/marq_figura2.jpg", cap:"toppers a medida"},
    {img:"assets/torta_fresas.jpg", cap:"mousse de frutilla"},
    {img:"assets/marq_pandulce.jpg", cap:"pan dulce"},
    {img:"assets/marq_profile.jpg", cap:"@reposteria_isabel"},
  ];

  function buildRow(elId){
    const el = document.getElementById(elId);
    const doubled = [...marqueeImgs, ...marqueeImgs];
    doubled.forEach(item=>{
      const div = document.createElement('div');
      div.className = 'polaroid';
      div.innerHTML = `<img src="${item.img}" alt="${item.cap}"><span>${item.cap}</span>`;
      div.addEventListener('click', ()=>{
        showToast('Abriendo WhatsApp para cotizar tu diseño ✨');
        window.open(waLink(customMsg), '_blank');
      });
      el.appendChild(div);
    });
  }
  buildRow('rowLeft');
  buildRow('rowRight');

  // Toast helper
  let toastTimer;
  function showToast(text){
    const t = document.getElementById('toast');
    t.textContent = text;
    t.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(()=> t.classList.remove('show'), 2600);
  }

  // Mobile burger -> simple toggle of nav links as dropdown
  const burger = document.getElementById('burgerBtn');
  const navLinks = document.querySelector('nav.links');
  burger.addEventListener('click', ()=>{
    const open = navLinks.style.display === 'flex';
    navLinks.style.display = open ? 'none' : 'flex';
    navLinks.style.flexDirection = 'column';
    navLinks.style.position = 'absolute';
    navLinks.style.top = '68px';
    navLinks.style.right = '20px';
    navLinks.style.background = 'var(--paper)';
    navLinks.style.padding = '18px 24px';
    navLinks.style.borderRadius = '16px';
    navLinks.style.boxShadow = 'var(--shadow)';
  });
