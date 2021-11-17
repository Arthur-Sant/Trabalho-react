import React, { useState } from 'react';
import './Activity4.css'
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';

const Activity4 = () => {

  const [ result, setResult ] = useState("")

  const calculateNumber = () => {
    const [
      {value: firstNumber},
      {value: secondNumber}
    ] = document.querySelectorAll('.container-activity4 input').values()

    if(firstNumber % secondNumber == 0) {
      setResult("é divisível")
    }else{
      setResult("não é divisível")
    }
  }

  return (
    <div className="container-activity4">
        <Input type={'number'} placeholder="0"/>
        <Input type={'number'} placeholder="0"/>
        <Button onClick={calculateNumber}>Calcular</Button>

        {result ? (
          <h2>{result}</h2>
        ) : ""}
    </div>
  );
}

export default Activity4;