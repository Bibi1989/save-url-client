import React, { useContext } from "react";
import DisplayComponent from "./DisplayComponent";
import { HistoryContext } from "../HistoryProvider/HistoryProvider";

const DisplayHistories = () => {
  const { histories } = useContext(HistoryContext);
  return <DisplayComponent links={histories} title='History' />;
};

export default DisplayHistories;
