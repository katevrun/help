import React, { useState } from "react";
import Sevenone from './Sevenone';   
import Seventwo from './Seventwo';   

function Seven() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const handleFirstNameChange = (e) => {
        setFirstName(e.target.value);
    };

    const handleLastNameChange = (e) => {
        setLastName(e.target.value);
    };

    return (
        <div>
            {}
            <Sevenone firstName={firstName} onFirstNameChange={handleFirstNameChange} />
            {}
            <Seventwo lastName={lastName} onLastNameChange={handleLastNameChange} />

            <h2>Полное имя: {firstName} {lastName}</h2>
        </div>
    );
}

export default Seven;
