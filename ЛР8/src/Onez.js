
import { useState } from 'react';

const items = ['1','2', '3','4','5']
const listItems = items.map (item => <li>{item}</li>);
 
function Onez() {
    return <ul> {listItems} </ul>;
}

export default Onez;