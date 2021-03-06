class UI{

    textoVotar = "";

    votaciones;


    eliminarPantalla1(){
        this.textoVotar = document.getElementById("VoteTopic").value;
        let pantalla1 = document.getElementById("pantalla1");
        pantalla1.remove();
    }

    crearPantalla2(){
        const pantalla2 = document.getElementById("pantalla2");
        const divTexto = document.createElement("div");
        divTexto.innerText = this.textoVotar;
        divTexto.setAttribute("class", "contenedorTexto");
        //Creamos el boton a Favor
        const btnFavor = document.createElement("button");
        btnFavor.innerText = "A favor";
        btnFavor.setAttribute("class", "btn btn-outline-success btn-block");
        btnFavor.setAttribute("id", "btnFavor");
        //Creamos el boton en contra
        const btnEncontra = document.createElement("button");
        btnEncontra.innerText = "En contra";
        btnEncontra.setAttribute("class", "btn btn-outline-warning btn-block");
        btnEncontra.setAttribute("id", "btnEncontra");
        //Creamos el boton abstencion
        const btnAbstencion = document.createElement("button");
        btnAbstencion.innerText = "Abstencion";
        btnAbstencion.setAttribute("class", "btn btn-outline-info btn-block");
        btnAbstencion.setAttribute("id", "btnAbstencion");
        //Creamos el boton de finalizar
        const btnFinalizar = document.createElement("button");
        btnFinalizar.innerText = "Finalizar";
        btnFinalizar.setAttribute("class", "btn btn-outline-danger btn-block");
        btnFinalizar.setAttribute("id", "btnFinalizar");
        //Creamos el recuadro del Resultado de votaciones
        const divResult = document.createElement("div");
        divResult.setAttribute("class", "contenedorTexto");



        pantalla2.appendChild(divTexto);
        pantalla2.appendChild(btnFavor);
        pantalla2.appendChild(btnEncontra);
        pantalla2.appendChild(btnAbstencion);
        pantalla2.appendChild(btnFinalizar);
        pantalla2.appendChild(divResult);

    }

}



let btnAceptar =  document.getElementById("btnAceptar");

btnAceptar.addEventListener("click", eliminarPantallas);

const votaciones = new Votaciones();
function eliminarPantallas(){
    const ui = new UI();

    ui.eliminarPantalla1();
    ui.crearPantalla2();
    document.addEventListener("click", validarClick);

}

function validarClick(event){

    if(event.target.id !== "btnFinalizar"){
    votaciones.increaseVote(event.target.id);
}else{
    divResult = (`
    El numero de votos a favor es: ${votaciones.Afavor}
    El numero de votos en contra es: ${votaciones.Encontra}
    El numero de votos Abstencion es: ${votaciones.Abstencion}
    `);

    votaciones.Afavor = 0;
    votaciones.Encontra = 0;
    votaciones.Abstencion = 0;


}
}