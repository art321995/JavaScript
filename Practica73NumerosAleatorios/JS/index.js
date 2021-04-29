const inpLongitud = document.getElementById("inpLongitud");
const btnMostrarValores = document.getElementById("btnMostarValores");

inpLongitud.addEventListener("keyup", determinarLongitud);
btnMostrarValores.addEventListener("click",mostrarValores);

let longitud = 0;
let indice = 0;
let numAleatorio = [];

function determinarLongitud(event){

    if(event.key != "Enter"){
        return;
    }
    longitud = Number(inpLongitud.value);
}

function random (min, max){
    numAleatorio = Math.random();
    return numAleatorio;
}

console.log(numAleatorio);

function almacenarValores(){
    for(let indice = 0; indice<= numAleatorio.length; indice++);{
        numAleatorio = random (0, 9);
    } 
    console.log(numAleatorio);
    numAleatorio[indice] = Number (numAleatorio);
    indice++;
}

function mostrarValores(){
    const lstValoresAlmacenados = document.getElementById("contenedorResultado");

    let mensajeResultado = "";

    for(let indice = 0; indice < numAleatorio.length; indice++){
        mensajeResultado += `<li class="list-group-item">El numero que se encuentra en el indice ${indice} es: ${numAleatorio[indice]}</li>`;
    }

    lstValoresAlmacenados.innerHTML = mensajeResultado;

    numAleatorio =[];
    indice = 0;
}