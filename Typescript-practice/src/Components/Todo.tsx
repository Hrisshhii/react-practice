import { useState } from "react";

interface Todo{
    id: number;
    task: string;
    completed: boolean;
}

const Todo = () => {
    const [todos,setTodos]=useState<Todo[]>([]);
    const [task,setTask]=useState<string>("");

    const addToDo=()=>{
        if(task.trim()==="") return;
        const newTodo: Todo={
            id: todos.length+1,
            task: task,
            completed: false
        };
        setTodos([...todos,newTodo]);
        setTask("");
    };
  return (
    <div>
        <h2>Todo List: </h2>
        <input type="text" value={task} placeholder="Enter the task..." onChange={e=>setTask(e.target.value)}/>
        <button onClick={addToDo}>Add Todo</button>
        <ul>
            {todos.map(todo=>(
                <li key={todo.id}>{todo.task}</li>
            ))}
        </ul>
    </div>
  )
}

export default Todo