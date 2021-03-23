const btnCalcularRadio = document.getElementById("btnCalcularRadio");

btnCalcularRadio.addEventListener("click", CalcularRadio);

function CalcularRadio(){
    //Las variables pueden o no tener asignacion al momento en el que se declaran
    const radio = document.getElementById("inpRadio").value;
    //Las constantes es necesario que se asignen al mento que se declaran y su Valor es inmutable
    const valorPi = 3.1416;
    
    let resultado = valorPi * (radio * radio);

    const containerRessultado = document.getElementById("resultado");

    //Template literals
    containerRessultado.innerText = 'El area del circulo es:'  + resultado;
}