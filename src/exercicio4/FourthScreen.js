import { Component } from 'react';
import Input from '../shared/components/Input/Input';
export default class FourthScreen extends Component {
  constructor(props){
    super(props);

    this.state = {letras: 0}
  }

  change({target: {value}}){
    const palavras = value.split(" ")
    this.setState({letras: palavras.length});
  }

  render(){
    return (
      <div>
        <input type="text" id="letras" onChange={(e) => this.change(e)}/>
        {this.state.letras ? (
          <ul>
            <li><b>Palavras:</b> {this.state.letras}</li>
          </ul>
        ) : ""}
      </div>
    );
  }
}