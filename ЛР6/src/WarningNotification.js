import React, { useState } from 'react';

const WarningNotification = () => {
    const [isWarning, setIsWarning] = useState(true);

    return (
        <div>
            {isWarning && <div style={{ color: 'red' }}>Это предупреждение!</div>}
            <button onClick={() => setIsWarning(!isWarning)}>
                Переключить уведомление
            </button>
        </div>
    );
};

export default WarningNotification;