import "./App.css";
import FirstScreen from "./exercicio1/FirstScreen";
import { Component } from "react";
import SecondScreen from "./exercicio2/SecondScreen";
import ThirdScreen from "./exercicio3/ThirdScreen";
import FourthScreen from "./exercicio4/FourthScreen";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstScreen: false,
      secondScreen: false,
      thirdScreen: false,
      fourthScreen: false,
      fifthScreen: false,
    }; 
  }

  stateButton({target: {id}}) {
   switch(id){
      case "first": this.setState({firstScreen: !(this.state.firstScreen)}); break;
      case "second": this.setState({secondScreen: !(this.state.secondScreen)}); break;
      case "third": this.setState({thirdScreen: !(this.state.thirdScreen)}); break;
      case "fourth": this.setState({fourthScreen: !(this.state.fourthScreen)}); break;
      case "fifth": this.setState({fifthScreen: !(this.state.fifthScreen)}); break;
      default: console.error("Unknown state");
    } 
  }

  render() {
    return (
      <div className={'main'}>
        <button className={'screenButton'} id="first" onClick={(e) => this.stateButton(e)}>Primeira tela</button>
        {this.state.firstScreen ? <FirstScreen /> : ""}
        <br />

         <button className={'screenButton'} id="second" onClick={(e) => this.stateButton(e)}>Segunda tela</button>
        {this.state.secondScreen ? <SecondScreen /> : ""}
        <br />

        <button className={'screenButton'} id="third" onClick={(e) => this.stateButton(e)}>Terceira tela</button>
        {this.state.thirdScreen ? <ThirdScreen /> : ""}
        <br />

        <button className={'screenButton'} id="fourth" onClick={(e) => this.stateButton(e)}>Quarta tela</button>
        {this.state.fourthScreen ? <FourthScreen /> : ""}
        <br />

        <button className={'screenButton'} id="fifth" onClick={(e) => this.stateButton(e)}>Primeira tela</button>
        {this.state.fifthScreen ? <FirstScreen /> : ""}
      </div>
    );
  }
}

export default App;
