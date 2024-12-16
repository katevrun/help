import React from "react";

function FormDisplay({ formData }) {
    return (
        <div>
            <h2>Данные формы:</h2>
            <p><strong>Имя:</strong> {formData.name}</p>
            <p><strong>Фамилия:</strong> {formData.lastname}</p>
        </div>
    );
}

export default FormDisplay;