import React, { SyntheticEvent, useEffect, useState } from 'react';
import { GridList } from '../Grid/index';
import './index.css'


interface PropsInputData{
    handleSave: any,
    handleChangeList: any,
}

export const InputData = ({handleSave, handleChangeList}: PropsInputData) => {
 
    const [isExpense, setIsExpense] = useState<boolean>(false);
    const [valor, setValor] = useState(0);
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
        if ( !valor ) {
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
            expense: isExpense,
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
                        onClick={ () => setIsExpense(false) }/>
                </div>

                <div className='InputLabelDados'>
                    <label>Saida</label>
                    <input
                        type='checkbox'
                        value='0'
                        name='SaidaCheck'
                        onClick={ () => setIsExpense(true) }/>

                </div>
                    <input type="submit"
                            className='SendButton'
                            value='Adicionar'/>

            </form>
        </div>
        <hr />
        <GridList change_list={handleChangeList}/>
    </div>
  )
}
