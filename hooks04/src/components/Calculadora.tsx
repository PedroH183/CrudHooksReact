import React from 'react'
import style from './style.module.scss'

const Calculadora = () => {
  return (
    <div>
        <div className={`${style['display']}`}>display</div>
        <div className={`${style['teclado']}`}>
            <div className={`${style['number']}`}>0</div>
            <div className={`${style['number']}`}>1</div>
            <div className={`${style['number']}`}>2</div>
            <div className={`${style['number']}`}>3</div>
            <div className={`${style['number']}`}>4</div>
            <div className={`${style['number']}`}>5</div>
            <div className={`${style['number']}`}>6</div>
            <div className={`${style['number']}`}>7</div>
            <div className={`${style['number']}`}>8</div>
            <div className={`${style['number']}`}>9</div>
        </div>
    </div>
  )
}

export default Calculadora;