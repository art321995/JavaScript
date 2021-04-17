const btnInitApp = document.getElementById("btnInitApp");

btnInitApp.addEventListener("click",imprimirNumeros);

function imprimirNumeros(){
    let resultadoAcumulado = "";

    for(let i=0;i<=100;i++){
        
        resultadoAcumulado += `<li class="list-group-item"> ${i}  </li>`
        
    }

    let resulContainer = document.getElementById("resultContainer");

    resulContainer.innerHTML = resultadoAcumulado;
}