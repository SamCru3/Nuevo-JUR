let Carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const Notificacion = document.querySelector(".NotificacionCompra");

function NotificacionCompra(){
    Notificacion.classList.add("active");
    setTimeout(() => Notificacion.classList.remove('active'), 2000);
}


function AñadirAlCarrito(IdProducto){
    const producto = BaseDeDatosProductos[IdProducto];
    const existente = Carrito.find(item => item.nombre === producto.nombre);
    if(existente){
        existente.cantidad++;
    } else {
        Carrito.push({
            id: IdProducto,
            imagen: producto.imagen,
            nombre: producto.nombre,
            precio: producto.precio,
            precioOriginal: producto.precioOriginal,
            cantidad: 1
        });
    }
    ActualizarCarrito();
    NotificacionCompra();
    GuardarCarrito();
} 

function ActualizarCarrito(){
    const Contenedor = document.getElementById("Carrito");
    Contenedor.innerHTML = "";

    let subtotal = 0;

    Carrito.forEach(item => {
        const precioNum = parseInt(item.precio.replace(/\D/g, ''));
        subtotal += precioNum * item.cantidad;

        const div = document.createElement("div");
        div.classList.add("Carrito-Producto");
        div.innerHTML = `
            <img src="${item.imagen}" alt="Producto">
            <div class="Carrito-Texto">
                <p class="nombre">${item.nombre}</p>
                <p class="precio">${item.precio}${item.precioOriginal ? ' <span>' + item.precioOriginal + '</span>' : ''}</p>
                <div class="cantidad-control">
                    <button class="btn-restar" onclick="DisminuirCantidad(${item.id})">-</button>
                    <span class="cantidad">${item.cantidad}</span>
                    <button class="btn-aumentar" onclick="AumentarCantidad(${item.id})">+</button>
                </div>
            </div>
            <button class="btn-quitar" onclick="QuitarProducto(${item.id})">&times;</button>
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
    badge.textContent = Carrito.reduce((acc, item) => acc + item.cantidad, 0);
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

function GuardarCarrito() {
    localStorage.setItem("carrito", JSON.stringify(Carrito));
}

window.onload = ActualizarCarrito;