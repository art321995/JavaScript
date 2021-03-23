let btnCalcular = document.getElementById("btnCalcularDistancia");

btnCalcular.addEventListener("click", CalcularDistancia);

function CalcularDistancia(){
    let puntoA = Number (document.getElementById("punA").value);
    let puntoB = Number (document.getElementById("punB").value);

    let resultado = puntoB - puntoA;

    let containerResultado = document.getElementById("resultado");

    containerResultado.innerText = 'La distancia entre los 2 puntos es: '  + resultado;
} 