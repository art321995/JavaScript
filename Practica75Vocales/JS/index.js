const inpPalabra = document.getElementById("inpPalabra");
const btnMostrarValores = document.getElementById("btnMostarValores");

inpPalabra.addEventListener('keypress', AlmacenarPalabra);
btnMostrarValores.addEventListener("click", mostrarVocales);

let palabras = [];
let PalabrasConvocales = [];
let indice = 0;

function AlmacenarPalabra(event){
    if(event.key != "Enter"){
        return;
    }
    let palabraIngresada = inpPalabra.value;

    if(palabraIngresada == ""){
        alert("Favor de ingresar una palabra");
        inpPalabra.value="";
        return;
    }else{
        palabras[indice] = palabraIngresada;
        indice++;
    }
    console.log(palabraIngresada[0]);
}

function validarPalabra(){
    let indice1 = 0;

    let letrasPermitidas = ["a","e","i","o","u"];

    for(let indicePalabras = 0; indicePalabras<palabras.length; indicePalabras++){
        for(let indicevocales = 0; indicevocales<letrasPermitidas.length; indicevocales++){
            let isVocal = palabras[indicePalabras].startsWith(letrasPermitidas[indicevocales]);
            if(isVocal == true){
                PalabrasConvocales.push(palabras[indicePalabras]);
                break;
            }
        }
    }
}

function mostrarVocales(){
    const lstPalabras = document.getElementById("contenedorResultado");
    let resultado = "";

    for(let indice=0; indice<PalabrasConvocales.length; indice++){ 
        resultado += `<li class="list-group-item"> Arreglo numero ${indice} cuenta con la palabra ${PalabrasConvocales} </li>`;
    }

    lstPalabras.innerHTML = resultado;
}