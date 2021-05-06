const inpLongitud = document.getElementById("inpLongitud");
const btnMostrarValores = document.getElementById("btnMostarValores");

inpLongitud.addEventListener('keypress', AlmacenarNumerosPrimos);
btnMostrarValores.addEventListener("click", mostrarValores);


let NumPrimo = [];

function AlmacenarNumerosPrimos(){

    for(let index = 0; index<=1000; index++){
        let numero = Math.floor(Math.random()*(100 - 1 + 1) + 1);
        let isPrimo = ValidarNumeroPrimo(numero);

        if(isPrimo == true){
            NumPrimo[index] = numero;
        }else {
            index--;
        }
    }
}

function ValidarNumeroPrimo(numero){
    for(let divisor = 2; divisor < numero; divisor++)
{
    if(numero % divisor == 0){
    return false;
    }
}
return true;
}

function mostrarValores(){
    const lstValoresAlmacenados = document.getElementById("contenedorResultado");

    let mensajeResultado = "";

    for(let indice = 0; indice < NumPrimo.length; indice++){
        mensajeResultado += `<li class="list-group-item">Indice ${indice} Numero Primo ${NumPrimo[indice]}</li>`;
    }

    lstValoresAlmacenados.innerHTML = mensajeResultado;

    NumPrimo =[];
    index = 0;
}