import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Text from "./Text";

const Alerts = (props) => {
  const { children = null, ...styles } = props;

  return <WindowAlert>{children}</WindowAlert>;
};

const WindowAlert = styled.div`
  position: fixed;
  top: 40%;
  left: 25%;
  width: 50vw;
  height: 20vh;
  /* background: tomato; */
  z-index: 999;
  border-radius: 20px;
  box-sizing: border-box;
  animation: fadeout 1s;
  opacity: 0;
  text-align: center;

  @keyframes fadeout {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`;

export default Alerts;
