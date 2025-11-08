const TituloDot = document.querySelectorAll(".Titulo-dot");
const BotonesMini = document.querySelectorAll(".Catalogo-dot");

function CategoriaInicio(boton, Categoria) {
    BotonesMini.forEach(b => b.classList.remove("active"));
    boton.classList.add("active");

    const Productos = document.querySelectorAll(".producto");

    Productos.forEach(p => p.classList.add('oculto'));
    TituloDot.forEach(t => t.classList.add('oculto'));

    setTimeout(() => {
        Productos.forEach(p => {
            if (!p.classList.contains(Categoria)) {
                p.style.display = 'none';
            } else {
                p.style.display = 'block';
                setTimeout(() => p.classList.remove('oculto'), 10);
            }
        });

        TituloDot.forEach(t => {
            if (t.classList.contains(Categoria)) {
                t.style.display = 'block';
                setTimeout(() => t.classList.remove('oculto'), 10);
            } else {
                t.style.display = 'none';
            }
        });
    }, 500);
}

document.addEventListener('DOMContentLoaded', () => {
    BotonesMini[0].click();
});

