import { Component } from "react";
import Episodios from "../Episodios/Episodios";
import Frases from "../Falas/Frases";
import Mortes from "../Mortes/Mortes";
import Personagens from "../Personagens/Personagens";
import Sobre from "../Sobre/Sobre";
import { Button } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";

export default class BreakBand extends Component {
  constructor(props) {
    super(props);

    this.state = {show: 1}
  }

  handlePages(){
    switch(this.state.show) {
      case 1: return <Sobre />; break;
      case 2: return <Episodios />; break;
      case 3: return <Frases />; break;
      case 4: return <Mortes />; break;
      case 5: return <Personagens />; break;
      default: console.log("nada"); break;
    }
  }

  render(){
    return (
      <div className="container">
        <div className="d-flex justify-content-around my-3">
          <Button variant="secondary" onClick={() => this.setState({show: 1})}>Sobre</Button>
          <Button variant="secondary" onClick={() => this.setState({show: 2})}>Episodio</Button>
          <Button variant="secondary" onClick={() => this.setState({show: 3})}>Frases</Button>
          <Button variant="secondary" onClick={() => this.setState({show: 4})}>Mortes</Button>
          <Button variant="secondary" onClick={() => this.setState({show: 5})}>Personagens</Button>
        </div>
        { this.handlePages() }
      </div>
    );
  }
}