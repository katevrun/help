import React, { useState } from 'react';

const DarkModeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    return (
        <div style={{ background: isDarkMode ? '#333' : '#fff', color: isDarkMode ? '#fff' : '#000' }}>
            <button onClick={() => setIsDarkMode(!isDarkMode)}>
                Переключить режим {isDarkMode ? 'светлый' : 'тёмный'}
            </button>
        </div>
    );
};

export default DarkModeToggle;