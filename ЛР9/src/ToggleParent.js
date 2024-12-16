import React, { useState } from "react";
import ToggleChild from "./ToggleChild"; 

function ToggleParent() {
    const [isVisible, setIsVisible] = useState(false); 

   
    const toggleVisibility = () => {
        setIsVisible(prevState => !prevState);
    };

    return (
        <div>
            <ToggleChild toggleVisibility={toggleVisibility} />
            {isVisible && <p>Я не хочу это делать</p>} {}
        </div>
    );
}

export default ToggleParent;