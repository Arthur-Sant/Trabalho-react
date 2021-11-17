import React, { useState } from 'react';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import './Activity1.css'

const Activity1 = () => {

  const [ average, setAverage ] = useState(0); 

  const calculateAverage = () => {
    const [ 
      {value: firstNote}, 
      {value: firstNoteWeight}, 
      {value: secondNote},
      {value: secondNoteWeight}
    ] = document.querySelectorAll('.container-activity1 input').values()

    const averageAccountResult = (
      (Number(firstNote) * Number(firstNoteWeight)) + 
      (Number(secondNote) * Number(secondNoteWeight))
    ) / ( Number(firstNoteWeight) + Number(secondNoteWeight) )

    setAverage(averageAccountResult)
  }

  return (
    <div className="container-activity1">
      <span>
        <Input placeholder="Nota 1" type={'number'}/> &nbsp;
        <Input placeholder="Peso da nota 1" type={'number'}/>
      </span>
      <span>
        <Input placeholder="Nota 2" type={'number'}/> &nbsp;
        <Input placeholder="Peso da nota 2" type={'number'}/>
      </span>
      <br/>

      <Button onClick={() => calculateAverage()}> Calcular Média </Button>
      <br />
      <label>{average != 0 ? `Média ponderada: ${average.toFixed(2)}` : ""}</label>
    </div>
  );
}

export default Activity1;