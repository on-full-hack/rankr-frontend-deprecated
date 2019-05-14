import React, {useState} from 'react';
import TextField from '../components/TextField';
import Button from '../components/Button';
import styled from 'styled-components';
import {AppTitle} from '../components/AppTitle';
import {RouteComponentProps} from 'react-router';
import {API} from '../API';

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  background-color: #6236ff;
  height: 100%;
`;

const Fields = styled.div`
  margin: 15vw 0;
  width: 80vw;
`;

const PaddingBox = styled.div`
  margin: 2vh 0;
`;

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

  const handleSignup = async () => {
    try {
      const result = await API.signup({username: login, password});
    } catch (err) {
      console.log(err);
    }
  };

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
    <Container>
      <AppTitle>rankr</AppTitle>
      <Fields>
        <PaddingBox>
          <TextField
            error={errorText != ''}
            helperText={errorText}
            id="login"
            label="Login"
            value={login}
            onChange={e => setLogin(e.currentTarget.value)}
          />
        </PaddingBox>
        <PaddingBox>
          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={e => setPassword(e.currentTarget.value)}
          />
        </PaddingBox>
        <PaddingBox>
          <Button fullWidth variant="contained" onClick={handleLogin}>
            Sign In
          </Button>
        </PaddingBox>
        <PaddingBox>
          <Text>or</Text>
        </PaddingBox>
        <PaddingBox>
          <Button
            fullWidth
            variant="contained"
            onClick={() => props.history.push('/signup')}
          >
            Sign Up
          </Button>
        </PaddingBox>
      </Fields>
    </Container>
  );
};

export default Login;
