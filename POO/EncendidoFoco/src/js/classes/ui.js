
const EncFoco = document.getElementById("btnEncender");

EncFoco.addEventListener("click", prenderEncenderFoco);

function prenderEncenderFoco(){
    const foco = new Foco();

    if(foco.Estado == true){
        src = foco.apagar();
    }else{
        src =  foco.encender();
    }

    let imgFoco =  document.getElementById("imgFoco");

    imgFoco.setAttribute("src", src);

}