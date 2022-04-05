import React, { useState } from "react";
import { Button, Grid, Input, Text } from "../elements";
import { getCookie, deleteCookie } from "../shared/Cookie";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import { emailCheck } from "../shared/common";

const Login = () => {
  const dispatch = useDispatch();

  const [id, setId] = useState("");
  const [pwd, setPwd] = useState("");

  const login = () => {
    if (id === "" || pwd === "") {
      alert("아이디 / 비밀번호를 입력하세요");
      return;
    }
    if (!emailCheck(id)) {
      alert("이메일 형식이 맞지 않습니다");
      return;
    }
    dispatch(userActions.loginFB(id, pwd));
  };

  return (
    <>
      <Grid padding="30px">
        <Text size="32px" bold>
          로그인
        </Text>
        <Grid padding="16px 0px">
          <Input
            id="loginId"
            label="아이디"
            _onChange={(e) => {
              setId(e.target.value);
            }}
            value={id}
          />
        </Grid>
        <Grid padding="16px 0px">
          <Input
            id="loginPwd"
            label="패스워드"
            type="password"
            value={pwd}
            _onChange={(e) => {
              setPwd(e.target.value);
            }}
            is_submit
            onSubmit={login}
          />
        </Grid>
        <Button text="로그인하기" _onClick={login} />
      </Grid>
    </>
  );
};

export default Login;
