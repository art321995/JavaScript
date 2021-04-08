const btnCalcularPromedio = document.getElementById("btnCalcular");

btnCalcularPromedio.addEventListener("click",calcularPromedios);

function calcularPromedios(){

    const Promedio = Number(document.getElementById("promedio").value);
     let resultado = "";


     if(Promedio >= 9){
        resultado = `<div class = "alert alert-success"> Aprobado </div>`;
     } else if(Promedio >= 6 && Promedio <9){
        resultado = "Regular";
     } else if(Promedio < 6){
        resultado = "Reprobado";
     }

    const containerResult = document.getElementById("containerResult");
    containerResult.innerHTML = resultado;
}