//Entradas-> Son los datos que necesitamos me otorgue el usuario
//Proceso->Son las acciones que se le van a realizar a las entradas
//Salidas-> Son el resultado obtenido por los procesos realizados

//Entradas

let btnsumar = document.getElementById("btnSuma");

btnsumar.addEventListener('click', sumarDosNumero);

function sumarDosNumero(){
    let numero1= document.getElementById("numero1").value;
    let numero2= document.getElementById("numero2").value;
    console.log(numero1);
    console.log(numero2);
    
}



