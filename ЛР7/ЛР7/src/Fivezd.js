import {useState} from 'react';

function Fivezd() {
const [isVisible, setIsVisible] = useState(true);
return (
<div>
    {isVisible && <p>Это 5 задание</p>}
    <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? '5задание' : 'не5задание'}
    </button>
</div>
);
}

export default Fivezd;