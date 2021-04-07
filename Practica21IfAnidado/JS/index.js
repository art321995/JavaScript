const btnEvaluarNumeros = document.getElementById("btnCalcular");

btnEvaluarNumeros.addEventListener("click",evaluarNumeros);

function evaluarNumeros(){
    const Numero1 = Number (document.getElementById("numero1").value);
    const Numero2 = Number (document.getElementById("numero2").value);
    const Numero3 = Number (document.getElementById("numero3").value);
    let resultado = "";

    if(Numero1 > Numero2){
        if(Numero1 > Numero3){
            resultado = "El primer numero es mayor: " + Numero1;
        }else{
            resultado = "El tercer numero es mayor: " + Numero3;
        }
    }else{
        if (Numero2 > Numero3){
            resultado = "El segundo numero es mayor: " + Numero2;
        }else{
            resultado = "El tercer numero es mayor: " + Numero3;
        }
    }

    const containerResult = document.getElementById("containerResult");

    containerResult.innerText = resultado;
}