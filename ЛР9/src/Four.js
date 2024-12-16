import React, { useState } from "react";

import Fourfour from './Fourfour'; 

function Four() {
    const [selected, setSelected] = useState([false, false, false]);

    const handleCheckboxChange = (index, isChecked) => {
        const newSelected = [...selected];
        newSelected[index] = isChecked;
        setSelected(newSelected);
    };

    const isAnyChecked = selected.includes(true); 

    return (
        <div>
            <Fourfour selected={selected} onCheckboxChange={handleCheckboxChange} />
            {isAnyChecked && <p>Выбрано</p>} {}
        </div>
    );
}

export default Four;