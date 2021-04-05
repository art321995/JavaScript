const btnEvlNum = document.getElementById("Calcular");

btnEvlNum.addEventListener("click",evaluarNumeros);

function evaluarNumeros(){
    const Numero1 = Number (document.getElementById("numero1").value);
    const Numero2 = Number (document.getElementById("numero2").value);

    const alertResult = document.getElementById("alertResult");
    if (Numero1 > Numero2){
        alertResult.innerHTML = "El numero mayor es " + Numero1;
    }
    else{
        alertResult.innerHTML = "El numero mayor es " + Numero2;
    } 
}