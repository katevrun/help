import React, { useState } from "react";

function TemperatureConverter() {
    const [celsius, setCelsius] = useState(""); 
    const [fahrenheit, setFahrenheit] = useState(""); 

    
    const convertCelsiusToFahrenheit = (celsius) => {
        return (celsius * 9/5) + 32;
    };

    
    const convertFahrenheitToCelsius = (fahrenheit) => {
        return (fahrenheit - 32) * 5/9;
    };

   
    const handleCelsiusChange = (event) => {
        const celsiusValue = event.target.value;
        setCelsius(celsiusValue);
        setFahrenheit(celsiusValue !== "" ? convertCelsiusToFahrenheit(celsiusValue) : ""); 
    };


    const handleFahrenheitChange = (event) => {
        const fahrenheitValue = event.target.value;
        setFahrenheit(fahrenheitValue);
        setCelsius(fahrenheitValue !== "" ? convertFahrenheitToCelsius(fahrenheitValue) : ""); 
    };

    return (
        <div>
            <h1>Конвертер температуры</h1>
            
        
            <input
                type="number"
                placeholder="Цельсии"
                value={celsius}
                onChange={handleCelsiusChange}
            />
            <span>°C</span>
            
            <br />
            
         
            <input
                type="number"
                placeholder="Фаренгейты"
                value={fahrenheit}
                onChange={handleFahrenheitChange}
            />
            <span>°F</span>
        </div>
    );
}

export default TemperatureConverter;