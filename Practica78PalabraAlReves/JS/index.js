const btnApp = document.getElementById("btnMostarValores");

btnApp.addEventListener("click", mostrarPalabra);

let arrayPalabra = [];
let arrayPalabraReves = [];

function almacenarArray(){

    let arrayPalabra = prompt("Ingrese solo una palabra");
        
        if(isNaN(arrayPalabra) == false && arrayPalabra != null){
            alert("Ingrese una palabra");
        }else if(/\s/.test(arrayPalabra)){
            alert("Ingrese sola una palabra");
        }else if(arrayPalabra == null){
            return;
        }else{
            let indiceReves = arrayPalabra.length-1;
            for(let indice = 0; indice<arrayPalabra.length; indice++){
                arrayPalabraReves[indiceReves] = arrayPalabra[indice];
                indiceReves--;
            }
        }
        mostrarPalabra();
}

function mostrarPalabra(){
    let resultContainer = "";
    resultContainer.innerHTML = palabraReves;
}