import React, { useContext, useRef } from "react";
import { LinkContext } from "../LinkContext/LinkProvider";
import DisplayComponent from "./DisplayComponent";

const DisplayLinks = () => {
  const { links } = useContext(LinkContext);
  return <DisplayComponent links={links} />;
};

export default DisplayLinks;
