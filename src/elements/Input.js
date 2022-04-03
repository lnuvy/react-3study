import React from "react";
import styled from "styled-components";
import Grid from "./Grid";
import Text from "./Text";

const Input = (props) => {
  const {
    label = "텍스트",
    _onChange = () => {},
    id = "",
    type = "text",
    multiLine = false,
  } = props;

  if (multiLine) {
    return (
      <>
        <Text bold size="24px">
          {label}
        </Text>
        <ElTextarea id={id} onChange={_onChange} placeholder=" " rows="7" />
      </>
    );
  }

  // if (label) {
  return (
    <>
      <InputWrap>
        <InputBar type={type} id={id} onChange={_onChange} placeholder=" " />
        <label>{label}</label>
      </InputWrap>
    </>
  );
  // }
};

// return (
//   <>

//   </>
// )

const ElTextarea = styled.textarea`
  width: 100%;
  padding: 12px 8px;
  border: 1px solid #212121;
  background-color: transparent;
  box-sizing: border-box;
  font-size: 24px;
`;

const InputWrap = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  & label {
    z-index: -999;
    padding: 0 5px;
    position: absolute;
    left: 10px;
    top: 12px;
    transition: 0.4s;
    user-select: none;
    font-size: 22px;
  }

  & input:focus + label,
  input:not(:placeholder-shown) + label {
    font-size: 16px;
    transform: translateX(15px) translateY(-19px);
    background-color: white;
    color: rgba(0, 0, 0, 0.6);
    z-index: 999;
  }
`;

const InputBar = styled.input`
  width: 100%;
  padding: 12px 8px;
  border: 1px solid #212121;
  background-color: transparent;
  box-sizing: border-box;
  font-size: 24px;
`;

export default Input;
