
import React, { useState } from 'react';
function Chetchik() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <p> нажмали  {count} разов</p>
            <button onClick={() => setCount(count + 1)}>
                не нажмай
            </button>
        </div>
    );
}
export default Chetchik;

