import React from "react";

function Fourfour({ selected, onCheckboxChange }) {
    return (
        <div>
            <label>
                <input
                    type="checkbox"
                    checked={selected[0]}
                    onChange={(e) => onCheckboxChange(0, e.target.checked)}
                />
                Помогите
            </label>
            <br />
            <label>
                <input
                    type="checkbox"
                    checked={selected[1]}
                    onChange={(e) => onCheckboxChange(1, e.target.checked)}
                />
                Непомогите
            </label>
            <br />
            <label>
                <input
                    type="checkbox"
                    checked={selected[2]}
                    onChange={(e) => onCheckboxChange(2, e.target.checked)}
                />
                Оченьпомогите
            </label>
        </div>
    );
}

export default Fourfour;