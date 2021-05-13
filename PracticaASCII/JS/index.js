const btnMostrarValores = document.getElementById("btnMostarValores");

btnMostrarValores.addEventListener("click", alamecanarPalabra);

let result = "";
let ASCII = [];
let palabra = [];


function alamecanarPalabra(){
    let palabra = prompt("Ingrese solo una palabra");
        if(isNaN(palabra) == false && palabra != null){
        alert("Ingrese una palabra");
        }else if(/\s/.test(palabra)){
        alert("Ingrese sola una palabra");
        }else if(palabra == null){
        return;
        }else{
        result += `<div class="mt-3"><br>Palabra original: [${palabra}]</div>`;
        for(let indice=0; indice<palabra.length; indice++){
            let cod = palabra[indice].charCodeAt();
            let cod3 = cod + 3;
            let letras = String.fromCharCode(cod3);
            ASCII.push(letras);
        }
    }
    mostrarPalabra();  
}
function mostrarPalabra(){
    let ContResult = document.getElementById("contenedorResultado");
    result += `<div class="mt-3"><br>Palabra resulante: [${ASCII}]</div>`;
    ContResult.innerHTML = palabraReves;
}