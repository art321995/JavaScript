const btnInitApp = document.getElementById("btnInitApp");

btnInitApp.addEventListener("click",imprimirNumeros);

function imprimirNumeros(){
    let resultadoAcumulado = "";
    let suma= 0;

    for(let i=0;i<=100;i++){
        if(i % 2 == 0){
            resultadoAcumulado += `<li class="list-group-item"> EL numero ${i} es par </li>`
        }
        suma = suma + resultadoAcumulado;
    }

    let resulContainer = document.getElementById("resultContainer");

    resulContainer.innerHTML = suma;
}