let btnCalcular = document.getElementById("btnCalcularPago");

btnCalcular.addEventListener("click", Calcularpago);

function Calcularpago(){
    let Hotel = Number (document.getElementById("hotel").value);
    let Comida = Number (document.getElementById("comida").value);
    let Otro = Number (document.getElementById("otro").value);
    

    let resultado = Hotel + Comida + Otro;

    let containerResultado = document.getElementById("resultado");

    containerResultado.innerText = 'El total a pagar del cheque son $'+resultado;
} 