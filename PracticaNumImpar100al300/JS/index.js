const btnMostrarValores = document.getElementById("btnMostrarValores");

btnMostrarValores.addEventListener("click", almacenarValores);

let numero = [];
let numeroImpar = []; 

function random(min, max){ 
    let numeroAleatorio = Math.floor((Math.random() * (max - min + 1)) + min);
    console.log(numeroAleatorio);
    return numeroAleatorio;
}
function almacenarValores(){ 
    for(let indice=0; indice<30; indice++){
        numero[indice] = random(100,300);
        console.log(numero);
    }
    validarNumeroImpar();
}
function validarNumeroImpar(){

    let indiceImpar = 0;
    for(let indice=0; indice<numero.length; indice++){
        if(numero[indice]%2 != 0){
            numeroImpar[indiceImpar] = numero[indice];
            indiceImpar++;
        }
    }
    mostrarValores();
}
function mostrarValores(){
    let ContResult = document.getElementById("contenedorResultado");
    let resultado = "";

    resultado += `<li class="list-group-item font-weight-bold mt-3">Arreglo Completo</li>`;
    for(let indice=0; indice<numero.length; indice++){
        resultado += `<li class="list-group-item"> [${indice}] = ${numero[indice]} </li>`;
    }
    resultado += `<li class="list-group-item font-weight-bold mt-3">Arreglo Impar</li>`;
    for(let indice=0; indice<numeroImpar.length; indice++){
        resultado += `<li class="list-group-item"> [${indice}] = ${numeroImpar[indice]} </li>`;
    }
    ContResult.innerHTML = resultado;
}