import React, { useState } from 'react';

function Sevenzd() { 
  
    const [items, setItems] =useState([]);
    const addItem =() => {

        setItems([...items, `7 задание ${items.length + 1}`]); 
          }; 
         
          return ( 
            <div> 
              <button onClick={addItem}>7 задание </button> 
               
              <ul> 
                {items.map((item, index) => ( 
                  <li key={index}>{item}</li> 
                ))} 
              </ul> 
            </div> 
          ); 
        } 
         
    
export default Sevenzd;
