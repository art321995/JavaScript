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

function CalcularDigitosOL(){

    const Numero1 = Number(document.getElementById("numero").value);
     let resultado = "";


     if(Numero1 > 99 && Numero1 <= 999 ){
        resultado = "El numero cuenta 3 digitos ";
     } else if(Numero1 > 9 && Numero1 <=99){
        resultado = "El numero cuenta 2 digitos ";
     } else if(Numero1 > 0 && Numero1 <= 9){
        resultado = "El numero cuenta 1 digito ";
     } else{
        resultado = "El numero cuenta con mas de 3 digitos ";
     }

    const containerResult = document.getElementById("containerResult");
    containerResult.innerText = resultado;
}