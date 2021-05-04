const inpLongitud = document.getElementById("inpLongitud");
const btnMostrarValores = document.getElementById("btnMostrarValores");
const resultContainer = document.getElementById("resultContainer");


inpLongitud.addEventListener("keydown", determinarLongitud);
btnMostrarValores.addEventListener("click", mostrarValores);

let longitudList = 0;
let array = [];

function random(min, max){
    console.log("ALMACENO"); 
    let numeroAleatorioGenerado = Math.floor((Math.random() * (max - min + 1)) + min);
    console.log(numeroAleatorioGenerado);
    return numeroAleatorioGenerado;
}

function determinarLongitud(event){
    if(event.key != "Enter"){
        return;
    }else if(isNaN(inpLongitud.value) == true){
        alert('Favor de ingresar un número entero')
        return;
    }else if(Number.isInteger(Number(inpLongitud.value)) == false){
        alert('Favor de ingresar un número entero')
        return;
    }else{
        longitud = Number(inpLongitud.value);
    }

    inpLongitud.disabled = true;
    btnMostrarValores.disabled = false;
    almacenarValores();
}

function almacenarValores(){ 
    for(let index=0; index<longitud; index++){
        array[index] = random(0,9);
        console.log(array);
    }
}

function mostrarValores(){
    let resultado = "";
    let suma = 0;

    for(let index=0; index<longitud; index++){
        suma += array[index];
        resultado += `<li class="list-group-item"> Indice ${index} = ${array[index]} </li>`;
    }

    resultado +=`<li class="list-group-item"> La suma de los valores es ${suma} </li>`;

    resultContainer.innerHTML = resultado;
}