const btnCalcularBono = document.getElementById("btnCalcular");

btnCalcularBono.addEventListener("click",calcularBono);

function calcularBono(){

    let Sueldo = Number (document.getElementById("sueldo").value);
    let Antiguedad = Number (document.getElementById("antiguedad").value);
    let resultado = "";
    let bono1 = 0;
    let bono2 = 0;
    let bonoreal=0;

    if(Antiguedad > 2 && antiguedad < 5){
        bono1 = Sueldo * .20;
    }else {
        bono1 = Sueldo * .30;
    }

    if(Sueldo <=1000){
        bono2 = Sueldo * .25;
    }else if(Sueldo >1000 && Sueldo<=3500) {
        bono2 = Sueldo * .15;
    }else {
        bono2 = Sueldo * .10;
    }

    if (bono1>bono2){
         bonoreal = bono1;
    }else{
        bonoreal = bono2;
    }



    resultado = `Su sueldo actual es de: $${Sueldo} <br>El bono por Antiguedad es de: $${bono1} <br> El bono por Sueldo es de: $${bono2} <br><br>El Bono que se le va a otorgar este mes es de: $${bonoreal}`;

    let resultContainer = document.getElementById("resultContainer");

    resultContainer.innerHTML = `<div class="alert alert-success">${resultado}<div>`;
}