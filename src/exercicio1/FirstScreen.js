import { Component } from 'react';
import Button from '../shared/components/Button/Button';
import Input from '../shared/components/Input/Input';

export default class FirstScreen extends Component {

  constructor(props) {
    super(props);

    this.state = {format: ''}
  }

  render(){

    const calculate = () => {
      const value1 = document.getElementById('value1').value;
      const value2 = document.getElementById('value2').value;
      const value3 = document.getElementById('value3').value;

      if(value1 === value2 && value3 === value1) {
        this.setState({format: 'equilátero'})
      }else if(value1 != value2 && value2 != value3 && value3 != value1) {
        this.setState({format: 'escaleno'})
      }else{
        this.setState({format: 'isósceles'})
      }
    }

    return (
      <div>
      <Input id={'value1'} type={'number'} padding={10}/>
      <Input id={'value2'} type={'number'} padding={10}/>
      <Input id={'value3'} type={'number'} padding={10}/>
      <Button text={'calcular'} color={'red'} padding={10} onClick={calculate} />
      <p>{this.state.format}</p>
      </div>
    );
  }
}