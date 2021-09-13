import { Component } from 'react';

export default class Input extends Component {
  
  constructor(props) {
    super(props);
  }

  render(){
    const { type, id, padding} = this.props;
    return (
      <input type={ type } id={ id } style={{ padding: padding }}/>
    );
  }
}