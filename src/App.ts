import Types from 'MyTypes';
import Main from './Main';
import {connect} from 'react-redux';
import * as actions from './redux/counter/actions';

const mapStateToProps = (state: Types.RootState) => ({
  count: state.counters.counter
});

const App = connect(
  mapStateToProps,
  {
    onIncrement: actions.increment
  }
)(Main);

export default App;
