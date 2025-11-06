const Categorias = document.querySelectorAll(".categoria");

function CambiarCategoria(boton, categoria) {
    Categorias.forEach(b => b.classList.remove("active"));
    boton.classList.add("active");

    const Productos = document.querySelectorAll(".producto");

    Productos.forEach(p => p.classList.add('oculto'));

    setTimeout(() => {
        Productos.forEach(p => {
            if (!p.classList.contains(categoria)) {
                p.style.display = 'none';
            } else {
                p.style.display = 'block';
                setTimeout(() => p.classList.remove('oculto'), 10);
            }
        });

        TituloDot.forEach(t => {
            if (t.classList.contains(categoria)) {
                t.style.display = 'block';
                setTimeout(() => t.classList.remove('oculto'), 10);
            } else {
                t.style.display = 'none';
            }
        });
    }, 500);
}
document.addEventListener('DOMContentLoaded', () => {
    Categorias[0].click();
});

