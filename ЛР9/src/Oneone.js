import React, { useState } from "react";
import One from './One';

function Oneone() {
    const [color, setColor] = useState('#00ff00');

    return (
        <div>
            <One onChange={setColor} />

            <p style={{ color }}>Выберите цвет</p>
        </div>
    );
}

export default Oneone;