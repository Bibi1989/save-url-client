import React from "react";
import styled from "styled-components";

interface IProps {
  children: any;
  title: string;
}

type TProps = IProps;

const AuthForm: React.FC<TProps> = ({ children, title }) => {
  return (
    <FormStyle>
      <H1>{title}</H1>
      {children}
    </FormStyle>
  );
};

export default AuthForm;

const FormStyle = styled.div`
  width: 60%;
  margin: auto;

  @media (max-width: 700px) {
    width: 100%;
    padding: 1em;
  }
`;
const H1 = styled.h1`
  text-align: center;
  color: #555;
  padding-top: 2em;
  padding-bottom: 1em;
`;
