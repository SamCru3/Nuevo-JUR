const formFooter = document.querySelector('.Formulario-Footer');

if (formFooter) {
    formFooter.addEventListener('submit', async function(event) {
        event.preventDefault();

        const email = formFooter.querySelector('input[name="email"]').value.trim();

        if (!email) {
            alert("Por favor ingresa un correo válido.");
            return;
        }

        try {
            const response = await fetch('https://formsubmit.co/ajax/clubdeportivojur@gmail.com', {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email })
            });

            if (!response.ok) throw new Error("Error al enviar");

            alert("✅ Suscripción enviada correctamente. ¡Gracias por unirte!");
            formFooter.reset();
            window.location.href = "index.html";

        } catch (error) {
            console.error(error);
            alert("❌ Hubo un problema al enviar la suscripción, intenta nuevamente.");
        }
    });
}
