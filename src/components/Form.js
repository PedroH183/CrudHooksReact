import React from 'react'
import { useState, useEffect } from 'react';

function avaliandoInput(value){
    /* checar se é em branco */
    /* checar se é repetido  */ 
}

export const Form = () => {

    const [ name, setName ] = useState("");

    const armazenarNome = (chave, valor) => {
        if( localStorage.getItem(chave) !== null )
        {   // vou pegar o objeto que ja existe e incrementá-lo
            const newArrayObject = JSON.parse(localStorage.getItem(chave));
            const listObjetos = newArrayObject.map((nome) => nome);

            /* avaliando a entrada */
            if( avaliandoInput(valor) ){
                return;
            }

            listObjetos.push(valor);
            localStorage.setItem(chave, JSON.stringify(listObjetos));
        }
        else
        {   // vou criar um objeto e atribuir meu ultimo;
            const newArrayObject = [];
            newArrayObject.push(valor);
            localStorage.setItem(chave, JSON.stringify(newArrayObject));
        }
    };

    const listarNomes = (chave) => {
        let listObjetos = [];

        if( localStorage.getItem(chave) !== null)
        {   // ler os nomes salvos dentro do storage
            const newArrayObject = JSON.parse(localStorage.getItem(chave));
            listObjetos = newArrayObject.map((nome) => nome);
        }
        
        return(
            listObjetos.map((nome) => <li>{nome}</li>)
        );
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