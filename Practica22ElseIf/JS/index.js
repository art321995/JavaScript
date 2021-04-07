const btnCalcularDigitos = document.getElementById("btnCalcular");

btnCalcularDigitos.addEventListener("click",calcularDigitos);

function calcularDigitos(){

    const Numero1 = Number(document.getElementById("numero").value);
     let resultado = "";

    if(Numero1 <= 999){
        resultado = "El numero cuenta con 3 digitos";
        if(Numero1 <= 99){
            resultado = "El numero cuenta con 2 digitos";
            if(Numero1 <= 9){
                resultado = "El numero cuenta con 1 digito";
            }
        }
        
    }
    else{
        resultado = "El numero cuenta con mas de 3 digitos ";
    }

    const containerResult = document.getElementById("containerResult");

    containerResult.innerText = resultado;
}