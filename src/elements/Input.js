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
    value = "",
    onSubmit = () => {},
  } = props;

  if (multiLine) {
    return (
      <TextareaDiv>
        <ElTextarea
          id={id}
          onChange={_onChange}
          placeholder=" "
          rows="15"
          value={value}
        />
        <label>{label}</label>
      </TextareaDiv>
    );
  }

  return (
    <>
      <InputWrap>
        <InputBar
          type={type}
          id={id}
          onChange={_onChange}
          placeholder=" "
          value={value}
          onKeyPress={(e) => {
            if (e.key === "Enter") onSubmit(e);
          }}
        />
        <label>{label}</label>
      </InputWrap>
    </>
  );
};

const TextareaDiv = styled.div`
  width: 100%;
  background-color: transparent;
  box-sizing: border-box;
  position: relative;
  display: flex;
  align-items: center;

  & label {
    position: absolute;
    left: 10px;
    top: 12px;
    padding: 0 5px;
    transition: 0.4s;
    user-select: none;
    font-size: 22px;
    z-index: -999;
  }

  & textarea:focus + label,
  textarea:not(:placeholder-shown) + label {
    transform: translateX(5px) translateY(-20px);
    font-size: 13px;
    background-color: white;
    color: rgba(0, 0, 0, 0.6);
    z-index: 999;
  }
`;

const ElTextarea = styled.textarea`
  width: 100%;
  height: 100%;
  outline: none;
  border: 1px solid #212121;
  background-color: transparent;
  color: black;
  font-size: 20px;
  padding: 22px;
`;

const InputWrap = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;

  & label {
    /* z-index: -999; */
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
  z-index: 998;
  width: 100%;
  padding: 12px 8px;
  border: 1px solid #212121;
  background-color: transparent;
  box-sizing: border-box;
  font-size: 24px;
`;

export default Input;
