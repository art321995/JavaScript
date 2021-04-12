const btnCalcularPresupuesto = document.getElementById("btnCalcular");

btnCalcularPresupuesto.addEventListener("click",calcularPresupuesto);

function calcularPresupuesto(){

    let Presupuesto = Number(document.getElementById("presupuesto").value);
    let Articulo1 = Number(document.getElementById("articulo1").value);
    let Articulo2 = Number(document.getElementById("articulo2").value);
    let Articulo3 = Number(document.getElementById("articulo3").value);
    let Articulo4 = Number(document.getElementById("articulo4").value);
    let resultado = "";
    let suma = Articulo1 + Articulo2 + Articulo3 + Articulo4;

    if(Presupuesto > suma){
            resultado = "El precio está dentro del presupuesto";
    }else{
        resultado = "El precio está fuera de presupuesto";
    }

    let resultContainer = document.getElementById("resultContainer");

    resultContainer.innerHTML = `<div class="alert alert-danger">${resultado}<div>`;
}