class HandleTodoLocalStorage {

    SavePendingTodoLocalStorage(todo){
        let tareasGuardadas = this.validateDataLS("todoPendings");
        tareasGuardadas.push(todo);
        localStorage.setItem("todoPendings", JSON.stringify(tareasGuardadas));

    }

    validateDataLS(keyLS){

        let tareas = localStorage.getItem(keyLS);
            if (tareas == null){
                return[];
            }else{
                return JSON.parse(tareas);
            }
    }

    DeletedPendingTodoLocalStorage(todo){
        
        let tareasGuardadas = this.validateDataLS("todoPendings");
        if(tareasGuardadas.length === 0){
            return
        }
        for (let index = 0; index < tareasGuardadas.length; index++){
            if(todo==tareasGuardadas[index]){
                tareasGuardadas.splice(index, 1)
            }
        }
        localStorage.setItem("todoPendings", JSON.stringify(tareasGuardadas));
        
    }

}