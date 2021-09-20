import { Component } from "react";
import Tela from "./Tela";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {show: false};
  }

  render(){
  return (
    <div className="app">
      <button onClick={() => this.setState({show: !this.state.show})}>Tela</button>
      <br />
      {this.state.show ? <Tela /> : ""}
    </div>
  );
  }
}

export default App;
