document.addEventListener("DOMContentLoaded", () => {
    const Comprita = document.createElement("div");
    Comprita.classList.add("Formulario-Compra");
    Comprita.innerHTML = `
        <div class="DivCompra">
            <h2>Finalizar compra</h2>
            <form id="formCompra">
                <label>Nombre completo:</label>
                <input type="text" id="nombre" name="nombre" required>

                <label>Correo electrónico:</label>
                <input type="email" id="correo" name="correo" required>

                <label>Dirección:</label>
                <input type="text" id="direccion" name="direccion" required>

                <p id="subtotal-Compra" class="subtotal"></p>

                <div class="botones">
                    <button type="submit" class="btn-ComprarF">Confirmar compra</button>
                    <button type="button" id="cerrarCompra" class="btn-CerrarF">Cancelar</button>
                </div>
            </form>
        </div>
    `;
    document.body.appendChild(Comprita);

    document.addEventListener("click", (e) => {
        if (e.target && e.target.id === "finalizar-compra") {
            const subtotalTexto = document.getElementById("total-precio")?.textContent || "";
            document.getElementById("subtotal-Compra").textContent = `Subtotal: ${subtotalTexto}`;
            Comprita.classList.add("active");

            const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
            if (carrito.length > 0) {
                const listaProductos = carrito
                    .map(p => `${p.nombre} (x${p.cantidad}) - ${p.precio}`).join("\n");
                Comprita.dataset.productos = listaProductos;
            } else {
                Comprita.dataset.productos = "Carrito vacío";
            }
        }
    });

    document.getElementById("cerrarCompra").addEventListener("click", () => {
        Comprita.classList.remove("active");
    });

    const formCompra = document.getElementById("formCompra");
    formCompra.addEventListener("submit", async (e) => {
        e.preventDefault();

        const nombre = document.getElementById("nombre").value.trim();
        const correo = document.getElementById("correo").value.trim();
        const direccion = document.getElementById("direccion").value.trim();
        const productos = Comprita.dataset.productos || "Sin productos";

        if (!nombre || !correo || !direccion) {
            alert("Por favor completa todos los campos.");
            return;
        }

        const data = new FormData();
        data.append("Nombre", nombre);
        data.append("Correo", correo);
        data.append("Dirección", direccion);
        data.append("Productos", productos);
        data.append("_subject", "🛒 Nueva compra desde el sitio web");
        data.append("_captcha", "false");
        data.append("_template", "box");

        try {
            const response = await fetch("https://formsubmit.co/ajax/clubdeportivojur@gmail.com", {
                method: "POST",
                body: data
            });

            if (!response.ok) throw new Error("Error al enviar");

            alert(`✅ ¡Gracias por tu compra, ${nombre}! 🛍️`);
            localStorage.removeItem("carrito");
            Comprita.classList.remove("active");

            window.location.href = "index.html";

        } catch (error) {
            console.error("❌ Error al enviar la compra:", error);
            alert("Hubo un problema al enviar la compra. Intenta nuevamente.");
        }
    });
});
