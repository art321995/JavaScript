const btnCalcularAumento = document.getElementById("btnCalcular");

btnCalcularAumento.addEventListener("click",calcukarAumento);

function calcukarAumento(){

    let tipoTarjeta = document.getElementById("sltTipoTarjeta").value;
    let creditoactual = Number (document.getElementById("credito").value);
    let resultado = "";
    let aumento = 0;

    if(creditoactual=="" || creditoactual==0){
        alert(`Es necesario ingresar el credito actual`);
        return;
    }

    if(tipoTarjeta=="tipo1"){
            aumento = creditoactual * 1.25;
    }else if(tipoTarjeta=="tipo2"){
        aumento = creditoactual * 1.35;
    }else if(tipoTarjeta=="tipo3"){
        aumento = creditoactual * 1.4;
    } else{
        aumento = creditoactual * 1.5;
    }

    resultado = `El total de credito que se le asigno es: $${aumento}`;

    let resultContainer = document.getElementById("resultContainer");

    resultContainer.innerHTML = `<div class="alert alert-success">${resultado}<div>`;
}