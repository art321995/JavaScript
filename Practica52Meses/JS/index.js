const btnInitApp = document.getElementById("btnInitApp");

btnInitApp.addEventListener("click",imprimirMes);

function imprimirMes(){
    let mensualidadAcumulado = "";
    let mensualidad = 10;
    let total = 0;


    for(let i=1;i<=20;i++){
        if(i == 1){
            mensualidad = mensualidad
            mensualidadAcumulado += `<li class="list-group-item"> El mes ${i} la mensualidad es $${mensualidad} </li>`
        }else{
        mensualidad = mensualidad * 2;
        mensualidadAcumulado += `<li class="list-group-item"> El mes ${i} la mensualidad es $${mensualidad} </li>`
    }
    }
    total = mensualidad + mensualidad;
    mensualidadAcumulado += `<li class="list-group-item"> El total a pagar del producto es $${total} </li>`


    let resulContainer = document.getElementById("resultContainer");

    resulContainer.innerHTML = mensualidadAcumulado;
}