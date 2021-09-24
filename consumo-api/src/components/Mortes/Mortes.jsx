import { Component } from "react";

export default class Mortes extends Component{
  constructor(props){
    super(props);

    this.state = {mortes: []};
  }

  componentDidMount(){
    (async() => {
      const response = await fetch('https://breakingbadapi.com/api/deaths');
      const data = await response.json();

      this.setState({mortes: data});
    })()
    }

  render(){
    return (
      <div className="container">
        <h1>Mortes: </h1>
        <ul>
          {this.state.mortes.map((morte, key) => (
            <li key={key}>
              <p><b>Morte: </b>{morte.death}</p>
              <p><b>Causa: </b>{morte.cause}</p>
              <p><b>Responsavel: </b>{morte.responsible}</p>
              <p><b>Ultima Palavras: </b>{morte.last_words}</p>
              <hr />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}