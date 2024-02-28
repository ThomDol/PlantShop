import React from 'react';
import { useState } from 'react';

const Form = () => {
    const [email, setEmail] = useState("Entrez votre email");

    const checkEmail = (value) => {
        if (!value.includes('@')) {
            alert('Attention, il n\'y a pas de @, ceci n\'est pas une adresse valide')
        }
    }


    return (
        <div className='col-5 mx-auto m-4'>
            <form action="">
                <input onChange={(e) => setEmail(e.target.value)} onBlur={(e) => checkEmail(email)} type='text' name='my_input' value={email} />
                <button onClick={() => { alert(email) }}>Valider</button>
            </form>
        </div>
    );
};

export default Form;