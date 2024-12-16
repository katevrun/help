
import React, { useState } from 'react';
function UserCard(props) {
   
    return (
        <div>
            <p>  Привет, {props.name}! Ваш возраст {props.age} </p>  
        </div>
    );
}
export default UserCard;


