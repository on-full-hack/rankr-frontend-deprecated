import * as React from 'react';
import {Route, BrowserRouter as Router, Link} from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import Counter from './Counter';
import {theme, styled} from '../theme';
import {ThemeProvider} from 'styled-components';

const Container = styled.div`
  height: 100vh;
`;

export const Main: React.FC = () => (
  <ThemeProvider theme={theme}>
    <Container>
      <Router>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/counter" component={Counter} />
      </Router>
    </Container>
  </ThemeProvider>
);
