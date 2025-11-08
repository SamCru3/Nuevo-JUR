const inputBusqueda = document.querySelector('.barra-busqueda input') || document.getElementById('inputBuscar');

if (inputBusqueda) {
    const contenedorSugerencias = document.createElement('div');
    contenedorSugerencias.classList.add('sugerencias-lista');
    inputBusqueda.parentNode.style.position = 'relative';
    inputBusqueda.parentNode.appendChild(contenedorSugerencias);

    inputBusqueda.addEventListener('input', () => {
        const texto = inputBusqueda.value.toLowerCase().trim();
        contenedorSugerencias.innerHTML = '';

        if (texto === '') {
            contenedorSugerencias.style.display = 'none';
            return;
        }

        const productosFiltrados = Object.values(BaseDeDatosProductos).filter(producto =>
            producto.nombre.toLowerCase().includes(texto) ||
            producto.descripcion.toLowerCase().includes(texto)
        );

        if (productosFiltrados.length === 0) {
            contenedorSugerencias.innerHTML = '<p class="sin-resultados">No se encontraron productos</p>';
            contenedorSugerencias.style.display = 'block';
            return;
        }

        productosFiltrados.forEach(producto => {
            const item = document.createElement('div');
            item.classList.add('sugerencia-item', producto.id);
            item.innerHTML = `
                <div class="sugerencia-info ${producto.id}">
                    <img src="${producto.imagen}" alt="${producto.nombre}">
                    <div>
                        <p class="nombre">${producto.nombre}</p>
                        <p class="precio">${producto.precio}</p>
                    </div>
                </div>
            `;

            item.setAttribute("onclick", "VerMasProducto(this)");

            contenedorSugerencias.appendChild(item);
        });

        contenedorSugerencias.style.display = 'block';
    });

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.barra-busqueda')) {
            contenedorSugerencias.style.display = 'none';
        }
    });
}
