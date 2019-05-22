import React, {useState} from 'react';
import TextField from '../components/TextField';
import Button from '../components/Button';
import styled from 'styled-components';
import {API} from '../API';
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
  justify-content: center;
  align-items: center;
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
      const result = await API.signup({username: login, password});
      console.log('result: ', result);
      if (result.status === 201) {
        props.history.push('/login');
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <AppTitle>rankr</AppTitle>
      <Fields>
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
        <Button onClick={handleSignup}>Sign Up</Button>
      </Fields>
    </Container>
  );
};

export default Signup;
