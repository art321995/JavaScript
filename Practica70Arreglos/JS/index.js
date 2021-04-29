const inpNumeros = document.getElementById("inpNumeros");
const inpNumeros2 = document.getElementById("btnNumAlmacenados");

let numAlmacenados = [];
let indice = 0;

inpNumeros.addEventListener("keyup",almacenarValores);
inpNumeros2.addEventListener("click",mostrarValores);

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

function mostrarValores(){
    const lstValoresAlmacenados = document.getElementById("lstValoresAlmacenados");

    let mensajeResultado = "";
    
    for(let indice = 0; indice < numAlmacenados.length; indice++){
        mensajeResultado += `<li class="list-group-item">El numero que se encuentra en el indice ${indice} es: ${numAlmacenados[indice]}</li>`;
    }

    lstValoresAlmacenados.innerHTML = mensajeResultado;

    numAlmacenados =[];
    indice = 0;

}