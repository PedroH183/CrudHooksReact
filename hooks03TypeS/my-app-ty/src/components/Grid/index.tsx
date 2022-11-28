import React, { useContext } from 'react'
import { MyContextData, objectProps } from '../Container/principalCont';
import { NameAcessDatas } from '../Container/principalCont';
import { Button, Table } from 'antd'
import './index.css'


interface DeleteProps{
  id: number,
}

interface GridListProps{
  change_list: any;
}

const DeleteButton = ({change_list, id}:  DeleteProps & GridListProps) =>{
  const meus_dados = useContext(MyContextData);

  const deleteVar = () => {
    const novoArray = meus_dados.filter((objeto) => objeto.id !== id);
    change_list(novoArray); // é um setState
    localStorage.setItem(NameAcessDatas, JSON.stringify(novoArray));
  }

  return (<Button onClick={() => deleteVar()}>Delete</Button>);
}


export const GridList = ({change_list}: GridListProps) => {
  const meus_dados = useContext(MyContextData);
  const string_expense = (( expense: boolean ) => expense ? 'Saida' : 'Entrada');

  const colunas = [
    {
      title: 'Descrição',
      dataIndex: 'desc',
      key:'desc',
    },
    {
      title: 'Valor',
      dataIndex: 'valor',
      key:'valor',
    },
    {
      title: 'Status',
      dataIndex: 'expense',
      key:'expense',
    },
    {
      title: '',
      dataIndex: 'delete',
      key: 'delete',
    }
  ];

  const lista_dados = meus_dados.map( (objeto) => { return (
    {
      desc: objeto.desc,
      valor: objeto.valor,
      expense: string_expense(objeto.expense),
      delete: <DeleteButton change_list={change_list} id={objeto.id}/>,
    }
  )})
  
  return (
      <Table columns={colunas} dataSource={ lista_dados }/>
  )
}
