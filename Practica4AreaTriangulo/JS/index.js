let btnCalcular = document.getElementById("btnCalcular");

btnCalcular.addEventListener('click', calcularArea);

function calcularArea() {
    let base1 = Number(document.getElementById("Base").value);
    let altura1 = Number(document.getElementById("Altura").value);

    let resultado = (base1 * altura1) / 2;

    let containerResultado = document.getElementById("resultado");

    
   
}