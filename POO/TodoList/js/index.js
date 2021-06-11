const txtActividad =  document.querySelector("#txtToDo");
const listTodo = document.querySelector("#todoList");
const listFinishToDo = document.querySelector("#todoFinish");

const creatToDo = new ListToDo(listTodo);
initEventListenerSpans();


EventListener();

function EventListener(){
 document.getElementById("Lista").onsubmit = GetActividades; 
}

function GetActividades(event){
 event.preventDefault();
 if(txtToDo.value.trim() == ""){
     return;
 }

  creatToDo.AddActividadDom(listTodo, "get", txtToDo.value);
 let spanList = document.querySelectorAll(`span[pendiente = "true"]`);
 spanList[spanList.length -1].addEventListener("click", removeActividad);
 
}

function initEventListenerSpans(){
   let spanList = document.querySelectorAll("span");
   for (let index = 0; index < spanList.length; index++) {
       spanList[index].addEventListener("click", removeActividad); 
   }

}

function removeActividad(event){
    if(event.target.tagName != "SPAN") return;
    let liDeleted = event.target.parentElement.parentElement;
    creatToDo.AddActividadDom(listFinishToDo,"deleted",liDeleted.textContent.substring(0,liDeleted.textContent.length-1));
    listTodo.removeChild(liDeleted);
}
