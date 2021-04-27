const inpNumeros = document.getElementById("inpNumeros");
const inpMedia = document.getElementById("btnNumAlmacenados");

let numAlmacenados = [];
let indice = 0;

inpNumeros.addEventListener("keyup",almacenarValores);
inpMedia.addEventListener("click",mostrarMedia);

function almacenarValores(event){

    if(event.key != "Enter"){
        return;
    }

    if (inpNumeros.value == ""){
        alert("Debes de ingresar un numero");
        return;
    }

    if (isNaN(inpNumeros.value)){
        alert("Debes de ingresar un numero");
        return;
    }
    if (indice <= 10){
        numAlmacenados[indice] = Number (inpNumeros.value);
        indice++;
        inpNumeros.value = "";
        console.log(numAlmacenados);
    }else{
        alert("Alcanzo el limite de numeros almacenados")
        inpNumeros.value = "";
    }

}

function mostrarMedia(){
    const lstValoresAlmacenados = document.getElementById("lstValoresAlmacenados");

    let mensajeResultado = "";

    let acumuludor = 0;
    
    for(let indice = 0; indice < numAlmacenados.length; indice++){
        acumuludor += numAlmacenados[indice];
        
    }
    let resultado = acumuludor / numAlmacenados.length;

    mensajeResultado += `<li class="list-group-item">El promedio de los numeros almacenados es ${resultado} </li>`;

    lstValoresAlmacenados.innerHTML = mensajeResultado;

    numAlmacenados =[];
    indice = 0;

}