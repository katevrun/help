
import React from "react";

function Eighteight({ label, onChange }) {
    return (
        <div>
            <label>{label}:</label>
            <input
                type="number"
                onChange={(e) => onChange(e.target.value)}
                placeholder="Введите число"
            />
        </div>
    );
}

export default Eighteight;