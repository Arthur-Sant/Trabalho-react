import { Component } from "react";

export default class Frases extends Component{
  constructor(props){
    super(props);

    this.state = {frases: []};
  }

  componentDidMount(){
    (async() => {
      const response = await fetch('https://breakingbadapi.com/api/quotes');
      const data = await response.json();

      this.setState({frases: data});
    })()
    }

  render(){
    return (
      <div className="container">
        <h1>Frases: </h1>
        <ul>
          {this.state.frases.map((frase, key) => (
            <li key={key}>
              <p><b>Frase: </b>{frase.quote}</p>
              <p><b>Autor: </b>{frase.author}</p>
              <hr />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}