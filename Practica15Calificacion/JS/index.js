const btnCalif = document.getElementById("Calcular");

btnCalif.addEventListener("click",evaluarCalif);

function evaluarCalif(){
    const Calif1 = Number (document.getElementById("calificacion").value);

    const alertResult = document.getElementById("alertResult");
    if (Calif1 > 6){
        alertResult.innerHTML = "El alumno esta Aprobado ";
    }
    else{
        alertResult.innerHTML = "El alumno esta Reprobado ";
    } 
}