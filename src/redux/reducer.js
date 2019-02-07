import {combineReducers} from 'redux';

function dummy(state = 'dummy', action) {
  switch (action.type) {
    case 'DUMMY':
      return {...state, dummy: action.dummy};
    default:
      return state;
  }
}

const rootReducer = combineReducers({dummy});

export default rootReducer;
