import React, { useEffect, useState, createContext } from 'react';
import { Resume } from '../Resume/index';
import { InputData } from '../InputDatas/index';
import { GridList } from '../Grid';
import './conteiner.css';

interface objectProps{
    id: number,
    desc: string,
    valor: number,
    expense: boolean,
}

const NameAcessDatas: string = 'ListaDados';
export const MyContextData = createContext<objectProps[]>([]);

export const DataManager: React.FC =() => {
    const [ listaGrid, setListaGrid ] = useState<objectProps[]>([]);
    
    const list_dados_use = localStorage.getItem(NameAcessDatas);
    const list_dados_send = list_dados_use ? JSON.parse(list_dados_use) : []; // pegar o objeto esta funcionando
    const [ total, setTotal ] = useState(0);
    
    useEffect(() => {
        // criar a logica para interagir com o resume.
        let temp_total = 0;
        listaGrid.forEach( (objeto) =>  (temp_total += Number(objeto.valor) ) );
        setTotal(temp_total);

    }, [listaGrid]);


    const handleSave = (newTransaction: objectProps) =>{
        const save_datas: objectProps[] = [...list_dados_send, newTransaction]
        setListaGrid(save_datas);
        
        localStorage.setItem(NameAcessDatas, JSON.stringify(save_datas));
    }

    return(
        <MyContextData.Provider value={listaGrid}>
            <div className='TableContainer'>
                <Resume total={total} />
                <InputData handleSave={handleSave} />
            </div>
        </MyContextData.Provider>
    );
}