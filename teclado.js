//Teclado
const crearTeclado = (eventoClick) =>{
    const contenedorTeclado = document.querySelector("[data-teclado]");
    const letras = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
    const crearBoton = (letra) => {
        const elemento = document.createElement("button");
        elemento.classList.add("contenedor-principal__teclado__boton");
        elemento.innerText=letra;
        elemento.name=letra;
        elemento.addEventListener("click",eventoClick);
        return elemento;
    }
    
    //Creación de botones
    for(let i=0 ; i<letras.length; i++){
        contenedorTeclado.appendChild(crearBoton(letras[i]));
    }

}

const eliminarTeclado = () =>{
    const contenedorTeclado = document.querySelector("[data-teclado]");
    if(contenedorTeclado.children.length>0){
        for(let i=27; i>0; i--){
            contenedorTeclado.removeChild(contenedorTeclado.firstChild);
        }
    }
}

