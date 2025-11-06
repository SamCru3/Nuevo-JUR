function CambiarEntrenamiento(deporte, boton) {

    document.querySelectorAll('.deporte').forEach(b => b.classList.remove('active'));
    boton.classList.add('active');

    const img = document.getElementById("ImagenDeporte");
    const h2 = document.getElementById("Clubh2");
    const p = document.getElementById("Clubp");
    const horarios = document.querySelector(".club-horarios table");

    if (deporte === "Futbol") {
        img.src = "Img/Futbol.png";
        h2.textContent = "Fútbol — Club Deportivo JUR";
        p.innerHTML = "En el Club Deportivo JUR, el fútbol es más que un deporte: es pasión, disciplina y trabajo en equipo. Formamos jugadores con técnica, estrategia y valores, preparados para brillar dentro y fuera de la cancha. <br>⚡ Entrena con nosotros y vive el verdadero espíritu del fútbol JUR.";
        horarios.innerHTML = `
            <tr><th>Categoría</th><th>Días</th><th>Hora</th></tr>
            <tr><td>Infantiles (6–10 años)</td><td>Lunes, Miércoles, Viernes</td><td>2:00 PM – 3:30 PM</td></tr>
            <tr><td>Juveniles (11–15 años)</td><td>Lunes, Miércoles, Viernes, Sábado</td><td>3:00 PM – 4:45 PM</td></tr>
            <tr><td>Mayores (16+)</td><td>Lunes a Sábado</td><td>5:00 PM – 7:00 PM</td></tr>
        `;
    } 
    else if (deporte === "Baloncesto") {
        img.src = "Img/Baloncesto.png";
        h2.textContent = "Baloncesto — Club Deportivo JUR";
        p.innerHTML = "En el Club Deportivo JUR, el baloncesto impulsa la coordinación, agilidad y trabajo en equipo. Desarrollamos atletas con mentalidad ganadora y pasión por el juego limpio. 🏀 ¡Salta a la cancha con nosotros!";
        horarios.innerHTML = `
            <tr><th>Categoría</th><th>Días</th><th>Hora</th></tr>
            <tr><td>Infantiles (6–10 años)</td><td>Martes y Jueves</td><td>3:00 PM – 4:15 PM</td></tr>
            <tr><td>Juveniles (11–15 años)</td><td>Martes, Jueves, Sábado</td><td>4:30 PM – 6:00 PM</td></tr>
            <tr><td>Mayores (16+)</td><td>Lunes a Viernes</td><td>6:00 PM – 8:00 PM</td></tr>
        `;
    } 
    else if (deporte === "Natacion") {
        img.src = "Img/Natacion.png";
        h2.textContent = "Natación — Club Deportivo JUR";
        p.innerHTML = "En el Club Deportivo JUR, la natación fortalece cuerpo y mente. Enseñamos técnica, resistencia y disciplina en el agua. 🌊 ¡Nada hacia tus metas con nosotros!";
        horarios.innerHTML = `
            <tr><th>Categoría</th><th>Días</th><th>Hora</th></tr>
            <tr><td>Infantiles (6–10 años)</td><td>Lunes, Miércoles, Viernes</td><td>8:00 AM – 9:00 AM</td></tr>
            <tr><td>Juveniles (11–15 años)</td><td>Martes, Jueves, Sábado</td><td>9:30 AM – 11:00 AM</td></tr>
            <tr><td>Mayores (16+)</td><td>Lunes a Viernes</td><td>6:00 PM – 7:30 PM</td></tr>
        `;
    } 
    else if (deporte === "Voleibol") {
        img.src = "Img/Voley.png";
        h2.textContent = "Voleibol — Club Deportivo JUR";
        p.innerHTML = "El voleibol en el Club Deportivo JUR fomenta la confianza, la estrategia y la unión. 🏐 Entrena con pasión y conviértete en un jugador clave en cada partido.";
        horarios.innerHTML = `
            <tr><th>Categoría</th><th>Días</th><th>Hora</th></tr>
            <tr><td>Infantiles (6–10 años)</td><td>Lunes y Miércoles</td><td>3:30 PM – 4:45 PM</td></tr>
            <tr><td>Juveniles (11–15 años)</td><td>Martes, Jueves, Sábado</td><td>4:30 PM – 6:00 PM</td></tr>
            <tr><td>Mayores (16+)</td><td>Viernes y Sábado</td><td>6:00 PM – 8:00 PM</td></tr>
        `;
    } 
    else if (deporte === "Tenis") {
        img.src = "Img/Tenis.png";
        h2.textContent = "Tenis — Club Deportivo JUR";
        p.innerHTML = "El tenis en el Club Deportivo JUR promueve la precisión, la disciplina y la mentalidad ganadora. 🎾 Mejora tu técnica y compite con espíritu deportivo.";
        horarios.innerHTML = `
            <tr><th>Categoría</th><th>Días</th><th>Hora</th></tr>
            <tr><td>Infantiles (6–10 años)</td><td>Martes y Jueves</td><td>2:00 PM – 3:00 PM</td></tr>
            <tr><td>Juveniles (11–15 años)</td><td>Martes, Jueves, Sábado</td><td>3:15 PM – 4:45 PM</td></tr>
            <tr><td>Mayores (16+)</td><td>Lunes a Viernes</td><td>5:00 PM – 7:00 PM</td></tr>
        `;
    }
}
