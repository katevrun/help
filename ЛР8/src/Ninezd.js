// HoverList.js
import React from 'react';

function Ninezd ({ items }) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index} className="hover-item">{item}</li>
      ))}
    </ul>
  );
}

export default Ninezd;