import React from "react";
import styled from "styled-components";

const Button = (props) => {
  const { text, _onClick, isFloat, children, margin, width, padding, _color } =
    props;

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
    _color,
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
  _color: false,
};

const ElButton = styled.button`
  cursor: pointer;
  font-size: 18px;
  width: ${(props) => props.width};
  ${(props) =>
    props._color ? `background: ${props._color};` : `background: #212121;`}
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
  text-align: center;
  vertical-align: middle;
  border: none;
  border-radius: 70%;
  right: 16px;

  @media only screen and (min-width: 400px) {
    right: 16px;
  }

  @media only screen and (min-width: 700px) {
    right: 32px;
  }

  @media only screen and (min-width: 899px) {
    right: 50px;
  }
`;

export default Button;
