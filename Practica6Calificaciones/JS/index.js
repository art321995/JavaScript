let btnCalcular = document.getElementById("btnCalcularPromedio");

btnCalcular.addEventListener("click", CalcularPromedio);

function CalcularPromedio(){
    let calificacion1 = Number (document.getElementById("cali1").value);
    let calificacion2 = Number (document.getElementById("cali2").value);
    let calificacion3 = Number (document.getElementById("cali3").value);
    let calificacion4 = Number (document.getElementById("cali4").value);
    let calificacion5 = Number (document.getElementById("cali5").value);

    let Matricula = document.getElementById("matricula").value;
    let resultado = (calificacion1 + calificacion2 + calificacion3 + calificacion4 + calificacion5 ) / 5;

    let containerResultado = document.getElementById("resultado");

    containerResultado.innerText = 'El proemedio es '+ resultado + ' Con matricula '+ Matricula;
} 