const txtActividad =  document.querySelector("#txtToDo");
const listTodo = document.querySelector("#todoList");
const listFinishToDo = document.querySelector("#todoFinish");

const creatToDo = new ListToDo();
let indexSpan = 0;

EventListener();

function EventListener(){
 document.getElementById("Lista").onsubmit = GetActividades; 
}

function GetActividades(event){
 event.preventDefault();
 if(txtToDo.value.trim() == ""){
     return;
 }

 
 creatToDo.AddActividadDom(listTodo, null, txtToDo.value);

 document.querySelectorAll("span")[indexSpan].addEventListener("click", removeActividad)
 indexSpan++;
}

function removeActividad(event){
    if(event.target.tagName != "SPAN") return;
    let liDeleted = event.target.parentElement.parentElement;
    creatToDo.AddActividadDom(listFinishToDo,null);
    listTodo.removeChild(liDeleted);
    indexSpan--;
}