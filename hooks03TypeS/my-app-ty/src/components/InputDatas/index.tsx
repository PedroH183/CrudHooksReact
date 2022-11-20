import React, { SyntheticEvent, useEffect, useState } from 'react';
import { GridList } from '../Grid/index';
import './index.css'


interface PropsInputData{
    listItems: any[],
    handleSave: any,
}

export const InputData = ({listItems, handleSave}: PropsInputData) => {
 
    const [valor, setValor] = useState(0);
    const [isEntrada, setIsEntrada] = useState(true);
    const [descTemp, setDescTemp] = useState('');
    
    const generateID = () => Math.round(Math.random() * 1000);

    useEffect(() => {
        if( isNaN(valor) )
        {
            setValor(0);
        }
    }, [valor])

    const handleSubmitValues = (e: SyntheticEvent) => {
        e.preventDefault();
        if ( descTemp === '' || !valor) {
            alert("Informe a descrição e o valor!");
            return;
        } else if (valor < 1) {
            alert("O valor tem que ser positivo!");
            return;
        }

        const transaction = {
            id: generateID(),
            desc: descTemp,
            valor: valor,
            expense: isEntrada,
        };

        handleSave(transaction);

        setDescTemp("");
        setValor(0);
    };
    

    return (
    <div className='ContainerInsertionDatas'>
        <div className='InputDados'>
            <form onSubmit={handleSubmitValues }>
                <div className='InputLabelDados'>
                    <label>Descrição</label>
                    <br /> 
                    <input
                        type='text'
                        name='describe'
                        placeholder='Insira uma Descrição'
                        required
                        value={descTemp}
                        onChange={(e) => setDescTemp(e.target.value)}/>

                </div>
                <div className='InputLabelDados'>
                    <label>Valor</label>
                    <br />
                    <input
                        type='text'
                        name='valornum'
                        value={valor}
                        required
                        onChange={(e) => setValor(parseInt(e.target.value))}/>
                </div>
                <div className='InputLabelDados'>
                    <label>Entrada</label>
                    <input
                        type='checkbox'
                        name='EntradaCheck'
                        value='1'
                        onClick={ () => setIsEntrada(!isEntrada) }/>
                </div>

                <div className='InputLabelDados'>
                    <label>Saida</label>
                    <input
                        type='checkbox'
                        value='0'
                        name='SaidaCheck'
                        onClick={ () => setIsEntrada(!isEntrada) }/>

                </div>
                    <input type="submit"
                            className='SendButton'
                            value='Adicionar'/>

            </form>
        </div>
        <span><b>RESULTADO TESTE : { descTemp } {valor} </b></span>
        <hr></hr>
        <GridList />
    </div>
  )
}
