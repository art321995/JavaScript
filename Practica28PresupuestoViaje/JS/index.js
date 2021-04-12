const btnCalcularViaje = document.getElementById("btnCalcular");

btnCalcularViaje.addEventListener("click", calcularViaje);

function calcularViaje(){

    let Precio = Number (document.getElementById("precio").value);
    let Presupuesto = Number (document.getElementById("presupuesto").value);
    let Kilometros = Presupuesto / Precio;
    let resultado = "";
    

    if (Kilometros <750 ){
        resultado = "Considere quedarse en Casa";
    }else if(Kilometros >=750 && Kilometros <800){
        resultado = "Puede viajar a Mexico";
    }else if(Kilometros >=800 && Kilometros <1200){
        resultado = "Puede viajar a Puerto Vallarta";
    }else if(Kilometros >=1200 && Kilometros <1800){
        resultado = "Puede viajar a Acapulco";
    }else {
        resultado = "Puede viajar a Cancun";
    }


    let resultContainer = document.getElementById("resultContainer");

    resultContainer.innerHTML = `<div class="alert alert-danger">${resultado}<div>`;

}