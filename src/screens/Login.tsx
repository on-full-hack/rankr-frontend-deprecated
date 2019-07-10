import React, {useState} from 'react';
import {connect} from 'react-redux';
import TextField from '../components/TextField';
import LoginFields from '../components/LoginFields';
import LoginContainer from '../components/LoginContainer';
import Button from '../components/Button';
import styled from 'styled-components';
import {AppTitle} from '../components/AppTitle';
import {RouteComponentProps} from 'react-router';
import {login} from '../redux/login/actions';

const Text = styled.div`
  font-size: 20px;
  font-family: Courier-new, Courier;
  color: #fff;
  display: flex;
  justify-content: center;
`;

type Props = {
  onLogin: (username: string, password: string) => void;
};

type ComponentProps = Props & RouteComponentProps;

export const Login: React.FC<ComponentProps> = props => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  return (
    <LoginContainer>
      <AppTitle>rankr</AppTitle>
      <LoginFields>
        <TextField
          placeholder="Login"
          value={login}
          onChange={e => setLogin(e.currentTarget.value)}
        />
        <TextField
          placeholder="Password"
          type="password"
          value={password}
          onChange={e => setPassword(e.currentTarget.value)}
        />
        <Button
          fullWidth
          onClick={() => props.onLogin(login, password)}
          secondary
        >
          Sign In
        </Button>
        <Text>or</Text>
        <Button
          fullWidth
          onClick={() => props.history.push('/signup')}
          secondary
        >
          Sign Up
        </Button>
      </LoginFields>
    </LoginContainer>
  );
};

const dispatchProps = {
  onLogin: login
};

export default connect(
  null,
  dispatchProps
)(Login);
