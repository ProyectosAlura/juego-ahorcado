// variables
const palabrasSecretas = ["ALURA","HTML","CSS","JS","GIT"]; 
const sortearPalabra = () => {
  //sortear palabra secreta
  console.log(palabrasSecretas.length);
  let aleatorio = Math.round(Math.random() * (palabrasSecretas.length - 1)); //Math.round -> redondea al entero mas cercano
  console.log(aleatorio);
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
    desplegarMensaje("¡Fin del juego!","red");
    return false;
  }
  return true;
}

const iniciarPrograma = () => {
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
        console.log("palabra correcta");
        let valores = verificarRepeticion(letraSeleccionada,palabraSecreta); //verificar si la letra se repite
        numeroLetras-=valores.length; //para verificar si gano
        insertarLetras(valores,letraSeleccionada,palabraSecreta.length); //dibujar las letras
        elemento.style.border = "1.5px solid green";
        elemento.disabled = true;
        finalizado = verificarVictoria(numeroLetras);

      } else { //si no existe se hace esto
        console.log("palabra incorrecta");
        dibujarMunheco(vidas);
        elemento.style.border = "1.5px solid red";
        vidas--;
        finalizado = verificarDerrota(vidas);
      }
    }
  };
  crearTeclado(eventoClick);
};

/*
const eventoClick = (evento) => {
    const elemento = evento.target;
    letraSeleccionada = elemento.name;
    console.log("evento");
    console.log(vidas);
    if (vidas >=1) {
      let existe = palabraSecreta.indexOf(letraSeleccionada);
      let valores = verificarRepeticion(letraSeleccionada,palabraSecreta);

      if (existe >= 0) {
        console.log("palabra correcta");
        dibujarPalabraCorrecta(letraSeleccionada,existe,palabraSecreta.length);
        elemento.style.border = "1.5px solid green";
        elemento.disabled = true;
      } else {
        if(vidas==1){
          dibujarMunheco(vidas);
          console.log("palabra incorrecta");
          vidas--;
          console.log("Juego terminado");
          desplegarMensaje("¡Fin del juego!","red");
        }else{
          dibujarMunheco(vidas);
          console.log("palabra incorrecta");
          elemento.style.border = "1.5px solid red";
          vidas--;
        }
      }
    }else{
      console.log("no permitido");
    }
  };
  console.log("paso por aca");
  crearTeclado(eventoClick);
};*/

/* 
const eventoClick = (evento) => {
    const elemento = evento.target;
    letraSeleccionada = elemento.name; //obtener la letra seleccionada
    console.log("evento");
    console.log(vidas);
    if (vidas >=1 && finalizado) { //verificar que se tengan vidas
      let existe = palabraSecreta.indexOf(letraSeleccionada);
    
      if (existe >= 0 ) { //verificar que la letra se encuentre en la palabra
        if(numeroLetras>1){ 
          console.log("palabra correcta");

          let valores = verificarRepeticion(letraSeleccionada,palabraSecreta); //verificar si la letra se repite
          console.log(valores);
          numeroLetras-=valores.length; //para verificar si gano
          insertarLetras(valores,letraSeleccionada,palabraSecreta.length); //dibujar las letras
          elemento.style.border = "1.5px solid green";
          elemento.disabled = true;
        }else if(numeroLetras==1){
          desplegarMensaje("¡Ganaste!","green");
          finalizado=false;
        }

      } else {
        if(vidas==1){
          dibujarMunheco(vidas);
          console.log("palabra incorrecta");
          vidas--;
          console.log("Juego terminado");
          desplegarMensaje("¡Fin del juego!","red");
        }else{
          dibujarMunheco(vidas);
          console.log("palabra incorrecta");
          elemento.style.border = "1.5px solid red";
          vidas--;
        }
      }
    }else{
      console.log("no permitido");
    }
  };
  crearTeclado(eventoClick);
};
*/