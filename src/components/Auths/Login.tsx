import React, { useContext, useState, FormEvent } from "react";
import styled from "styled-components";
import { Form, Header, FormInputProps, Button } from "semantic-ui-react";
import { useHistory, useLocation } from "react-router-dom";
import { UserContext } from "../../UserContext/UserProvider";
import AuthForm from "./commons/AuthForm";
import Spinner from "../../Spinner";

const Login = () => {
  const history = useHistory();
  const { loginUser, loading } = useContext(UserContext);

  const path = window.location.origin;

  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const handleInput = ({ target: { name, value } }: FormInputProps) => {
    setUser({
      ...user,
      [name]: value,
    });
  };
  const onsubmit = (e: FormEvent) => {
    e.preventDefault();
    loginUser(user, path);
  };

  if (loading) {
    return <Spinner />;
  }
  return (
    <AuthForm title='Login Here'>
      <Form onSubmit={onsubmit}>
        <Form.Field>
          <label>Email Address</label>
          <input
            type='email'
            placeholder='Email Address'
            name='email'
            onChange={handleInput}
          />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input
            type='password'
            placeholder='Password'
            name='password'
            onChange={handleInput}
          />
        </Form.Field>
        <Button type='submit'>Login</Button>
      </Form>
    </AuthForm>
  );
};

export default Login;
