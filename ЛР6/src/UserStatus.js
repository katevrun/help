import React, { useState } from 'react';

const UserStatus = () => {
    const [isOnline, setIsOnline] = useState(true);

    return (
        <div>
            <h1>{isOnline ? 'Пользователь онлайн' : 'Пользователь оффлайн'}</h1>
            <button onClick={() => setIsOnline(!isOnline)}>
                Переключить статус
            </button>
        </div>
    );
};

export default UserStatus;