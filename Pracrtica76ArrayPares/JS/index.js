const inpLongitud = document.getElementById("inpLongitud");
const btnMostrarValores = document.getElementById("btnMostarValores");

inpLongitud.addEventListener('keypress', AlmacenarNumeros);
btnMostrarValores.addEventListener("click", mostrarValores);

let numero = [];
let numeropar = [];
let longitud = 0;

function MostrarRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function AlmacenarNumeros(event){
    if(event.key != "Enter"){
        return;
    }

    if (isNaN(longitud)){
        alert("Ingresa un numero");
        return;
    }    
    if (longitud == "") {
        alert("Ingresa un numero");
        return;
    }

  }

  function mostrarValores{

    for (i = 0; i < longitud; i++) {        
        numero[i] = randomI(0,256);
        if (numero[i]%2 == 0) {
          numeropar.push(numero[i]);
        }
      }
  }

  function mostrarValores(){
    let resultado = "";
        resultado = `<li class="list-group-item"> Los numeros son: ${numero} <br>
        Los numeros pares son:${numeropar}</li>`;
    resultContainer.innerHTML = resultado;
}