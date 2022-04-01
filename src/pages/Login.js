import React from "react";
import { Button, Grid, Input, Text } from "../elements";
import { getCookie, setCookie, deleteCookie } from "../shared/Cookie";

const Login = () => {
  const login = () => {
    setCookie("user_id", "lnuvy", 3);
    setCookie("user_pwd", "qwer1234", 3);
  };

  console.log(getCookie("user_id"));

  return (
    <>
      <Grid padding="16px" margin="20px">
        <Text size="32px" bold>
          로그인
        </Text>
        <Grid padding="16px 0px">
          <Input label="아이디" />
        </Grid>
        <Grid padding="16px 0px">
          <Input label="패스워드" />
        </Grid>
        <Button text="로그인하기" _onClick={login} />
        <Button text="쿠키삭제" _onClick={() => deleteCookie("user_pwd")} />
      </Grid>
    </>
  );
};

export default Login;
