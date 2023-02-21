// variables
const palabrasSecretas = ["ALURA","HTML","CSS","REACT","NODE","PYTHON","JAVA","GITHUB","GIT","MYSQL"]; 

const sortearPalabra = () => {
  //sortear palabra secreta
  let aleatorio = Math.round(Math.random() * (palabrasSecretas.length - 1)); //Math.round -> redondea al entero mas cercano
  return palabrasSecretas[aleatorio];
};

const verificarRepeticion = (letra,palabra)=> {
  let posiciones = [];
  let i=0;
  while(i<palabra.length){ //verificar si la letra se repite en la palabra
    if(palabra[i]==letra){
      posiciones.push(i);
    }
    i++;
  }
  return posiciones;
}

const insertarLetras = (posiciones,letraSeleccionada,longitudPalabra) =>{
  if(posiciones.length==1){
    dibujarPalabraCorrecta(letraSeleccionada,posiciones[0],longitudPalabra);
  }else{
    posiciones.forEach(pos => {
      dibujarPalabraCorrecta(letraSeleccionada,pos,longitudPalabra);
    });
  }
} 

const verificarVictoria = (numeroLetras) => { //verificar la victoria
  if(numeroLetras==0){
    desplegarMensaje("¡Ganaste!","green");
    return false;
  }
  return true;
}

const verificarDerrota = (vidas) =>{ //Verificar el fin del juego
  if(vidas==0){
    desplegarMensaje("¡Ahorcado!","red");
    return false;
  }
  return true;
}

const iniciarPrograma = () => { //Función principal
  let finalizado=true;
  let vidas = 8;
  let palabraSecreta = sortearPalabra();
  let numeroLetras = palabraSecreta.length;

  dibujar(palabraSecreta.length);

  const eventoClick = (evento) => {
    const elemento = evento.target;
    let letraSeleccionada = elemento.name; //obtener la letra seleccionada

    if (finalizado) { 
      let existe = palabraSecreta.indexOf(letraSeleccionada); //ver si existe la letra en la plabra
    
      if (existe >= 0 ) { //verificar que la letra se encuentre en la palabra
        let valores = verificarRepeticion(letraSeleccionada,palabraSecreta); //verificar si la letra se repite
        numeroLetras-=valores.length; //para verificar si gano
        insertarLetras(valores,letraSeleccionada,palabraSecreta.length); //dibujar las letras
        elemento.style.border = "1.5px solid green";
        elemento.disabled = true;
        finalizado = verificarVictoria(numeroLetras);

      } else { //si no existe se hace esto
        dibujarMunheco(vidas);
        elemento.style.border = "1.5px solid red";
        vidas--;
        finalizado = verificarDerrota(vidas);
      }
    }
  };
  crearTeclado(eventoClick);
};
