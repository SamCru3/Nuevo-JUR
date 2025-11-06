const BotonesBannerDeportes = document.querySelectorAll(".Opciones-Banner1 button");

function BannerSelection(Boton, Deporte) {

    BotonesBannerDeportes.forEach(b => b.classList.remove('active'));
    Boton.classList.add("active");

    const Deportes = document.querySelectorAll('.Deporte');
    Deportes.forEach(d => {
        d.classList.remove('active');
    });

    const DeporteSeleccionado = document.querySelector(`.Deporte.${Deporte}`);
    if (DeporteSeleccionado) {
        setTimeout(() => {
            DeporteSeleccionado.classList.add('active');
        }, 100);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    BotonesBannerDeportes[0].click();
});
