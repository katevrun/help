
// Создаём файл Header.js в папке src/ import React from 'react';
import { useState } from 'react';
function Onezd() {
    const [name, setName] = useState("катя");
    function change (){
        if (name== "НеКатя") setName("катя") 
        else
        setName("НеКатя")
    }
    return (
        <header>
            <h1>Привет, мир!</h1>
           <h2>Привет, {name}! </h2>
           <button onClick={change}>
               кнопка
            </button>
        </header>
    );
}
export default Onezd;
