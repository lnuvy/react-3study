import React from "react";
import styled from "styled-components";

const Button = (props) => {
  const { text, _onClick } = props;
  return <ElButton onClick={_onClick}>{text}</ElButton>;
};

Button.defaultProps = {
  text: "텍스트",
  _onClick: () => {},
};

const ElButton = styled.button`
  font-size: 20px;
  width: 100%;
  background-color: #212121;
  color: #fff;
  padding: 12px 0px;
  box-sizing: border-box;
  border: none;
`;

export default Button;
