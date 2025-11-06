(() => {

  let Carrito = JSON.parse(localStorage.getItem("carrito")) || [];

  const $ = sel => document.querySelector(sel);
  const $$ = sel => Array.from(document.querySelectorAll(sel));

  const Notificacion = $(".NotificacionCompra") || null;
  function NotificacionCompra(){
    if (!Notificacion) return;
    Notificacion.classList.add("active");
    setTimeout(() => Notificacion.classList.remove('active'), 2000);
  }

  if (typeof BaseDeDatosProductos === "undefined") {
    console.warn("Advertencia: BaseDeDatosProductos no existe. Asegúrate de cargar BaseDatos.js antes de este archivo.");
  }

  function GuardarCarrito() {
    localStorage.setItem("carrito", JSON.stringify(Carrito));
  }

  function AñadirAlCarrito(IdProducto){
    const producto = BaseDeDatosProductos?.[IdProducto];
    if (!producto) {
      console.error("AñadirAlCarrito: producto no encontrado:", IdProducto);
      return;
    }
    const existente = Carrito.find(item => item.id === IdProducto);
    if(existente){
        existente.cantidad++;
    } else {
        Carrito.push({
            id: IdProducto,
            imagen: producto.imagen,
            nombre: producto.nombre,
            precio: producto.precio,
            precioOriginal: producto.precioOriginal || "",
            cantidad: 1
        });
    }
    ActualizarCarrito();
    NotificacionCompra();
    GuardarCarrito();
  }

  function AumentarCantidad(IdProducto) {
    const item = Carrito.find(p => p.id === IdProducto);
    if(item) item.cantidad++;
    ActualizarCarrito();
    GuardarCarrito();
  }

  function DisminuirCantidad(IdProducto) {
    const item = Carrito.find(p => p.id === IdProducto);
    if(item){
        if(item.cantidad > 1){
            item.cantidad--;
        } else {
            Carrito = Carrito.filter(p => p.id !== IdProducto);
        }
    }
    ActualizarCarrito();
    GuardarCarrito();
  }

  function QuitarProducto(IdProducto) {
    Carrito = Carrito.filter(p => p.id !== IdProducto);
    ActualizarCarrito();
    GuardarCarrito();
  }

  window.AñadirAlCarrito = AñadirAlCarrito;
  window.AumentarCantidad = AumentarCantidad;
  window.DisminuirCantidad = DisminuirCantidad;
  window.QuitarProducto = QuitarProducto;

  function ActualizarCarrito(){
    const Contenedor = document.getElementById("Carrito");
    if (!Contenedor) {
      console.warn("ActualizarCarrito: no se encontró #Carrito en DOM");
      return;
    }
    Contenedor.innerHTML = "";

    let subtotal = 0;

    Carrito.forEach(item => {
        const precioNum = parseInt(String(item.precio || "").replace(/\D/g, '')) || 0;
        subtotal += precioNum * (item.cantidad || 0);

        const div = document.createElement("div");
        div.classList.add("Carrito-Producto");
        div.innerHTML = `
            <img src="${item.imagen}" alt="Producto">
            <div class="Carrito-Texto">
                <p class="nombre">${item.nombre}</p>
                <p class="precio">${item.precio || ''}${item.precioOriginal ? ' <span>' + item.precioOriginal + '</span>' : ''}</p>
                <div class="cantidad-control">
                    <button class="btn-restar" data-id="${item.id}">-</button>
                    <span class="cantidad">${item.cantidad}</span>
                    <button class="btn-aumentar" data-id="${item.id}">+</button>
                </div>
            </div>
            <button class="btn-quitar" data-id="${item.id}">&times;</button>
        `;
        Contenedor.appendChild(div);
    });

    const resumen = document.createElement("div");
    resumen.classList.add("Carrito-Resumen");
    resumen.innerHTML = `
        <p class="subtotal">Subtotal: <span id="total-precio">$${subtotal.toLocaleString()}</span></p>
        <button class="btn-comprar" id="finalizar-compra">Comprar</button>
    `;
    Contenedor.appendChild(resumen);

    const badge = document.getElementById("badge");
    if (badge) badge.textContent = Carrito.reduce((acc, item) => acc + (item.cantidad || 0), 0);
  }

  document.addEventListener("click", (e) => {
    if (e.target.matches(".btn-aumentar")) {
      const id = Number(e.target.dataset.id);
      AumentarCantidad(id);
    } else if (e.target.matches(".btn-restar")) {
      const id = Number(e.target.dataset.id);
      DisminuirCantidad(id);
    } else if (e.target.matches(".btn-quitar")) {
      const id = Number(e.target.dataset.id);
      QuitarProducto(id);
    }
  });

  window.abrirCarrito = function abrirCarrito() {
    const overlay = $(".OverlayGeneral");
    const carritoEl = $(".Carrito");
    if (overlay) overlay.classList.add("active");
    if (carritoEl) carritoEl.classList.add("open");
  };

  window.cerrarCarrito = function cerrarCarrito() {
    const overlay = $(".OverlayGeneral");
    const carritoEl = $(".Carrito");
    if (overlay) overlay.classList.remove("active");
    if (carritoEl) carritoEl.classList.remove("open");
  };

  let Comprita = null;
  function crearModalCompraSiNoExiste(){
    if (Comprita) return Comprita;
    Comprita = document.createElement("div");
    Comprita.className = "Formulario-Compra";
    Comprita.innerHTML = `
      <div class="DivCompra">
          <h2>Finalizar compra</h2>
          <form id="formCompra">
              <label>Nombre completo:</label>
              <input type="text" id="nombre" name="nombre" required>

              <label>Correo electrónico:</label>
              <input type="email" id="correo" name="correo" required>

              <label>Dirección:</label>
              <input type="text" id="direccion" name="direccion" required>

              <p id="subtotal-Compra" class="subtotal"></p>

              <div class="botones">
                  <button type="submit" class="btn-ComprarF">Confirmar compra</button>
                  <button type="button" id="cerrarCompra" class="btn-CerrarF">Cancelar</button>
              </div>
          </form>
      </div>
    `;
    document.body.appendChild(Comprita);

    Comprita.querySelector("#cerrarCompra")?.addEventListener("click", () => {
      Comprita.classList.remove("active");
    });

    const formCompra = Comprita.querySelector("#formCompra");
    formCompra?.addEventListener("submit", async (e) => {
      e.preventDefault();
      const nombre = (Comprita.querySelector("#nombre")?.value || "").trim();
      const correo = (Comprita.querySelector("#correo")?.value || "").trim();
      const direccion = (Comprita.querySelector("#direccion")?.value || "").trim();
      const productos = Comprita.dataset.productos || "Sin productos";

      if (!nombre || !correo || !direccion) {
        alert("Por favor completa todos los campos.");
        return;
      }

      const data = new FormData();
      data.append("Nombre", nombre);
      data.append("Correo", correo);
      data.append("Dirección", direccion);
      data.append("Productos", productos);
      data.append("_subject", "🛒 Nueva compra desde el sitio web");
      data.append("_captcha", "false");
      data.append("_template", "box");

      try {
        const resp = await fetch("https://formsubmit.co/ajax/clubdeportivojur@gmail.com", {
          method: "POST",
          body: data
        });

        if (!resp.ok) throw new Error("Error al enviar");

        alert(`✅ ¡Gracias por tu compra, ${nombre}! 🛍️`);
        localStorage.removeItem("carrito");
        Carrito = [];
        ActualizarCarrito();
        Comprita.classList.remove("active");

        window.location.href = "index.html";
      } catch (err) {
        console.error("Error al enviar compra:", err);
        alert("Hubo un problema al enviar la compra. Intenta nuevamente.");
      }
    });

    return Comprita;
  }

  document.addEventListener("click", (e) => {
    if (e.target && e.target.id === "finalizar-compra") {

      const modal = crearModalCompraSiNoExiste();

      const subtotalTexto = document.getElementById("total-precio")?.textContent || "$0";
      const subtotalElem = modal.querySelector("#subtotal-Compra");
      if (subtotalElem) subtotalElem.textContent = `Subtotal: ${subtotalTexto}`;

      const carritoLocal = JSON.parse(localStorage.getItem("carrito")) || Carrito;
      if (carritoLocal.length > 0) {
        const listaProductos = carritoLocal
          .map(p => `${p.nombre} (x${p.cantidad}) - ${p.precio}`)
          .join("\n");
        modal.dataset.productos = listaProductos;
      } else {
        modal.dataset.productos = "Carrito vacío";
      }

      modal.classList.add("active");
    }
  });

  window.addEventListener("load", () => {
    try {
      ActualizarCarrito();
      console.log("Carrito cargado. Items:", Carrito.length);
    } catch (e) {
      console.error("Error inicializando carrito:", e);
    }
  });

})(); 
