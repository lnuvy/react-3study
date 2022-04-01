import React from "react";
import styled from "styled-components";

const Grid = (props) => {
  const { children, ...styles } = props;

  console.log(styles);

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
  ${(props) =>
    props.is_flex
      ? `display: flex; align-items: center; justify-content: space-between;`
      : null}

  height: 100%;
  box-sizing: border-box;
  width: ${(props) => props.width};
  ${(props) => (props.padding ? `padding: ${props.padding};` : null)}
  ${(props) => (props.margin ? `margin: ${props.margin};` : null)}
  ${(props) => (props.bg ? `background: ${props.bg};` : null)}
`;

export default Grid;
