import { Component } from 'react';
import Input from '../shared/components/Input/Input';
import dayjs from 'dayjs';

export default class FifthScreen extends Component{
  constructor(props){
    super(props);

    this.state = {
      years: 0,
      months: 0,
      days: 0,
      weeks: 0,
      show: false
    }
  }

  calculate(){
    const input = document.getElementById('dataDeNascimento').value
    const dateNow = dayjs()
    const years = dayjs(dateNow).diff(input, "years");
    const months = dayjs(dateNow).diff(input, "months");
    const days = dayjs(dateNow).diff(input, "days");
    const weeks = dayjs(dateNow).diff(input, "weeks");

    this.setState({
      years: years,
      months: months,
      days: days,
      weeks: weeks,
      show: true
    })
  }
  render(){
    return (
      <div>
        <Input type={'date'} padding={10} id={'dataDeNascimento'} />
        <button onClick={() => this.calculate()}>Ver diferença</button>
        <br/>
        <label>Diferença em: </label>
        {this.state.show ? (
          <ul>
            <li><b>Anos:</b> {this.state.years}</li>
            <li><b>Meses:</b> {this.state.months}</li>
            <li><b>Dias:</b> {this.state.days}</li>
            <li><b>Semanas:</b> {this.state.weeks}</li>
          </ul>
        ) : ""}
      </div>
    );
  }
}