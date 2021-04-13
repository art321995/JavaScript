const btnCalcularNumero = document.getElementById("btnCalcular");

btnCalcularNumero.addEventListener("click",calcularNumero);

function calcularNumero(){

    let Numero = Number(document.getElementById("numero").value);
    let A = Math.trunc(Numero/1000);
    let B = Numero % 100;
    let C = Math.trunc(Numero/100)
    let D = Numero % 10;
    let resultado= "";

    
    if(Numero >= 10000 ){
        alert(`El numero limite es 9,999`);
        return;
    }

    resultado = "Es igual a " + A + D + " Y ademas "+B + C;

    /*
   if(A == D && C == B){

    resultado = "Este numero "+Numero+" Si es capicúa"

   }else{
    resultado = "Este numero "+Numero+" No es capicúa"
   }*/

    let resultContainer = document.getElementById("resultContainer");

    resultContainer.innerHTML = `<div class="alert alert-danger">${resultado}<div>`;
}