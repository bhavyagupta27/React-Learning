import { useState } from "react";
import { v4 as uuid } from "uuid";

export default function TodoList(){
    let [Todos, setTodos] = useState([{task: "Sample Task", id: uuid(), isDone: false}]);
    let [newTodo, setNewTodo] = useState("");

    let addNewTask = () => {
        setTodos((prevTodos) => {
            return [...Todos, {task : newTodo, id: uuid()}]
        });
        setNewTodo("");
    };

    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);
    };
    
    let deleteTodo = (id) => {
        setTodos((prevTodos) => Todos.filter((prevTodos) => prevTodos.id != id));
    }

    let upperCaseAll = () => {
    setTodos((prevTodos) => 
        prevTodos.map((todo) => {
            return {
                ...todo,
                task: todo.task.toUpperCase()
            };
        })
    );
};

let UpperCaseOne = (id) => {
    setTodos((prevTodos) =>
        prevTodos.map((todo)=>{
            if(todo.id == id){
                return {
            ...todo,
        task: todo.task.toUpperCase(),
            };
        } else {
            return todo;
        }
    })
    );
};

let markAsDone = (id) => {
    setTodos((prevTodos) => 
        prevTodos.map((todo) => {
            if(todo.id === id) {
                return {
                    ...todo,
                    isDone: true,
                };
            } else {
                return todo;
            }
        })
    );
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
                {Todos.map((todo) => (
                    <li key={todo.id}>
                        <span style={{ textDecoration: todo.isDone ? "line-through" : "none" }}>
    {todo.task}
</span>
                        &nbsp;
                        &nbsp;
                        <button onClick={() => deleteTodo(todo.id)}>delete</button>
                        &nbsp;
                        &nbsp;
                        <button onClick={() => UpperCaseOne(todo.id)}>UpperCaseOne</button>
                        &nbsp;
                        &nbsp;
                        <button onClick={() => markAsDone(todo.id)}>Mark as Done</button>
                    </li>
                ))}
            </ul>
            <br></br>
            <button onClick={upperCaseAll}>UpperCase All</button>
        </div>
    )
}