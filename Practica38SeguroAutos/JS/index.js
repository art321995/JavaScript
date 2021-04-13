const btnCalcularPoliza = document.getElementById("btnCalcular");

btnCalcularPoliza.addEventListener("click",calcularPoliza);

function calcularPoliza(){

    let tipopoliza = document.getElementById("sltTipoPoliza").value;
    let tipoalcohol = document.getElementById("sltTipoalcohol").value;
    let tipolentes = document.getElementById("sltTipoLentes").value;
    let tipoenfermo = document.getElementById("sltTipoEnfermo").value;

    let edad = Number (document.getElementById("edad").value);
    let resultado = "";
    let total = 0;

    if(tipopoliza=="tipoA" && tipoalcohol=="sialcohol" && tipolentes=="silentes" && tipoenfermo=="sienfermo" &&  edad > 40){
        total = Math.round( 1200 * 1.1 * 1.05 * 1.05 * 1.4);
    }else
    if(tipopoliza=="tipoA" && tipoalcohol=="noalcohol" && tipolentes=="silentes" && tipoenfermo=="sienfermo" &&  edad > 40){
        total = Math.round( 1200 * 1.05 * 1.05 * 1.4);
    }else if(tipopoliza=="tipoA" && tipoalcohol=="noalcohol" && tipolentes=="nolentes" && tipoenfermo=="sienfermo" &&  edad > 40){
        total = Math.round( 1200  * 1.05 * 1.4);
    }else if(tipopoliza=="tipoA" && tipoalcohol=="noalcohol" && tipolentes=="nolentes" && tipoenfermo=="noenfermo" &&  edad > 40){
        total = Math.round( 1200  * 1.4);
    }else if(tipopoliza=="tipoA" && tipoalcohol=="sialcohol" && tipolentes=="nolentes" && tipoenfermo=="noenfermo" &&  edad > 40){
        total = Math.round( 1200  * 1.1 *1.4);
    }else if(tipopoliza=="tipoA" && tipoalcohol=="sialcohol" && tipolentes=="nolentes" && tipoenfermo=="sienfermo" &&  edad > 40){
        total = Math.round( 1200  * 1.1 * 1.05 *1.4);
    }else if(tipopoliza=="tipoA" && tipoalcohol=="sialcohol" && tipolentes=="silentes" && tipoenfermo=="noenfermo" &&  edad > 40){
        total = Math.round( 1200  * 1.1 * 1.05 *1.4);
    }else if(tipopoliza=="tipoA" && tipoalcohol=="noalcohol" && tipolentes=="silentes" && tipoenfermo=="noenfermo" &&  edad > 40){
        total = Math.round( 1200  * 1.05 *1.4);
    }else if(tipopoliza=="tipoA" && tipoalcohol=="noalcohol" && tipolentes=="nolentes" && tipoenfermo=="noenfermo" &&  edad < 40){
        total = Math.round( 1200  * 1.1);
    }else if(tipopoliza=="tipoA" && tipoalcohol=="sialcohol" && tipolentes=="nolentes" && tipoenfermo=="noenfermo" &&  edad < 40){
        total = Math.round( 1200  * 1.1 *1.1);
    }else if(tipopoliza=="tipoA" && tipoalcohol=="sialcohol" && tipolentes=="silentes" && tipoenfermo=="noenfermo" &&  edad < 40){
        total = Math.round( 1200  * 1.1 * 1.05 *1.1);
    }else if(tipopoliza=="tipoA" && tipoalcohol=="sialcohol" && tipolentes=="nolentes" && tipoenfermo=="sienfermo" &&  edad < 40){
        total = Math.round( 1200  * 1.1 * 1.05 *1.1);
    }else if(tipopoliza=="tipoA" && tipoalcohol=="sialcohol" && tipolentes=="silentes" && tipoenfermo=="sienfermo" &&  edad < 40){
        total = Math.round( 1200  * 1.1 *1.1);
    }else if(tipopoliza=="tipoA" && tipoalcohol=="noalcohol" && tipolentes=="silentes" && tipoenfermo=="sienfermo" &&  edad < 40){
        total = Math.round( 1200  * 1.05 *1.05 *1.1);
    }else if(tipopoliza=="tipoA" && tipoalcohol=="noalcohol" && tipolentes=="nolentes" && tipoenfermo=="sienfermo" &&  edad < 40){
        total = Math.round( 1200  * 1.05  *1.1);
    }else if(tipopoliza=="tipoA" && tipoalcohol=="noalcohol" && tipolentes=="silentes" && tipoenfermo=="noenfermo" &&  edad < 40){
        total = Math.round( 1200  * 1.05  *1.1);
    }else


    if(tipopoliza=="tipoB" && tipoalcohol=="sialcohol" && tipolentes=="silentes" && tipoenfermo=="sienfermo" &&  edad > 40){
        total = Math.round( 950 * 1.1 * 1.05 * 1.05 * 1.4);
    }else
    if(tipopoliza=="tipoB" && tipoalcohol=="noalcohol" && tipolentes=="silentes" && tipoenfermo=="sienfermo" &&  edad > 40){
        total = Math.round( 950 * 1.05 * 1.05 * 1.4);
    }else if(tipopoliza=="tipoB" && tipoalcohol=="noalcohol" && tipolentes=="nolentes" && tipoenfermo=="sienfermo" &&  edad > 40){
        total = Math.round( 950  * 1.05 * 1.4);
    }else if(tipopoliza=="tipoB" && tipoalcohol=="noalcohol" && tipolentes=="nolentes" && tipoenfermo=="noenfermo" &&  edad > 40){
        total = Math.round( 950  * 1.4);
    }else if(tipopoliza=="tipoB" && tipoalcohol=="sialcohol" && tipolentes=="nolentes" && tipoenfermo=="noenfermo" &&  edad > 40){
        total = Math.round( 950  * 1.1 *1.4);
    }else if(tipopoliza=="tipoB" && tipoalcohol=="sialcohol" && tipolentes=="silentes" && tipoenfermo=="noenfermo" &&  edad > 40){
        total = Math.round( 950  * 1.1 * 1.05 *1.4);
    }else if(tipopoliza=="tipoB" && tipoalcohol=="sialcohol" && tipolentes=="nolentes" && tipoenfermo=="sienfermo" &&  edad > 40){
        total = Math.round( 950  * 1.1 * 1.05 *1.4);
    }else if(tipopoliza=="tipoB" && tipoalcohol=="noalcohol" && tipolentes=="silentes" && tipoenfermo=="noenfermo" &&  edad > 40){
        total = Math.round( 950  * 1.05 *1.4);
    }else if(tipopoliza=="tipoB" && tipoalcohol=="noalcohol" && tipolentes=="nolentes" && tipoenfermo=="noenfermo" &&  edad < 40){
        total = Math.round( 950  * 1.1);
    }else if(tipopoliza=="tipoB" && tipoalcohol=="sialcohol" && tipolentes=="nolentes" && tipoenfermo=="noenfermo" &&  edad < 40){
        total = Math.round( 950  * 1.1 *1.1);
    }else if(tipopoliza=="tipoB" && tipoalcohol=="sialcohol" && tipolentes=="silentes" && tipoenfermo=="noenfermo" &&  edad < 40){
        total = Math.round( 950  * 1.1 * 1.05 *1.1);
    }else if(tipopoliza=="tipoB" && tipoalcohol=="sialcohol" && tipolentes=="nolentes" && tipoenfermo=="sienfermo" &&  edad < 40){
        total = Math.round( 950  * 1.1 * 1.05 *1.1);
    }else if(tipopoliza=="tipoB" && tipoalcohol=="sialcohol" && tipolentes=="silentes" && tipoenfermo=="sienfermo" &&  edad < 40){
        total = Math.round( 950  * 1.1 *1.1);
    }else if(tipopoliza=="tipoB" && tipoalcohol=="noalcohol" && tipolentes=="silentes" && tipoenfermo=="sienfermo" &&  edad < 40){
        total = Math.round( 950  * 1.05 *1.05 *1.1);
    }else if(tipopoliza=="tipoB" && tipoalcohol=="noalcohol" && tipolentes=="nolentes" && tipoenfermo=="sienfermo" &&  edad < 40){
        total = Math.round( 950  * 1.05  *1.1);
    }else if(tipopoliza=="tipoB" && tipoalcohol=="noalcohol" && tipolentes=="silentes" && tipoenfermo=="noenfermo" &&  edad < 40){
        total = Math.round( 950  * 1.05  *1.1);}


    resultado = `La poliza de tu auto tiene un costo de: $${total}.00`;

    let resultContainer = document.getElementById("resultContainer");

    resultContainer.innerHTML = `<div class="alert alert-success">${resultado}<div>`;
}