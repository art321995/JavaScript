const btnInitApp = document.getElementById("btnInitApp");

btnInitApp.addEventListener("click",calcularSumatoria);

function calcularSumatoria(){

    let resultado = 0;
    //1 Inicializar una variable
    //2 Condicionar el ciclo
    //3 Incrementar valor x
    for(let x=0;x<=9;x++){
        let numero = Number (prompt(`Ingrese el numero ${x}`));
        

        //acumuladores
        resultado = resultado + numero;
    }

    const resultContainer = document.getElementById("resultContainer");

    resultContainer.innerHTML =`<span>La suma de los 10 numeros es: ${resultado}</span>`
}