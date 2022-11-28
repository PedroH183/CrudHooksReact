import React, { SyntheticEvent, useEffect, useState } from 'react';
import { GridList } from '../Grid/index';
import { Button, Form, Input, Radio, Space } from 'antd';
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
            <Space direction='horizontal'>
                <Form layout='inline'>
                        <Form.Item label='Descrição'>
                            <Input type='text'
                                    name='describe'
                                    placeholder='Insira a descrição'
                                    value={descTemp}
                                    required
                                    onChange={(e) => setDescTemp(e.target.value)}/>
                        </Form.Item>
                        <Form.Item label='Valor'>
                            <Input type='number'
                                    name='valornum'
                                    placeholder='Insira um valor'
                                    value={valor}
                                    required
                                    onChange={(e) => setValor(parseInt(e.target.value))}/>
                        </Form.Item>

                        <Radio.Group value={isExpense}>
                            <Radio  value={false}
                                    onClick={() => setIsExpense(false)}>Entrada</Radio>

                            <Radio  value={true}
                                    onClick={() => setIsExpense(true)}>Saida</Radio>
                        </Radio.Group>

                        <Form.Item>
                            <Button onClick={(e) => handleSubmitValues(e)}>Adicionar</Button>
                        </Form.Item>
                    </Form>                
            </Space>
                
        </div>
        <hr />
        <GridList change_list={handleChangeList}/>
    </div>
  )
}
