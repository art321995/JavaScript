const btnInitApp = document.getElementById("btnInitApp");

btnInitApp.addEventListener("click",evaluarVoto);

function evaluarVoto(){
    let numero = "";
    let continuar = true;
    let voto1 = 0;
    let voto2 = 0;
    let voto3 = 0;
    let voto4 = 0;
    let totalvotos = 0;
    let porcent1 = 0;
    let porcent2 = 0;
    let porcent3 = 0;
    let procent4 = 0;

    while(continuar == true){
        numero = prompt('Ingrese el voto (1,2,3 o 4) con 0 cierra la app');
        if(isNaN(numero)==true){
            alert("Es neceasario que ingrese solo numeros");
            return;
        }else if (numero==0){
            continuar = false;
        }else{numero = Number(numero);
            if(numero == 1){
                voto1++;
            }else if(numero == 2){
                voto2++;
            }else if(numero == 3){
                voto3++;
            }else if(numero == 4){
                voto4++;
            }else{
                numero = "Solo puedes votar con los numero 1-2-3-4"
            }
        }
        totalvotos = voto1 + voto2+ voto3+voto4;
    }

    porcent1 = (voto1 * 100) / totalvotos;
    porcent2 = (voto2 * 100) / totalvotos;
    porcent3 = (voto3 * 100) / totalvotos;
    porcent4 = (voto4 * 100) / totalvotos;


    
   
    let resulContainer = document.getElementById("resultContainer");

    resulContainer.innerHTML = `<span>
    El total de votos fueron: ${totalvotos}<br>
    El candidato 1 cuenta con ${voto1} votos con un ${porcent1}% del total de votos
    <br> El candidato 2 cuenta con ${voto2} votos con un ${porcent2}% del total de votos
    <br> El candidato 3 cuenta con ${voto3} votos con un ${porcent3}% del total de votos
    <br> El candidato 4 cuenta con ${voto4} votos con un ${porcent4}% del total de votos
    <\span>`
}
