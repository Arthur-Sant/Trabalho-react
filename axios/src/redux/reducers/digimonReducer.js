import { SET_DIGIMON } from "../actions/actionTypes";

const initialState = {
  fetchDigimons: []
}

export const setDigimons = (state = initialState, action) => {
  switch (action.type) {
    case SET_DIGIMON:
      return {
        ...state,
        fetchDigimons: action.setDigimons
      };
    default:
      return state;
  }
};

