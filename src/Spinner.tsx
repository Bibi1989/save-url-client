import React from "react";
import styled from "styled-components";

const Spinner = () => {
  return (
    <SpinnerStyle>
      <img src='./200_d.gif' alt='loading spinner' />
    </SpinnerStyle>
  );
};

export default Spinner;

const SpinnerStyle = styled.div`
  height: 100vh;
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
