let btnCalcular = document.getElementById("btnCalcularPago");

btnCalcular.addEventListener("click", Calcularpago);

function Calcularpago(){
    let Altura1 = Number (document.getElementById("Altura").value);
    let Ancho1 = Number (document.getElementById("Ancho").value);
    let Largo1 = Number (document.getElementById("Largo").value);
    let Precio = Number (document.getElementById("Mt2").value);

    let volumen = (Altura1 * Ancho1 * Largo1);
    
    let resultado = volumen * Precio;

    let containerResultado = document.getElementById("resultado");

    containerResultado.innerText = 'La alberca mide '  + volumen + ' Mt2 Y el Total a pagar es de $' + resultado + ' Pesos';
} 
