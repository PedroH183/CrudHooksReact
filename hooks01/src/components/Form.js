import React from 'react'
import { useState, useEffect } from 'react';
import { armazenarNomeDb} from './services';


export const Form = () => {
    const [ name, setName ] = useState("");
    const [ phone, setPhone ] = useState("");

    return (
        <>
            <form>
                <input 
                    type='text' 
                    value={name} 
                    onChange={ (e) => setName(e.target.value) } 
                    name='name' 
                    placeholder='Insira seu nome' />
                
                <input 
                    type='text' 
                    value={phone} 
                    onChange={ (e) => setPhone(e.target.value) } 
                    name='name' 
                    placeholder='Insira seu telefone' />

                <input type="submit" value="Enviar" onClick={ () => armazenarNomeDb('listNames', name, phone) }/>
            </form>
        
        </>
    )
}

/* https://blog.logrocket.com/using-localstorage-react-hooks */