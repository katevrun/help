import React from 'react';

function Individ({ src, alt, description }) {
  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <img 
        src={src} 
        alt={alt} 
        style={{ maxWidth: '100%', height: 'auto', borderRadius: '10px' }} 
      />
      <p style={{ marginTop: '10px', fontSize: '16px', color: '#555' }}>
        {description}
      </p>
    </div>
  );
}

export default Individ;
