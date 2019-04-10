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
  height: 25%;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
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

export const Signup: React.FC<ComponentProps> = props => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [errorText, setErrorText] = useState('');

  const handleSignup = async () => {
    try {
      const result = await axios.post(
        `${config.api_url}${config.register_url}`,
        {
          username: login,
          password: password
        }
      );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <AppTitle>rankr</AppTitle>
      <Fields>
        <TextField
          error={error}
          helperText={errorText}
          id="login"
          label="Login"
          value={login}
          onChange={e => setLogin(e.currentTarget.value)}
        />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={e => setPassword(e.currentTarget.value)}
        />
        <Button fullWidth variant="contained" onClick={handleSignup}>
          Sign Up
        </Button>
      </Fields>
    </Container>
  );
};

export default Signup;
