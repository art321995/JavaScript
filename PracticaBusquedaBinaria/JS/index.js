const btnBuscar=document.getElementById("btnBuscar");
const inpNumero = document.getElementById("inpNumero");

let numberList = [];

function llenarArray(){
    let longitud = Math.floor(Math.random()*(100 - 10))+10;
    for (let i = 0; i< 2000; i++){
        let randomNumber = Math.floor(Math.random() * (100000 - 1)) + 1;
        numberList.push(randomNumber);
    }

    console.log(numberList);
    numberList.sort(function(a,b){
        return a - b;
    });
    console.log("🚀 ~ file: index.js ~ line 13 ~ llenarArray ~ numberList", numberList);
}

llenarArray();

btnBuscar.addEventListener("click",buscarElementoBusquedaBinaria);


function buscarElementoBusquedaBinaria(){

let firstElement = 0;
const numeroBusqueda = Number( inpNumero.value);
let lastElement = numberList.length - 1;
let find = false;
console.log("🚀 ~ file: index.js ~ line 31 ~ buscarElementoBusquedaBinaria ~ let find", find)

console.time("InicioCilco");
while(firstElement <= lastElement && find == false){
    let middle = Math.floor((firstElement + lastElement) / 2);
    if(numberList[middle] == numeroBusqueda){
        find = true;
        break;
    }else {
            if(numeroBusqueda<numberList[middle]){
                lastElement = middle - 1;
            }else{
                firstElement = middle + 1;
            }
    }
  }
  console.timeEnd("InicioCiclo");
  
}