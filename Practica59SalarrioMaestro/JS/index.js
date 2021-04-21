const btnInitApp = document.getElementById("btnInitApp");

btnInitApp.addEventListener("click",imprimirSalario);

function imprimirSalario(){
    let salario = 1500;
    let result = "";

    for(let i=1;i<=6;i++){
        
        salario = salario * 1.10;
        result += `<li class="list-group-item"> El salario al año ${i} es de $${salario.toFixed(2)}  </li>`
        
    }

    let resulContainer = document.getElementById("resultContainer");

    resulContainer.innerHTML = result;
}