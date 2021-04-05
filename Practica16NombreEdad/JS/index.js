const btnEvlNum = document.getElementById("Calcular");

btnEvlNum.addEventListener("click",evaluarEdad);

function evaluarEdad(){
    const usuario1Edad = Number (document.getElementById("usuario1edad").value);
    const usuario1Nombre = document.getElementById("usuario1nombre").value;
    const usuario2Edad = Number (document.getElementById("usuario2edad").value);
    const usuario2Nombre = document.getElementById("usuario2nombre").value;

    const alertResult = document.getElementById("alertResult");
    if (usuario1Edad > usuario2Edad){
        alertResult.innerHTML = "El mayor es " + usuario1Nombre;
    }
    else{
        alertResult.innerHTML = "El mayor es " + usuario2Nombre;
    } 
}