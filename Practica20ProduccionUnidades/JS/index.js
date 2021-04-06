const btnIncentivo = document.getElementById("btnCalcular");

btnIncentivo.addEventListener("click",evaluarIncentivos);

function evaluarIncentivos(){
    const Incentivo = Number (document.getElementById("unidades").value);

    const alertResult = document.getElementById("alertResult");
    if (Incentivo >= 100){
        alertResult.innerHTML = "El operario si recibe Incentivo ";
    }
    else{
        alertResult.innerHTML = "El operario no recibe Incentivo ";
    } 
}