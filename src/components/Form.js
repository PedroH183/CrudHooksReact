import React from 'react'
import { useState, useEffect } from 'react';
import { armazenarNome } from './services';


export const Form = () => {

    const [ name, setName ] = useState("");

    const listarNomes = (chave) => {
        let listObjetos = [];

        if( localStorage.getItem(chave) !== null)
        {   // ler os nomes salvos dentro do storage
            const newArrayObject = JSON.parse(localStorage.getItem(chave));
            listObjetos = newArrayObject.map((nome) => nome);
        }

        return( listObjetos.map((nome) => <li>{nome}</li>) );
    }

    return (
        <>
            <form>
                <input 
                    type='text' 
                    value={name} 
                    onChange={ (e) => setName(e.target.value) } 
                    name='name' 
                    placeholder='Insira seu nome' />

                <input type="submit" value="Enviar" onClick={ () => armazenarNome('listNames', name) }></input>
            </form>

            <ul>
                {listarNomes('listNames')}
            </ul>
        </>
    )
}

/* https://blog.logrocket.com/using-localstorage-react-hooks */