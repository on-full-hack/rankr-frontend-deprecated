import React, {Component} from 'react';

type Props = {
  count: number;
  onIncrement: () => void;
};

const Main: React.FC<Props> = props => (
  <div>
    <h1>{`Counter: ${props.count}`}</h1>
    <button onClick={props.onIncrement}>Increment</button>
  </div>
);

export default Main;
