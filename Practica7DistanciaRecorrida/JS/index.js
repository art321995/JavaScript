let btnCalcular = document.getElementById("btnCalcularDistancia");

btnCalcular.addEventListener("click", CalcularDistancia);

function CalcularDistancia(){
    let velocidad = Number (document.getElementById("tiem").value);
    let tiempo = Number (document.getElementById("vel").value);

    let resultado = velocidad * tiempo;

    let containerResultado = document.getElementById("resultado");

    containerResultado.innerText = 'La distancia es: '  + resultado + ' metros';
} 