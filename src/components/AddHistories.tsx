import React, { useState, FormEvent } from "react";
import FormComponent from "./FormComponent";
import { FormInputProps } from "semantic-ui-react";
import { HistoryContext } from "../HistoryProvider/HistoryProvider";

interface linkInterface {
  title: string;
  link: string;
}

const AddHistories = () => {
  const { addHistory } = React.useContext(HistoryContext);
  const [histories, setHistories] = useState<linkInterface>({
    title: "",
    link: "",
  });
  const handleInput = ({ target: { name, value } }: FormInputProps) => {
    setHistories({
      ...histories,
      [name]: value,
    });
  };
  const onsubmit = (e: FormEvent) => {
    e.preventDefault();
    addHistory(histories);
  };
  return (
    <FormComponent
      header='Add Bookmarks'
      btn='Bookmark'
      label_1='Bookmark Title'
      label_2='Bookmark Url'
      handleInput={handleInput}
      onsubmit={onsubmit}
    />
  );
};

export default AddHistories;
