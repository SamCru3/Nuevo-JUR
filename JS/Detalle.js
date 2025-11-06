const DetalleProducto = document.getElementById("ProductoDetalle");

function VerMasProducto(elemento) {
    let productoDiv = elemento.closest(".producto");
    let id;

    if (productoDiv) {
        id = [...productoDiv.classList].find(c => /^[0-9]+$/.test(c));
    } else {
        id = [...elemento.classList].find(c => /^[0-9]+$/.test(c));
    }

    const producto = BaseDeDatosProductos[id];
    if (producto) {
        DetalleProducto.innerHTML = `
            <div class="Detalle-Contenido">
                <button class="CerrarDetalle" onclick="cerrarDetalle()">✖</button>
                <div class="Detalle-Imagen">
                    <img src="${producto.imagen}" alt="Producto">
                </div>
                <div class="Detalle-Info">
                    <h1>${producto.nombre}</h1>
                    <h2>${producto.marca}</h2>
                    <p class="Descripcion">${producto.descripcion}</p>
                    <div class="Detalle-Precio">
                        <span class="PrecioNormal">${producto.precioOriginal}</span>
                        <span class="PrecioDescuento">${producto.precio}</span>
                    </div>
                    <button class="btnAñadir" onclick="AñadirAlCarrito(${producto.id})">Añadir al carrito</button>
                    <div class="Detalle-Adicional">
                        <h3>Detalles adicionales</h3>
                        <ul>
                            <li>${producto.detalle1}</li>
                            <li>${producto.detalle2}</li>
                            <li>${producto.detalle3}</li>
                            <li>${producto.detalle4}</li>
                        </ul>
                    </div>
                </div>
            </div>
        `;
        DetalleProducto.classList.remove("oculto");
    } else {
        console.warn("⚠️ No se encontró producto con el id:", id);
    }
}

function cerrarDetalle() {
    const detalle = document.getElementById("ProductoDetalle");
    detalle.classList.add("oculto");
}