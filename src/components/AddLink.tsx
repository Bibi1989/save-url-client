import React, { useState, FormEvent } from "react";
import FormComponent from "./FormComponent";
import { FormInputProps } from "semantic-ui-react";
import { LinkContext } from "../LinkContext/LinkProvider";

interface linkInterface {
  title: string;
  link: string;
}

const AddLink = () => {
  const { addLinks } = React.useContext(LinkContext);
  const [links, setLinks] = useState<linkInterface>({
    title: "",
    link: "",
  });
  const handleInput = ({ target: { name, value } }: FormInputProps) => {
    setLinks({
      ...links,
      [name]: value,
    });
  };
  const onsubmit = (e: FormEvent) => {
    e.preventDefault();
    addLinks(links);
  };
  return (
    <FormComponent
      header='Add Links'
      btn='Link'
      label_1='Link Title'
      label_2='Link Url'
      handleInput={handleInput}
      onsubmit={onsubmit}
    />
  );
};

export default AddLink;
