import React from "react";
import styled from "styled-components";

const Input = (props) => {
  const { label = "텍스트", _onChange = () => {} } = props;

  return (
    <>
      <InputWrap>
        <InputBar onChange={_onChange} placeholder=" " />
        <label>{label}</label>
      </InputWrap>
    </>
  );
};

// Input.defaultProps = {
//   label: "텍스트",
//   _onChange: () => {},
// };

const InputWrap = styled.div`
  margin-bottom: 10px;
  position: relative;
  display: flex;
  align-items: center;
  & label {
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
