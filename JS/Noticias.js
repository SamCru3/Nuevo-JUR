const NoticiaDetalle = document.querySelector(".NoticiaDetalle");
const NoticiaImagen = document.querySelector(".NoticiaImagen");
const Textoh1 = document.querySelector(".Texto h1");
const Textop = document.querySelector(".Texto p");
const OverlayGeneral = document.getElementById("OverlayGeneral");
function AbrirCerrarOverlay(){
    OverlayGeneral.classList.toggle("active");
}
function verMas(noticia){
    AbrirCerrarOverlay()
    NoticiaDetalle.classList.remove("active");
    if(noticia===1){
        NoticiaImagen.style.backgroundImage = "url('Img/VoleyNoticia.png')";
        NoticiaImagen.style.backgroundSize = "cover";
        NoticiaImagen.style.backgroundPosition = "center";
        NoticiaImagen.style.backgroundRepeat = "no-repeat";
        Textoh1.textContent = "Participacion en el campeonato nacional de voley"
        Textop.innerHTML = `El Club Deportivo JUR participó recientemente en el Campeonato Nacional de Voleibol, dejando una destacada impresión gracias a su disciplina, esfuerzo y alto nivel competitivo. Los atletas del club demostraron una preparación sólida, tanto física como estratégica, lo que les permitió enfrentar cada partido con determinación y profesionalismo.<br><br>
        Este logro refleja el compromiso constante del club con la formación integral de sus deportistas, promoviendo valores como la constancia, el trabajo en equipo y el respeto hacia los rivales y árbitros. Durante el campeonato, los jugadores mostraron un desempeño sobresaliente en todas las categorías, logrando posicionarse entre los equipos más competitivos del país.<br><br>
        Además de los resultados deportivos, la participación en este evento representa una oportunidad de crecimiento personal y académico para los atletas, fomentando la disciplina, la responsabilidad y la capacidad de enfrentar desafíos bajo presión. Los entrenadores del Club Deportivo JUR destacaron la importancia de la preparación técnica y táctica, así como del fortalecimiento del espíritu deportivo, aspectos fundamentales para lograr un rendimiento óptimo.<br><br>
        Con esta destacada participación, el Club Deportivo JUR reafirma su compromiso con la excelencia en la formación deportiva y continúa consolidándose como un referente nacional en el voleibol, inspirando a nuevas generaciones de jóvenes a integrarse a sus programas y perseguir metas deportivas con pasión y dedicación.`;
    }
    else if(noticia===2){
        NoticiaImagen.style.backgroundImage = "url('Img/EntrenadorNoticia.png')";
        NoticiaImagen.style.backgroundSize = "cover";
        NoticiaImagen.style.backgroundPosition = "center";
        NoticiaImagen.style.backgroundRepeat = "no-repeat";
        Textoh1.textContent = "Nuevos entrenadores se unen al club"
        Textop.innerHTML = `El Club Deportivo JUR participó recientemente en el Campeonato Nacional de Voleibol, dejando una destacada impresión gracias a su disciplina, esfuerzo y alto nivel competitivo. Los atletas del club demostraron una preparación sólida, tanto física como estratégica, lo que les permitió enfrentar cada partido con determinación y profesionalismo.<br><br>
        Este logro refleja el compromiso constante del club con la formación integral de sus deportistas, promoviendo valores como la constancia, el trabajo en equipo y el respeto hacia los rivales y árbitros. Durante el campeonato, los jugadores mostraron un desempeño sobresaliente en todas las categorías, logrando posicionarse entre los equipos más competitivos del país.<br><br>
        Además de los resultados deportivos, la participación en este evento representa una oportunidad de crecimiento personal y académico para los atletas, fomentando la disciplina, la responsabilidad y la capacidad de enfrentar desafíos bajo presión. Los entrenadores del Club Deportivo JUR destacaron la importancia de la preparación técnica y táctica, así como del fortalecimiento del espíritu deportivo, aspectos fundamentales para lograr un rendimiento óptimo.<br><br>
        JUR da la bienvenida a nuevos entrenadores que fortalecerán nuestros programas de formación. Su experiencia impulsará el desarrollo técnico y personal de nuestros deportistas, aportando nuevas estrategias, métodos modernos de preparación física y entrenamiento personalizado, asegurando que cada atleta alcance su máximo potencial.<br><br>
        Con esta destacada participación y la integración de nuevos talentos en el cuerpo técnico, el Club Deportivo JUR reafirma su compromiso con la excelencia en la formación deportiva y continúa consolidándose como un referente nacional en el voleibol, inspirando a nuevas generaciones de jóvenes a integrarse a sus programas y perseguir metas deportivas con pasión y dedicación.`;
    }
    else if(noticia===3){
        NoticiaImagen.style.backgroundImage = "url('Img/SaludNoticia.png')";
        NoticiaImagen.style.backgroundSize = "cover";
        NoticiaImagen.style.backgroundPosition = "center";
        NoticiaImagen.style.backgroundRepeat = "no-repeat";
        Textoh1.textContent = "Jornada de salud deportiva en JUR";
        Textop.innerHTML = `Se llevó a cabo una exitosa jornada de salud con valoraciones físicas y charlas de bienestar. Los participantes pudieron acceder a chequeos médicos básicos, evaluaciones de condición física y recomendaciones personalizadas para mejorar su bienestar.<br><br>
        Esta iniciativa refuerza nuestro compromiso con la vida activa y saludable, promoviendo hábitos que favorecen tanto la salud física como mental. Además, se ofrecieron talleres sobre nutrición, manejo del estrés y la importancia de la actividad física regular.<br><br>
        La jornada también incluyó dinámicas grupales y actividades recreativas, fomentando la integración social y el trabajo en equipo entre los participantes. Gracias a este tipo de eventos, la comunidad se motiva a adoptar un estilo de vida más consciente y saludable, consolidando nuestro compromiso con el bienestar integral de todos los asistentes.`;
    }
    else {
        NoticiaDetalle.classList.add("active");
    }
}

OverlayGeneral.addEventListener("click", () => {
    AbrirCerrarOverlay()
    NoticiaDetalle.classList.add("active");
})