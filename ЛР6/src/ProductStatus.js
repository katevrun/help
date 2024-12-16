import React, { useState } from 'react';

const ProductStatus = () => {
    const [isInStock, setIsInStock] = useState(true);

    return (
        <div>
            <h1>{isInStock ? 'На складе' : 'Нет в наличии'}</h1>
            <button onClick={() => setIsInStock(!isInStock)}>
                Переключить наличие
            </button>
        </div>
    );
};

export default ProductStatus;