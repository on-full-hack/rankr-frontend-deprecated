import * as React from 'react';
import {Route, BrowserRouter as Router, Link} from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import {ThemeProvider} from '@material-ui/styles';
import theme from '../theme';
import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
`;

export const Main: React.FC = () => (
  <ThemeProvider theme={theme}>
    <Container>
      <Router>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
      </Router>
    </Container>
  </ThemeProvider>
);
