import React, { useContext } from 'react'
import { MyContextData } from '../Container/principalCont';
import { NameAcessDatas } from '../Container/principalCont';


interface gridListProps{
  change_list: any,
}

interface deleteProps{
  id: number,
}

const DeleteButton = ({change_list, id}: gridListProps & deleteProps) =>{
  const meus_dados = useContext(MyContextData);
  let newList: any[] = [];

  const deleteVar = () => {
    const novoArray = meus_dados.filter((objeto) => objeto.id !== id);
    change_list(novoArray);
    localStorage.setItem(NameAcessDatas, JSON.stringify(novoArray));
  }


  return (<button onClick={() => deleteVar()}>Delete</button>);
}

const GridDatasList = ({change_list}: gridListProps) => {
  const meus_dados = useContext(MyContextData);
  const dados_formatados = meus_dados.map(
    (objeto) => {
    return (
    <tr key={objeto.id}>
      <td>{objeto.desc}</td>
      <td>{objeto.valor}</td>
      <td>{objeto.expense? "Saida" : "Entrada"}</td>
      <td><DeleteButton change_list={change_list} id={objeto.id}/></td>
    </tr>)
  })
  
  return <>{dados_formatados}</>
}


// aqui eu quero renderizar a tabela.
export const GridList = ({change_list}: gridListProps) => {
  return (
    <>
      <table>
        <thead>
            <th>Descrição</th>
            <th>Valor</th>
            <th>Status</th>
        </thead>
        <tbody>
          <GridDatasList change_list={change_list}/>
        </tbody>
      </table>
    </>
  )
}
