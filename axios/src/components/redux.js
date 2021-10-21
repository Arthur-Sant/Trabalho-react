import React from 'react' 

export default class AulaRedux extends React.Component {
    constructor(props) {
        super(props)
        this.state = { inputValue: '', }
    } 
    
    inputChange = event => {
        this.setState({
            inputValue: event.target.value
        })
    }
    
    render() {
        const { clickButton, newValue } = this.props;
        const { inputValue } = this.state; 
        
        return (
            <div className="Aula11">
 
                <input
                    onChange={this.inputChange}
                    type='text'
                    value={inputValue}
                />
                <button onClick={() => clickButton(inputValue)}>
                    Click me!
                </button>
                <h1>{newValue}</h1>
            </div>
        );
    }
}