const formFooter = document.querySelector('.Formulario-Footer');

if (formFooter) {
    formFooter.addEventListener('submit', function(event) {
        event.preventDefault();

        const data = new FormData(formFooter);

        fetch("https://formsubmit.co/ajax/clubdeportivojur@gmail.com", {
            method: "POST",
            body: data
        })
        .then(response => response.json())
        .then(data => {
            alert("✅ Suscripción enviada correctamente. ¡Gracias por unirte!");
            formFooter.reset();
        })
        .catch(error => {
            alert("❌ Error al enviar la suscripción, intenta nuevamente.");
            console.error(error);
        });
    });
}
