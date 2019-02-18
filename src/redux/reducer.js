import {combineReducers} from 'redux';

function dummy(state = 'dummy', action) {
  switch (action.type) {
    case 'DUMMY':
      return {...state, dummy: action.payload};
    default:
      return state;
  }
}

const rootReducer = combineReducers({dummy});

export default rootReducer;
