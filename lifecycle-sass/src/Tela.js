import { Component } from "react";
import logo from "./logo.svg";
import logo2 from "./logo2.svg";

export default class Tela extends Component {
  constructor(props) {
    super(props);

    this.state = { bg: false };
  }

  static getDerivedStateFromProps(props, state) {
    console.log(state);
  }

  componentDidMount() {
    console.log("renderizado");
  }

  componentDidUpdate() {
    console.log("atualizado");
  }

  componentWillUnmount() {
    console.log("sumiu");
  }

  render() {
    console.log("renderizando");
    return (
      <>
        <img 
        src={this.state.bg ? logo : logo2} 
        alt="logo" 
        width={"300px"} 
        height={"300px"} />
        <button onClick={() => this.setState({bg: !this.state.bg})}>Atualizar</button>
      </>
    );
  }
}
