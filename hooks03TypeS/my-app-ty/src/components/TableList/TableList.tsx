import React, { createContext, useContext, useEffect, useState } from 'react'
import TableData from './TableBody'

import { FieldsTypes, DataType } from './types';


const TableList = ({}) => {
    let data: DataType[] = [
        {id: 1, Nome: 'Ajalmar', Fone: '8888-7777'},
        {id: 2, Nome: 'Claudia', Fone: '9999-4444'},
        {id: 3, Nome: 'Betinho', Fone: '9876-3333'},
        {id: 4, Nome: 'Ana Julia', Fone: '9855-3333'}, 
        {id: 5, Nome: 'Bia Julia', Fone: '9755-3333'}  
     ];
    const [meusDados, setMeusDados] = useState(data);

    const fields : FieldsTypes[]=[
        {
            title: 'Nomes',
            key: 'Nome',
        },
        {
            title: 'Telefone',
            key: 'Fone',
        },
    ]

    const InsertDataInTable = (ev: React.SyntheticEvent) => {
        ev.preventDefault();
        let temp_state = [...meusDados];
        temp_state.push({id: 5, Nome: 'Pedro',Fone: '9999-999'});
        setMeusDados(temp_state); 
    }

  return (
        <TableData
            data={meusDados}
            fields={fields}
            buttonsInTable={false}
            addButton={ {label: 'Adicionar', button_method: InsertDataInTable} }/>
  )
}

export default TableList