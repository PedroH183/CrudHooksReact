import React, { useState } from "react";
import { Usuarios } from "./components/ListUsers";
import { armazenarDb, ListarNomes } from './utils/storage';

const chave = 'localNames';

export const Form = () => {
  const [ nomePessoa, setNome ] = useState('');
  const [ inputText, setInput ] = useState('');
  const [ inputPhone, setPhone ] = useState('');
  const [ listaUsuarios, setListaUsuarios ] = useState([]);

  const saveValue = (dado) => {
    dado.push(inputText);
    return dado;
  }

  const sendNameForm = (e) => {
    e.preventDefault();
    setNome(inputText);
    setInput('');
    setListaUsuarios( saveValue(listaUsuarios) ); // vai substituir
    armazenarDb(chave, inputText, inputPhone); // armazenando no localStorage
  }
  
  return (
      <>
        <label>Seja Bem-Vindo {nomePessoa} </label> 

        <form>
          <input type='text'
                  name='sendName'
                  value={inputText}
                  onChange={ (e) => setInput(e.target.value) }
                  placeholder='insira seu nome'/>
          
          <input type='text'
                  name='sendPhone'
                  value={inputPhone}
                  onChange={ (e) => setPhone(e.target.value) }
                  placeholder='insira seu telefone'/>

          <button value='Enviar' onClick={ sendNameForm }>Enviar</button>
        </form>

        <Usuarios listaUsers={listaUsuarios} />
        <ListarNomes chave={chave}/>
      </>
  );
}
