import React from "react";

function TodoList({ tasks }) {
    return (
        <div>
            <ul>
                {tasks.length === 0 ? (
                    <li>Помогите нет</li> 
                ) : (
                    tasks.map((task, index) => (
                        <li key={index}>{task}</li> 
                    ))
                )}
            </ul>
        </div>
    );
}

export default TodoList;