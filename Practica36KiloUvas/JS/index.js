const btnCalcularTotal = document.getElementById("btnCalcular");

btnCalcularTotal.addEventListener("click",calcularTotal);

function calcularTotal(){

    let tipoAB = document.getElementById("sltTipoAB").value;
    let tipo12 = document.getElementById("sltTipo12").value;
    let precio = Number (document.getElementById("precio").value);
    let kilo = Number (document.getElementById("kilo").value);
    let total = 0;
    let resultado = "";

    if(tipoAB=="tipoA" && tipo12=="tipo1"){
            total = (precio + .2) * kilo;
    }else if(tipoAB=="tipoA" && tipo12=="tipo2"){
            total = (precio + .3) * kilo;
    }else if(tipoAB=="tipoB" && tipo12=="tipo1"){
        total = (precio - .3) * kilo;
}else{
    total = (precio - .5) * kilo;
}

    resultado = `En total son: $${total}`;

    let resultContainer = document.getElementById("resultContainer");

    resultContainer.innerHTML = `<div class="alert alert-success">${resultado}<div>`;
}