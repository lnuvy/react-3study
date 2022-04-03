import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Grid, Input, Text } from "../elements";
import { actionCreators as userActions } from "../redux/modules/user";
import { emailCheck } from "../shared/common";

const Register = () => {
  const dispatch = useDispatch();

  const [inputs, setInputs] = useState({});

  const signup = () => {
    const { id, user_name, pwd, pwdCheck } = inputs;
    if (id === "" || pwd === "" || user_name === "") {
      alert("공란 없게하세요");
      return;
    }
    if (!emailCheck(id)) {
      alert("이메일 형식이 맞지 않습니다");
    }
    if (pwd !== pwdCheck) {
      alert("비밀번호가 서로 일치하지 않음");
      return;
    }

    dispatch(userActions.signupFB(id, pwd, user_name));
  };

  const handleChange = (e) => {
    const id = e.target.id;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [id]: value }));
  };

  return (
    <Grid>
      <Text size="32px" bold>
        회원가입
      </Text>
      <Grid padding="16px 0px">
        <Input id="id" label="아이디" _onChange={handleChange} />
      </Grid>
      <Grid padding="16px 0px">
        <Input id="user_name" label="닉네임" _onChange={handleChange} />
      </Grid>
      <Grid padding="16px 0px">
        <Input id="pwd" label="비밀번호" _onChange={handleChange} />
      </Grid>
      <Grid padding="16px 0px">
        <Input id="pwdCheck" label="비밀번호 확인" _onChange={handleChange} />
      </Grid>
      <Button _onClick={signup} text="회원가입 하기" />
    </Grid>
  );
};

export default Register;
