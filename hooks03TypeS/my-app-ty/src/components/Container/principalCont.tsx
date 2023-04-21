import React, { useEffect, useState, createContext } from 'react';
import { Resume } from '../Resume/index';
import { InputData } from '../InputDatas/index';
import './conteiner.css';


export interface objectProps{
    id: number,
    desc: string,
    valor: number,
    expense: boolean,
}

export const NameAcessDatas: string = 'ListaDados';

// deve calcular a diferença entre os valores 
const calcu_total = (list_dados_send: objectProps[] ): number[] =>{
    let entrada = 0; 
    let saida = 0;

    list_dados_send.forEach( ( objeto : objectProps ) => {
        if(objeto.expense){   
            saida += objeto.valor;
        } else {
            entrada += objeto.valor;
        }
    });

    return [ entrada, saida, entrada-saida ];
}

export const MyContextData = createContext<objectProps[]>([]);

export const DataManager: React.FC =() => {
    const list_dados_use = localStorage.getItem(NameAcessDatas);
    const list_dados_send: [] = list_dados_use ? JSON.parse(list_dados_use) : [];
    
    const [ listaGrid, setListaGrid ] = useState<objectProps[]>( list_dados_send );
    const [ total, setTotal ] = useState<number>(0);
    const [ entradas, setEntradas ] = useState<number>(0);
    const [ saidas, setSaidas ] = useState<number>(0);
    
    
    useEffect(() => {
        // Resume Effects
        const array_resume = calcu_total(listaGrid);
        setEntradas(array_resume[0]);
        setSaidas( array_resume[1] );
        setTotal( array_resume[2] );

    },[listaGrid]);
    
    
    const handleSave = (newTransaction: objectProps) =>{
        const save_datas: objectProps[] = [...list_dados_send, newTransaction]
        setListaGrid(save_datas);
        
        localStorage.setItem(NameAcessDatas, JSON.stringify(save_datas));
    }

    return(
        <MyContextData.Provider value={listaGrid}>
            <div className="managerContainer">
                <div className='TableContainer'>
                    <Resume total={total} entrada={entradas} saida={saidas} />
                    <InputData handleSave={handleSave} handleChangeList={setListaGrid}/>
                </div>
            </div>
        </MyContextData.Provider>
    );
}