import React, { useState } from 'react'
import TableData from './TableBody'

import { FieldsTypes, DataType, ButtonsTableProps} from './types';
import { AiFillDelete } from 'react-icons/ai';
import { EditOutlined, EyeOutlined } from '@ant-design/icons';

const TableList = () => {
    // lembrar de passar as props da tabela para esse componente maior.
    let data: DataType[] = [
        {id: 1, Nome: 'Ajalmar', Fone: '8888-7777'},
        {id: 2, Nome: 'Claudia', Fone: '9999-4444'},
        {id: 3, Nome: 'Betinho', Fone: '9876-3333'},
        {id: 4, Nome: 'Ana Julia', Fone: '9855-3333'}, 
        {id: 5, Nome: 'Bia Julia', Fone: '9755-3333'}  
     ];

    const [ meusDados, setMeusDados] = useState<DataType[]>(data);
    const [ filterText, setFilterText ] = useState<string>('')

    const columnFilterName = meusDados.filter( 
        (object) => object.Nome.toLowerCase().includes(filterText.toLowerCase()))
    
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

    const buttonsInTable: ButtonsTableProps[] = [
        {
            label: 'Delete',
            icon: <AiFillDelete/>,
            color: '',
            action: () => alert('APAGAA'),
        },
        {
            label: 'Edit',
            icon: <EditOutlined />,
            color: '',
            action: () => alert('EDITAA'),
        },
        {
            label: 'View',
            icon: <EyeOutlined />,
            color: '',
            action: () => alert('VERRR')
        }
    ]

    const InsertDataInTable = (ev: React.SyntheticEvent) => {
        ev.preventDefault();
        let temp_state = [...meusDados];
        temp_state.push({id: 5, Nome: 'Pedro',Fone: '9999-999'});
        setMeusDados(temp_state);
    }

  return (
    <div style={{padding: 40}}>
        <input type="text"
                value={filterText}
                onChange={ (ev) => setFilterText( ev.target.value ) }/>
        
        <TableData
            data={columnFilterName}
            fields={fields}
            buttonsInTable={true}
            actionsTable={buttonsInTable}
            addButton={ {label: 'Adicionar', button_method: InsertDataInTable} }/>
    </div>
  )
}

export default TableList