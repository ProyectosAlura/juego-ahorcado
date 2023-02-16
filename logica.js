const containerInicio = document.querySelector("[data-container-inicio]");
const containerAgregar = document.querySelector("[data-container-agregarPalabra]");

/* Funciones */
const ocultarContenedorPrincipal = (evento) => {
    containerInicio.style.display="none";
}

const ocultarContenedorAgregarPalabra = (evento) =>{
    containerAgregar.style.display="none";
}

/* Eventos */

containerInicio.addEventListener("click",ocultarContenedorPrincipal);
containerAgregar.addEventListener("click",ocultarContenedorAgregarPalabra);
