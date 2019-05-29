import React, {useState} from 'react';
import TextField from '../components/TextField';
import Button from '../components/Button';
import LoginFields from '../components/LoginFields';
import LoginContainer from '../components/LoginContainer';
import styled from 'styled-components';
import {API} from '../API';
import axios from 'axios';
import {AppTitle} from '../components/AppTitle';
import {RouteComponentProps} from 'react-router';

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
        <Button secondary fullWidth onClick={handleSignup}>
          Sign Up
        </Button>
      </LoginFields>
    </LoginContainer>
  );
};

export default Signup;
