//Recursividad --> Una funcion se manda a llamar una determinada cantidad de veces.

let index = 0;

function main(){
    let numberList = [10,1,6,3,2,0,20,89];
    let listSort = quickSort(numberList);
    console.log("🚀 ~ file: index.js ~ line 8 ~ main ~ listSort", listSort)
}

function quickSort(arr){

    if(arr.length == 0) return[];

    //pivote --> El elemento que se encuentra a la mitad del arreglo

    let mediumIndex = Math.floor(arr.length / 2);
    let pivote = arr[mediumIndex];

    //Declarar arr left, right --> left = numero<pivote -- Right numero>pivote
    let leftArr = [];
    let rightArr = [];

    //Recorro el arreglo para validar numeros menosres y mayores al pivote
    //Cuando el for evalue la posicion en el cual se encuentra el pivote no tengo que hacer nada

    for(let i = 0; i < arr.length;i++){
        if(i != mediumIndex){
        if (arr[i] < pivote){
            leftArr.push(arr[i]);
        }else {
            rightArr.push(arr[i]);
        }
    }
    }

    leftArr = quickSort(leftArr);
    rightArr = quickSort(rightArr);

    console.log("Menores",leftArr);
    console.log("Mayores",rightArr);

    return leftArr.concat(pivote).concat(rightArr);
}

main();

