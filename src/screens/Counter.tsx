import Types from 'MyTypes';
import React from 'react';
import {connect} from 'react-redux';
import actions from '../redux/rootAction';

type Props = {count: number; onRandom: () => void};

const Counter: React.FC<Props> = props => {
  return (
    <>
      <div>{props.count}</div>
      <button onClick={props.onRandom}>random</button>
    </>
  );
};

const mapStateToProps = (state: Types.RootState) => ({
  count: state.counters.counter
});

const dispatchProps = {
  onRandom: actions.counters.incrementAsync
};

export default connect(
  mapStateToProps,
  dispatchProps
)(Counter);
