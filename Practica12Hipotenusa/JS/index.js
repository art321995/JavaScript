let btnCalcular = document.getElementById("btnCalcularHipo");

btnCalcular.addEventListener("click", CalcularHipotenusa);

function CalcularHipotenusa(){
    let Cateto1 = Number (document.getElementById("cateto1").value);
    let Cateto2 = Number (document.getElementById("cateto2").value);
    

    let resultado = Math.sqrt((Cateto1 * Cateto1) + (Cateto2 * Cateto2)) ;

    let containerResultado = document.getElementById("resultado");

    containerResultado.innerText = 'La hipotenusa del triangulo es ' + resultado;
} 