import React from "react";
import styled from "styled-components";

const Button = (props) => {
  const { text, _onClick, isFloat, children, margin, width, padding } = props;

  if (isFloat) {
    return (
      <>
        <FloatButton onClick={_onClick}>{text ? text : children}</FloatButton>
      </>
    );
  }

  const styles = {
    margin: margin,
    width: width,
    padding,
  };

  return (
    <ElButton {...styles} onClick={_onClick}>
      {text ? text : children}
    </ElButton>
  );
};

Button.defaultProps = {
  children: null,
  text: false,
  _onClick: () => {},
  isFloat: false,
  margin: false,
  width: "100%",
  padding: "12px 0px",
};

const ElButton = styled.button`
  font-size: 20px;
  width: ${(props) => props.width};
  background-color: #212121;
  color: #fff;
  box-sizing: border-box;
  padding: ${(props) => props.padding};
  border: none;
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
`;

const FloatButton = styled.button`
  width: 60px;
  height: 60px;
  background-color: #212121;
  color: #fff;
  box-sizing: border-box;
  font-size: 36px;
  font-weight: 800;
  position: fixed;
  bottom: 50px;
  right: 16px;
  text-align: center;
  vertical-align: middle;
  /* display: flex;
  justify-content: center;
  align-items: center; */
  border: none;
  border-radius: 70%;
`;

export default Button;
