const btnCalcularPrecio = document.getElementById("btnCalcular");

btnCalcularPrecio.addEventListener("click",calcularPrecios);

function calcularPrecios(){
    const Precio = Number(document.getElementById("precio").value);
     let resultado = "";

     if(Precio < 200){
        resultado = `<div class = "alert alert-success"> Aprobado </div>`;
     } else if(Numero1 >= 200 && Numero1 <300){
        resultado = "El numero cuenta 2 digitos ";
     } else if(Numero1 > 0 && Numero1 <= 9){
        resultado = "El numero cuenta 1 digito ";
     } else{
        resultado = "El numero cuenta con mas de 3 digitos ";
     }

    const containerResult = document.getElementById("containerResult");
    containerResult.innerText = resultado;

}