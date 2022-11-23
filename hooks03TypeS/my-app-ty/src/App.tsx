import React  from "react";
import { DataManager } from './components/Container/principalCont';
import { Header } from "./components/Header";
import "./App.css";


const App = () => {
  return (
    <React.Fragment>
      <Header />
      <DataManager />
    </React.Fragment>
  );
}

export default App;