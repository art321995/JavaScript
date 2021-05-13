const btnMostrarValores = document.getElementById("btnMostrarValores");

btnMostrarValores.addEventListener("click", NumerosAlReves);

let Numeros = [0,1,2,3,4,5,6,7,8,9];
let Res = Numeros.length - 1;
let NumReves = [];

function NumerosAlReves(){
    for(let indice=0; indice<Numeros.length; indice++){
        NumReves[Res] = Numeros[indice];
        Res--;
    }
    mostrarValores();
}

function mostrarValores(){
    let ContResult = document.getElementById("contenedorResultado");
    ContResult.innerHTML = palabraReves;

}