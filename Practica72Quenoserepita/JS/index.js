const inpLongitud = document.getElementById("inpLongitud");
const inpValores = document.getElementById("inpValores");
const btnMostrarValores = document.getElementById("btnMostarValores");

inpValores.disabled = true;
btnMostrarValores.disabled = true;

inpLongitud.addEventListener("keyup", determinarLongitud);
inpValores.addEventListener("keyup", almacenarValores);
btnMostrarValores.addEventListener("click", mostrarValores);

let longitudList = 0;
let indice = 0;
let numeroAlmacenados = [];

function determinarLongitud(event){
    if(event.key != "Enter"){
        return;
    }
    longitudList = Number( inpLongitud.value);
    inpLongitud.disabled = true;
    inpValores.disabled = false;
    btnMostrarValores.disabled = false;
}

function almacenarValores(event){
    if(event.key != "Enter"){
        return;
    }
if (indice >= longitudList){
    alert("Llego al limite de almacenamiento");
    return;
 }

 let valorIngresado = inpValores.value;

 if(valorIngresado == ""){
     alert("for de ingresar un valor");
     inpValores.value="";
     return;
 }

 if(isNaN(valorIngresado)){
    alert("Valor repetido, Favor de ingresar un valor numerico");
    inpValores.value = "";
    return;
}

 for(let indice2 = 0; indice2<=numeroAlmacenados.length; indice2++);{
    
    if(valorIngresado == numeroAlmacenados){
        alert("Valor repetido, Favor de ingresar otro valor distinto");
        inpValores.value = "";
        return;
        }
    }
    numeroAlmacenados[indice]= Number (valorIngresado);
    indice++;
}

function mostrarValores(){
    const lstValoresAlmacenados = document.getElementById("contenedorResultado");

    let mensajeResultado = "";

    for(let indice = 0; indice < numeroAlmacenados.length; indice++){
        mensajeResultado += `<li class="list-group-item">El numero que se encuentra en el indice ${indice} es: ${numeroAlmacenados[indice]}</li>`;
    }

    lstValoresAlmacenados.innerHTML = mensajeResultado;

    numeroAlmacenados =[];
    indice = 0;
}
 

 