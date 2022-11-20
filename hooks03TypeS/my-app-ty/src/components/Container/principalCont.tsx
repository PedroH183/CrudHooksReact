import React, { useEffect, useState} from 'react';
import { Resume } from '../Resume/index';
import { InputData } from '../InputDatas/index';
import './conteiner.css';
import { useContext } from 'react';


export const Header: React.FC = () =>{
    return(
      <div className="containerPrincipal">
        <div className='containerPricText'>
            <h2>Sistema do Pedro</h2>
        </div>
      </div>
    );
}

export const DataManager: React.FC =() => {
    const [ listaNoGrid, setListaGrid ] = useState<any[]>([])
    const dados_salvos = useContext(MyContextDados);

    const handleSave = (newTransaction: {}) =>{
        const listaToDos = [...arrayTemp, newTransaction];
        setListaGrid(listaToDos);
    
        localStorage.setItem('ListaDados', JSON.stringify(listaToDos));

    }

    return(
        <div className='TableContainer'>
            <Resume />
            <InputData listItems={listaNoGrid} handleSave={handleSave} />
        </div>
    );
}