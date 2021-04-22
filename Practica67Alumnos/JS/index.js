const btnInitApp = document.getElementById("btnInitApp");

btnInitApp.addEventListener("click",evaluarPromedio);

function evaluarPromedio(){

    let calif = "";
    let progral = "";
    let proH = "";
    let proM = "";
    let sexo = "";
    let sexoM = 0;
    let sexoH = 0;
    let pro = 0;
    let pro1 = 0;

    for(let i = 1; i <= 5; i++){
        calif =  Number (prompt( `Ingrese la calificacion del alumno ${i}:`));
        sexo = prompt(`Ingrese el sexo del alumno ${i} H o M: `);
        if (sexo=="h" || sexo=="H"){
            sexoH++;
            pro = pro + calif;
            proH = Number( pro / sexoH);
        }else if(sexo=="M" || sexo=="m"){
            sexoM++;
            pro1 = pro1 + calif;
            proM = Number( pro1 / sexoM);
        }else{
            sexo = alert("Ingrese solo H Hombre o M Mujer");
            return;
        }
        progral = (proM + proH)/2;
        let resulContainer = document.getElementById("resultContainer");
        resulContainer.innerHTML = (`El promedio general es: ${progral} <br>
        El promedio de los hombres es: ${proH}<br>
        El promedio de las mujeres es: ${proM}`);
}
if (proH > proM){
    let resulContainer1 = document.getElementById("resultContainer1");
        resulContainer1.innerHTML = (`El promedio mas alto es el de Hombres`);
}else{
    let resulContainer1 = document.getElementById("resultContainer1");
        resulContainer1.innerHTML = (`El promedio mas alto es el de Mujeres`);
}


}