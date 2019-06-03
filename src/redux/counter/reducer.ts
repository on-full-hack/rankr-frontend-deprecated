import {ActionType} from 'typesafe-actions';
import * as actions from './actions';
import * as types from './constants';

export type CounterState = {
  readonly counter: number;
};

export type CounterAction = ActionType<typeof actions>;

export const reducer = (
  state: CounterState = {counter: 0},
  action: CounterAction
): CounterState => {
  switch (action.type) {
    case types.INCREMENT:
      return {...state, counter: state.counter + 1};
    case types.INCREMENT_ASYNC_SUCCESS:
      return {...state, counter: action.payload};
    default:
      return state;
  }
};

export default reducer;
