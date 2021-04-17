const btnInitApp = document.getElementById("btnInitApp");

btnInitApp.addEventListener("click",calcularPago);

function calcularPago(){

    let Total = 0;
    const lista = document.getElementById("listamensual");
    let Pago = Number (prompt("Ingrese el pago por hora: $"));

    for(let x = 1; x <= 6; x++){
        let Horas = Number (prompt(`Ingrese las horas trabajadas en el dia ${x}`));
        Total = Total + Horas; 
        lista.innerHTML +=`<li class="list-group-item">Las horas en el dia ${x} son: ${Horas} hrs`;
        
    }

    let Sueldo = Total * Pago;
    
    const resultContainer = document.getElementById("resultContainer");

    resultContainer.innerHTML=`El sueldo total por las ${Total} horas laboradas son: $${Sueldo}.00`;
}

