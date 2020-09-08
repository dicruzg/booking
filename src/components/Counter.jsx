import React from 'react'
import styled from 'styled-components'

const CounterBtn = styled.button`
  background-color: '#F2F2F2';
  color: '#333333';
  font-size: 1.25rem;
  border: 1px solid #ccc;
  display: table-cell;
  position: relative;
  width: 30px;
  height: 36px;
  vertical-align: middle;
`
const CounterInput = styled.input`
  font-size: 1.25rem;
  display: table-cell;
  text-align: center;
  height: 36px;
  width: 36px;
  padding-top: 4px;
  border: 1px solid #ccc;
  vertical-align: middle;
  border-radius: 0!important;
  box-shadow: none; 
`

const Counter = ({ count, setCount }) => {

  const handleIncrement = (event) => {
    console.log('Increment')
  }

  const handleDecrement = (event) => {
    console.log('Decrement')
  }

  return (
    <div>
      {/* Minus Btn */}
      <CounterBtn onClick={ handleDecrement }>-</CounterBtn>
      {/* Counter Input */}
      <CounterInput value={ count } />
      {/* Plus Btn */}
      <CounterBtn onClick={ handleIncrement }>+</CounterBtn>
    </div>
  )
}

export default Counter