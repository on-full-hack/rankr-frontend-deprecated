import * as React from 'react';
import {Route, BrowserRouter as Router, Link} from 'react-router-dom';
import Login from './Login';
import {MuiThemeProvider} from '@material-ui/core/styles';
import theme from '../theme';

export const Main: React.FC = () => (
  <MuiThemeProvider theme={theme}>
    <Router>
      <Route path="/login" component={Login} />
    </Router>
  </MuiThemeProvider>
);
