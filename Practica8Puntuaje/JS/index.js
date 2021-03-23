const btnCalcularpuntaje = document.getElementById("btnCalcularPuntaje");

btnCalcularpuntaje.addEventListener("click", CalculaPuntaje);

function CalculaPuntaje(){
    
    const correctas = Number (document.getElementById("correcta").value);
    const incorrectas = Number (document.getElementById("incorrecta").value);
    
    const correct = 4;
    const incorrect = 1;
    
    let resultado = (correctas * correct) - (incorrectas * 1);

    const containerRessultado = document.getElementById("resultado");

   
    containerRessultado.innerText = 'El puntaje es: '  + resultado;
}