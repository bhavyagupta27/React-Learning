import { useState } from "react";

export default function TodoList(){
    let [Todos, setTodos] = useState(["Sample Task"]);
    let [newTodo, setNewTodo] = useState("");

    let addNewTask = () => {
        setTodos([...Todos, newTodo]);
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
                    <li>{todo}</li>
                ))
                }
            </ul>
        </div>
    )
}