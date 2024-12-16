import React from 'react';

function Eightzd({ products }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Название</th>
          <th>Цена</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product, index) => (
          <tr key={index}>
            <td>{product.name}</td>
            <td>{product.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Eightzd;