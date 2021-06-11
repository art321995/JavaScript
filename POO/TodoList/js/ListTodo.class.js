class ListToDo{

    ToDoLS;

    constructor(listTodo){

        if(typeof ListToDo.instance === "object"){
            return ListToDo.instance;
        }
        this.ToDoLS = new HandleTodoLocalStorage();
        let tareas = this.ToDoLS.validateDataLS("todoPendings");
        this.iniciarTareas(listTodo, tareas);
        ListToDo.instance = this;
        return this;
    }

    iniciarTareas(listTodo, tareas){

        for (let index = 0; index < tareas.length; index++) {
            this.AddActividadDom(listTodo, null, tareas[index]);
            
        }
    }

    AddActividadDom(ul, origen, contenido){

        let listTodo = this.ToDoLS.validateDataLS("todoPendings");
        for (let index = 0; index < listTodo.length; index++) {
            if(listTodo[index].tolowerCase().indexOf(contenido.tolowerCase())!=-1){
                alert("Tarea Repetida --- Ingrese Otra distinta");
                return;
            }
        }
        const li = document.createElement("li");
        li.classList = "list-group-item text-break";
        li.textContent = contenido;

        const btnRemove = document.createElement("button");
        btnRemove.classList = "close";

        const span = document.createElement("span");
        span.classList="badge badge-pill text-danger";
        span.textContent = "X";

        ul.appendChild(li);
        li.appendChild(btnRemove);
        btnRemove.appendChild(span);
        
        if(origen == "get"){
            span.setAttribute("pendiente","true");
            this.ToDoLS.SavePendingTodoLocalStorage(contenido);
        }else if (origen == "deleted"){
            this.ToDoLS.DeletedPendingTodoLocalStorage(contenido);
        }
        
    }
    
}

