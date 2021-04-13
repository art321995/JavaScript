const btnCalcularMultiplo = document.getElementById("btnCalcular");

btnCalcularMultiplo.addEventListener("click",calcularMultiplo);

function calcularMultiplo(){

    let Numero1 = Number(document.getElementById("numero1").value);
    let Numero2 = Number(document.getElementById("numero2").value);

    let resultado = "";

    if(Numero1 > Numero2){
        if(Numero1 % Numero2 == 0 ){
            resultado = "El numero " + Numero1 + " es multiplo del numero " + Numero2;
        }else{
            resultado = "El numero " + Numero1 + " No es multiplo del numero " + Numero2;
        }
    }
    if(Numero2 % Numero1 == 0 ){
        resultado = "El numero " + Numero2 + " es multiplo del numero " + Numero1;
    }else{
        resultado = "El numero " + Numero2 + " No es multiplo del numero " + Numero1;
    }

    let resultContainer = document.getElementById("resultContainer");

    resultContainer.innerHTML = `<div class="alert alert-danger">${resultado}<div>`;


}