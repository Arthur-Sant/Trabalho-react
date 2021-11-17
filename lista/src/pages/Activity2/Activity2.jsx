import React, { useState } from 'react';
import './Activity2.css'

import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';

const Activity2 = () => {

  const [orderedNumbers, setOrderedNumbers ] = useState("");

  const putInAscendingOrder = () => {
    const numbers = []
    document.querySelectorAll('.container-activity2 input').forEach(element => {
      numbers.push(Number(element.value))
    });

    numbers.sort((a, b) => a - b)
    setOrderedNumbers(numbers.join(", "))
  }

  return (
    <div className="container-activity2">
      <span>
        <Input placeholder="Primeiro número" type={'number'}/> &nbsp;
        <Input placeholder="Segundo número" type={'number'}/> &nbsp;
        <Input placeholder="Terceiro número" type={'number'}/> &nbsp;
      </span>

      <Button onClick={putInAscendingOrder}>Ordenar</Button>

      <label>{orderedNumbers != "" ? `Ordenados: ${orderedNumbers}` : ""}</label>
    </div>
  );
}

export default Activity2;