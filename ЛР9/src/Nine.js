import React, { useState } from "react";

import Ninenine from "./Ninenine";

function Nine() {
    const [selectedOption, setSelectedOption] = useState(""); 
    
    const handleSelectionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return (
        <div>
            <h1>Выберите вариант</h1>
            <Ninenine onSelectionChange={handleSelectionChange} />
            <h2>Вы выбрали: {selectedOption}</h2> {}
        </div>
    );
}
export default Nine;