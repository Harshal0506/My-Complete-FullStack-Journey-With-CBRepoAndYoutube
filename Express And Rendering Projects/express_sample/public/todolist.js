
    let newTodoBox=$('#newtodo');
    let addtodoBtn=$('#addtodo');
    let todoList=$('#todolist');

    addtodoBtn.click(
        ()=>{
            let newTodo=newTodoBox.val();

            $.post("/todos/",
            {
                task:newTodo
            },function(data){
                todoList.empty();
                for (todo of data){
                    todoList.append($('<li>').html(todo.task));
                }
            })
        }
    )
