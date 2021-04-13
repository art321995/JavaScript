const btnCalcularCalif = document.getElementById("btnCalcular");

btnCalcularCalif.addEventListener("click",calcularCalificacion);

function calcularCalificacion(){

    let Practica1 = Number(document.getElementById("practica1").value);
    let Practica2 = Number(document.getElementById("practica2").value);
    let Practica3 = Number(document.getElementById("practica3").value);
    let Practica4 = Number(document.getElementById("practica4").value);
    let eliminar = "";

    if(Practica1 < Practica2 && Practica1 < Practica3 && Practica1 < Practica4){
            eliminar= Practica1;
    }else if (Practica2 < Practica1 && Practica2 < Practica3 && Practica2 < Practica4){
        eliminar= Practica2;
    }else if (Practica3 < Practica1 && Practica3 < Practica2 && Practica3 < Practica4){
        eliminar= Practica3;
    }else{
        eliminar = Practica4;
    }

    let resultado = (Practica1 + Practica2 + Practica3 + Practica4 - eliminar)/3;

    let resultContainer = document.getElementById("resultContainer");

    resultContainer.innerHTML = `<div class="alert alert-danger">El promedio es: ${resultado} y la clificacion eliminada es: ${eliminar}<div>`;
}