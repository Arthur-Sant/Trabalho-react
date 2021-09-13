import { Component } from 'react';
import Input from '../shared/components/Input/Input';

export default class ThirdScreen extends Component {
  constructor(props){
    super(props);

    this.state = {
      numbers: [],
      soma: 0,
      produto: 0,
      media: 0,
      mostrar: false
    }
  }

  addNumber(){
    const input = document.getElementById('numbers')
    const numbers = this.state.numbers;
    numbers.push(Number(input.value));

    this.setState({ numbers: numbers})

    input.value = ""
  }

  calculate() {
    const numbers = this.state.numbers
    const soma = numbers.reduce((total, number) => total + number);
    const produto = numbers.reduce((total, number) => total * number);
    const media = soma / numbers.length;

    this.setState({
      soma: soma,
      produto: produto,
      media: media,
      mostrar: true
    });
  }

  render(){
    return (
      <div>
        <h3>Adicione os numeros para o calculo</h3>
        <Input id={'numbers'} padding={10} type={'number'}/>
        <button onClick={() => this.addNumber()}> Adicionar</button>
        <button onClick={() => this.calculate()} >Calcular</button>
        {this.state.mostrar ? (
          <ul>
            <li><b>Soma:</b> {this.state.soma}</li>
            <li><b>Produto:</b> {this.state.produto}</li>
            <li><b>Media:</b> {this.state.media}</li>
          </ul>
        ) : ""}
      </div>
    )
  }
}