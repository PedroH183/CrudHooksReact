import TableDataItem from './TableDataItem'
import { TableDataPros} from './types';


const TableData = ({
    data,
    fields,
    addButton,
    actionsTable,
    buttonsInTable,}: TableDataPros) => {

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
                            {buttonsInTable && (
                                <div>
                                    {actionsTable.map( (action) => {
                                            return(
                                                <td 
                                                    key={action.label}
                                                    onClick={ (ev) => action.action(ev) }
                                                    style={{cursor: 'pointer'}}>
                                                    {action.icon}
                                                </td>
                                            )
                                        })
                                    }
                                </div>
                            )}
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </>    
  )
}

export default TableData