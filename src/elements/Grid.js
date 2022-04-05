import React from "react";
import styled from "styled-components";

const Grid = (props) => {
  const { _onClick, children, ...styles } = props;

  return (
    <GridBox onClick={_onClick} {...styles}>
      {children}
    </GridBox>
  );
};

Grid.defaultProps = {
  children: null,
  is_flex: false,
  width: "100%",
  padding: false,
  margin: false,
  bg: false,
  center: false,
  is_flex_center: false,
  _onClick: () => {},
  _cursor: false,
};

const GridBox = styled.div`
  ${(props) => (props._cursor ? `cursor: pointer;` : "")};
  ${(props) =>
    props.is_flex
      ? `display: flex; align-items: center; justify-content: space-between;`
      : null}
  ${(props) =>
    props.is_flex_center
      ? `display: flex; align-items: center; justify-content: center;`
      : null}

  height: 100%;
  box-sizing: border-box;
  width: ${(props) => props.width};
  ${(props) => (props.padding ? `padding: ${props.padding};` : null)}
  ${(props) => (props.margin ? `margin: ${props.margin};` : null)}
  ${(props) => (props.bg ? `background: ${props.bg};` : null)}
  ${(props) => (props.center ? `text-align: center;` : "")}
`;

export default Grid;
