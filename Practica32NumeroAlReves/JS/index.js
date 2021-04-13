const btnCalcularNumero = document.getElementById("btnCalcular");

btnCalcularNumero.addEventListener("click",calcularNumero);

function calcularNumero(){

    let Numero = Number(document.getElementById("numero").value);
    let A = Math.trunc(Numero/100);
    let B = Numero % 10;
    let resultado= "";

    if(Numero <100 || Numero >1000 ){
        alert(`El numero debe de tener 3 cifras`);
        return;
    }

   if(A == B){

    resultado = "Este numero "+Numero+" Si se le igual al reves"

   }else{
    resultado = "Este numero "+Numero+" No se le igual al reves"
   }

    let resultContainer = document.getElementById("resultContainer");

    resultContainer.innerHTML = `<div class="alert alert-danger">${resultado}<div>`;
}