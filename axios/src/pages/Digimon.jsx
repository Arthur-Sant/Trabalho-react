import { Component } from "react";
import api from "../service/api";
import "./Digimon.css";

export default class Digimon extends Component {
  constructor(props) {
    super(props);
    this.state = {digimons: []}
  }

  getDigimons() {
    (async() => {
      const { setDigimons } = this.props;

      const { data } = await api.get('/api/digimon')

      setDigimons(data)
      this.setState({ digimons: data })
    })()  
  }

  getDigimonsByName(name) {

    const { fetchDigimons } = this.props; 
    const filterData = fetchDigimons.filter((digimon) => (
        digimon.name.toLowerCase().includes(name.toLowerCase())
      ));

    this.setState({ digimons: filterData });
  }

  componentDidMount(){
    this.getDigimons();
  }

  render(){
    return (
      <div>
        <div className="digimon-name-div">
          <input 
          type={'text'} 
          className="digimon-name-input" 
          onChange={(e) => this.getDigimonsByName(e.target.value)}
          placeholder="Digite o nome do digimon"/>
        </div>
        
          <ul className={'digimon-list'}>
            {this.state.digimons.map((digimon, index) => {
              return <li key={index} className={'item-list'}>
                <div className="digimon-img">
                  <img src={digimon.img} alt={digimon.name} width={'70px'} height={'100px'} />
                </div>

                <div className="digimon-data">
                    <p><b>Name:</b> {digimon.name}</p>
                    <p><b>Level:</b> {digimon.level}</p>
                </div>
                
              </li>
            })}
          </ul>
      </div>
    );
  }
}