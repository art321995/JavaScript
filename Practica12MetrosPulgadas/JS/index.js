const btnCalcular = document.getElementById("btnCalcularPulgada");

btnCalcular.addEventListener("click", CalcularPulgadas);

function CalcularPulgadas(){
    const Metros = document.getElementById("metros").value;
  
    const valorPu = 39.3701;
    
    let resultado = valorPu * Metros;

    const containerRessultado = document.getElementById("resultado");


    containerRessultado.innerText = 'Las pulgadas a solicitar son: '  + resultado;
}