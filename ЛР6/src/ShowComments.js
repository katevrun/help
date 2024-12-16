import React, { useState } from 'react';

const ShowComments = () => {
    const [showComments, setShowComments] = useState(false);

    return (
        <div>
            <button onClick={() => setShowComments(!showComments)}>
                {showComments ? 'Скрыть комментарии' : 'Показать комментарии'}
            </button>
            {showComments && <p>Здесь находятся комментарии!</p>}
        </div>
    );
};

export default ShowComments;