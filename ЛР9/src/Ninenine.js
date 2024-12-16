import React from "react";

function Ninenine({ onSelectionChange }) {
    return (
        <div>
            <label>
                <input
                    type="radio"
                    value="помогите 1"
                    name="radio-group"
                    onChange={onSelectionChange}
                />
               помогите 1
            </label>
            <br />
            <label>
                <input
                    type="radio"
                    value="помогите 2"
                    name="radio-group"
                    onChange={onSelectionChange}
                />
                помогите 2
            </label>
            <br />
            <label>
                <input
                    type="radio"
                    value="помогите 3"
                    name="radio-group"
                    onChange={onSelectionChange}
                />
                помогите 3
            </label>
        </div>
    );
}

export default Ninenine;