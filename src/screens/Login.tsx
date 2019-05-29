import React, {useState} from 'react';
import TextField from '../components/TextField';
import LoginFields from '../components/LoginFields';
import LoginContainer from '../components/LoginContainer';
import Button from '../components/Button';
import styled from 'styled-components';
import {AppTitle} from '../components/AppTitle';
import {RouteComponentProps} from 'react-router';
import {API} from '../API';

const Text = styled.div`
  font-size: 20px;
  font-family: Courier-new, Courier;
  color: #fff;
  display: flex;
  justify-content: center;
`;

type Props = {};

type ComponentProps = Props & RouteComponentProps;

export const Login: React.FC<ComponentProps> = props => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [errorText, setErrorText] = useState('');

  const handleLogin = async () => {
    try {
      const result = await API.login({username: login, password});
      localStorage.setItem('token', result.headers.authorization);
      props.history.push('/');
    } catch (err) {
      setErrorText('Username or password incorrect');
    }
  };

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
        <Button fullWidth onClick={handleLogin}>
          Sign In
        </Button>
        <Text>or</Text>
        <Button fullWidth onClick={() => props.history.push('/signup')}>
          Sign Up
        </Button>
      </LoginFields>
    </LoginContainer>
  );
};

export default Login;
