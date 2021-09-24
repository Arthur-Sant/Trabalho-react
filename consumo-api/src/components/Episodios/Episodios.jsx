import { Component } from "react";

export default class Episodios extends Component{
  constructor(props) {
    super(props);

    this.state = {episodios: []}
  }

  componentDidMount() {
    (async () => {
        const response  = await fetch('https://breakingbadapi.com/api/episodes');
        const data = await response.json();

       this.setState({episodios: data});
    })()
  }

  render(){
    return(
      <div className="container">
        <h1>Episodios:</h1>
        <ul>
          {this.state.episodios.map((item, key) => (
            <li key={key}>
              <p><b>Episodio: </b> Session: {item.season} - Episodio: {item.episode} - {item.title} </p>
              <p><b>Data: </b> {item.air_date}</p>
              <hr />
            </li>
        ))}
        </ul>
      </div>
    );
  }
}