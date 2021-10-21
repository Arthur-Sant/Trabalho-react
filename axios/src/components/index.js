//Crie um arquivo index.js no seu componente
import { connect } from 'react-redux';
import { clickButton } from '../redux/actions';
import AulaRedux from './redux';

//O método mapStateToProps transforma um trecho do estado da Store
//em uma prop utilizável pelo componente, com o nome newValue.
const mapStateToProps = store => ({
  newValue: store.clickState.newValue
});

//O método mapDispatchToProps transforma a Action Creator clickButton 
//em uma prop para o componente.
const mapDispatchToProps = dispatch => ({
  clickButton: (value) => dispatch(clickButton(value))
});

//No momento de exportar o componente, precisamos fazer a sua conexão 
// através do método connect do React Redux
const AulaReduxConnected = connect(mapStateToProps, mapDispatchToProps)(AulaRedux);

export { AulaReduxConnected as AulaRedux }