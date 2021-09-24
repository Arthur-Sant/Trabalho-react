import { Component } from "react";
import './Personagem.css';

export default class Personagens extends Component {
  constructor(props) {
    super(props);

    this.state = { personagens: [] };
  }

  returnOccupation(value){
    return value.map(occupation => <li style={{marginLeft: '20px'}}>{occupation}</li>);
  }

  componentDidMount() {
    (async () => {
      const response = await fetch("https://breakingbadapi.com/api/characters");
      const data = await response.json();

      this.setState({ personagens: data });
    })();
  }

  render() {
    return (
      <div className="container">
        <h1>Personagens: </h1>
        <ul>
          {this.state.personagens.map((personagem, key) => (
            <li key={key}>
              <div className="li-container">
                <img 
                  src={personagem.img} 
                  style={{
                    width: '200px',
                    height: '300px',
                    marginRight: '10px',
                  }}
                />

                <div>
                    <p>
                      <b>Nome: </b>{personagem.name}
                    </p>
                    <p>
                      <b>Aniversario: </b>{personagem.birthday}
                    </p>
                    <p>
                      <b>Ocupação: </b>{this.returnOccupation(personagem.occupation)}
                    </p>
                    <p>
                      <b>Estatus: </b>{personagem.status}
                    </p>
                    <p>
                      <b>Apelido: </b>{personagem.nickname}
                    </p>
                    <p>
                      <b>Retratado: </b>{personagem.portrayed}
                    </p>
                </div>
              </div>
              <hr />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
