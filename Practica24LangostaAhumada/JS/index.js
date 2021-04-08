const btnCalcularPrecio = document.getElementById("btnCalcular");

btnCalcularPrecio.addEventListener("click",calcularPrecios);

function calcularPrecios(){
    const Precio = Number(document.getElementById("personas").value);
     let resultado = "";
      let total = "";

     if(Precio < 200){
        total= Precio * 95;
        resultado = `<div class = "alert alert-danger"> El platillo por persona te sale en $95.00  +" El total es $"+ total+".00" </div>`;
     } else if(Precio >= 200 && Precio <300){
      total= Precio * 85;
        resultado = `<div class = "alert alert-warning"> El platillo por persona te sale en $85.00 </div>` +" El total es $"+ total+".00";
     } else if(Precio >=300){
      total= Precio * 75;
        resultado = `<div class = "alert alert-success"> El platillo por persona te sale en $75.00 </div>` +" El total es $"+ total+".00";
     }

    const containerResult = document.getElementById("containerResult");
    containerResult.innerHTML = resultado;

}