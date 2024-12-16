import React, { useState } from 'react'; 
 
function Eightzd() { 
  const [inputValue, setInputValue] = useState(''); 
  const [message, setMessage] = useState(''); 
 
  const handleBlur = () => { 
    setMessage(`8 задание: ${inputValue}`); 
  }; 
 
  const handleChange = (event) => { 
    setInputValue(event.target.value); 
  }; 
 
  return ( 
    <div> 
      <input 
        type="text" 
        value={inputValue} 
        onChange={handleChange} 
        onBlur={handleBlur} 
      /> 
      {message && <p>{message}</p>} 
    </div> 
  ); 
} 
 
export default Eightzd;