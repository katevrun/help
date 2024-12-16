import React, { useState } from 'react';

function Six() {
    const [text, setText] = useState("Нет");
    function reverseText() {
        if (text == "Нет") setText("Да")
        else setText("Нет")
    }

    return (
        <div>
            <p> Выбери {text}</p>
            <button onClick={reverseText}>
                Нажать
            </button>
        </div>
    );
}

export default Six;