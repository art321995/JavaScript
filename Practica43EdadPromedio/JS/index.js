const btnInitApp = document.getElementById("btnInitApp");

btnInitApp.addEventListener("click",calcularPromedio);

function calcularPromedio(){

let AcumuladorCalif = 0;
let ContadorCalif = 0;

let continuar = true;

while(continuar==true){

    let calificacion = prompt(`Ingrese la calificacion numero ${ContadorCalif}`);

    if (calificacion==null){
        continuar = false;
    }else{
        AcumuladorCalif = AcumuladorCalif + Number (calificacion);

        ContadorCalif++;
    }
}

let promedio = AcumuladorCalif / ContadorCalif;

const resultContainer = document.getElementById("resultContainer");

resultContainer.innerHTML="El promedio de las calificaciones es: "+promedio;
}