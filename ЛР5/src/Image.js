import React from 'react';

function Image({ src, caption }) {
  return (
    <div>
      <img src={src} alt={caption} width="200" />
      <p>{caption}</p>
    </div>
  );
}

export default Image;
