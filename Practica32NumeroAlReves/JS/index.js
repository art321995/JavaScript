const btnCalcularNumero = document.getElementById("btnCalcular");

btnCalcularNumero.addEventListener("click",calcularNumero);

function calcularNumero(){

    let Numero = Number(document.getElementById("numero").value);
    let A1 = Numero / 100;
    let B1 = Numero -(A1 * 100);
    let A2 = B1 / 10;
    let B2 = B1 - (A2 * 10);

    let resultado= "";

    if(Numero <100 || Numero >1000 ){
        alert(`El numero debe de tener 3 cifras`);
        return;
    }

    if (Numero ==((((B2*10)+A2)*10)+A1)){
        resultado="El numero se escribe al reves igual";
    }else{
        resultado="EL numero no se escribe al reves";
    }

    let resultContainer = document.getElementById("resultContainer");

    resultContainer.innerHTML = `<div class="alert alert-danger">${resultado}<div>`;
}