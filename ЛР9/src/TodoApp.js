import React, { useState } from "react";
import TodoList from "./TodoList"; 

function TodoApp() {
    const [tasks, setTasks] = useState([]); 
    const [taskInput, setTaskInput] = useState(""); 

    const addTask = (e) => {
        e.preventDefault();
        if (taskInput.trim() === "") return; 
        setTasks([...tasks, taskInput]); 
        setTaskInput(""); 
    };

    return (
        <div>
            <h1>Список помогите</h1>
            <form onSubmit={addTask}>
                <input
                    type="text"
                    value={taskInput}
                    onChange={(e) => setTaskInput(e.target.value)}
                    placeholder="Добавьте помогите"
                />
                <button type="submit">Добавить</button>
            </form>
            <TodoList tasks={tasks} /> {}
        </div>
    );
}

export default TodoApp;