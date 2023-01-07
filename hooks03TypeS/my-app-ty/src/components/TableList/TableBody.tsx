import React,{useContext} from 'react'
import TableDataItem from './TableDataItem'
import { TableDataPros} from './types';


const TableData = ({fields, buttonsInTable, addButton, data}: TableDataPros) => {

  return (
    <>
        { addButton && <button onClick={ (ev) => addButton.button_method(ev) }>{ addButton.label }</button> }
        
        <table>
            <thead>
                <tr>
                    {fields.map( (campo) => {
                        return(
                            <th key={campo.key}>{campo.title}</th> 
                        )})
                    }
                    { buttonsInTable && <th>Ações</th> }
                </tr>
            </thead>

            <tbody> 
                {data.map( (elemento_tabela) => {
                    return(
                        <tr key={elemento_tabela.id}>
                            {fields.map( (campo_tabela) => {
                                return(
                                    <TableDataItem
                                        data={elemento_tabela}
                                        identificador={campo_tabela.key}/>
                                )
                            })}
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </>    
  )
}

export default TableData