let canva = document.querySelector("[data-areaDibujo]");
let pincel = canva.getContext("2d");

//Dibujar las lineas
const dibujar = (longitud) => {
    let ancho = (300*0.85)/longitud; /* ancho de la inea */
    let numeroEspacios = longitud-1; /* cantidad de espacios */
    let espacio = (300*0.15) / numeroEspacios; //ancho de los espacios

    pincel.lineWidth = 2;
    pincel.lineCap = "round";
    pincel.strokeStyle= "#578def";
    pincel.beginPath();
    
    let x=0;
    for(let i=1;i<=longitud;i++){
        if(numeroEspacios>=0){
            pincel.moveTo(x,124);
            pincel.lineTo(x+ancho,124);
            pincel.stroke(); 
            x+=ancho+espacio;
            numeroEspacios--;
        }
    }
}

/* Dibujar las palabras correctas */
const dibujarPalabraCorrecta = (letra,posicion,longitud) =>{
    let ancho = (300*0.85)/longitud; /* ancho de la inea */
    let numeroEspacios = longitud-1; /* cantidad de espacios */
    let espacio = (300*0.15) / numeroEspacios; //ancho de los espacios

    let x = null;
    
    if(posicion+1 != 1){
        x = (ancho*posicion)+(ancho/3)+espacio*posicion;
    }else{
        x = (ancho/3);
    }
    
    pincel.font= "normal small-caps 700 1.4rem  Inter";
    pincel.fillText(letra,x,120);
}

/* dibujar el munheo */
const dibujarMunheco = (vidas)=>{
    pincel.strokeStyle= "black"; 
    pincel.lineWidth = 1.5; //espesor de la linea
    pincel.beginPath();
    console.log(vidas);
    switch(vidas){
        case 8:
            pincel.strokeStyle= "#578def";
            pincel.moveTo(20,90);
            pincel.lineTo(280,90);
            pincel.moveTo(70,90);
            pincel.lineTo(70,5);
            pincel.stroke(); 
            break;
        case 7:
            pincel.strokeStyle= "#578def";
            pincel.moveTo(70,5);
            pincel.lineTo(210,5);
            pincel.lineTo(210,15);
            pincel.stroke();
            break;
        case 6: //cabeza
            pincel.strokeStyle= "black";
            pincel.arc(210,23,8,0,360);
            pincel.stroke();
            break;
        case 5: 
            pincel.moveTo(210,31);
            pincel.lineTo(210,64);
            pincel.stroke();
            break;
        case 4: //brazos
            pincel.moveTo(210,45);
            pincel.lineTo(200,35);
            pincel.stroke();
            break;
        case 3:
            pincel.moveTo(210,45);
            pincel.lineTo(220,35);
            pincel.stroke();
            break;
        case 2: //piernas
            pincel.moveTo(210,64);
            pincel.lineTo(200,74);
            pincel.stroke();
            break;
        case 1:
            pincel.moveTo(210,64);
            pincel.lineTo(220,74);
            pincel.stroke();
            break;
        default:
            console.log("juego terminado");
            break;
    }

}

/* Borrar lo dibujado */
const limpiarDibujo = () => {
    pincel.clearRect(0,0,canva.width,canva.height); 
}