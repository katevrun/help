import React, { useState } from 'react';

const WelcomeMessage = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    return (
        <div>
            {isAuthenticated ? <h1>Добро пожаловать!</h1> : <h1>Пожалуйста, войдите</h1>}
            <button onClick={() => setIsAuthenticated(!isAuthenticated)}>
                {isAuthenticated ? 'Выйти' : 'Войти'}
            </button>
        </div>
    );
};

export default WelcomeMessage;