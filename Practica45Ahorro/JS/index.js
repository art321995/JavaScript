const btnInitApp = document.getElementById("btnInitApp");

btnInitApp.addEventListener("click",calcularAhorro);

function calcularAhorro(){

    let ahorroAcumulado = 0;
    const lista = document.getElementById("listamensual");

    for(let x = 1; x <= 12; x++){
        let ahorroMensual = Number (prompt(`Ingrese el ahorro del mes ${x}`));
        ahorroAcumulado = ahorroAcumulado + ahorroMensual;
        lista.innerHTML +=`<li class="list-group-item">El ahorro acumulado en el mes ${x} es: $${ahorroAcumulado}.00`;
    }

    const resultContainer = document.getElementById("resultContainer");

    resultContainer.innerHTML=`EL ahorro que se acumulo en el periodo es de: $${ahorroAcumulado}.00`;
}