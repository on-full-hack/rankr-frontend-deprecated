import * as React from 'react';
import {Route, BrowserRouter as Router, Link} from 'react-router-dom';
import Login from './Login';
import {ThemeProvider} from '@material-ui/styles';
import theme from '../theme';

export const Main: React.FC = () => (
  <ThemeProvider theme={theme}>
    <Router>
      <Route path="/login" component={Login} />
    </Router>
  </ThemeProvider>
);
