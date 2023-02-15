const containerInicio = document.querySelector("[data-container-inicio]");

/* Funciones */
const ocultarContenedorPrincipal = (evento) => {
    containerInicio.style.display="none";
}

containerInicio.addEventListener("click",ocultarContenedorPrincipal);

