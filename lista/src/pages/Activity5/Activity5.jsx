import React from 'react';
import './Activity5.css'
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';

const Activity5 = () => {

  const convertFarenheitDegrees = () => {
    const [ 
      {value: farenheit},
      degreesTextBox
     ] = document.querySelectorAll('.item-activity5 input').values()

     const degrees = (farenheit - 32) * 5 / 9

     degreesTextBox.value = degrees
  }

  return (
    <div className="container-activity5">
      <div className="item-activity5">
        <h2>Farenheit</h2>
        <Input type="number" placeholder="0" />
      </div>

      <div className="item-activity5">
        <h2>Graus</h2>
        <input 
          disabled
          style={{padding: "5px", border: "1px solid gray", borderRadius: "5px"}}
        />
      </div>

      <Button onClick={convertFarenheitDegrees}>Converter</Button>
    </div>
  );
}

export default Activity5;