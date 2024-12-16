import React, { useState } from 'react';

const AdminControls = () => {
    const [isAdmin, setIsAdmin] = useState(false);

    return (
        <div>
            {isAdmin && <button>Управление</button>}
            <button onClick={() => setIsAdmin(!isAdmin)}>
                {isAdmin ? 'Отключить админский доступ' : 'Включить админский доступ'}
            </button>
        </div>
    );
};

export default AdminControls;