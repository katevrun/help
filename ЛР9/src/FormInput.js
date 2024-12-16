import React from "react";

function FormInput({ formData, onInputChange }) {
    return (
        <form>
            <div>
                <label htmlFor="name">Имя:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={onInputChange}
                />
            </div>
            <div>
                <label htmlFor="lastname">Фамилия:</label>
                <input
                    type="lastname"
                    id="emalastnameil"
                    name="lastname"
                    value={formData.lastname}
                    onChange={onInputChange}
                />
            </div>
        </form>
    );
}

export default FormInput;