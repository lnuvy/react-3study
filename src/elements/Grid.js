import React from "react";
import styled from "styled-components";
const Grid = (props) => {
  const { children, ...styles } = props;

  return <GridBox {...styles}>{children}</GridBox>;
};

Grid.defaultProps = {
  children: null,
  is_flex: false,
  width: "100%",
  padding: false,
  margin: false,
  bg: false,
};

const GridBox = styled.div`
  width: ${(props) => props.width};
  height: 100%;
  box-sizing: border-box;
  ${(props) => (props.padding ? `padding: ${props.padding}` : "")}
  ${(props) => (props.margin ? `margin: ${props.margin}` : "")}
  ${(props) => (props.bg ? `background: ${props.bg}` : "")}
  ${(props) =>
    props.is_flex
      ? `display: flex; align-items: center; justify-content: space-between;`
      : ""}
`;

export default Grid;
