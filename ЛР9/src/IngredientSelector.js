import React, { useState } from "react";
import Ingredient from "./Ingredient"; // Импортируем дочерний компонент для выбора ингредиента

function IngredientSelector() {
    // Состояние для выбранных ингредиентов и их общей стоимости
    const [selectedIngredients, setSelectedIngredients] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    // Список ингредиентов и их стоимости
    const ingredients = [
        { name: "Сыр", price: 50 },
        { name: "Колбаса", price: 80 },
        { name: "Огурцы", price: 30 },
        { name: "Томаты", price: 40 },
        { name: "Лук", price: 10 },
        { name: "Майонез", price: 20 }
    ];

    // Функция для обновления выбранных ингредиентов и пересчёта общей стоимости
    const handleIngredientChange = (ingredient, isSelected) => {
        let newSelectedIngredients = [...selectedIngredients];

        if (isSelected) {
            newSelectedIngredients.push(ingredient);
        } else {
            newSelectedIngredients = newSelectedIngredients.filter(
                (item) => item.name !== ingredient.name
            );
        }

        const newTotalPrice = newSelectedIngredients.reduce(
            (acc, ingredient) => acc + ingredient.price,
            0
        );

        setSelectedIngredients(newSelectedIngredients);
        setTotalPrice(newTotalPrice);
    };

    return (
        <div>
            <h1>Выберите ингредиенты</h1>
            {/* Дочерние компоненты для каждого ингредиента */}
            {ingredients.map((ingredient) => (
                <Ingredient
                    key={ingredient.name}
                    ingredient={ingredient}
                    onIngredientChange={handleIngredientChange}
                />
            ))}

            {/* Список выбранных ингредиентов и их стоимость */}
            <h2>Выбранные ингредиенты</h2>
            <ul>
                {selectedIngredients.map((ingredient) => (
                    <li key={ingredient.name}>{ingredient.name}</li>
                ))}
            </ul>
            <h3>Общая стоимость: {totalPrice} руб.</h3>
        </div>
    );
}

export default IngredientSelector;