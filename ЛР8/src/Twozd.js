
import { useState } from 'react';
function Twozd() {
const listItems  = ["asd", "asda"]
    
    return (     
      <ul>
        {listItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    );
  };
  
  export default Twozd;

