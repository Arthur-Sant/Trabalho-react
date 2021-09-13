import { Component } from 'react';

export default class Button extends Component {
  
  constructor(props){
    super(props);
  }

  render(){
    const { text, onClick, color, padding } = this.props;
    return (
      <button onClick={() => onClick()} style={{backgroundColor: color, padding: padding}}>{ text }</button>
    );
  }
}