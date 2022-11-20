import React, { useState, useContext, createContext} from "react";
import { Header, DataManager } from './components/Container/principalCont';
import "./App.css";


interface OtherListProps{
  arrayNomes: string[];
  props?: any;
};

const OtherList= ( props: OtherListProps) => {
  const listNames = props.arrayNomes; 

  return(
    <ul>
        {listNames.map((nome:string) => <li>{nome}</li> )}
    </ul>
  );
}



const App = () => {
  const MyContextDados = createContext<any[]>([]);
  const list_dados_take = localStorage.getItem('lista_dados');
  const list_dados_send = list_dados_take ? JSON.parse(list_dados_take) : [];

  return (
    <React.Fragment>
      <MyContextDados.Provider value={list_dados_send}>
        <Header />
        <DataManager />
      </MyContextDados.Provider>
    </React.Fragment>
  );
}

export default App;