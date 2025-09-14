/* ─── NAVEGACIÓN PRINCIPAL ─── */
nav {
  background-color: #004e89;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 1000;
}

.nav-header {
  display: flex;
  align-items: center;
  gap: 16px;
}

.menu-toggle {
  display: none;       /* oculto en desktop */
  background: none;
  border: none;
  color: white;
  font-size: 1.8em;
  cursor: pointer;
}

nav .logo {
  font-size: 1.5em;
  font-weight: bold;
}

nav .menu {
  display: flex;       /* visible en desktop */
  list-style: none;
  gap: 20px;
  margin-left: auto;
}

nav .menu li a {
  color: white;
  font-weight: 500;
  text-decoration: none;
}

nav .menu li a:hover {
  color: #90e0ef;
}

/* ─── MENÚ RESPONSIVE ─── */
@media (max-width: 768px) {

  /* Muestro el toggle ☰ */
  .menu-toggle {
    display: block;
  }

  /* Por defecto el menú oculto */
  nav .menu {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 60px;              /* justo debajo de nav */
    left: 0;
    width: 100%;
    background-color: #004e89;
    padding: 20px;
  }

  /* Cuando tiene la clase .active, se muestra */
  nav .menu.active {
    display: flex;
  }

  nav .menu li {
    margin-bottom: 10px;
  }

  nav .menu li a {
    font-size: 1.1em;
  }
}

// 📱 Menú hamburguesa
function toggleMenu() {
  const menu = document.querySelector('nav .menu');
  menu.classList.toggle('active');
}

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

// 🛍️ Mostrar catálogo
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

// ➕ Agregar al carrito
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

// 🔄 Actualizar carrito
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
// 1) Toggle hamburguesa
function toggleMenu() {
  document.querySelector('nav .menu').classList.toggle('active');
}

// 2) Validación básica del formulario
const form = document.getElementById('contacto-form');
const errorsContainer = document.getElementById('form-errors');

form.addEventListener('submit', function (e) {
  const errors = [];
  const nombre = form.nombre.value.trim();
  const emailField = form.email;
  const mensaje = form.mensaje.value.trim();

  if (nombre.length < 3) {
    errors.push('El nombre debe tener al menos 3 caracteres.');
  }

  if (!emailField.validity.valid) {
    errors.push('Ingresa un correo válido.');
  }

  if (mensaje.length < 10) {
    errors.push('El mensaje debe tener al menos 10 caracteres.');
  }

  if (errors.length > 0) {
    e.preventDefault();
    errorsContainer.innerHTML =
      '<ul><li>' + errors.join('</li><li>') + '</li></ul>';
  } else {
    errorsContainer.innerHTML = '';
  }
});

// 🧠 Inicialización
mostrarCatalogo();


