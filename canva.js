let canva = document.querySelector("[data-areaDibujo]");
let pincel = canva.getContext("2d");

const alturaLineas = 313;
const alturaLetras = 303;
const anchoCanvas = 333;

//Dibujar las lineas
const dibujar = (longitud) => {
    let ancho = (anchoCanvas*0.85)/longitud; /* ancho de la inea */
    let numeroEspacios = longitud-1; /* cantidad de espacios */
    let espacio = (anchoCanvas*0.15) / numeroEspacios; //ancho de los espacios

    pincel.lineWidth = 2;
    pincel.lineCap = "round";
    pincel.strokeStyle= "#578def";
    pincel.beginPath();
    
    let x=0;
    for(let i=1;i<=longitud;i++){
        if(numeroEspacios>=0){
            pincel.moveTo(x,alturaLineas);
            pincel.lineTo(x+ancho,alturaLineas);
            pincel.stroke(); 
            x+=ancho+espacio;
            numeroEspacios--;
        }
    }
}

/* Dibujar las palabras correctas */
const dibujarPalabraCorrecta = (letra,posicion,longitud) =>{
    let ancho = (anchoCanvas*0.85)/longitud; /* ancho de la inea */
    let numeroEspacios = longitud-1; /* cantidad de espacios */
    let espacio = (anchoCanvas*0.15) / numeroEspacios; //ancho de los espacios

    let x = null;
    
    if(posicion+1 != 1){
        x = (ancho*posicion)+(ancho/3)+espacio*posicion;
    }else{
        x = (ancho/3);
    }
    
    pincel.font= "normal small-caps 700 2em  Inter";
    pincel.fillText(letra,x,alturaLetras);
}

/* dibujar el munheo */
const dibujarMunheco = (vidas)=>{
    pincel.strokeStyle= "black"; 
    pincel.lineWidth = 2; //espesor de la linea
    pincel.beginPath();
    console.log(vidas);
    switch(vidas){
        case 8:
            pincel.strokeStyle= "#578def";
            pincel.moveTo(20,250);
            pincel.lineTo((333-20),250);
            pincel.moveTo(((333-40)/4),250); // 1/4
            pincel.lineTo(((333-40)/4),10);
            pincel.stroke();
            break;
        case 7:
            pincel.strokeStyle= "#578def";
            pincel.moveTo(((333-40)/4),10);
            pincel.lineTo(210,10);
            pincel.lineTo(210,30);
            pincel.stroke();
            break;
        case 6: //cabeza
            pincel.strokeStyle= "black";
            pincel.arc(210,(30+25),25,0,360);
            pincel.stroke();
            break;
        case 5: //torso
            pincel.moveTo(210,80);
            pincel.lineTo(210,(250-50)); 
            pincel.stroke();
            break;
        case 4: //brazos
            pincel.moveTo(210,128); //30  
            pincel.lineTo(180,98);
            pincel.stroke();
            break;
        case 3:
            pincel.moveTo(210,128); //30
            pincel.lineTo(240,98);
            pincel.stroke();
            break;
        case 2: //piernas
            pincel.moveTo(210,200); //35
            pincel.lineTo(175,235);
            pincel.stroke();
            break;
        case 1:
            pincel.moveTo(210,200);
            pincel.lineTo(245,235);
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