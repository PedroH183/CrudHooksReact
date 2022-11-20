import React, { useState } from 'react';
import {
    AiOutlineArrowUp,
    AiOutlineArrowDown,
    AiFillBank,
} from 'react-icons/ai';
import './index.css';


export const Resume: React.FC = ({}) => {
    /* todos esses states serão elevados pois a logic esta presente no nó mais alto da arvore*/
    const [ entradas, setEntradas ] = useState(0);
    const [ saidas, setSaidas ] = useState(0);
    const [ total, setTotal ] = useState(0);

    return (
        <div className='ResumeSections'>

            <div className='EntradasCs'>
                <h2>Entradas</h2>
                <div className='iconeInputs'>
                    <AiOutlineArrowUp />
                </div>
                <div className='textIcons'>
                    <p>R$ {entradas}</p>
                </div>
            </div>

            <div className='EntradasCs'>
                <h2>Saidas</h2>
                <div className='iconeInputs'>
                    <AiOutlineArrowDown />
                </div>
                <div className='textIcons'>
                    <p>R$ {saidas}</p>
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
