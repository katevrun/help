import React, { useState } from 'react';
function Button(props) {
    
    return (
        <div>
            <button>
            {props.name}
            </button>
        </div>
    );
}
export default Button;
