import { Component } from "react";
import api from "../service/api";
import "./Digimon.css";

export default class Digimon extends Component {
  constructor(props) {
    super(props);
    this.state = {digimons: []}
  }

  getDigimons(value = "") {
    (async() => {
      const { data } = await api.get('/api/digimon')
      const filterData = data.filter((digimon) => (
        digimon.name.substring(0, value.length) == value
      ));

      this.setState({ digimons: filterData });
    })()  
  }

  getData({target: {value}}){
      let word = ""
      if(value){
        word = value[0].toLocaleUpperCase() + value.substring(1, value.length)
      } 

      this.getDigimons(word);
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
          onChange={(e) => this.getData(e)}
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