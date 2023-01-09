import React, { useMemo, useState } from 'react'
import TableData from './TableBody'
import useSortedData from './SortedData/SortTableHook';

import { AiFillDelete } from 'react-icons/ai';
import { EditOutlined, EyeOutlined } from '@ant-design/icons';
import { FieldsTypes, ButtonsTableProps} from './types';

interface DataType{
    id: number,
    Nome: string,
    Fone: string,
  }

const TableList = () => {
    let data: DataType[] = [
        {id: 1, Nome: 'Ajalmar', Fone: '8888-7777'},
        {id: 2, Nome: 'Claudia', Fone: '9999-4444'},
        {id: 3, Nome: 'Betinho', Fone: '9876-3333'},
        {id: 4, Nome: 'Ana Julia', Fone: '9855-3333'}, 
        {id: 5, Nome: 'Bia Julia', Fone: '9755-3333'},
        {id: 6, Nome: 'Pedro', Fone: '9745-7878'},
        {id: 7, Nome: 'Lucas', Fone: '7855-3331'},
        {id: 8, Nome: 'Nani', Fone: '1755-1111'},
     ];
    
    const [ filterText, setFilterText ] = useState<string>('');
    const { meus_dados, requestSort } = useSortedData(data)

    // filter sofre interferencia campo, pois precede a ideia de existir um campo chamado nome.
    const columnFilterName = useMemo( () => {
        const lowerName = filterText.toLowerCase();
        
        return(
            meus_dados.filter( 
                (object: any) => object.Nome.toLowerCase().includes(lowerName))
        )
    }, [filterText, meus_dados]) 
    
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
        alert('ADICIONAAA');
    }

  return (
    <div style={{padding: 40}}>
        <input type="text"
                value={filterText}
                onChange={ (ev) => setFilterText( ev.target.value ) }/>
        
        <TableData
            fields={fields}
            buttonsInTable={true}
            data={columnFilterName}
            sortMethod={requestSort}
            actionsTable={buttonsInTable}
            addButton={ {label: 'Adicionar', button_method: InsertDataInTable} }/>
    </div>
  )
}

export default TableList