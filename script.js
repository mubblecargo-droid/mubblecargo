// 🛒 Catálogo de productos
const productos = [
  { id: 1, nombre: "Caja chica (30x30x30)", precio: 800 },
  { id: 2, nombre: "Caja mediana (40x40x40)", precio: 1000 },
  { id: 3, nombre: "Caja grande (50x50x50)", precio: 1200 },
  { id: 4, nombre: "Pack x10 cajas chicas", precio: 7500 },
  { id: 5, nombre: "Pack x10 cajas grandes", precio: 11000 },
  { id: 6, nombre: "Plástico burbuja (10m)", precio: 1800 },
  { id: 7, nombre: "Plástico burbuja (30m)", precio: 4800 },
  { id: 8, nombre: "Espuma flexible (1m x 10m)", precio: 2200 },
  { id: 9, nombre: "Cinta adhesiva transparente", precio: 600 },
  { id: 10, nombre: "Cinta reforzada", precio: 900 },
  { id: 11, nombre: "Pack x5 cintas transparentes", precio: 2800 },
  { id: 12, nombre: "Cutter profesional", precio: 700 },
  { id: 13, nombre: "Marcador indeleble", precio: 400 },
  { id: 14, nombre: "Etiquetas adhesivas (x50)", precio: 1000 },
  { id: 15, nombre: "Pack completo de embalaje", precio: 15000 }
];

let carrito = [];

// 🛍️ Mostrar catálogo en la página
function mostrarCatalogo() {
  const contenedor = document.getElementById("catalogo");
  if (!contenedor) return;

  productos.forEach(prod => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <h3>${prod.nombre}</h3>
      <p>Precio: $${prod.precio}</p>
      <button onclick="agregarAlCarrito(${prod.id})">Agregar al carrito</button>
    `;
    contenedor.appendChild(card);
  });
}

// ➕ Agregar producto al carrito
function agregarAlCarrito(id) {
  const producto = productos.find(p => p.id === id);
  const existente = carrito.find(p => p.id === id);
  if (existente) {
    existente.cantidad += 1;
  } else {
    carrito.push({ ...producto, cantidad: 1 });
  }
  actualizarCarrito();
}

// 🔄 Actualizar contenido del carrito
function actualizarCarrito() {
  const contenedor = document.getElementById("carrito");
  if (!contenedor) return;

  contenedor.innerHTML = "";
  carrito.forEach(p => {
    const item = document.createElement("p");
    item.textContent = `${p.nombre} x${p.cantidad} - $${p.precio * p.cantidad}`;
    contenedor.appendChild(item);
  });

  const total = carrito.reduce((sum, p) => sum + p.precio * p.cantidad, 0);
  const totalItem = document.createElement("p");
  totalItem.innerHTML = `<strong>Total: $${total}</strong>`;
  contenedor.appendChild(totalItem);

  // Botón de WhatsApp
  if (!document.querySelector('.btn-whatsapp')) {
    const boton = document.createElement("button");
    boton.textContent = "Enviar pedido por WhatsApp";
    boton.className = "btn-whatsapp";
    boton.onclick = enviarPedido;
    contenedor.appendChild(boton);
  }
}

// 📤 Enviar pedido por WhatsApp
function enviarPedido() {
  let mensaje = "Hola, quiero pedir:\n";
  carrito.forEach(p => {
    mensaje += `• ${p.nombre} x${p.cantidad} = $${p.precio * p.cantidad}\n`;
  });
  const total = carrito.reduce((sum, p) => sum + p.precio * p.cantidad, 0);
  mensaje += `Total: $${total}`;
  const url = `https://wa.me/56988984202?text=${encodeURIComponent(mensaje)}`;
  window.open(url, "_blank");
}

// 📋 Validación de formulario
const formulario = document.querySelector(".formulario");
if (formulario) {
  formulario.addEventListener("submit", function(e) {
    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    if (!nombre || !email) {
      e.preventDefault();
      alert("Por favor completá los campos obligatorios.");
    }
  });
}

// 📱 Menú hamburguesa
function toggleMenu() {
  const menu = document.querySelector('.menu');
  menu.classList.toggle('active');
}

// 🧠 Inicialización
mostrarCatalogo();
const productos = [
    { id: 1, nombre: "Caja chica (30x30x30)", precio: 800 },
    { id: 2, nombre: "Caja mediana (40x40x40)", precio: 1000 },
    { id: 3, nombre: "Caja grande (50x50x50)", precio: 1200 },
    { id: 4, nombre: "Pack x10 cajas chicas", precio: 7500 },
    { id: 5, nombre: "Pack x10 cajas grandes", precio: 11000 },
    { id: 6, nombre: "Plástico burbuja (10m)", precio: 1800 },
    { id: 7, nombre: "Plástico burbuja (30m)", precio: 4800 },
    { id: 8, nombre: "Espuma flexible (1m x 10m)", precio: 2200 },
    { id: 9, nombre: "Cinta adhesiva transparente", precio: 600 },
    { id: 10, nombre: "Cinta reforzada", precio: 900 },
    { id: 11, nombre: "Pack x5 cintas transparentes", precio: 2800 },
    { id: 12, nombre: "Cutter profesional", precio: 700 },
    { id: 13, nombre: "Marcador indeleble", precio: 400 },
    { id: 14, nombre: "Etiquetas adhesivas (x50)", precio: 1000 },
    { id: 15, nombre: "Pack completo de embalaje", precio: 15000 }
  ];
  
  let carrito = [];
  
  function mostrarCatalogo() {
    const contenedor = document.getElementById("catalogo");
    if (!contenedor) return;
  
    productos.forEach(prod => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <h3>${prod.nombre}</h3>
        <p>Precio: $${prod.precio}</p>
        <button onclick="agregarAlCarrito(${prod.id})">Agregar al carrito</button>
      `;
      contenedor.appendChild(card);
    });
  }
background: linear-gradient(...), url("img/camion-fondo.jpg") ...

  
  function agregarAlCarrito(id) {
    const producto = productos.find(p => p.id === id);
    const existente = carrito.find(p => p.id === id);
    if (existente) {
      existente.cantidad += 1;
    } else {
      carrito.push({ ...producto, cantidad: 1 });
    }
    actualizarCarrito();
  }
  
  function actualizarCarrito() {
    const contenedor = document.getElementById("carrito");
    if (!contenedor) return;
  
    contenedor.innerHTML = "";
    carrito.forEach(p => {
      const item = document.createElement("p");
      item.textContent = `${p.nombre} x${p.cantidad} - $${p.precio * p.cantidad}`;
      contenedor.appendChild(item);
    });
  
    const total = carrito.reduce((sum, p) => sum + p.precio * p.cantidad, 0);
    const totalItem = document.createElement("p");
    totalItem.innerHTML = `<strong>Total: $${total}</strong>`;
    contenedor.appendChild(totalItem);
  
    const boton = document.createElement("button");
    boton.textContent = "Enviar pedido por WhatsApp";
    boton.onclick = enviarPedido;
    contenedor.appendChild(boton);
  }
  
  function enviarPedido() {
    let mensaje = "Hola, quiero pedir:\n";
    carrito.forEach(p => {
      mensaje += `• ${p.nombre} x${p.cantidad} = $${p.precio * p.cantidad}\n`;
    });
    const total = carrito.reduce((sum, p) => sum + p.precio * p.cantidad, 0);
    mensaje += `Total: $${total}`;
    const url = `https://wa.me/549XXXXXXXXXX?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
  }
  
  // Mostrar catálogo si existe
  mostrarCatalogo();
  
  // Validación de formulario (solo si existe en la página actual)
  const formulario = document.querySelector(".formulario");
  if (formulario) {
    formulario.addEventListener("submit", function(e) {
      const nombre = document.getElementById("nombre").value.trim();
      const email = document.getElementById("email").value.trim();
      if (!nombre || !email) {
        e.preventDefault();
        alert("Por favor completá los campos obligatorios.");
      }
    });
  }
  function actualizarCarrito() {
    // ... código para mostrar productos en el carrito ...
  
    // Verificar si el botón ya existe
    if (!document.querySelector('.btn-whatsapp')) {
      const boton = document.createElement('a');
      boton.href = 'https://wa.me/56988984202';
      boton.textContent = 'Enviar pedido por WhatsApp';
      boton.className = 'btn-whatsapp';
      document.querySelector('.carrito').appendChild(boton);
    }
  }
  function toggleMenu() {
  const menu = document.querySelector('.menu');
  menu.classList.toggle('active');
}




