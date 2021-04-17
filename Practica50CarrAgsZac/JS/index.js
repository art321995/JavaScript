const btnInitApp = document.getElementById("btnInitApp");

btnInitApp.addEventListener("click",calcularKilometros);

function calcularKilometros(){
    let Persona1 = 70;
    let Persona2 = 150;
    let distancia = "";

    while(distancia > 0){

        Persona1 = Persona1 + 1;
        Persona2 = Persona2 - 1; 
        distancia = Persona1 - Persona2; 
    }

    

    const resultContainer = document.getElementById("resultContainer");

    resultContainer.innerHTML="El punto de encuentro es en el kilometro: " + distancia;


}