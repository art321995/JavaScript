const btnCalcularRegalo = document.getElementById("btnCalcular");

btnCalcularRegalo.addEventListener("click",calcularRegalo);

function calcularRegalo(){

    let Dinero = Number (document.getElementById("dinero").value);
    
    resultado = "";

    if(Dinero <= 10){
        resultado = "Con $"+ Dinero + " Puedes comprar una: Tarjeta de amor";
    }else if(Dinero >10 && Dinero <=100){
        resultado = "Con $"+ Dinero + " Puedes comprar unos: Chocolates";
    }else if(Dinero >100 && Dinero <=250){
        resultado = "Con $"+ Dinero + " Puedes comprar unas: Flores";
    }else{
        resultado = "Con $"+ Dinero + " Puedes comprar un: Anillo"
    }

    

    let resultContainer = document.getElementById("resultContainer");

    resultContainer.innerHTML = `<div class="alert alert-success">${resultado}<div>`;
}