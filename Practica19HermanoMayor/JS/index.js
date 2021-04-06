const btnCaulcularMayor = document.getElementById("btnCalcular");

btnCaulcularMayor.addEventListener("click",calcularHermanoMayor);

function calcularHermanoMayor(){
    const Hermano1 = Number  (document.getElementById("hermano1").value);
    const Hermano2 = Number  (document.getElementById("hermano2").value);
    
    let Mayor = 0;
    const alertResult = document.getElementById("alertResult");
    if (Hermano1 > Hermano2){
        Mayor = Hermano1 - Hermano2;
        alertResult.innerText = "El hermano mayor es de la edad de : " + Hermano1 +  " años y se llevan " + Mayor + " años";
    } else{
        Mayor = Hermano2 - Hermano1;
        alertResult.innerText = "El hermano mayor es de la edad de : " + Hermano2 +  " años y se llevan " + Mayor + " años";
    }
    
    
}