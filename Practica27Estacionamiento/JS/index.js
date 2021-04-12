const btnCalcularPago = document.getElementById("btnCalcular");

btnCalcularPago.addEventListener("click", calcularPago);

function calcularPago(){

    let Horas = Number (document.getElementById("hora").value);
    let resultado = "";
    

    if(Horas=="" || Horas==0){
        alert(`Es necesario ingresar las horas`);
        return;
    }


    if (Horas <=2){
        resultado = Horas * 5;
    }else if(Horas >=3 && Horas <=4){
        resultado = Horas * 4;
    }else if(Horas >=5 && Horas <10){
        resultado = Horas * 3;
    }else {
        resultado = Horas * 2;
    }

    resultado = `El total a pagar es: $${resultado} `;

    let resultContainer = document.getElementById("resultContainer");

    resultContainer.innerHTML = `<div class="alert alert-danger">${resultado}<div>`;

}