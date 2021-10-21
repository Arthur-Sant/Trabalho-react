//Na nossa pasta infra crie uma pasta chamada actions.
//Dentro dela, crie um arquivo index.js com o conteúdo:

import { CLICK_UPDATE_VALUE, SET_DIGIMON } from './actionTypes';

const clickButton = value => ({
  type: CLICK_UPDATE_VALUE,
  newValue: value
});

const setDigimons = digimons => ({
  type: SET_DIGIMON,
  setDigimons: digimons
});

export { clickButton, setDigimons }
//Ao ser disparada, ela comunicará ao Reducer que o type é CLICK_UPDATE_VALUE, 
//além do valor newValue: value que deverá ser atualizado na Store.