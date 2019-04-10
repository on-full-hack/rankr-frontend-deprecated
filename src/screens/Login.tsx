import React, {useState} from 'react';
import TextField from '../components/TextField';
import Button from '../components/Button';
import styled from 'styled-components';
import {config} from '../config';
import axios from 'axios';
import {AppTitle} from '../components/AppTitle';
import {RouteComponentProps} from 'react-router';

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
  const [error, setError] = useState(false);
  const [errorText, setErrorText] = useState('');

  const handleLogin = () => {
    axios
      .post(`${config.api_url}${config.login_url}`, {
        username: login,
        password: password
      })
      .then(res => {
        console.log('res: ', res);
        setErrorText('');
        localStorage.setItem('token', res.data.accessToken);
        props.history.push('/');
      })
      .catch(err => {
        setError(true);
        setErrorText('Username or password incorrect');
      });
  };

  return (
    <Container>
      <AppTitle>rankr</AppTitle>
      <Fields>
        <PaddingBox>
          <TextField
            error={error}
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
