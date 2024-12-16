
import React, { useState } from 'react';
function FormElement() {
    const [fio, setFio] = useState('');
    const [sex, setSex] = useState('');
    const [dr, setDr] = useState('');
    return (
        <div>
        <form>
            <input onChange={(e)=>setFio(e.target.value)} />
            <input onChange={(e)=>setSex(e.target.value)} />
            <input onChange={(e)=>setDr(e.target.value)} />
        </form>
        <p>ФИО: {fio}</p>
        <p>Пол: {sex}</p>
        <p>Дата рождения: {dr}</p>
        </div>
    );
}
export default FormElement;