//Crie um arquivo index.js no seu componente
import { connect } from 'react-redux';
import { setDigimons } from '../redux/actions';
import Digimon from './Digimon';

//O método mapStateToProps transforma um trecho do estado da Store
//em uma prop utilizável pelo componente, com o nome newValue.
const mapStateToProps = store => ({
  fetchDigimons: store.otherState.fetchDigimons
});

//O método mapDispatchToProps transforma a Action Creator clickButton 
//em uma prop para o componente.
const mapDispatchToProps = dispatch => ({
  setDigimons: (value) => dispatch(setDigimons(value))
});

//No momento de exportar o componente, precisamos fazer a sua conexão 
// através do método connect do React Redux
const DigimonConnected = connect(mapStateToProps, mapDispatchToProps)(Digimon);

export { DigimonConnected as Digimon }