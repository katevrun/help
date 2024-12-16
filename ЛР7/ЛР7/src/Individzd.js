import React, { useState } from 'react';

function Individzd() {

    const [items, setItems] = useState([]);
    const addItem = () => {
        let rand = Math.floor(1 + Math.random() * (5 - 1));
        console.log(rand)
        if (rand == 1) {
            setItems([...items, `Помогите ${items.length + 1}`]);
        }

        if (rand == 2) {
            setItems([...items, `Помогите ${items.length + 1}`, `Помогите ${items.length + 2}`]);
        }
        if (rand == 3) {
            setItems([...items, `Помогите ${items.length + 1}`, `Помогите ${items.length + 2}`, `Помогите ${items.length + 3}`]);
            
        }
        if (rand == 4) {
            setItems([...items, `Помогите ${items.length + 1}`, `Помогите ${items.length + 2}`, `Помогите ${items.length + 3}`,  `Помогите ${items.length + 4}`]);
         
        }

        if (rand == 5) {
            setItems([...items, `Помогите ${items.length + 1}`, `Помогите ${items.length + 2}`,`Помогите ${items.length + 3}`, `Помогите ${items.length + 4}`, `Помогите ${items.length + 5}`]);
           
        }



    };
    return (
        <div>
            <button onClick={addItem}> Добавили: </button>

            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}


export default Individzd;


