import React, { useState } from "react";

function Ingredient({ ingredient, onIngredientChange }) {
    const [isSelected, setIsSelected] = useState(false);

    // Обработчик изменения состояния ингредиента (выбран/не выбран)
    const handleChange = (event) => {
        const newSelectedState = event.target.checked;
        setIsSelected(newSelectedState);
        onIngredientChange(ingredient, newSelectedState);
    };

    return (
        <div>
            <input
                type="checkbox"
                checked={isSelected}
                onChange={handleChange}
            />
            <label>
                {ingredient.name} - {ingredient.price} руб.
            </label>
        </div>
    );
}

export default Ingredient;