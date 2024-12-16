import React from "react";

function ToggleChild({ toggleVisibility }) {
    return (
        <div>
            <button onClick={toggleVisibility}>Видно?</button>
        </div>
    );
}

export default ToggleChild;