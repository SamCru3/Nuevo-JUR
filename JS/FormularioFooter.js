const formFooter = document.querySelector('.Formulario-Footer');

if (formFooter) {
    formFooter.addEventListener('submit', function(event) {
        event.preventDefault();

        const data = new FormData(formFooter);

        fetch(formFooter.action, {
            method: formFooter.method,
            body: data
        })
        .then(response => {
            if (response.ok) {
                alert("✅ Suscripción enviada correctamente. ¡Gracias por unirte!");
                window.location.href = "index.html";
            } else {
                alert("⚠️ Hubo un problema al enviar el formulario. Intenta nuevamente.");
            }
        })
        .catch(error => {
            alert("❌ Error al enviar la suscripción, intenta nuevamente.");
            console.error(error);
        });
    });
}
