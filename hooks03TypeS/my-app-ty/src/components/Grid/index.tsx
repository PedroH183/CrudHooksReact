import React, { useContext } from 'react'
import { MyContextData } from '../Container/principalCont';

// aqui eu quero renderizar a tabela.
export const GridList = () => {
  const meus_dados: {}[] = useContext(MyContextData);

  return (
    <>
      <p>Grid is here</p>
      <table>
        <thead>
        
        </thead>
        <tbody>

        </tbody>
      </table>
    </>
  )
}
