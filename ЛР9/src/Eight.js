import React, { useState } from "react";

import Eighteight from "./Eighteight"; 

function Eight() {
    const [num1, setNum1] = useState(0); 
    const [num2, setNum2] = useState(0); 

    
    const updateNum1 = (value) => {
        setNum1(Number(value)); 
    };

   
    const updateNum2 = (value) => {
        setNum2(Number(value)); 
    };

    const sum = num1 + num2;

    return (
        <div>
            <h1>Калькулятор суммы</h1>
            <Eighteight label="Число 1" onChange={updateNum1} />
            <Eighteight label="Число 2" onChange={updateNum2} />
            <h2>Сумма: {sum}</h2>
        </div>
    );
}
export default Eight;