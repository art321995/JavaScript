const btnValidarCalificacion = document.getElementById("btnCalcular");

btnValidarCalificacion.addEventListener("click",validarCalif);

function validarCalif(){

    let calif = Number(document.getElementById("calif").value);
    let letra = "";
    let resultado = "";
    
    if(calif <0 || calif>10){
        alert(`Es necesario ingresar un numero del 0 al 10`);
        return;
    }

    if(calif==10){
        letra = "A"
    }else if(calif==9){
        letra = "B"
    }else if(calif==8){
        letra = "C"
    }else if(calif==7 || calif==6){
        letra = "D"
    }else {
        letra = "F"
    }

    resultado = `La calificacion ${calif} es igual a  ${letra}`;

    let resultContainer = document.getElementById("resultContainer");

    resultContainer.innerHTML = `<div class="alert alert-success">${resultado}<div>`;
}