import React, { useState } from 'react';
import './Activity3.css'
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';

const Activity3 = () => {

  const [ result, setResult] = useState()

  const calculateExpression = () => {
    const [
      {value: y},
      {value: z}
    ] = document.querySelectorAll('.item-activity3 input').values()

    const accountResult = Math.sqrt(y * (Math.pow(y, 22) + Math.pow(z, 33)));

    setResult(accountResult.toFixed(2));
  }

  return (
    <div className="container-activity3">
      <div className="main-activity3">
        <span className="item-activity3">
          <h3>Y: </h3>
          <Input type={'number'} placeholder="0"/>
        </span>
        <span className="item-activity3">
          <h3>Z: </h3>
          <Input type={'number'} placeholder="0"/>
        </span>

        <Button onClick={calculateExpression}>Calcular</Button>
      </div>

      <div className="result-activity3">
        {result ? (
          <p><b>X: </b>{result}</p>
        ): ""}
      </div>
    </div>
  );
}

export default Activity3;