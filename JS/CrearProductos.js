function generarProductos() {
    const Contenedor = document.getElementById("productos");
    Contenedor.innerHTML = "";

    for (const id in BaseDeDatosProductos) {
        const p = BaseDeDatosProductos[id];

        const producto = `
            <div class="producto ${p.id} ${p.categoria}">
                <div class="Imagen">
                    <div class="overlay-catalogo"></div>
                    <img src="${p.imagen}">
                    <div class="VerMas" onclick="VerMasProducto(this)">Ver mas</div>
                </div>
                <h2>${p.marca}</h2>
                <h3>${p.nombre}</h3>
                <div class="Precio">
                    <div class="Descuento">
                        <p>${p.precio}</p>
                    </div>
                    <p>${p.precioOriginal}</p>
                </div>
                <button onclick="AñadirAlCarrito(${p.id})">Comprar</button>
            </div>
        `;
        Contenedor.insertAdjacentHTML("beforeend", producto);
    }
}

document.addEventListener("DOMContentLoaded", generarProductos);

