import React, { useState } from 'react';
function Form() {
    const [comm, setComm] = useState('');

    return (
        <div>
            <form>
                <input onChange={(e) => setComm(e.target.value)} />

            </form>
            <p>Комментарий: {comm}</p>

            <button>
                {comm}
            </button>

        </div>



    );
}
export default Form;