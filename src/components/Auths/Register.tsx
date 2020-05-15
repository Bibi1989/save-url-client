import React, { useState, FormEvent, useContext } from "react";
import { Form, Header, FormInputProps, Button } from "semantic-ui-react";
import styled from "styled-components";
import { UserContext } from "../../UserContext/UserProvider";

const Register = () => {
  const { registerUser } = useContext(UserContext);
  const [user, setUser] = useState({
    username: "",
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
    registerUser(user);
  };
  return (
    <Container>
      <Header
        style={{ textAlign: "center", fontSize: "2.5em", padding: "1em" }}
      >
        Register Here
      </Header>
      <Form onSubmit={onsubmit}>
        <Form.Group widths='equal'>
          <Form.Input
            fluid
            id='form-subcomponent-shorthand-input-first-name'
            label='Username'
            placeholder='Username'
            name='username'
            onChange={handleInput}
          />
          <Form.Input
            fluid
            id='form-subcomponent-shorthand-input-last-name'
            label='Email'
            placeholder='Email'
            name='email'
            onChange={handleInput}
          />
        </Form.Group>
        <Form.Field>
          <label>Password</label>
          <input
            placeholder='Password'
            name='password'
            onChange={handleInput}
          />
        </Form.Field>
        <Button type='submit'>Register</Button>
      </Form>
    </Container>
  );
};

export default Register;

export const Container = styled.div`
  max-width: 70%;
  margin: 5% auto;
`;
