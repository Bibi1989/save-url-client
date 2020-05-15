import React from "react";
import { Form, Button, Header } from "semantic-ui-react";

interface Props {
  header: string;
  label_1: string;
  label_2: string;
  btn: string;
  handleInput: any;
  onsubmit: any;
}

const FormComponent = ({
  header,
  btn,
  label_1,
  label_2,
  handleInput,
  onsubmit,
}: Props) => {
  return (
    <Form onSubmit={onsubmit}>
      <Header style={{ textAlign: "center" }}>{header}</Header>
      <Form.Field>
        <label>{label_1}</label>
        <input placeholder='Link Title' name='title' onChange={handleInput} />
      </Form.Field>
      <Form.Field>
        <label>{label_2}</label>
        <input placeholder='Link Url' name='link' onChange={handleInput} />
      </Form.Field>
      <Button type='submit'>Add {btn}</Button>
    </Form>
  );
};

export default FormComponent;
