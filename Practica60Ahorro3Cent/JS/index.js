const btnInitApp = document.getElementById("btnInitApp");

btnInitApp.addEventListener("click",imprimirahorro);

function imprimirahorro(){
    let Ahorro = .03;
    let result = "";

    for(let i=1;i<=365;i++){
        if(i == 1){
            Ahorro = Ahorro;
            result += `<li class="list-group-item"> El Ahorro en el dia ${i} es de $${Ahorro.toFixed(2)}  </li>`
        }else{
        Ahorro = Ahorro * 3;
        result += `<li class="list-group-item"> El Ahorro en el dia ${i} es de $${Ahorro.toFixed(2)}  </li>`
    }
    }   

    let resulContainer = document.getElementById("resultContainer");

    resulContainer.innerHTML = result;
}