import * as React from 'react';
import {Route, BrowserRouter as Router, Link} from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import Counter from './Counter';
import Leagues from './Leagues';
import LeagueForm from './LeagueForm';
import {theme, styled} from '../theme';
import {ThemeProvider} from 'styled-components';
import LeagueView from './LeagueView';
import Dashboard from './Dashboard';

const Container = styled.div`
  height: 100vh;
`;

export const Main: React.FC = () => (
  <ThemeProvider theme={theme}>
    <Container>
      <Router>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route exact path="/" component={Dashboard} />
        <Route path="/counter" component={Counter} />
        <Route path="/leagues" component={Leagues} />
        <Route path="/create-league" component={LeagueForm} />
        <Route path="/league/:id" component={LeagueView} />
      </Router>
    </Container>
  </ThemeProvider>
);
