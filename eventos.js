//Elementos
const containerInicio = document.querySelector("[data-container-inicio]");
const containerAgregarPalabra = document.querySelector("[data-container-agregarPalabra]");
const containerPrincipal = document.querySelector("[data-container-principal]");
const areaTexto = document.querySelector("[data-areaTexto]");
const mensaje = document.querySelector("[data-mensaje]");

//funciones

const iniciar = () => { //inicar programa
    containerInicio.style.display = "none";
    containerPrincipal.style.display = "block";
    iniciarPrograma();
};

const agregarPalabra = () =>{
    containerInicio.style.display="none";
    containerAgregarPalabra.style.display="block";
}

const guardarPalabra = () => {
    let palabra = areaTexto.value.toUpperCase();
    let longitudPalabra = palabra.length;
    if(longitudPalabra >=1 && longitudPalabra<=8){ /*maximo 8 letras */
        const expresion = /^[A-Z-Ñ]+$/; /* solo permitir letras */
        let verificar = expresion.test(palabra);
        if(verificar){
            //Guardar letra
            if(palabrasSecretas.indexOf(palabra)==-1){ //si la palabra no existe
                palabrasSecretas.push(palabra);
                console.log(palabrasSecretas);
                alert("Palabra guardada exitosamente");
                cancelar();
            }else{
                alert("Palabra guardada exitosamente");
                cancelar();
            }
        }else{
            alert("¡Error! la palabra no es válida");
        }
    }else{
        alert("¡Error! Dígite la palabra");
    }
    
}

const cancelar = () =>{
    containerAgregarPalabra.style.display="none";
    containerInicio.style.display="flex";
}

const nuevoJuego = () =>{
    limpiarDibujo();
    eliminarTeclado();
    ocultarMensaje();
    iniciarPrograma();
}

const desistir = () =>{
    containerPrincipal.style.display="none";
    containerInicio.style.display="flex";
    //logica de desistir
    limpiarDibujo();
    eliminarTeclado();
    ocultarMensaje();
}

const desplegarMensaje = (texto,color)=>{
    mensaje.innerText=texto;
    mensaje.style.display="flex";
    mensaje.style.color=color;
}

const ocultarMensaje = () =>{
    mensaje.style.display="none";
    mensaje.innerText="";
}

//botones
const btnIniciar = document.querySelector("[data-boton-iniciar]");
const btnAgregarPalabra = document.querySelector("[data-boton-agregarPalabra]");
const btnCancelar = document.querySelector("[data-boton-cancelar]");
const btnDesistir = document.querySelector("[data-boton-desistir]");
const btnGuardar = document.querySelector("[data-boton-guardar]");
const btnNuevoJuego = document.querySelector("[data-boton-nuevoJuego]");


//Eventos
btnIniciar.addEventListener("click",iniciar);
btnAgregarPalabra.addEventListener("click",agregarPalabra);
btnCancelar.addEventListener("click",cancelar);
btnDesistir.addEventListener("click",desistir);
btnGuardar.addEventListener("click",guardarPalabra);
btnNuevoJuego.addEventListener("click",nuevoJuego);



