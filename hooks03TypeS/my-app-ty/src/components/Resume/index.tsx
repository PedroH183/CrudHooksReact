import React, { useState } from 'react';
import {
    AiOutlineArrowUp,
    AiOutlineArrowDown,
    AiFillBank,
} from 'react-icons/ai';
import './index.css';

interface resumeProps{
    entrada: number,
    saida: number,
    total: number,
}

export const Resume = ({ entrada, saida, total }: resumeProps) => {

    return (
        <div className='ResumeSections'>

            <div className='EntradasCs'>
                <h2>Entradas</h2>
                <div className='iconeInputs'>
                    <AiOutlineArrowUp />
                </div>
                <div className='textIcons'>
                    <p>R$ {entrada} </p>
                </div>
            </div>

            <div className='EntradasCs'>
                <h2>Saidas</h2>
                <div className='iconeInputs'>
                    <AiOutlineArrowDown />
                </div>
                <div className='textIcons'>
                    <p>R$ {saida}</p>
                </div>
            </div>

            <div className='EntradasCs'>
                <h2>Total</h2>  
                <div className='iconeInputs'>
                    <AiFillBank />
                </div>
                <div className='textIcons'>
                    <p>R$ {total}</p>
                </div>
            </div>
        </div>
    );
}
