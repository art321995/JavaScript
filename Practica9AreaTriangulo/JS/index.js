let btnCalcular = document.getElementById("btnCalcularArea");

btnCalcular.addEventListener("click", CalcularArea);

function CalcularArea(){
    let LadoA = Number (document.getElementById("ladoa").value);
    let LadoB = Number (document.getElementById("ladob").value);
    let LadoC = Number (document.getElementById("ladoc").value);
    
    let s = (LadoA + LadoB + LadoC) / 2;
    let resultado = Math.sqrt(s *(s - LadoA) * (s - LadoB) * (s - LadoC));

    let containerResultado = document.getElementById("resultado");

    containerResultado.innerText = 'El area del triangulo es: ' + resultado;
} 