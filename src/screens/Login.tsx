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
import {RootState} from 'MyTypes';
import {Error} from '../lib/types';
import ErrorToast from '../components/ErrorToast';
import {push} from 'connected-react-router';

const Text = styled.div`
  font-size: 20px;
  font-family: Courier-new, Courier;
  color: #fff;
  display: flex;
  justify-content: center;
`;

interface Props {
  onLogin: (username: string, password: string) => void;
  error: Error | null;
  push: (path: string) => void;
}

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
        <Button fullWidth onClick={() => props.push('/signup')} secondary>
          Sign Up
        </Button>
      </LoginFields>
      {props.error && <ErrorToast>{props.error.message}</ErrorToast>}
    </LoginContainer>
  );
};

const dispatchProps = {
  onLogin: login,
  push
};

const mapDispatchToProps = (state: RootState) => ({
  error: state.login.error
});

export default connect(
  mapDispatchToProps,
  dispatchProps
)(Login);
