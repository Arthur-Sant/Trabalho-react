import { Component } from "react";

export default class Sobre extends Component{
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="sobre">
        <h1>Sobre:</h1>
        <p>Uma serie muito legal</p>
      </div>
    );
  }
}