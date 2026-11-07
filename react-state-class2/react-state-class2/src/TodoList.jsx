import { useState } from "react";
import { v4 as uuid } from "uuid";

export default function TodoList(){
    let [Todos, setTodos] = useState([{task: "Sample Task", id: uuid()}]);
    let [newTodo, setNewTodo] = useState("");

    let addNewTask = () => {
        setTodos([...Todos, { task: newTodo, id: uuid() }]);
        setNewTodo("");
    };

    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);
    };
    
    return (
        <div>
            <input 
                placeholder="add a task" 
                value={newTodo}
                onChange={updateTodoValue} 
            />
            <br></br>
            <button onClick={addNewTask}>Add Task</button>
            <br></br><br></br>
        <hr></hr>
            <h4>Todo List</h4>
            <ul>
                {
                Todos.map((todo) => (
                    <li key={todo.id}>{todo.task}</li>
                ))
                }
            </ul>
        </div>
    )
}